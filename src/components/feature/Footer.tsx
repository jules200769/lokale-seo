
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <img 
              src="/images/footer-logo.png" 
              alt="Logo" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 mb-6">
              Uw lokale SEO specialist in Tilburg voor betere online zichtbaarheid.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61582726893524&locale=nl_BE" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer hover:opacity-80" style={{ backgroundColor: '#dcc8c2' }}>
                <i className="ri-facebook-fill text-black"></i>
              </a>
              <a href="https://www.linkedin.com/services/page/a8084833b62946a435/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer hover:opacity-80" style={{ backgroundColor: '#dcc8c2' }}>
                <i className="ri-linkedin-fill text-black"></i>
              </a>
              <a href="https://www.instagram.com/lokaleseomapsoptimalisatie?igsh=NHp4MTNqdnk3YmY2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer hover:opacity-80" style={{ backgroundColor: '#dcc8c2' }}>
                <i className="ri-instagram-fill text-black"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: '#dcc8c2' }}>Snelle Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diensten" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Diensten
                </Link>
              </li>
              <li>
                <Link to="/over-ons" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: '#dcc8c2' }}>Diensten</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Google Business Profile</li>
              <li className="text-gray-400">Lokale SEO</li>
              <li className="text-gray-400">Citaties & Backlinks</li>
              <li className="text-gray-400">Review Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: '#dcc8c2' }}>Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <i className="ri-phone-line mt-1" style={{ color: '#dcc8c2' }}></i>
                <span className="text-gray-400">085 250 2834</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-mail-line mt-1" style={{ color: '#dcc8c2' }}></i>
                <a href="mailto:Lokale.Seo-013@outlook.com" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Lokale.Seo-013@outlook.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line mt-1" style={{ color: '#dcc8c2' }}></i>
                <span className="text-gray-400">Tilburg, Noord-Brabant</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Lokale SEO Tilburg. Alle rechten voorbehouden.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
