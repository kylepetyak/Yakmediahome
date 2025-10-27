/**
 * GoHighLevel Form Embed Component
 *
 * This component makes it easy to embed GHL forms throughout your site.
 *
 * Usage:
 * 1. Create a form in your GHL account
 * 2. Get the form ID from the embed code
 * 3. Use this component with your form ID
 *
 * Example:
 * <GHLForm
 *   formId="YOUR_FORM_ID_HERE"
 *   height="600px"
 *   title="Contact Form"
 * />
 */

import { useEffect } from 'react';

interface GHLFormProps {
  formId: string;
  height?: string;
  title?: string;
  className?: string;
}

export function GHLForm({
  formId,
  height = '600px',
  title = 'Form',
  className = ''
}: GHLFormProps) {

  useEffect(() => {
    // Load GHL form embed script if not already loaded
    if (!document.querySelector('script[src*="form_embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // If no formId provided, show instructions
  if (!formId || formId === 'YOUR_FORM_ID_HERE') {
    return (
      <div className={`w-full p-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border-2 border-dashed border-orange-300 ${className}`}>
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            🔧 GHL Form Not Connected Yet
          </h3>
          <p className="text-gray-700 mb-4">
            To connect your GoHighLevel form:
          </p>
          <ol className="text-left max-w-md mx-auto space-y-2 text-sm text-gray-600">
            <li>1. Create a form in your GHL account</li>
            <li>2. Copy the form ID from the embed code</li>
            <li>3. Replace "YOUR_FORM_ID_HERE" with your actual form ID</li>
          </ol>
          <a
            href="/GHL_INTEGRATION_GUIDE.md"
            target="_blank"
            className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-semibold"
          >
            📖 Read Full Integration Guide →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{
          width: '100%',
          height: height,
          minHeight: height,
          border: 'none',
          borderRadius: '12px',
          display: 'block'
        }}
        id={`inline-${formId}`}
        title={title}
        className="shadow-lg"
        scrolling="no"
      />
    </div>
  );
}

/**
 * Newsletter Signup Form Component
 * Specifically designed for blog newsletter signups
 */

interface NewsletterGHLFormProps {
  formId: string;
}

export function NewsletterGHLForm({ formId }: NewsletterGHLFormProps) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 sm:p-6 rounded-xl border border-orange-200 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        📬 Get Marketing Tips Weekly
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Join 2,500+ marketers getting our best insights delivered to their inbox.
      </p>

      {formId && formId !== 'YOUR_NEWSLETTER_FORM_ID' ? (
        <div className="bg-white rounded-lg shadow-sm p-1">
          <GHLForm
            formId={formId}
            height="550px"
            title="Newsletter Signup"
            className="w-full"
          />
        </div>
      ) : (
        <div className="text-center py-4">
          <p className="text-sm text-gray-500 mb-2">Newsletter form not connected yet</p>
          <a
            href="/GHL_INTEGRATION_GUIDE.md"
            target="_blank"
            className="text-orange-500 hover:text-orange-600 text-sm font-semibold"
          >
            Setup Instructions →
          </a>
        </div>
      )}
    </div>
  );
}
