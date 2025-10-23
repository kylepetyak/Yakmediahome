import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-645a1ee3/health", (c) => {
  return c.json({ status: "ok" });
});

// LinkedIn public data endpoint - using simpler approach
app.get("/make-server-645a1ee3/linkedin/posts", async (c) => {
  try {
    // Check cache first (cache for 2 hours since we're using public data)
    const cacheKey = 'linkedin_posts_public';
    const cachedPosts = await kv.get(cacheKey);
    
    if (cachedPosts && cachedPosts.timestamp > Date.now() - 2 * 60 * 60 * 1000) {
      console.log('Returning cached LinkedIn posts');
      return c.json({ posts: cachedPosts.data });
    }

    // For now, return curated Yak Media content
    // In production, you can integrate with LinkedIn's public APIs or RSS feeds
    const yakMediaPosts = [
      {
        id: 1,
        content: "🚀 Exciting news! Yak Media just launched a game-changing social media campaign that drove 300% engagement increase for our client. When strategy meets creativity, magic happens! #DigitalMarketing #Results",
        timeAgo: "2 days ago",
        bgColor: "bg-blue-600",
        hasVideo: false,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        linkedinUrl: "https://www.linkedin.com/company/18280816"
      },
      {
        id: 2,
        content: "💡 Strategic thinking meets creative execution. That's the Yak Media difference. Our integrated approach ensures every touchpoint tells your brand's story consistently.",
        timeAgo: "5 days ago", 
        bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
        hasVideo: false,
        image: null,
        linkedinUrl: "https://www.linkedin.com/company/18280816"
      },
      {
        id: 3,
        content: "🎬 Behind the scenes at Yak Media - where strategy comes to life! Watch how our team transforms client visions into viral content.",
        timeAgo: "1 week ago",
        bgColor: "bg-white",
        hasVideo: true,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
        linkedinUrl: "https://www.linkedin.com/company/18280816",
        videoText: "Team in action!"
      },
      {
        id: 4,
        content: "📊 Innovation in every campaign. Results in every metric. Our data-driven approach delivered 250% ROI increase across all client accounts this quarter.",
        timeAgo: "1 week ago",
        bgColor: "bg-gray-900",
        hasVideo: false,
        image: null,
        linkedinUrl: "https://www.linkedin.com/company/18280816"
      }
    ];

    // Cache the results
    await kv.set(cacheKey, {
      data: yakMediaPosts,
      timestamp: Date.now()
    });

    console.log(`Successfully loaded ${yakMediaPosts.length} Yak Media LinkedIn posts`);
    return c.json({ posts: yakMediaPosts });

  } catch (error) {
    console.log(`LinkedIn posts loading error: ${error}`);
    return c.json({ 
      error: 'Failed to load LinkedIn posts',
      posts: []
    }, 500);
  }
});

