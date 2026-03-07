import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Lock, 
  FileText, 
  Video, 
  BookOpen, 
  Download, 
  ExternalLink,
  FolderOpen,
  CheckCircle,
  Building2,
  Calculator,
  Users,
  Home,
  Sparkles,
  ArrowRight
} from "lucide-react";



interface Resource {
  title: string;
  description: string;
  type: "document" | "video" | "guide" | "template" | "tool";
  category: string;
  url?: string;
  isInteractive?: boolean;
}

const resources: Resource[] = [
  // Getting Started
  {
    title: "Program Welcome Guide",
    description: "Overview of the STR Forge program, timeline, and what to expect.",
    type: "document",
    category: "Getting Started",
  },
  {
    title: "Client Onboarding Checklist",
    description: "Step-by-step checklist to prepare for your portfolio build.",
    type: "template",
    category: "Getting Started",
  },
  // Business Foundation
  {
    title: "Website Builder",
    description: "Interactive prompt generator for building your corporate housing website with Lovable.",
    type: "tool",
    category: "Business Foundation",
    url: "/resources/website-builder",
    isInteractive: true,
  },
  {
    title: "Entity Formation Guide",
    description: "How to structure your corporate housing business entity.",
    type: "guide",
    category: "Business Foundation",
  },
  {
    title: "Business Banking Setup",
    description: "Recommended banks and account setup procedures.",
    type: "document",
    category: "Business Foundation",
  },
  {
    title: "Credit Strategy Playbook",
    description: "Leveraging business credit for furnishing and setup costs.",
    type: "guide",
    category: "Business Foundation",
  },
  // Market & Sourcing
  {
    title: "Market Analysis Framework",
    description: "How we evaluate markets for corporate housing demand.",
    type: "document",
    category: "Market & Sourcing",
  },
  {
    title: "Unit Sourcing Criteria",
    description: "What makes a property ideal for corporate housing.",
    type: "guide",
    category: "Market & Sourcing",
  },
  {
    title: "Lease Negotiation Templates",
    description: "Sample lease addendums and negotiation scripts.",
    type: "template",
    category: "Market & Sourcing",
  },
  // Operations
  {
    title: "Furnishing Standards Guide",
    description: "Required items, quality standards, and vendor recommendations.",
    type: "guide",
    category: "Operations",
  },
  {
    title: "Channel Setup Walkthrough",
    description: "Setting up Furnished Finder, Airbnb, and direct booking.",
    type: "video",
    category: "Operations",
  },
  {
    title: "Pricing Logic Framework",
    description: "How to price units for corporate tenants vs. short-term.",
    type: "document",
    category: "Operations",
  },
  {
    title: "Guest Communication SOPs",
    description: "Standard operating procedures for guest messaging.",
    type: "template",
    category: "Operations",
  },
  // Post-Launch
  {
    title: "Monthly Operations Checklist",
    description: "Recurring tasks to maintain portfolio performance.",
    type: "template",
    category: "Post-Launch",
  },
  {
    title: "Scaling Framework",
    description: "When and how to add additional units to your portfolio.",
    type: "guide",
    category: "Post-Launch",
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  "Getting Started": <CheckCircle className="w-5 h-5" />,
  "Business Foundation": <Building2 className="w-5 h-5" />,
  "Market & Sourcing": <Home className="w-5 h-5" />,
  "Operations": <Calculator className="w-5 h-5" />,
  "Post-Launch": <Users className="w-5 h-5" />,
};

const typeIcons: Record<string, React.ReactNode> = {
  document: <FileText className="w-4 h-4" />,
  video: <Video className="w-4 h-4" />,
  guide: <BookOpen className="w-4 h-4" />,
  template: <Download className="w-4 h-4" />,
  tool: <Sparkles className="w-4 h-4" />,
};

const typeLabels: Record<string, string> = {
  document: "Document",
  video: "Video",
  guide: "Guide",
  template: "Template",
  tool: "Interactive Tool",
};

const Resources = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { data, error: fnError } = await supabase.functions.invoke("verify-resources-password", {
        body: { password },
      });

      if (fnError) {
        setError("Something went wrong. Please try again.");
        return;
      }

      if (data?.authenticated) {
        setIsAuthenticated(true);
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const categories = [...new Set(resources.map(r => r.category))];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-md mx-auto text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              
              <h1 className="text-3xl font-semibold text-foreground mb-4">
                Client Resources
              </h1>
              
              <p className="text-text-secondary mb-8">
                This area is restricted to STR Forge clients. 
                Enter your access password to continue.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2 text-left">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter access password"
                    className="text-center"
                  />
                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}
                </div>
                
                <Button type="submit" variant="cta" className="w-full">
                  Access Resources
                </Button>
              </form>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-12">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <FolderOpen className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Client Resource Library
              </h1>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Everything you need to build and operate your corporate housing business. 
                These resources are updated regularly throughout your engagement.
              </p>
            </div>
          </motion.div>
          
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {categoryIcons[category]}
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {category}
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {resources
                    .filter(r => r.category === category)
                    .map((resource, index) => {
                      const CardContent = (
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-primary">
                                {typeIcons[resource.type]}
                              </span>
                              <span className="text-xs text-muted-foreground uppercase tracking-wide">
                                {typeLabels[resource.type]}
                              </span>
                              {resource.isInteractive && (
                                <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">
                                  NEW
                                </span>
                              )}
                            </div>
                            <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                              {resource.title}
                            </h3>
                            <p className="text-sm text-text-secondary">
                              {resource.description}
                            </p>
                          </div>
                          {resource.isInteractive ? (
                            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform shrink-0 mt-1" />
                          ) : (
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                          )}
                        </div>
                      );

                      if (resource.isInteractive && resource.url) {
                        return (
                          <Link
                            key={index}
                            to={resource.url}
                            className={`card-elevated p-5 hover:border-primary/30 transition-colors group cursor-pointer block ${
                              resource.isInteractive ? "border-primary/20 bg-primary/5" : ""
                            }`}
                          >
                            {CardContent}
                          </Link>
                        );
                      }

                      return (
                        <div
                          key={index}
                          className="card-elevated p-5 hover:border-primary/30 transition-colors group cursor-pointer"
                        >
                          {CardContent}
                        </div>
                      );
                    })}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 p-6 rounded-lg border border-border/50 bg-card/30 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Need additional resources or have questions? Contact your STR Forge team directly.
            </p>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
