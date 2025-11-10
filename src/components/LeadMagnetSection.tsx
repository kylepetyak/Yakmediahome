import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Clock, FileText, Target } from 'lucide-react';
import { Button } from './ui/button';

export function LeadMagnetSection() {
  const [formData, setFormData] = useState({
    businessName: '',
    websiteUrl: '',
    yourName: '',
    email: '',
    phone: '',
    businessType: '',
    biggestChallenge: '',
    howDidYouHear: '',
    honeypot: '', // Spam protection
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const businessTypes = [
    'Restaurant / Food Service',
    'Retail / E-commerce',
    'Professional Services (Law, Accounting, etc.)',
    'Health & Wellness',
    'Home Services (HVAC, Plumbing, etc.)',
    'Real Estate',
    'Automotive',
    'Beauty & Personal Care',
    'Fitness / Gym',
    'Other',
  ];

  const referralSources = [
    'Google Search',
    'Social Media',
    'Referral from Friend/Colleague',
    'LinkedIn',
    'Facebook',
    'Instagram',
    'Other',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Required fields
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!formData.websiteUrl.trim()) {
      newErrors.websiteUrl = 'Website URL is required';
    } else if (!/^https?:\/\/.+\..+/.test(formData.websiteUrl)) {
      newErrors.websiteUrl = 'Please enter a valid URL (e.g., https://example.com)';
    }

    if (!formData.yourName.trim()) {
      newErrors.yourName = 'Your name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData.honeypot) {
      return; // Likely a bot
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // GoHighLevel form submission endpoint
      const ghlFormId = 'fOJCK16acPzhWPLyhYMF';
      const ghlEndpoint = `https://links.yak.media/widget/form/${ghlFormId}`;

      // Create FormData for GHL submission
      const formDataToSend = new FormData();
      formDataToSend.append('business_name', formData.businessName);
      formDataToSend.append('website_url', formData.websiteUrl);
      formDataToSend.append('name', formData.yourName);
      formDataToSend.append('email', formData.email);
      if (formData.phone) formDataToSend.append('phone', formData.phone);
      if (formData.businessType) formDataToSend.append('business_type', formData.businessType);
      if (formData.biggestChallenge) formDataToSend.append('biggest_challenge', formData.biggestChallenge);
      if (formData.howDidYouHear) formDataToSend.append('referral_source', formData.howDidYouHear);

      const response = await fetch(ghlEndpoint, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors', // GHL forms often require this for cross-origin submissions
      });

      // With no-cors, we can't read the response, so we assume success
      setIsSuccess(true);
      // Reset form
      setFormData({
        businessName: '',
        websiteUrl: '',
        yourName: '',
        email: '',
        phone: '',
        businessType: '',
        biggestChallenge: '',
        howDidYouHear: '',
        honeypot: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Something went wrong. Please try again or email us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Success Message */}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 mb-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Success! Your Growth Roadmap Is On Its Way 🚀
              </h3>
              <p className="text-lg text-gray-700">
                Our team is analyzing your digital presence right now. You&apos;ll receive your
                custom Success Guide with screenshots and action steps within 24 hours. Check your email!
              </p>
            </motion.div>
          )}

          {!isSuccess && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Form */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="mb-6">
                    <div className="inline-block bg-orange-100 text-orange-600 text-sm font-bold px-4 py-2 rounded-full mb-4">
                      FREE SUCCESS GUIDE
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                      Get Your Custom Growth Roadmap (Completely Free)
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                      Discover exactly what&apos;s holding your business back and get a{' '}
                      <span className="font-bold text-orange-600">custom Success Guide</span> with
                      screenshots of your specific issues plus step-by-step instructions to fix them -
                      whether you work with us or not.
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm font-bold">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        100% FREE
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        ACTIONABLE
                      </span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                        NO STRINGS ATTACHED
                      </span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Business Name */}
                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Business Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                          errors.businessName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Your Business Name"
                        aria-required="true"
                        aria-invalid={!!errors.businessName}
                        aria-describedby={errors.businessName ? 'businessName-error' : undefined}
                      />
                      {errors.businessName && (
                        <p id="businessName-error" className="text-red-500 text-sm mt-1">
                          {errors.businessName}
                        </p>
                      )}
                    </div>

                    {/* Website URL */}
                    <div>
                      <label
                        htmlFor="websiteUrl"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Website URL <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="url"
                        id="websiteUrl"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                          errors.websiteUrl ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="https://yourwebsite.com"
                        aria-required="true"
                        aria-invalid={!!errors.websiteUrl}
                        aria-describedby={errors.websiteUrl ? 'websiteUrl-error' : undefined}
                      />
                      {errors.websiteUrl && (
                        <p id="websiteUrl-error" className="text-red-500 text-sm mt-1">
                          {errors.websiteUrl}
                        </p>
                      )}
                    </div>

                    {/* Your Name */}
                    <div>
                      <label
                        htmlFor="yourName"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Your Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="yourName"
                        name="yourName"
                        value={formData.yourName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                          errors.yourName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="John Smith"
                        aria-required="true"
                        aria-invalid={!!errors.yourName}
                        aria-describedby={errors.yourName ? 'yourName-error' : undefined}
                      />
                      {errors.yourName && (
                        <p id="yourName-error" className="text-red-500 text-sm mt-1">
                          {errors.yourName}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="john@example.com"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number (Optional) */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number <span className="text-gray-400 text-xs">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Business Type (Optional) */}
                    <div>
                      <label
                        htmlFor="businessType"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Business Type / Industry{' '}
                        <span className="text-gray-400 text-xs">(Optional)</span>
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      >
                        <option value="">Select your business type</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Biggest Challenge (Optional) */}
                    <div>
                      <label
                        htmlFor="biggestChallenge"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        What&apos;s your biggest challenge right now?{' '}
                        <span className="text-gray-400 text-xs">(Optional)</span>
                      </label>
                      <textarea
                        id="biggestChallenge"
                        name="biggestChallenge"
                        value={formData.biggestChallenge}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                        placeholder="e.g., Not getting enough leads, website looks outdated, struggling with social media..."
                      />
                    </div>

                    {/* How Did You Hear (Optional) */}
                    <div>
                      <label
                        htmlFor="howDidYouHear"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        How did you hear about us?{' '}
                        <span className="text-gray-400 text-xs">(Optional)</span>
                      </label>
                      <select
                        id="howDidYouHear"
                        name="howDidYouHear"
                        value={formData.howDidYouHear}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      >
                        <option value="">Select an option</option>
                        {referralSources.map((source) => (
                          <option key={source} value={source}>
                            {source}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Honeypot Field (hidden) */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    {/* Submit Error */}
                    {errors.submit && (
                      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700">
                        {errors.submit}
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-xl font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get My Free Success Guide'}
                    </Button>

                    {/* Trust Builders */}
                    <div className="text-center text-sm text-gray-500 space-y-1 pt-2">
                      <p>No credit card • No obligation • No sales pressure</p>
                      <p className="font-semibold text-gray-700">
                        Real expert analysis, not an automated tool
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Column - Value Proposition */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                    What You'll Receive:
                  </h3>

                  <div className="space-y-4 mb-8">
                    {[
                      {
                        icon: Target,
                        title: 'Screenshots of YOUR specific issues',
                        description:
                          'Not generic advice - we show you exactly what\'s wrong on your site',
                      },
                      {
                        icon: FileText,
                        title: 'Detailed explanations of what is wrong',
                        description: 'Understand why each issue is costing you customers',
                      },
                      {
                        icon: Award,
                        title: 'Step-by-step fix instructions',
                        description: 'Clear, actionable steps you can implement yourself',
                      },
                      {
                        icon: CheckCircle2,
                        title: 'Implement changes yourself or work with us',
                        description: 'Your choice - we\'re here to help either way',
                      },
                      {
                        icon: Clock,
                        title: 'Delivered in 24 hours',
                        description: 'Fast turnaround so you can start improving immediately',
                      },
                    ].map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <motion.div
                          key={benefit.title}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                        >
                          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                            <p className="text-gray-600 text-sm">{benefit.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* "Why Free?" Callout */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200"
                  >
                    <h4 className="text-lg font-black text-gray-900 mb-3">Why are we giving this away?</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Simple: We&apos;d rather prove our expertise by helping you first. Take the Success Guide
                      and implement the fixes yourself, or if you want help, we&apos;re here.{' '}
                      <span className="font-bold">No pressure either way.</span>
                    </p>
                  </motion.div>

                  {/* Brief Explanation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-6 p-6 bg-white rounded-xl border-2 border-orange-200"
                  >
                    <p className="text-gray-700 leading-relaxed">
                      Our team will personally review your digital presence, identify the 10 biggest
                      issues holding you back, and create a custom Success Guide with screenshots and
                      step-by-step instructions.{' '}
                      <span className="font-bold text-orange-600">
                        Implement the changes yourself or we can help - your choice.
                      </span>
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
