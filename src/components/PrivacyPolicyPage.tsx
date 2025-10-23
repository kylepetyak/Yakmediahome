export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg">
            Last updated: September 15, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Introduction</h2>
          <p>
            At Yak Media ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Name and contact information (email address, phone number)</li>
            <li>Company information and job title</li>
            <li>Information you provide when contacting us or requesting our services</li>
            <li>Information you provide when subscribing to our newsletter or blog</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information, including:</p>
          <ul>
            <li>IP address and geographic location</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website or source</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To provide and improve our services</li>
            <li>To communicate with you about our services</li>
            <li>To respond to your inquiries and requests</li>
            <li>To send you marketing communications (with your consent)</li>
            <li>To analyze website usage and improve user experience</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
          <ul>
            <li>With service providers who assist us in operating our website and conducting our business</li>
            <li>When required by law or to protect our rights and safety</li>
            <li>In connection with a business transfer or merger</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access, update, or delete your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Request information about how we use your data</li>
            <li>File a complaint with a supervisory authority</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p>
            <strong>Yak Media LLC</strong><br />
            Email: legal@yak.media<br />
            Phone: 480-244-6470
          </p>
        </div>
      </section>
    </div>
  );
}