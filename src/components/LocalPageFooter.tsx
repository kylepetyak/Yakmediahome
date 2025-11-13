import { Phone, Mail, MapPin } from "lucide-react";

interface LocalPageFooterProps {
  cityName: string;
}

export function LocalPageFooter({ cityName }: LocalPageFooterProps) {
  return (
    <section className="bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info - NAP */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Yak Media</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start justify-center md:justify-start gap-2">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Yak Media</p>
                  <p>Serving {cityName} &amp; Greater Phoenix Area</p>
                  <p>Arizona, United States</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+14802446470" className="hover:text-orange-500 transition-colors">
                  (480) 244-6470
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:kyle@yak.media" className="hover:text-orange-500 transition-colors">
                  kyle@yak.media
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/services/creative" className="hover:text-orange-500 transition-colors">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="/services/media" className="hover:text-orange-500 transition-colors">
                  Paid Advertising
                </a>
              </li>
              <li>
                <a href="/services/creative" className="hover:text-orange-500 transition-colors">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="/services/strategy" className="hover:text-orange-500 transition-colors">
                  Digital Strategy
                </a>
              </li>
              <li>
                <a href="/services/integrated" className="hover:text-orange-500 transition-colors">
                  Integrated Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/phoenix" className="hover:text-orange-500 transition-colors">
                  Phoenix Marketing Agency
                </a>
              </li>
              <li>
                <a href="/scottsdale" className="hover:text-orange-500 transition-colors">
                  Scottsdale Marketing Agency
                </a>
              </li>
              <li>
                <a href="/tempe" className="hover:text-orange-500 transition-colors">
                  Tempe Marketing Agency
                </a>
              </li>
              <li>
                <a href="/mesa" className="hover:text-orange-500 transition-colors">
                  Mesa Marketing Agency
                </a>
              </li>
              <li>
                <a href="/chandler" className="hover:text-orange-500 transition-colors">
                  Chandler Marketing Agency
                </a>
              </li>
              <li>
                <a href="/gilbert" className="hover:text-orange-500 transition-colors">
                  Gilbert Marketing Agency
                </a>
              </li>
              <li>
                <a href="/glendale" className="hover:text-orange-500 transition-colors">
                  Glendale Marketing Agency
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Hours & Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p className="mb-2">
            <strong className="text-white">Business Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM MST
          </p>
          <p>
            Proudly serving businesses throughout {cityName} and the Greater Phoenix Metropolitan Area
          </p>
        </div>
      </div>
    </section>
  );
}
