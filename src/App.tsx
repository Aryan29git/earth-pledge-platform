import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CSRPartnersPage from "./components/CSRPartnersPage";
import DemoQuizPage from "./components/DemoQuizPage";
import ContactPage from "./components/ContactPage";
import { StudentLoginPage, SchoolLoginPage, NGOLoginPage } from "./components/LoginPages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="student-login" element={<StudentLoginPage />} />
            <Route path="school-login" element={<SchoolLoginPage />} />
            <Route path="ngo-login" element={<NGOLoginPage />} />
            <Route path="csr-partners" element={<CSRPartnersPage />} />
            <Route path="demo-quiz" element={<DemoQuizPage />} />
            <Route path="contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
