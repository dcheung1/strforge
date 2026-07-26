import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import logo from "@/assets/str-forge-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container py-12 md:py-16">
        <div className="flex flex-col items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="STR Forge" 
              className="h-28 md:h-36 lg:h-40 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          
          <nav className="w-full sm:w-auto max-w-sm sm:max-w-none mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 md:gap-8">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left py-2 sm:py-0"
            >
              Home
            </Link>
            <Link 
              to="/#flywheel" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left py-2 sm:py-0"
            >
              Flywheel
            </Link>
            <Link 
              to="/get-started" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left py-2 sm:py-0"
            >
              Apply
            </Link>
            <Link 
              to="/remote-management" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left py-2 sm:py-0"
            >
              Managed BNB
            </Link>
            <Link 
              to="/resources" 
              className="text-sm font-medium text-foreground sm:font-normal sm:text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center sm:justify-start gap-2 rounded-md border border-border bg-secondary/40 px-3 py-2 sm:bg-transparent sm:border-0 sm:px-0 sm:py-0"
            >
              <Lock className="w-3.5 h-3.5" />
              Resource Vault
            </Link>
          </nav>
        </div>
        
        <div className="divider my-8" />
        
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground text-center">
          <p>&copy; {new Date().getFullYear()} STR Forge. All rights reserved.</p>
          <p className="text-xs md:text-sm">Airbnb deal flow, operations, and ownership infrastructure.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