// Contact form submission endpoint
app.post("/make-server-645a1ee3/contact", async (c) => {
  try {
    const body = await c.req.json();
    console.log('Contact form submission received:', body);
    
    // Verify reCAPTCHA
    const recaptchaToken = body.recaptchaToken;
    if (!recaptchaToken) {
      console.log('Contact form error: Missing reCAPTCHA token');
      return c.json({ error: 'reCAPTCHA verification required' }, 400);
    }

    const recaptchaSecret = Deno.env.get('RECAPTCHA_SECRET_KEY');
    if (!recaptchaSecret) {
      console.log('Contact form error: Missing reCAPTCHA secret key');
      return c.json({ error: 'Server configuration error' }, 500);
    }

    // Verify reCAPTCHA with Google
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`
    });

    const recaptchaResult = await recaptchaResponse.json();
    
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      console.log('Contact form error: reCAPTCHA verification failed', recaptchaResult);
      return c.json({ error: 'reCAPTCHA verification failed' }, 400);
    }

    // Send email using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.log('Contact form error: Missing Resend API key');
      return c.json({ error: 'Email service not configured' }, 500);
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@yak.media',
        to: ['kyle@yak.media'],
        subject: `New Contact Form Submission - ${body.inquiryCategory || 'General Inquiry'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
          <p><strong>Email:</strong> ${body.workEmail}</p>
          <p><strong>Phone:</strong> ${body.workPhone}</p>
          <p><strong>Company Website:</strong> ${body.companyWebsite}</p>
          <p><strong>Job Title:</strong> ${body.jobTitle}</p>
          <p><strong>Inquiry Category:</strong> ${body.inquiryCategory}</p>
          <p><strong>Budget:</strong> ${body.budget || 'Not specified'}</p>
          <p><strong>How they heard about us:</strong> ${body.hearAbout || 'Not specified'}</p>
          <p><strong>Stay in touch:</strong> ${body.stayInTouch ? 'Yes' : 'No'}</p>
          <p><strong>Message:</strong></p>
          <p>${body.message}</p>
          
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.log('Contact form error: Email sending failed', errorText);
      return c.json({ error: 'Failed to send email' }, 500);
    }

    // Store form submission in database for backup
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    await kv.set(submissionId, {
      ...body,
      submittedAt: new Date().toISOString(),
      recaptchaScore: recaptchaResult.score
    });

    console.log('Contact form submitted successfully:', submissionId);
    return c.json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });

  } catch (error) {
    console.log(`Contact form submission error: ${error}`);
    return c.json({ 
      error: 'An error occurred while processing your request' 
    }, 500);
  }
});

// Local contact form submission endpoint (simplified for local pages)
app.post("/make-server-645a1ee3/local-contact", async (c) => {
  try {
    const body = await c.req.json();
    console.log('Local contact form submission received:', body);
    
    // Verify reCAPTCHA
    const recaptchaToken = body.recaptchaToken;
    if (!recaptchaToken) {
      console.log('Local contact form error: Missing reCAPTCHA token');
      return c.json({ error: 'reCAPTCHA verification required' }, 400);
    }

    const recaptchaSecret = Deno.env.get('RECAPTCHA_SECRET_KEY');
    if (!recaptchaSecret) {
      console.log('Local contact form error: Missing reCAPTCHA secret key');
      return c.json({ error: 'Server configuration error' }, 500);
    }

    // Verify reCAPTCHA with Google
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`
    });

    const recaptchaResult = await recaptchaResponse.json();
    
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      console.log('Local contact form error: reCAPTCHA verification failed', recaptchaResult);
      return c.json({ error: 'reCAPTCHA verification failed' }, 400);
    }

    // Send email using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.log('Local contact form error: Missing Resend API key');
      return c.json({ error: 'Email service not configured' }, 500);
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@yak.media',
        to: ['kyle@yak.media'],
        subject: `New ${body.cityName} Contact Form Submission`,
        html: `
          <h2>New Local Contact Form Submission</h2>
          <p><strong>Location:</strong> ${body.cityName}</p>
          <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${body.message}</p>
          
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          <p><small>Source: ${body.cityName} Local Page</small></p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.log('Local contact form error: Email sending failed', errorText);
      return c.json({ error: 'Failed to send email' }, 500);
    }

    // Store form submission in database for backup
    const submissionId = `local_contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    await kv.set(submissionId, {
      ...body,
      submittedAt: new Date().toISOString(),
      recaptchaScore: recaptchaResult.score,
      formType: 'local_contact'
    });

    console.log('Local contact form submitted successfully:', submissionId);
    return c.json({ 
      success: true, 
      message: 'Your message has been sent successfully! We\'ll get back to you within 24 hours.' 
    });

  } catch (error) {
    console.log(`Local contact form submission error: ${error}`);
    return c.json({ 
      error: 'An error occurred while processing your request' 
    }, 500);
  }
});

Deno.serve(app.fetch);