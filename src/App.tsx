import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomepageWrapper from "./pages/Homepagewrapper.tsx"; // ✅ Import wrapper
import AboutUs from "./pages/aboutus";
import Invest from "./pages/Invest";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/Contact-us";
import Learn from "./pages/Learn";
import Insights from "./pages/Insight";
import Meettheteam from "./pages/meet-the-team.tsx";
import BlogandArticle from "./pages/blog";
import ContactUsWrapper from "./pages/ContactUsWrapper.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomepageWrapper />} /> {/* ✅ Homepage with mobile support */}
          <Route path="/home" element={<HomepageWrapper />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/aboutus/team" element={<Meettheteam />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/contactus" element={<ContactUsWrapper />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<Insights />} />
          <Route path="/insights/:id/:title" element={<Insights />} />
          <Route path="/Blog & Article" element={<BlogandArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
