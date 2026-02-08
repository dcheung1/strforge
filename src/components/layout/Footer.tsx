import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import logo from "@/assets/str-forge-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="STR Forge" 
              className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Overview
            </Link>
            <Link 
              to="/program" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Program
            </Link>
            <Link 
              to="/apply" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Apply
            </Link>
            <Link 
              to="/resources" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Lock className="w-3 h-3" />
              Client Resources
            </Link>
          </nav>
        </div>
        
        <div className="divider my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground text-center md:text-left">
          <p>© {new Date().getFullYear()} STR Forge. All rights reserved.</p>
          <p className="text-xs md:text-sm">A fixed-scope build → launch → handoff engagement.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
