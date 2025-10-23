import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// Add this script to load reCAPTCHA
declare global {
  interface Window {
    grecaptcha: any;
  }
}

interface LocalContactFormProps {
  cityName: string;
}

export function LocalContactForm({ cityName }: LocalContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    // Load reCAPTCHA script with your site key
    const siteKey = '6LfPT-0qAAAAADKANvpLHf0bYNbD5DqJxIy7ZTYp'; // Replace with your actual site key
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setRecaptchaLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      const existingScript = document.querySelector('script[src*="recaptcha"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaLoaded) {
      toast.error('Please wait for the page to fully load before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get reCAPTCHA token
      const siteKey = '6LfPT-0qAAAAADKANvpLHf0bYNbD5DqJxIy7ZTYp'; // Replace with your actual site key
      const recaptchaToken = await new Promise((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(siteKey, { action: 'local_contact_form' })
            .then(resolve)
            .catch(reject);
        });
      });

      // Submit form to backend - we'll create a new endpoint for local contact forms
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-645a1ee3/local-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          ...formData,
          cityName,
          recaptchaToken
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || 'Your message has been sent successfully!');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-6">
        <h3 className="text-2xl text-black mb-2">
          Get Started Today
        </h3>
        <p className="text-gray-600">
          Ready to grow your {cityName} business? Let's discuss your goals.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Two-column layout for First Name / Last Name */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-gray-900">
              First Name *
            </Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="bg-gray-50 border-gray-200 focus:border-blue-500"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-gray-900">
              Last Name *
            </Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="bg-gray-50 border-gray-200 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Two-column layout for Email / Phone */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-900">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="bg-gray-50 border-gray-200 focus:border-blue-500"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-900">
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="bg-gray-50 border-gray-200 focus:border-blue-500"
              placeholder="(480) 555-0123"
            />
          </div>
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company" className="text-gray-900">
            Company
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="bg-gray-50 border-gray-200 focus:border-blue-500"
            placeholder="Your company name"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-900">
            How can we help? *
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className="bg-gray-50 border-gray-200 focus:border-blue-500 min-h-24"
            placeholder="Tell us about your marketing goals and challenges..."
            required
          />
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting || !recaptchaLoaded}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          {!recaptchaLoaded && (
            <p className="text-gray-500 text-sm mt-2 text-center">Loading security verification...</p>
          )}
        </div>

        {/* reCAPTCHA disclaimer */}
        <div className="pt-1">
          <p className="text-gray-500 text-xs text-center">
            This site is protected by reCAPTCHA and the Google{' '}
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline"
            >
              Privacy Policy
            </a>{' '}
            and{' '}
            <a 
              href="https://policies.google.com/terms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline"
            >
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </div>
      </form>
    </div>
  );
}