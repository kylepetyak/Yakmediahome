# GoHighLevel (GHL) Integration Guide
## Yak Media Website - CRM & Lead Capture Setup

---

## Overview

This guide will help you integrate your GoHighLevel subaccount with the Yak Media website to:
- ✅ Capture leads from contact forms
- ✅ Track website visitors and behavior
- ✅ Embed GHL forms throughout the site
- ✅ Connect blog newsletter signups to GHL
- ✅ Set up automated workflows for lead nurturing

---

## 1. GHL TRACKING SCRIPT SETUP

### Step 1: Get Your GHL Tracking Code

1. Log into your GoHighLevel subaccount
2. Go to **Settings** → **Business Profile** → **Tracking Code**
3. Copy your unique tracking script (looks like this):

```html
<script src="https://msgsndr.com/js/form_embed.js"></script>
<script>
  (function() {
    var script = document.createElement('script');
    script.src = 'https://assets.msgsndr.com/conversations/YOUR_LOCATION_ID.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  })();
</script>
```

### Step 2: Add to Your Website

**Option A: Add to `index.html` (Recommended for Global Tracking)**

File: `/public/index.html`

Add this code before the closing `</head>` tag:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Yak Media</title>

    <!-- GHL TRACKING SCRIPT - Add your code here -->
    <script src="https://msgsndr.com/js/form_embed.js"></script>
    <script>
      (function() {
        var script = document.createElement('script');
        script.src = 'https://assets.msgsndr.com/conversations/YOUR_LOCATION_ID.js';
        document.getElementsByTagName('head')[0].appendChild(script);
      })();
    </script>
    <!-- END GHL TRACKING -->

  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**Option B: Add via GTM (If you use Google Tag Manager)**

1. Create new Tag in GTM
2. Tag Type: Custom HTML
3. Paste your GHL tracking code
4. Trigger: All Pages
5. Save and Publish

---

## 2. GHL FORM EMBEDS

### Contact Page Form Replacement

We've created a component that will easily integrate with GHL forms.

**Current Status:**
- ❌ Using React form component (no CRM connection)
- ✅ Ready to replace with GHL embed

### Step 1: Get Your GHL Form Embed Code

1. In GHL, go to **Sites** → **Forms**
2. Click on your Contact Form (or create a new one)
3. Click **Embed** → **Inline Embed**
4. Copy the embed code (looks like this):

```html
<iframe
  src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID"
  style="width:100%;height:100%;border:none;border-radius:3px"
  id="inline-YOUR_FORM_ID"
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Contact Form"
  data-height="500"
  data-layout-iframe-id="inline-YOUR_FORM_ID"
  data-form-id="YOUR_FORM_ID"
  title="Contact Form">
</iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
```

### Step 2: Replace Contact Form

File: `/src/components/ContactPage.tsx`

Find the `<LocalContactForm />` component and replace it with your GHL iframe:

```tsx
// BEFORE (Current - React form with no CRM)
<LocalContactForm />

// AFTER (Replace with your GHL embed)
<div className="w-full max-w-2xl mx-auto">
  <iframe
    src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID"
    style={{ width: '100%', height: '600px', border: 'none', borderRadius: '12px' }}
    id="inline-YOUR_FORM_ID"
    title="Contact Form - Yak Media"
  />
  <script src="https://link.msgsndr.com/js/form_embed.js"></script>
</div>
```

---

## 3. BLOG NEWSLETTER SIGNUP (GHL INTEGRATION)

### Step 1: Create Newsletter Form in GHL

1. In GHL, go to **Sites** → **Forms**
2. Click **+ New Form**
3. Name it "Blog Newsletter Signup"
4. Add fields:
   - Email (required)
   - First Name (optional)
   - Tags: Add "blog-subscriber", "newsletter", "warm-lead"
5. Set up automation:
   - Trigger: Form Submitted
   - Action: Add to Newsletter Workflow
6. Save and get embed code

### Step 2: Add to Blog Sidebar

File: `/src/components/BlogPage.tsx`

We've already prepared a newsletter signup section. Replace it with your GHL embed:

**Location:** In the sidebar, after "Recently Published"

```tsx
{/* Newsletter Signup with GHL */}
<div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
  <h3 className="text-lg font-bold text-gray-900 mb-2">
    📬 Get Marketing Tips Weekly
  </h3>
  <p className="text-sm text-gray-600 mb-4">
    Join 2,500+ marketers getting our best insights delivered to their inbox.
  </p>

  {/* GHL FORM EMBED - Replace with your newsletter form */}
  <iframe
    src="https://api.leadconnectorhq.com/widget/form/YOUR_NEWSLETTER_FORM_ID"
    style={{ width: '100%', height: '200px', border: 'none' }}
    id="inline-newsletter"
    title="Newsletter Signup"
  />
</div>
```

