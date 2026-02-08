import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    usCitizen: "",
    creditScore: "",
    capitalCapacity: "",
    firstTimeOperator: "",
    profession: "",
    whyThisBusiness: "",
    successDefinition: "",
    acknowledgeFee: false,
    acknowledgeNoGuarantees: false,
    acknowledgeNoManagement: false,
  });
  
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.linkedin) {
      toast({
        title: "Required fields missing",
        description: "Please complete all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.acknowledgeFee || !formData.acknowledgeNoGuarantees || !formData.acknowledgeNoManagement) {
      toast({
        title: "Acknowledgements required",
        description: "Please acknowledge all terms to proceed.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate submission
    setIsSubmitted(true);
    toast({
      title: "Application submitted",
      description: "We'll review your application and be in touch within 48 hours.",
    });
  };
  
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              
              <h1 className="text-3xl font-semibold text-foreground mb-4">
                Application Received
              </h1>
              
              <p className="text-text-secondary mb-8">
                Thank you for applying to work with STR Forge. We review every 
                application carefully and will respond within 48 hours.
              </p>
              
              <p className="text-sm text-muted-foreground">
                In the meantime, feel free to review the full program details.
              </p>
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
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4">
                Application
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Apply to Work With STR Forge
              </h1>
              <p className="text-text-secondary">
                Complete this form to begin the qualification process. 
                We review every application within 48 hours.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Basic Info */}
              <div className="card-elevated p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Basic Information
                </h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn URL *</Label>
                      <Input
                        id="linkedin"
                        value={formData.linkedin}
                        onChange={(e) => handleInputChange("linkedin", e.target.value)}
                        placeholder="linkedin.com/in/yourprofile"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Qualification */}
              <div className="card-elevated p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Qualification
                </h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Are you a U.S. citizen or permit holder? *</Label>
                      <Select
                        value={formData.usCitizen}
                        onValueChange={(value) => handleInputChange("usCitizen", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="citizen">Yes, U.S. citizen</SelectItem>
                          <SelectItem value="permit">Yes, permit holder</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Credit Score Range *</Label>
                      <Select
                        value={formData.creditScore}
                        onValueChange={(value) => handleInputChange("creditScore", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="750+">750+</SelectItem>
                          <SelectItem value="700-749">700-749</SelectItem>
                          <SelectItem value="650-699">650-699</SelectItem>
                          <SelectItem value="below-650">Below 650</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Capital or Credit Capacity *</Label>
                      <Select
                        value={formData.capitalCapacity}
                        onValueChange={(value) => handleInputChange("capitalCapacity", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="200k+">$200,000+</SelectItem>
                          <SelectItem value="150-200k">$150,000 - $200,000</SelectItem>
                          <SelectItem value="100-150k">$100,000 - $150,000</SelectItem>
                          <SelectItem value="below-100k">Below $100,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>First-time corporate housing operator? *</Label>
                      <Select
                        value={formData.firstTimeOperator}
                        onValueChange={(value) => handleInputChange("firstTimeOperator", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes, first time</SelectItem>
                          <SelectItem value="no">No, I have experience</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Context */}
              <div className="card-elevated p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Context
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="profession">Current Profession</Label>
                    <Input
                      id="profession"
                      value={formData.profession}
                      onChange={(e) => handleInputChange("profession", e.target.value)}
                      placeholder="e.g., Software Engineer, Physician, Consultant"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="whyThisBusiness">
                      Why are you interested in building this business?
                    </Label>
                    <Textarea
                      id="whyThisBusiness"
                      value={formData.whyThisBusiness}
                      onChange={(e) => handleInputChange("whyThisBusiness", e.target.value)}
                      placeholder="What draws you to corporate housing as an operating business?"
                      rows={4}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="successDefinition">
                      How would you define success 12 months from now?
                    </Label>
                    <Textarea
                      id="successDefinition"
                      value={formData.successDefinition}
                      onChange={(e) => handleInputChange("successDefinition", e.target.value)}
                      placeholder="What does a successful outcome look like for you?"
                      rows={4}
                    />
                  </div>
                </div>
              </div>
              
              {/* Acknowledgements */}
              <div className="card-elevated p-6 md:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Acknowledgements
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6">
                  Please confirm you understand the following:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="acknowledgeFee"
                      checked={formData.acknowledgeFee}
                      onCheckedChange={(checked) => handleInputChange("acknowledgeFee", checked as boolean)}
                    />
                    <Label htmlFor="acknowledgeFee" className="text-sm text-text-secondary cursor-pointer">
                      I understand the program fee is $50,000 (fixed scope)
                    </Label>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="acknowledgeNoGuarantees"
                      checked={formData.acknowledgeNoGuarantees}
                      onCheckedChange={(checked) => handleInputChange("acknowledgeNoGuarantees", checked as boolean)}
                    />
                    <Label htmlFor="acknowledgeNoGuarantees" className="text-sm text-text-secondary cursor-pointer">
                      I understand there are no income or return guarantees
                    </Label>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="acknowledgeNoManagement"
                      checked={formData.acknowledgeNoManagement}
                      onCheckedChange={(checked) => handleInputChange("acknowledgeNoManagement", checked as boolean)}
                    />
                    <Label htmlFor="acknowledgeNoManagement" className="text-sm text-text-secondary cursor-pointer">
                      I understand STR Forge does not manage properties long-term
                    </Label>
                  </div>
                </div>
              </div>
              
              {/* Submit */}
              <div className="text-center">
                <Button type="submit" variant="cta" size="xl" className="group">
                  Submit Application
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  We review every application and respond within 48 hours.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Apply;
