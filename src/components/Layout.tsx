import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Users, School, Building2, Heart, BookOpen, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Leaf },
    { name: 'About Us', href: '/about', icon: Heart },
    { name: 'Student Login', href: '/student-login', icon: Users },
    { name: 'School Login', href: '/school-login', icon: School },
    { name: 'NGO Login', href: '/ngo-login', icon: Building2 },
    { name: 'CSR Partners', href: '/csr-partners', icon: Building2 },
    { name: 'Demo Quiz', href: '/demo-quiz', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center growing-tree">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-poppins font-bold gradient-text">
                EcoLearn
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-primary/10">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-primary/10 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-poppins font-bold gradient-text">
                  EcoLearn
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Learning Green, Living Green. Building a sustainable future through education.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/demo-quiz" className="text-muted-foreground hover:text-primary transition-colors">Demo Quiz</Link></li>
                <li><Link to="/csr-partners" className="text-muted-foreground hover:text-primary transition-colors">CSR Partners</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">For Institutions</h3>
              <ul className="space-y-2">
                <li><Link to="/school-login" className="text-muted-foreground hover:text-primary transition-colors">Schools</Link></li>
                <li><Link to="/ngo-login" className="text-muted-foreground hover:text-primary transition-colors">NGOs</Link></li>
                <li><Link to="/student-login" className="text-muted-foreground hover:text-primary transition-colors">Students</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <p className="text-muted-foreground text-sm">
                Join our mission to create a more sustainable world through education.
              </p>
            </div>
          </div>

          <div className="border-t border-primary/10 mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2024 EcoLearn. All rights reserved. Building a greener tomorrow.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;