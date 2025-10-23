import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../utils/supabase/info';

const inquiryCategories = [
  'General Inquiry',
  'New Business',
  'Partnership Opportunity',
  'Media Inquiry',
  'Career Opportunity',
  'Other'
];

const budgetRanges = [
  'Under $50k',
  '$50k - $100k',
  '$100k - $250k',
  '$250k - $500k',
  '$500k - $1M',
  '$1M+'
];

const hearAboutUs = [
  'Search Engine',
  'Social Media',
  'Referral',
  'Industry Event',
  'Press/Media',
  'LinkedIn',
  'Other'
];

// Add this script to load reCAPTCHA
declare global {
  interface Window {
    grecaptcha: any;
  }
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyWebsite: '',
    jobTitle: '',
    workEmail: '',
    workPhone: '',
    inquiryCategory: '',
    message: '',
    budget: '',
    hearAbout: '',
    stayInTouch: false
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
          window.grecaptcha.execute(siteKey, { action: 'contact_form' })
            .then(resolve)
            .catch(reject);
        });
      });

      // Submit form to backend
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-645a1ee3/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          ...formData,
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
          companyWebsite: '',
          jobTitle: '',
          workEmail: '',
          workPhone: '',
          inquiryCategory: '',
          message: '',
          budget: '',
          hearAbout: '',
          stayInTouch: false
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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Two-column layout for First Name / Last Name */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-white">
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="bg-white border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white">
                Last Name *
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="bg-white border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Two-column layout for Company Website / Job Title */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="companyWebsite" className="text-white">
                Company Website *
              </Label>
              <Input
                id="companyWebsite"
                type="text"
                value={formData.companyWebsite}
                onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                className="bg-white border-gray-300 rounded-lg"
                placeholder="yourcompany.com or https://yourcompany.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobTitle" className="text-white">
                Job Title *
              </Label>
              <Input
                id="jobTitle"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                className="bg-white border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Two-column layout for Work Email / Work Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="workEmail" className="text-white">
                Work Email *
              </Label>
              <Input
                id="workEmail"
                type="email"
                value={formData.workEmail}
                onChange={(e) => handleInputChange('workEmail', e.target.value)}
                className="bg-white border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="workPhone" className="text-white">
                Work Phone *
              </Label>
              <Input
                id="workPhone"
                type="tel"
                value={formData.workPhone}
                onChange={(e) => handleInputChange('workPhone', e.target.value)}
                className="bg-white border-gray-300 rounded-lg"
                placeholder="(888) 888-8888"
                required
              />
            </div>
          </div>

          {/* Category of Inquiry */}
          <div className="space-y-2">
            <Label htmlFor="inquiryCategory" className="text-white">
              Category of Inquiry *
            </Label>
            <Select onValueChange={(value) => handleInputChange('inquiryCategory', value)} required>
              <SelectTrigger className="bg-white border-gray-300 rounded-lg">
                <SelectValue placeholder="Select inquiry category" />
              </SelectTrigger>
              <SelectContent>
                {inquiryCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              How can we help your brand? *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="bg-white border-gray-300 rounded-lg min-h-32"
              placeholder="Tell us about your goals, challenges, and how Yak Media can help..."
              required
            />
          </div>

          {/* Budget dropdown */}
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-white">
              What's your annual marketing budget?
            </Label>
            <Select onValueChange={(value) => handleInputChange('budget', value)}>
              <SelectTrigger className="bg-white border-gray-300 rounded-lg">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* How did you hear about us */}
          <div className="space-y-2">
            <Label htmlFor="hearAbout" className="text-white">
              How did you hear about us?
            </Label>
            <Select onValueChange={(value) => handleInputChange('hearAbout', value)}>
              <SelectTrigger className="bg-white border-gray-300 rounded-lg">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                {hearAboutUs.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Stay in touch checkbox */}
          <div className="flex items-center space-x-3">
            <Checkbox
              id="stayInTouch"
              checked={formData.stayInTouch}
              onCheckedChange={(checked) => handleInputChange('stayInTouch', checked as boolean)}
            />
            <Label htmlFor="stayInTouch" className="text-white">
              If you'd like to stay in touch, please check this box.
            </Label>
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting || !recaptchaLoaded}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-12 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:shadow-lg"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            {!recaptchaLoaded && (
              <p className="text-gray-400 text-sm mt-2">Loading security verification...</p>
            )}
          </div>

          {/* reCAPTCHA disclaimer */}
          <div className="pt-2">
            <p className="text-gray-400 text-sm">
              This site is protected by reCAPTCHA and the Google{' '}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a 
                href="https://policies.google.com/terms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Terms of Service
              </a>{' '}
              apply.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}