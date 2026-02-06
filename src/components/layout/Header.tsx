import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/str-forge-logo.png";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="STR Forge" 
              className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === "/" 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Overview
            </Link>
            <Link 
              to="/program" 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === "/program" 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Program
            </Link>
          </nav>
          
          <Link to="/apply">
            <Button variant="cta" size="default">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
