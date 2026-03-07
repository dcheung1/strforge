import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Sparkles,
  Copy,
  Check,
  ChevronRight,
  Palette,
  Building2,
  Phone,
  MapPin,
  Users,
  FileText,
  RefreshCw,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// All available color schemes - curated for corporate housing
const allColorSchemes = [
  // Premium & Luxury
  { name: "Gold & Onyx", primary: "45 80% 55%", background: "25 33% 5%", description: "Classic luxury" },
  { name: "Champagne & Charcoal", primary: "38 45% 65%", background: "0 0% 8%", description: "Understated elegance" },
  { name: "Copper & Midnight", primary: "25 70% 50%", background: "220 25% 8%", description: "Warm & sophisticated" },
  // Cool & Professional
  { name: "Navy & Cream", primary: "45 40% 75%", background: "220 35% 12%", description: "Corporate trust" },
  { name: "Slate & Silver", primary: "210 20% 70%", background: "215 25% 10%", description: "Modern professional" },
  { name: "Steel Blue & Pearl", primary: "200 30% 60%", background: "210 20% 8%", description: "Clean & confident" },
  // Warm & Inviting
  { name: "Terracotta & Espresso", primary: "15 55% 55%", background: "20 30% 8%", description: "Earthy warmth" },
  { name: "Sage & Walnut", primary: "140 25% 50%", background: "30 20% 8%", description: "Natural calm" },
  { name: "Burgundy & Mahogany", primary: "350 50% 40%", background: "350 25% 8%", description: "Rich & refined" },
];

// Business name suggestions
const businessNameSuggestions = [
  "Apex Corporate Living",
  "Zenith Executive Suites",
  "Harmony Housing Co.",
  "Prestige Corporate Stays",
  "Summit Furnished Living",
  "Elite Extended Stays",
  "Vanguard Housing Group",
  "Premier Corporate Homes",
];

// Tagline suggestions
const taglineSuggestions = [
  "Where Comfort Meets Excellence",
  "Your Home Away From Home",
  "Elevated Living, Exceptional Service",
  "Premium Stays, Professional Standards",
  "Experience Living Refined",
  "Corporate Comfort, Redefined",
];

// Philosophy word suggestions
const philosophySuggestions = [
  "Harmony",
  "Zenith",
  "Apex",
  "Excellence",
  "Integrity",
  "Precision",
  "Elevation",
  "Refinement",
];

interface FormData {
  // Template selection
  templateType: "lead-gen" | "full-booking";
  
  // Company details
  businessName: string;
  tagline: string;
  philosophyWord: string;
  yearFounded: string;
  
  // Contact
  phone: string;
  email: string;
  instagramUrl: string;
  linkedinUrl: string;
  
  // Locations
  primaryCity1: string;
  primaryState1: string;
  primaryCity2: string;
  primaryState2: string;
  additionalCities: string;
  
  // Service details
  propertyBedrooms: string;
  targetCompanies: string;
  managementFee: string;
  leaseTermMonths: string;
  bookingUrl: string;
  
  // Colors
  primaryColor: string;
  backgroundDark: string;
  
  // Assets
  logoFile: File | null;
  heroImages: File[];
}

