import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy-load marketing pages (Aceternity UI — heavier bundle)
const MarketingHome = lazy(() => import("./pages/marketing/Home"));

// Standard pages (shadcn/ui — lighter)
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorks";
import RemoteManagement from "./pages/RemoteManagement";
import GetStarted from "./pages/GetStarted";
import Resources from "./pages/Resources";
import WebsiteBuilder from "./pages/WebsiteBuilder";
import Waitlist from "./pages/Waitlist";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LoadingSpinner = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <MarketingHome />
              </Suspense>
            }
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/remote-management" element={<RemoteManagement />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/website-builder" element={<WebsiteBuilder />} />
          <Route path="/waitlist" element={<Waitlist />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