---

## 4. GHL CONVERSION TRACKING

### Track Blog Post Reads as Events

Add this to any page where you want to track engagement:

```tsx
// Track blog post read in GHL
useEffect(() => {
  if (typeof window !== 'undefined' && (window as any).leadConnectorSDK) {
    (window as any).leadConnectorSDK.trackEvent('blog_post_read', {
      post_title: post.title,
      post_slug: post.slug,
      reading_time: readingTime,
      word_count: wordCount
    });
  }
}, [post]);
```

### Track Button Clicks

```tsx
const handleContactClick = () => {
  // Track in GHL
  if (typeof window !== 'undefined' && (window as any).leadConnectorSDK) {
    (window as any).leadConnectorSDK.trackEvent('cta_clicked', {
      button_location: 'blog_post_bottom',
      post_title: post.title
    });
  }

  // Navigate to contact
  navigate('/contact');
};
```

---

## 5. GHL CHAT WIDGET SETUP

### Step 1: Enable GHL Chat

1. In GHL, go to **Conversations** → **Settings**
2. Enable "Website Chat Widget"
3. Customize appearance:
   - Primary Color: `#f97316` (Orange to match brand)
   - Welcome Message: "Hey! Need help with your marketing? 👋"
4. Copy the chat widget code

### Step 2: Add Chat Widget

The GHL tracking script (from Step 1) already includes the chat widget.

**Customize Chat Appearance:**

Add this to your `index.html` or tracking script:

```html
<script>
  window.ghlChatConfig = {
    primaryColor: '#f97316',
    position: 'bottom-right',
    welcomeMessage: 'Hey! Need help with your marketing? 👋',
    avatar: 'https://yak.media/yak-media-logo.png'
  };
</script>
```

---

## 6. GHL WORKFLOWS & AUTOMATIONS

### Recommended Workflows to Set Up:

#### Workflow 1: Blog Subscriber Welcome Series
**Trigger:** Form submitted (Newsletter Form)
**Actions:**
1. Send welcome email immediately
2. Wait 2 days → Send "Best Blog Posts" email
3. Wait 3 days → Send "Free Marketing Audit" offer
4. Wait 5 days → Send "Case Studies" email

#### Workflow 2: Contact Form Follow-Up
**Trigger:** Form submitted (Contact Form)
**Actions:**
1. Send thank you email immediately
2. Create task for sales team
3. Send SMS (if phone provided)
4. Wait 1 hour → If no response, send follow-up email
5. Wait 24 hours → If no response, create call task

#### Workflow 3: Blog Engagement Scoring
**Trigger:** Blog post read event
**Actions:**
1. Add +5 points to lead score
2. If score > 50 → Tag as "hot-lead"
3. If score > 50 → Notify sales team
4. If visited 3+ posts → Send "Ready to Work Together?" email

#### Workflow 4: Abandoned Form Follow-Up
**Trigger:** User started form but didn't submit
**Actions:**
1. Wait 1 hour
2. Send email: "Still need help with your marketing?"
3. Offer free 15-min consultation

---

## 7. GHL CUSTOM FIELDS FOR TRACKING

### Recommended Custom Fields to Create:

1. **Last Blog Post Read** (Text)
   - Tracks which post they read last

2. **Total Blog Posts Read** (Number)
   - Count of posts they've viewed

3. **Marketing Interest** (Dropdown)
   - Options: Paid Ads, SEO, Content, Social Media, Strategy

4. **Lead Source Page** (Text)
   - Which page they came from

5. **Traffic Source** (Text)
   - Google, Direct, Facebook, LinkedIn, etc.

---

## 8. IMPLEMENTATION CHECKLIST

### Initial Setup (Do This First)
- [ ] Get GHL tracking script from your subaccount
- [ ] Add tracking script to `public/index.html`
- [ ] Test that GHL is loading (check browser console)
- [ ] Enable GHL chat widget
- [ ] Customize chat widget colors to match orange branding

### Forms Setup
- [ ] Create "Contact Form" in GHL
- [ ] Create "Newsletter Signup Form" in GHL
- [ ] Get embed codes for both forms
- [ ] Replace contact form in `ContactPage.tsx`
- [ ] Add newsletter form to blog sidebar
- [ ] Test form submissions in GHL

