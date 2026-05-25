import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AIChatbotWidget from "../shared/AIChatbotWidget";
import WhatsAppFAB from "../shared/WhatsAppFAB";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AIChatbotWidget />
      <WhatsAppFAB />
    </div>
  );
}
