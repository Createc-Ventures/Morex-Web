import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import AboutUs from "./pages/aboutus";
import Invest from "./pages/Invest";
import Index from "./pages/home";
import NotFound from "./pages/NotFound";
import ContactUs from './pages/Contact-us';
import Learn from "./pages/Learn";
import Insights from "./pages/Insight";
import Meettheteam from "./pages/Meet-the-team";
import BlogandArticle from "./pages/blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/Blog & Article" element={<BlogandArticle />} />
          {/* ADD ALL CUSTOM ROUTES BELOW THE CATCH-ALL "*" ROUTE */}
          <Route path="/insights/:id" element={<Insights />} />
          <Route path="/insights/:id/:title" element={<Insights />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/aboutus/team" element={<Meettheteam />} />
        {/* ADD ALL CUSTOM ROUTES BELOW THE CATCH-ALL "*" ROUTE */}
        <Route path="/invest" element={<Invest />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/Learn" element={<Learn />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
