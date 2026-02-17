import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import BranchLayout from "./components/BranchLayout";
import BranchHome from "./pages/BranchHome";
import BranchMenu from "./pages/BranchMenu";
import BranchCart from "./pages/BranchCart";
import BranchContact from "./pages/BranchContact";
import BranchLocation from "./pages/BranchLocation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/branch/:branchId" element={<BranchLayout />}>
            <Route index element={<BranchHome />} />
            <Route path="menu" element={<BranchMenu />} />
            <Route path="cart" element={<BranchCart />} />
            <Route path="contact" element={<BranchContact />} />
            <Route path="location" element={<BranchLocation />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
