interface ReAgencyFooterProps {
  onNavigate?: (path: string) => void;
}

export function ReAgencyFooter({ onNavigate }: ReAgencyFooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleClick = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <footer className="bg-brand-black border-t border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-brand-white mb-4">RE-AGENCY</h3>
            <p className="text-gray-400">
              The Missing Piece In Your Growth
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-brand-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleClick(link.path)}
                    className="text-gray-400 hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <a
                  href="mailto:hello@re-agency.co"
                  className="hover:text-brand-cyan transition-colors"
                >
                  hello@re-agency.co
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-blue/10 text-center text-gray-500 text-sm">
          <p>© {currentYear} RE-AGENCY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
