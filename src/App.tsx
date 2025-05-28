import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomepageWrapper from "./pages/Homepagewrapper.tsx";
import AboutUs from "./pages/aboutus";
import Invest from "./pages/Invest";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/Contact-us";
import Learn from "./pages/Learn";
import Insights from "./pages/Insight";
import Meettheteam from "./pages/meet-the-team.tsx";
import BlogandArticle from "./pages/blog";
import { usePageTracking } from "./hooks/usePageTracking";

const queryClient = new QueryClient();

const AppRoutes = () => {
  usePageTracking(); // <-- Track page views on every route change

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomepageWrapper />} />
        <Route path="/home" element={<HomepageWrapper />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutus/team" element={<Meettheteam />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/Learn" element={<Learn />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:id" element={<Insights />} />
        <Route path="/insights/:id/:title" element={<Insights />} />
        <Route path="/Blog & Article" element={<BlogandArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;



