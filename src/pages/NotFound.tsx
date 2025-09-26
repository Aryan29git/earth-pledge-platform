import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, TreePine, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="card-eco text-center">
          <CardContent className="p-12 space-y-8">
            {/* 404 Icon */}
            <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto flex items-center justify-center">
              <TreePine className="w-12 h-12 text-primary" />
            </div>
            
            {/* 404 Content */}
            <div className="space-y-4">
              <h1 className="text-6xl font-poppins font-bold text-primary">404</h1>
              <h2 className="text-2xl font-poppins font-semibold">Page Not Found</h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Oops! The page you're looking for seems to have wandered off the sustainable path. 
                Let's get you back to growing your eco-knowledge!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="btn-hero group">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button 
                onClick={() => window.history.back()} 
                className="btn-secondary group"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="border-t border-primary/10 pt-8">
              <p className="text-sm text-muted-foreground mb-4">You might be interested in:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link to="/demo-quiz" className="text-sm text-primary hover:underline">Demo Quiz</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/csr-partners" className="text-sm text-primary hover:underline">CSR Partners</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/about" className="text-sm text-primary hover:underline">About Us</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/contact" className="text-sm text-primary hover:underline">Contact</Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
