/**
 * GoHighLevel Tracking Utilities
 *
 * This module provides helper functions to track user behavior and events
 * in your GoHighLevel CRM for lead scoring and engagement tracking.
 *
 * Prerequisites:
 * - GHL tracking script must be loaded in index.html
 * - leadConnectorSDK must be available globally
 *
 * See GHL_INTEGRATION_GUIDE.md for setup instructions.
 */

// Type definitions for GHL SDK
declare global {
  interface Window {
    leadConnectorSDK?: {
      trackEvent: (eventName: string, eventData: Record<string, any>) => void;
      trackPageView: (pagePath: string, pageData?: Record<string, any>) => void;
      identifyContact: (contactData: Record<string, any>) => void;
    };
  }
}

/**
 * Check if GHL SDK is loaded and ready
 */
export function isGHLReady(): boolean {
  return typeof window !== 'undefined' && !!window.leadConnectorSDK;
}

/**
 * Track a blog post read event
 * This increases lead score and helps identify interested prospects
 */
export function trackBlogPostRead(params: {
  postTitle: string;
  postSlug: string;
  postCategory?: string;
  readingTime?: number;
  wordCount?: number;
}) {
  if (!isGHLReady()) {
    console.warn('GHL tracking not available yet');
    return;
  }

  try {
    window.leadConnectorSDK!.trackEvent('blog_post_read', {
      post_title: params.postTitle,
      post_slug: params.postSlug,
      post_category: params.postCategory || 'general',
      reading_time: params.readingTime,
      word_count: params.wordCount,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking blog post read:', error);
  }
}

/**
 * Track CTA button clicks
 * Helps identify hot leads who are showing buying intent
 */
export function trackCTAClick(params: {
  ctaText: string;
  ctaLocation: string;
  postTitle?: string;
  destinationPage: string;
}) {
  if (!isGHLReady()) {
    console.warn('GHL tracking not available yet');
    return;
  }

  try {
    window.leadConnectorSDK!.trackEvent('cta_clicked', {
      cta_text: params.ctaText,
      cta_location: params.ctaLocation,
      post_title: params.postTitle,
      destination_page: params.destinationPage,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking CTA click:', error);
  }
}

/**
 * Track service page visits
 * Shows interest in specific services for lead segmentation
 */
export function trackServicePageView(params: {
  serviceName: string;
  servicePage: string;
  timeOnPage?: number;
}) {
  if (!isGHLReady()) {
    console.warn('GHL tracking not available yet');
    return;
  }

  try {
    window.leadConnectorSDK!.trackEvent('service_page_view', {
      service_name: params.serviceName,
      service_page: params.servicePage,
      time_on_page: params.timeOnPage,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking service page view:', error);
  }
}

/**
 * Track newsletter signup (backup if using custom form instead of GHL form)
 * Note: If using GHL forms, this is tracked automatically
 */
export function trackNewsletterSignup(params: {
  email: string;
  firstName?: string;
  source: string;
}) {
  if (!isGHLReady()) {
    console.warn('GHL tracking not available yet');
    return;
  }

  try {
    window.leadConnectorSDK!.trackEvent('newsletter_signup', {
      email: params.email,
      first_name: params.firstName,
      source: params.source,
      timestamp: new Date().toISOString()
    });

    // Also identify the contact
    if (params.email) {
      window.leadConnectorSDK!.identifyContact({
        email: params.email,
        first_name: params.firstName,
        tags: ['newsletter', 'blog-subscriber', 'warm-lead']
      });
    }
  } catch (error) {
    console.error('Error tracking newsletter signup:', error);
  }
}

/**
 * Track contact form submission (backup if using custom form)
 * Note: If using GHL forms, this is tracked automatically
 */
export function trackContactFormSubmission(params: {
  email: string;
  name: string;
  company?: string;
  message?: string;
  service?: string;
}) {
  if (!isGHLReady()) {
    console.warn('GHL tracking not available yet');
    return;
  }

  try {
    window.leadConnectorSDK!.trackEvent('contact_form_submitted', {
      email: params.email,
      name: params.name,
      company: params.company,
      service_interest: params.service,
      timestamp: new Date().toISOString()
    });

    // Identify the contact with high lead score
    window.leadConnectorSDK!.identifyContact({
      email: params.email,
      name: params.name,
      company: params.company,
      tags: ['contact-form', 'hot-lead', 'needs-follow-up']
    });
  } catch (error) {
    console.error('Error tracking contact form submission:', error);
  }
}

/**
 * Track social share events
 * Shows engagement and helps identify brand advocates
 */
export function trackSocialShare(params: {
  platform: string;
  postTitle: string;
  postUrl: string;
}) {
  if (!isGHLReady()) {
    console.warn('GHL tracking not available yet');
    return;
  }

  try {
    window.leadConnectorSDK!.trackEvent('social_share', {
      platform: params.platform,
      post_title: params.postTitle,
      post_url: params.postUrl,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking social share:', error);
  }
}

/**
 * Track pricing page view
 * High-intent signal for lead scoring
 */
export function trackPricingPageView() {
  if (!isGHLReady()) {
    console.warn('GHL tracking not available yet');
    return;
  }

  try {
    window.leadConnectorSDK!.trackEvent('pricing_page_view', {
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking pricing page view:', error);
  }
}

/**
 * Track portfolio/case study view
 * Shows research behavior
 */
export function trackCaseStudyView(params: {
  caseStudyTitle: string;
  industry?: string;
}) {
  if (!isGHLReady()) {
    console.warn('GHL tracking not available yet');
    return;
  }

  try {
    window.leadConnectorSDK!.trackEvent('case_study_view', {
      case_study_title: params.caseStudyTitle,
      industry: params.industry,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking case study view:', error);
  }
}

/**
 * Track time on page (call this when user leaves or at intervals)
 */
export function trackTimeOnPage(params: {
  pagePath: string;
  pageTitle: string;
  timeSpent: number; // in seconds
}) {
  if (!isGHLReady()) {
    console.warn('GHL tracking not available yet');
    return;
  }

  try {
    window.leadConnectorSDK!.trackEvent('time_on_page', {
      page_path: params.pagePath,
      page_title: params.pageTitle,
      time_spent_seconds: params.timeSpent,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error tracking time on page:', error);
  }
}

/**
 * React hook to track blog post reads on mount
 * Use this in your blog post component
 *
 * Example:
 * useTrackBlogPostRead({
 *   postTitle: post.title,
 *   postSlug: post.slug,
 *   postCategory: post.category,
 *   readingTime: calculateReadingTime(post.content)
 * });
 */
export function useTrackBlogPostRead(params: {
  postTitle: string;
  postSlug: string;
  postCategory?: string;
  readingTime?: number;
  wordCount?: number;
}) {
  // This is not a React hook, but a helper function
  // To use with useEffect, do:
  // useEffect(() => {
  //   trackBlogPostRead(params);
  // }, [params.postSlug]);

  trackBlogPostRead(params);
}

/**
 * React hook to track time on page
 * Tracks when user leaves the page
 *
 * Usage:
 * useEffect(() => {
 *   const startTime = Date.now();
 *   return () => {
 *     const timeSpent = Math.floor((Date.now() - startTime) / 1000);
 *     trackTimeOnPage({
 *       pagePath: window.location.pathname,
 *       pageTitle: document.title,
 *       timeSpent
 *     });
 *   };
 * }, []);
 */

/**
 * Lead Scoring Guide (for reference)
 *
 * Recommended point values:
 * - Blog post read: +5 points
 * - Newsletter signup: +10 points
 * - Service page view: +15 points
 * - Pricing page view: +30 points
 * - Contact form submission: +50 points
 * - Social share: +3 points
 * - Case study view: +8 points
 * - Time on page > 3 min: +5 points
 *
 * Lead Tiers:
 * - Cold Lead: 0-20 points
 * - Warm Lead: 21-50 points
 * - Hot Lead: 51-100 points
 * - Sales Ready: 100+ points
 */