const WebsiteBuilder = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedColorSchemes, setDisplayedColorSchemes] = useState(() => {
    // Start with first 3 schemes
    return allColorSchemes.slice(0, 3);
  });
  
  const [formData, setFormData] = useState<FormData>({
    templateType: "lead-gen",
    businessName: "",
    tagline: "",
    philosophyWord: "",
    yearFounded: new Date().getFullYear().toString(),
    phone: "",
    email: "",
    instagramUrl: "",
    linkedinUrl: "",
    primaryCity1: "",
    primaryState1: "",
    primaryCity2: "",
    primaryState2: "",
    additionalCities: "",
    propertyBedrooms: "2-4",
    targetCompanies: "",
    managementFee: "18%",
    leaseTermMonths: "24",
    bookingUrl: "",
    primaryColor: "45 80% 55%",
    backgroundDark: "25 33% 5%",
    logoFile: null,
    heroImages: [],
  });

  const updateField = (field: keyof FormData, value: string | File | File[] | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateNewColorSchemes = () => {
    // Shuffle and pick 3 different schemes
    const shuffled = [...allColorSchemes].sort(() => Math.random() - 0.5);
    setDisplayedColorSchemes(shuffled.slice(0, 3));
    toast({ title: "New color schemes generated" });
  };

  const generateSuggestion = (type: "name" | "tagline" | "philosophy") => {
    if (type === "name") {
      const suggestion = businessNameSuggestions[Math.floor(Math.random() * businessNameSuggestions.length)];
      updateField("businessName", suggestion);
    } else if (type === "tagline") {
      const suggestion = taglineSuggestions[Math.floor(Math.random() * taglineSuggestions.length)];
      updateField("tagline", suggestion);
    } else if (type === "philosophy") {
      const suggestion = philosophySuggestions[Math.floor(Math.random() * philosophySuggestions.length)];
      updateField("philosophyWord", suggestion);
    }
  };

  const generatePrompt = (): string => {
    if (formData.templateType === "lead-gen") {
      return generateLeadGenPrompt();
    }
    return generateFullBookingPrompt();
  };

  const generateLeadGenPrompt = (): string => {
    return `# Build My Corporate Housing Lead Generation Website

## Overview
Create a professional lead generation website for **${formData.businessName || "[BUSINESS_NAME]"}**, a corporate housing company. This is a landing page to collect leads and build credibility. No booking system needed yet.

**Brand Tagline:** ${formData.tagline || "[TAGLINE]"}
**Philosophy:** ${formData.philosophyWord || "[PHILOSOPHY_WORD]"}

---

## Design System

### Colors (HSL Values)
Dark, elegant theme:
\`\`\`css
:root {
  --primary: ${formData.primaryColor};
  --background: ${formData.backgroundDark};
  --foreground: 0 0% 100%;
  --card: ${formData.backgroundDark} /* with +3% lightness */;
  --muted-foreground: 30 10% 60%;
}
\`\`\`

### Typography
- **Headings:** Serif font like "Playfair Display" or "Cormorant Garamond"
- **Body:** "Open Sans" or "Inter"

### Visual Effects
- Subtle glow effects on buttons using primary color
- Smooth scroll-triggered fade-in animations using Framer Motion
- Image hover zoom effects

---

## Site Structure - Single Page Layout

Create a **single-page website** with these sections:

### 1. Hero Section
- Full-screen hero with luxury interior background image
- Headline: **"Premium Corporate Housing in ${formData.primaryCity1 || "[PRIMARY_CITY]"}"**
- Subheadline: *"${formData.philosophyWord || "[PHILOSOPHY]"}-driven accommodations for business professionals. Fully furnished. Flexible terms. Exceptional service."*
- **One CTA button:** "Get in Touch" (scrolls to contact form)
- Subtle scroll indicator animation

### 2. About Section
- Headline: **"About ${formData.businessName || "[BUSINESS_NAME]"}"**
- Two-column layout: image on left, text on right
- Text: *"${formData.businessName || "[BUSINESS_NAME]"} provides premium corporate housing solutions in ${formData.primaryCity1 || "[PRIMARY_CITY]"}. We specialize in fully-furnished ${formData.propertyBedrooms} bedroom homes for business travelers, relocating professionals, and companies seeking quality temporary housing. Our ${formData.philosophyWord || "[PHILOSOPHY]"} philosophy means we're committed to continuous improvement in everything we do."*

### 3. Who We Serve Section
Four cards in a grid:
1. **Business Travelers** - Professionals on extended assignments needing comfortable, productive spaces.
2. **Relocating Employees** - Teams transitioning to ${formData.primaryCity1 || "[PRIMARY_CITY]"} while finding permanent housing.
3. **Medical Professionals** - Travel nurses and healthcare workers on temporary assignments.
4. **Corporate Teams** - Companies needing housing for project teams or training groups.

### 4. Why Choose Us Section
Three feature cards:
1. **Fully Furnished** - *"Move-in ready homes with everything you need. Just bring your suitcase."*
2. **Flexible Terms** - *"30-day minimum stays with month-to-month flexibility."*
3. **All-Inclusive** - *"Utilities, WiFi, and housekeeping included. No surprise bills."*

### 5. For Property Owners Section
- Headline: **"Partner With Us"**
- Subheadline: *"Own a property in ${formData.primaryCity1 || "[PRIMARY_CITY]"}? We're looking for quality homes to add to our portfolio."*
- Three benefit bullets:
  - Guaranteed occupancy with long-term leases
  - Professional property care and maintenance
  - Hassle-free partnership. We handle everything
- CTA: "Learn More" (scrolls to contact)

### 6. Contact Section
- Headline: **"Let's Connect"**
- Two-column layout:

**Left Column - Contact Info:**
- Phone: ${formData.phone || "[PHONE]"}
- Email: ${formData.email || "[EMAIL]"}
- Location: ${formData.primaryCity1 || "[PRIMARY_CITY]"}, ${formData.primaryState1 || "[STATE]"}
${formData.instagramUrl ? `- Instagram: ${formData.instagramUrl}` : ""}
${formData.linkedinUrl ? `- LinkedIn: ${formData.linkedinUrl}` : ""}

**Right Column - Contact Form:**
- Toggle: "I need housing" / "I have a property"
- Fields: Name, Email, Phone, Message
- Submit button
- On submit: Show success toast "Thank you! We'll be in touch within 24 hours."

### 7. Footer
- Logo
- Tagline: ${formData.tagline || "[TAGLINE]"}
- Copyright: © ${formData.yearFounded || "[YEAR]"} ${formData.businessName || "[BUSINESS_NAME]"}. All rights reserved.
- Social links

---

## Technical Requirements
- React + TypeScript + Vite
- Tailwind CSS with design tokens
- Framer Motion for scroll animations
- Shadcn/ui components
- Sonner for toast notifications
- Lucide React icons
- Fully responsive (mobile-first)
- Smooth scrolling between sections

---

## Assets to Upload
\`\`\`
public/assets/logos/
└── logo.png

public/assets/images/
├── hero.jpg
├── about.jpg
└── property-1.jpg (optional extras)
\`\`\`
`;
  };

  const generateFullBookingPrompt = (): string => {
    return `# Build My Corporate Housing Website

## Overview
Create a premium corporate housing website for **${formData.businessName || "[BUSINESS_NAME]"}** with a dark, elegant aesthetic. The brand philosophy centers on **${formData.philosophyWord || "[PHILOSOPHY_WORD]"}**—a commitment to excellence in temporary housing.

**Brand Tagline:** ${formData.tagline || "[TAGLINE]"}
**Founded:** ${formData.yearFounded || "[YEAR_FOUNDED]"}

---

## Design System

### Colors (HSL Values)
Create a dark-themed design with these colors in \`index.css\`:
\`\`\`css
:root {
  /* Brand Colors */
  --brand-primary: ${formData.primaryColor}; /* Main accent - buttons, highlights */
  --brand-primary-light: ${formData.primaryColor} /* with +10% lightness */;
  --brand-primary-dark: ${formData.primaryColor} /* with -15% lightness */;
  
  /* Semantic Colors - Dark Theme */
  --background: ${formData.backgroundDark};
  --foreground: 0 0% 100%;
  --card: ${formData.backgroundDark} /* with +3% lightness */;
  --card-foreground: 0 0% 100%;
  --primary: var(--brand-primary);
  --primary-foreground: ${formData.backgroundDark};
  --secondary: ${formData.backgroundDark} /* with +7% lightness */;
  --secondary-foreground: 0 0% 100%;
  --muted: ${formData.backgroundDark} /* with +10% lightness */;
  --muted-foreground: 30 10% 60%;
  --accent: var(--brand-primary);
  --accent-foreground: ${formData.backgroundDark};
  --border: ${formData.backgroundDark} /* with +15% lightness */;
}
\`\`\`

### Typography
- **Headings:** Use a serif font like "Playfair Display", "Cormorant Garamond", or "Libre Baskerville"
- **Body:** Use "Open Sans", "Inter", or "Source Sans Pro"
- Import heading font via Google Fonts

### Visual Effects
Create these utility classes:
- \`.gold-glow\` - Subtle glow effect using primary color
- \`.gold-border-glow\` - Hover effect with glowing border
- Smooth scroll-triggered animations using Framer Motion
- Image hover zoom effects

---

## Site Structure

### Pages to Create:
1. **Homepage (\`/\`)** - Hero, Why Choose Us, Locations, Client Logos, Mission
2. **Corporate Housing (\`/corporate-housing\`)** - For guests looking to book
3. **Landlords (\`/landlords\`)** - For property owners to partner as tenants
4. **Management Partners (\`/management-partners\`)** - For property managers to partner
5. **Contact (\`/contact\`)** - Contact form and info
6. **Book Now (\`/book-now\`)** - **REDIRECT PAGE** to: ${formData.bookingUrl || "[BOOKING_URL]"}

---

## Page Content

### HOMEPAGE

#### Hero Section
- Full-screen hero with background image
- Headline: **"Welcome Home"**
- Subheadline: *"Experience premium corporate housing across ${formData.primaryCity1 || "[PRIMARY_CITY_1]"} and ${formData.primaryCity2 || "[PRIMARY_CITY_2]"}. Where ${formData.philosophyWord || "[PHILOSOPHY]"} meets modern comfort."*
- Two CTAs: "Book Now" (primary) and "Explore Properties" (outline)
- Subtle scroll indicator animation

#### Why ${formData.businessName || "[BUSINESS_NAME]"} Section
Three feature cards:
1. **Design** - *"Thoughtfully curated spaces that blend sophistication with warmth. Every detail matters."*
2. **Quality** - *"Meticulously maintained properties with professional-grade cleanliness standards."*
3. **Hospitality** - *"Attentive support from inquiry to checkout. Your comfort is our commitment."*

#### Locations Section
Grid of location cards with hover effects linking to booking:
- ${formData.primaryCity1 || "[PRIMARY_CITY_1]"}, ${formData.primaryState1 || "[STATE_1]"}
- ${formData.primaryCity2 || "[PRIMARY_CITY_2]"}, ${formData.primaryState2 || "[STATE_2]"}

#### Client Logos Section
Scrolling logo strip with text: "Trusted by leading companies"
Display: ${formData.targetCompanies || "[COMPANY_1], [COMPANY_2], [COMPANY_3]"}

#### Mission Section
- Headline: **"Our Mission"**
- Text: *"${formData.philosophyWord || "[PHILOSOPHY]"} represents our commitment to excellence. Since ${formData.yearFounded || "[YEAR]"}, we've been dedicated to elevating the corporate housing experience, combining refined aesthetics with exceptional hospitality."*
- Stats: Year Founded, Number of Cities

---

### CORPORATE HOUSING PAGE

#### Hero
- Headline: **"Premium Corporate Accommodations"**
- Subheadline: *"Experience refined living in fully-furnished properties designed for the modern professional. From 30-day stays to extended relocations."*

#### Who We Serve Section
Six cards:
1. **Business Travelers** - Extended project assignments requiring comfortable, productive living spaces.
2. **Relocating Professionals** - Transitioning to a new city while searching for permanent housing.
3. **Medical Professionals** - Travel nurses and healthcare workers on temporary assignments.
4. **Insurance Claims** - Displaced families needing comfortable temporary housing solutions.
5. **Government & Military** - Personnel requiring short-term housing near bases or facilities.
6. **Entertainment Industry** - Crews and talent on film or production locations.

#### Amenities Grid
8 amenity icons with labels:
- High-Speed WiFi, Smart TV, Free Parking, Full Kitchen
- Washer/Dryer, Premium Bath, Fitness Access, 24/7 Support

---

### LANDLORDS PAGE

**Positioning:** ${formData.businessName || "[BUSINESS_NAME]"} as the ideal corporate tenant—signing ${formData.leaseTermMonths}-month leases for ${formData.propertyBedrooms} bedroom homes at market rental rates.

#### Hero
- Headline: **"Your Ideal Corporate Tenant"**
- Subheadline: *"Discover why ${formData.businessName || "[BUSINESS_NAME]"} is the tenant you've been looking for. Guaranteed occupancy, property care, and hassle-free management."*

#### Benefits
1. **Guaranteed Occupancy** - We sign multiple leases and renew year over year for guaranteed occupancy.
2. **Property Care** - Your property is kept in for-sale condition—we treat it like our own.
3. **Light Maintenance** - We handle cleaning and light maintenance, keeping contact to emergencies only.

---

### MANAGEMENT PARTNERS PAGE

**Positioning:** Property management partnership with ${formData.managementFee} fee, including dynamic pricing and full operations.

#### Hero
- Headline: **"Property Management Excellence"**
- Subheadline: *"Partner with ${formData.businessName || "[BUSINESS_NAME]"} to maximize your property portfolio's potential. Full-service management with transparent pricing."*

#### Fee Structure
**${formData.managementFee} Management Fee (of Revenue)**
Includes:
- Full guest services & 24/7 support
- Dynamic pricing optimization
- Marketing across all major platforms
- Maintenance coordination
- Monthly financial reporting
- Professional cleaning coordination

---

### CONTACT PAGE

#### Two-Column Layout

**Left Column - Contact Info Card:**
- Phone: ${formData.phone || "[PHONE]"}
- Email: ${formData.email || "[EMAIL]"}
- Locations: ${formData.primaryCity1 || "[CITY_1]"}, ${formData.primaryCity2 || "[CITY_2]"}${formData.additionalCities ? `, ${formData.additionalCities}` : ""}
${formData.instagramUrl ? `- Instagram: ${formData.instagramUrl}` : ""}
${formData.linkedinUrl ? `- LinkedIn: ${formData.linkedinUrl}` : ""}

**Right Column - Contact Form:**
Toggle between "Looking to Book" and "Property Owner"
Fields: First Name, Last Name, Email, Phone, Location, Message
Submit button with toast notification

---

## Technical Requirements
- React + TypeScript + Vite
- Tailwind CSS with custom design tokens
- Framer Motion for animations
- React Router for navigation
- Shadcn/ui components (Button, Input, Accordion, etc.)
- react-intersection-observer for scroll animations
- Sonner for toast notifications
- Lucide React for icons
- Fully responsive (mobile-first)
`;
  };

  const copyPrompt = () => {
    const prompt = generatePrompt();
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    toast({ title: "Prompt copied to clipboard!" });
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    { title: "Template", icon: FileText },
    { title: "Company", icon: Building2 },
    { title: "Contact", icon: Phone },
    { title: "Locations", icon: MapPin },
    { title: "Details", icon: Users },
    { title: "Colors", icon: Palette },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Corporate Housing Website Builder
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Fill out the form below to generate a customized Lovable prompt for your corporate housing website.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
              {steps.map((step, index) => (
                <button
                  key={step.title}
                  onClick={() => setCurrentStep(index)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    currentStep === index
                      ? "bg-primary text-primary-foreground"
                      : currentStep > index
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <step.icon className="w-4 h-4" />
                  <span className="text-sm font-medium hidden md:inline">{step.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Step 0: Template Selection */}
            {currentStep === 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card-elevated p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-foreground mb-6">Choose Your Template</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => updateField("templateType", "lead-gen")}
                    className={`p-6 rounded-lg border-2 text-left transition-all ${
                      formData.templateType === "lead-gen"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🚀</span>
                      <span className="text-sm bg-green-500/20 text-green-400 px-2 py-0.5 rounded">RECOMMENDED</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Lead Generation Site</h3>
                    <p className="text-sm text-muted-foreground">
                      Perfect for new businesses. Creates a professional landing page to collect leads—no booking system required.
                    </p>
                  </button>
                  
                  <button
                    onClick={() => updateField("templateType", "full-booking")}
                    className={`p-6 rounded-lg border-2 text-left transition-all ${
                      formData.templateType === "full-booking"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Full Booking Site</h3>
                    <p className="text-sm text-muted-foreground">
                      For established businesses with a booking engine. Full site with property pages and booking integration.
                    </p>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 1: Company Details */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card-elevated p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-foreground mb-6">Company Details</h2>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => generateSuggestion("name")}
                        className="text-primary hover:text-primary"
                      >
                        <Sparkles className="w-4 h-4 mr-1" />
                        Suggest
                      </Button>
                    </div>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => updateField("businessName", e.target.value)}
                      placeholder="e.g., Apex Corporate Living"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="tagline">Tagline</Label>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => generateSuggestion("tagline")}
                        className="text-primary hover:text-primary"
                      >
                        <Sparkles className="w-4 h-4 mr-1" />
                        Suggest
                      </Button>
                    </div>
                    <Input
                      id="tagline"
                      value={formData.tagline}
                      onChange={(e) => updateField("tagline", e.target.value)}
                      placeholder="e.g., Where Comfort Meets Excellence"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="philosophyWord">Philosophy Word</Label>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => generateSuggestion("philosophy")}
                        className="text-primary hover:text-primary"
                      >
                        <Sparkles className="w-4 h-4 mr-1" />
                        Suggest
                      </Button>
                    </div>
                    <Input
                      id="philosophyWord"
                      value={formData.philosophyWord}
                      onChange={(e) => updateField("philosophyWord", e.target.value)}
                      placeholder="e.g., Harmony, Excellence, Integrity"
                    />
                    <p className="text-xs text-muted-foreground">
                      A single word that defines your brand philosophy
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="yearFounded">Year Founded</Label>
                    <Input
                      id="yearFounded"
                      value={formData.yearFounded}
                      onChange={(e) => updateField("yearFounded", e.target.value)}
                      placeholder="2024"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Contact Information */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card-elevated p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-foreground mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="hello@yourcompany.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="instagramUrl">Instagram URL (optional)</Label>
                      <Input
                        id="instagramUrl"
                        value={formData.instagramUrl}
                        onChange={(e) => updateField("instagramUrl", e.target.value)}
                        placeholder="https://instagram.com/yourcompany"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="linkedinUrl">LinkedIn URL (optional)</Label>
                      <Input
                        id="linkedinUrl"
                        value={formData.linkedinUrl}
                        onChange={(e) => updateField("linkedinUrl", e.target.value)}
                        placeholder="https://linkedin.com/company/yourcompany"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Locations */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card-elevated p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-foreground mb-6">Target Locations</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="primaryCity1">Primary City 1 *</Label>
                      <Input
                        id="primaryCity1"
                        value={formData.primaryCity1}
                        onChange={(e) => updateField("primaryCity1", e.target.value)}
                        placeholder="e.g., Houston"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="primaryState1">State 1 *</Label>
                      <Input
                        id="primaryState1"
                        value={formData.primaryState1}
                        onChange={(e) => updateField("primaryState1", e.target.value)}
                        placeholder="e.g., TX"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="primaryCity2">Primary City 2 (optional)</Label>
                      <Input
                        id="primaryCity2"
                        value={formData.primaryCity2}
                        onChange={(e) => updateField("primaryCity2", e.target.value)}
                        placeholder="e.g., Phoenix"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="primaryState2">State 2 (optional)</Label>
                      <Input
                        id="primaryState2"
                        value={formData.primaryState2}
                        onChange={(e) => updateField("primaryState2", e.target.value)}
                        placeholder="e.g., AZ"
                      />
                    </div>
                  </div>
                  
                  {formData.templateType === "full-booking" && (
                    <div className="space-y-2">
                      <Label htmlFor="additionalCities">Additional Cities (optional)</Label>
                      <Input
                        id="additionalCities"
                        value={formData.additionalCities}
                        onChange={(e) => updateField("additionalCities", e.target.value)}
                        placeholder="e.g., Dallas, Austin, San Antonio"
                      />
                      <p className="text-xs text-muted-foreground">Comma-separated list</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 4: Service Details */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card-elevated p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-foreground mb-6">Service Details</h2>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="propertyBedrooms">Property Bedrooms</Label>
                    <Select
                      value={formData.propertyBedrooms}
                      onValueChange={(value) => updateField("propertyBedrooms", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 Bedrooms</SelectItem>
                        <SelectItem value="2-4">2-4 Bedrooms</SelectItem>
                        <SelectItem value="3-5">3-5 Bedrooms</SelectItem>
                        <SelectItem value="2-6">2-6 Bedrooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="targetCompanies">Target Companies</Label>
                    <Textarea
                      id="targetCompanies"
                      value={formData.targetCompanies}
                      onChange={(e) => updateField("targetCompanies", e.target.value)}
                      placeholder="e.g., Shell, ExxonMobil, MD Anderson, Amazon"
                      rows={3}
                    />
                    <p className="text-xs text-muted-foreground">
                      Companies you want to serve or have served (comma-separated)
                    </p>
                  </div>
                  
                  {formData.templateType === "full-booking" && (
                    <>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="managementFee">Management Fee</Label>
                          <Select
                            value={formData.managementFee}
                            onValueChange={(value) => updateField("managementFee", value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="15%">15%</SelectItem>
                              <SelectItem value="18%">18%</SelectItem>
                              <SelectItem value="20%">20%</SelectItem>
                              <SelectItem value="25%">25%</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="leaseTermMonths">Lease Term (months)</Label>
                          <Select
                            value={formData.leaseTermMonths}
                            onValueChange={(value) => updateField("leaseTermMonths", value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="12">12 months</SelectItem>
                              <SelectItem value="24">24 months</SelectItem>
                              <SelectItem value="36">36 months</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bookingUrl">Booking Engine URL *</Label>
                        <Input
                          id="bookingUrl"
                          value={formData.bookingUrl}
                          onChange={(e) => updateField("bookingUrl", e.target.value)}
                          placeholder="https://your-booking-engine.com"
                        />
                        <p className="text-xs text-destructive">
                          Required for Book Now button to work (Hostaway, Guesty, Lodgify, etc.)
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 5: Colors */}
            {currentStep === 5 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card-elevated p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-foreground mb-6">Color Customization</h2>
                
                <div className="space-y-6">
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={generateNewColorSchemes}
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Generate Color Schemes
                    </Button>
                  </div>
                  
                  <div className="grid gap-4">
                    {displayedColorSchemes.map((scheme) => (
                      <button
                        key={scheme.name}
                        onClick={() => {
                          updateField("primaryColor", scheme.primary);
                          updateField("backgroundDark", scheme.background);
                          toast({ title: `Applied "${scheme.name}" color scheme` });
                        }}
                        className={`p-5 rounded-lg border-2 text-left transition-all ${
                          formData.primaryColor === scheme.primary
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-10 h-10 rounded-full shadow-lg"
                              style={{ backgroundColor: `hsl(${scheme.primary})` }}
                            />
                            <div
                              className="w-10 h-10 rounded-full border border-border"
                              style={{ backgroundColor: `hsl(${scheme.background})` }}
                            />
                          </div>
                          <div>
                            <span className="font-semibold text-foreground block">{scheme.name}</span>
                            <span className="text-sm text-muted-foreground">{scheme.description}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="primaryColor">Primary Color (HSL)</Label>
                      <Input
                        id="primaryColor"
                        value={formData.primaryColor}
                        onChange={(e) => updateField("primaryColor", e.target.value)}
                        placeholder="45 80% 55%"
                      />
                      <div
                        className="w-full h-8 rounded border border-border"
                        style={{ backgroundColor: `hsl(${formData.primaryColor})` }}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="backgroundDark">Background Color (HSL)</Label>
                      <Input
                        id="backgroundDark"
                        value={formData.backgroundDark}
                        onChange={(e) => updateField("backgroundDark", e.target.value)}
                        placeholder="25 33% 5%"
                      />
                      <div
                        className="w-full h-8 rounded border border-border"
                        style={{ backgroundColor: `hsl(${formData.backgroundDark})` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              
              {currentStep < steps.length - 1 ? (
                <Button
                  variant="cta"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button
                  variant="cta"
                  onClick={copyPrompt}
                  className="min-w-[200px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Generate & Copy Prompt
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Preview Section */}
            {currentStep === steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-10"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Prompt Preview</h3>
                <div className="card-elevated p-4 max-h-96 overflow-y-auto">
                  <pre className="text-xs text-muted-foreground whitespace-pre-wrap font-mono">
                    {generatePrompt()}
                  </pre>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Click "Generate & Copy Prompt" above, then paste into a new Lovable project to build your website.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WebsiteBuilder;
