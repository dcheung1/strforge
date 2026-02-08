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
              className="h-14 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          
          {/* Navigation Links - Stack on mobile, row on desktop */}
          <nav className="w-full max-w-sm sm:max-w-none flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center gap-3 sm:gap-6 md:gap-8">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left py-2 sm:py-0"
            >
              Overview
            </Link>
            <Link 
              to="/program" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left py-2 sm:py-0"
            >
              Program
            </Link>
            <Link 
              to="/apply" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left py-2 sm:py-0"
            >
              Apply
            </Link>
            <Link 
              to="/resources" 
              className="text-sm font-medium text-foreground sm:font-normal sm:text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center sm:justify-start gap-2 rounded-md border border-border bg-secondary/40 px-3 py-2 sm:bg-transparent sm:border-0 sm:px-0 sm:py-0"
            >
              <Lock className="w-3.5 h-3.5" />
              Client Resources
            </Link>
          </nav>
        </div>
        
        <div className="divider my-8" />
        
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground text-center">
          <p>© {new Date().getFullYear()} STR Forge. All rights reserved.</p>
          <p className="text-xs md:text-sm">A fixed-scope build → launch → handoff engagement.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
