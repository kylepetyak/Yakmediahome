import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';
import { CheckCircle, XCircle, Send, Loader2 } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function EmailTestPage() {
  const [testStatus, setTestStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  // Load reCAPTCHA
  useState(() => {
    const siteKey = '6LfPT-0qAAAAADKANvpLHf0bYNbD5DqJxIy7ZTYp';
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setRecaptchaReady(true);
    };
    document.head.appendChild(script);
  });

  const sendTestEmail = async () => {
    setTestStatus('loading');
    setErrorMessage('');

    try {
      // Get reCAPTCHA token
      const siteKey = '6LfPT-0qAAAAADKANvpLHf0bYNbD5DqJxIy7ZTYp';
      const recaptchaToken = await new Promise((resolve, reject) => {
        (window as any).grecaptcha.ready(() => {
          (window as any).grecaptcha.execute(siteKey, { action: 'contact_form' })
            .then(resolve)
            .catch(reject);
        });
      });

      console.log('Sending test email to kyle@yak.media...');

      // Send test form submission
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-645a1ee3/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          firstName: 'Test',
          lastName: 'User',
          workEmail: 'test@example.com',
          workPhone: '(480) 555-1234',
          companyWebsite: 'https://example.com',
          jobTitle: 'QA Tester',
          inquiryCategory: 'General Inquiry',
          message: '🧪 This is a TEST email to verify that the contact form is working correctly and delivering to kyle@yak.media. Timestamp: ' + new Date().toLocaleString(),
          budget: 'Under $50k',
          hearAbout: 'Other',
          stayInTouch: false,
          recaptchaToken
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('✅ Test email sent successfully!', result);
        setTestStatus('success');
        toast.success('Test email sent successfully to kyle@yak.media!');
      } else {
        console.error('❌ Failed to send test email:', result);
        setTestStatus('error');
        setErrorMessage(result.error || 'Unknown error');
        toast.error('Failed to send test email: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('❌ Error sending test email:', error);
      setTestStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error');
      toast.error('Error: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Email Delivery Test</h1>
          <p className="text-gray-400">Test the contact form email delivery to kyle@yak.media</p>
        </div>

        <Card className="bg-gray-800 border-gray-700 p-8">
          <div className="space-y-6">
            {/* Configuration Status */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-white font-semibold mb-3">Configuration Status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-300">Email recipient: <strong className="text-blue-400">kyle@yak.media</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-300">Email service: <strong className="text-blue-400">Resend API</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-300">Bot protection: <strong className="text-blue-400">reCAPTCHA v3</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  {recaptchaReady ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Loader2 className="w-4 h-4 text-yellow-500 animate-spin" />
                  )}
                  <span className="text-gray-300">reCAPTCHA status: {recaptchaReady ? 'Ready' : 'Loading...'}</span>
                </div>
              </div>
            </div>

            {/* Test Button */}
            <div className="pt-4">
              <Button
                onClick={sendTestEmail}
                disabled={testStatus === 'loading' || !recaptchaReady}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-6 text-lg"
              >
                {testStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending Test Email...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Test Email
                  </>
                )}
              </Button>
            </div>

            {/* Test Result */}
            {testStatus === 'success' && (
              <div className="bg-green-900/30 border border-green-500 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Test Email Sent Successfully! ✅</h4>
                    <p className="text-gray-300 text-sm">
                      A test email has been sent to <strong className="text-white">kyle@yak.media</strong>.
                      Please check your inbox (and spam folder) to confirm delivery.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {testStatus === 'error' && (
              <div className="bg-red-900/30 border border-red-500 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Test Failed ❌</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Error: {errorMessage}
                    </p>
                    <p className="text-gray-400 text-xs">
                      Check the browser console for more details.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Instructions */}
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h4 className="text-white font-semibold mb-2">What This Tests:</h4>
              <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                <li>reCAPTCHA v3 verification</li>
                <li>Server endpoint connectivity</li>
                <li>Resend API email delivery</li>
                <li>Email template formatting</li>
                <li>Database backup storage</li>
              </ul>
            </div>

            {/* Manual Verification */}
            <div className="bg-blue-900/20 border border-blue-500 p-4 rounded-lg">
              <h4 className="text-blue-400 font-semibold mb-2">📧 What to Check:</h4>
              <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
                <li>Email arrives at kyle@yak.media</li>
                <li>Subject line: "New Contact Form Submission - General Inquiry"</li>
                <li>All form fields are properly displayed</li>
                <li>Timestamp is accurate</li>
              </ol>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