### Workflows Setup
- [ ] Create "Blog Subscriber Welcome Series" workflow
- [ ] Create "Contact Form Follow-Up" workflow
- [ ] Create "Blog Engagement Scoring" workflow
- [ ] Test all workflows with real submissions

### Tracking Setup
- [ ] Add event tracking to blog post reads
- [ ] Add event tracking to CTA button clicks
- [ ] Add event tracking to service page visits
- [ ] Create custom fields in GHL for blog tracking

### Testing
- [ ] Submit test contact form → Check GHL
- [ ] Subscribe to newsletter → Check GHL
- [ ] Read blog post → Check GHL events
- [ ] Click CTA buttons → Check GHL events
- [ ] Test chat widget → Check conversations

---

## 9. CODE EXAMPLES

### Component: GHL Form Wrapper

Create this reusable component for easy GHL form embeds:

File: `/src/components/GHLForm.tsx`

```tsx
interface GHLFormProps {
  formId: string;
  height?: string;
  title?: string;
}

export function GHLForm({ formId, height = '600px', title = 'Form' }: GHLFormProps) {
  return (
    <div className="w-full">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{
          width: '100%',
          height: height,
          border: 'none',
          borderRadius: '12px'
        }}
        id={`inline-${formId}`}
        title={title}
        className="shadow-lg"
      />
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    </div>
  );
}
```

**Usage:**
```tsx
import { GHLForm } from './components/GHLForm';

// In your component
<GHLForm
  formId="YOUR_FORM_ID_HERE"
  height="500px"
  title="Contact Form - Yak Media"
/>
```

---

## 10. TROUBLESHOOTING

### GHL Forms Not Loading?

**Problem:** Iframe shows blank or "Connection refused"

**Solutions:**
1. Check that form is published in GHL
2. Verify form ID is correct
3. Check browser console for errors
4. Make sure `form_embed.js` script is loaded
5. Try using popup form instead of inline

### Tracking Not Working?

**Problem:** Events not showing in GHL

**Solutions:**
1. Check that tracking script is in `<head>` tag
2. Verify your Location ID is correct
3. Check browser console for `leadConnectorSDK` object
4. Make sure tracking is enabled in GHL settings
5. Wait 5-10 minutes for events to appear

### Chat Widget Not Showing?

**Problem:** Chat widget doesn't appear

**Solutions:**
1. Check that conversations are enabled in GHL
2. Verify tracking script is loaded
3. Check chat widget settings (may be disabled for certain pages)
4. Clear browser cache and reload
5. Make sure you're not blocking iframes

---

## 11. BEST PRACTICES

### Form Design
- ✅ Keep forms short (3-5 fields max)
- ✅ Use conditional fields to collect more data gradually
- ✅ Add clear value proposition above forms
- ✅ Match form styling to website (use CSS overrides)

### Lead Scoring
- ✅ Blog read = +5 points
- ✅ Newsletter signup = +10 points
- ✅ Contact form = +50 points
- ✅ Service page visit = +15 points
- ✅ Pricing page visit = +30 points

### Automation Rules
- ✅ Don't overwhelm with emails (1 per day max)
- ✅ Use SMS sparingly (only for hot leads)
- ✅ Segment by interest (blog topics they read)
- ✅ Test all workflows before activating

---

## 12. NEXT STEPS AFTER INTEGRATION

1. **Monitor Lead Flow** (Week 1)
   - Check that leads are coming into GHL
   - Verify all forms are submitting correctly
   - Test all workflows manually

2. **Optimize Forms** (Week 2-3)
   - A/B test form copy
   - Test shorter vs. longer forms
   - Optimize for mobile submissions

3. **Refine Workflows** (Month 1)
   - Analyze email open rates
   - Check response rates to follow-ups
   - Adjust timing and copy based on data

4. **Scale Up** (Month 2+)
   - Add more lead magnets (eBooks, templates)
   - Create segmented workflows by service interest
   - Build retargeting campaigns for blog visitors

---

## 📞 NEED HELP?

If you get stuck with GHL integration:

1. Check GHL support docs: https://help.gohighlevel.com
2. GHL community: https://www.facebook.com/groups/gohighlevel
3. Video tutorials: Search "GoHighLevel form embed" on YouTube

---

## ✅ YOUR FORM IDs (Fill This Out)

Once you create your GHL forms, record the IDs here for easy reference:

```
Contact Form ID: ____________________________

Newsletter Form ID: ____________________________

Free Audit Form ID: ____________________________

Consultation Form ID: ____________________________

Location ID (for tracking): ____________________________
```

---

**This guide is ready to go!** Once you have your GHL form IDs, just plug them into the code and you'll be capturing leads automatically. 🚀
