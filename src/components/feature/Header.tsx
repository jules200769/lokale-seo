
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div onClick={handleLogoClick} className="flex items-center space-x-3 cursor-pointer">
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="h-28 w-auto object-contain mt-1"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors cursor-pointer ${
                isActive('/') 
                  ? 'text-black border-b-2 border-black pb-1' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Home
            </Link>
            <Link
              to="/diensten"
              className={`font-medium transition-colors cursor-pointer ${
                isActive('/diensten') 
                  ? 'text-black border-b-2 border-black pb-1' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Diensten
            </Link>
            <Link
              to="/over-ons"
              className={`font-medium transition-colors cursor-pointer ${
                isActive('/over-ons') 
                  ? 'text-black border-b-2 border-black pb-1' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Over Ons
            </Link>
            <Link
              to="/contact"
              className="bg-black text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
              style={{ backgroundColor: '#dcc8c2', color: '#000000' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#c9b3ab';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#dcc8c2';
              }}
            >
              Vraag een audit aan
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-black cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`text-2xl ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium transition-colors cursor-pointer ${
                  isActive('/') ? 'text-black' : 'text-gray-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/diensten"
                className={`font-medium transition-colors cursor-pointer ${
                  isActive('/diensten') ? 'text-black' : 'text-gray-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Diensten
              </Link>
              <Link
                to="/over-ons"
                className={`font-medium transition-colors cursor-pointer ${
                  isActive('/over-ons') ? 'text-black' : 'text-gray-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Over Ons
              </Link>
              <Link
                to="/contact"
                className="bg-black text-white px-6 py-2.5 rounded-lg font-semibold text-center cursor-pointer whitespace-nowrap"
                style={{ backgroundColor: '#dcc8c2', color: '#000000' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Vraag een audit aan
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
