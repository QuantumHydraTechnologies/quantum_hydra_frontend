import { Link } from "react-router";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <div className="w-24 h-24 rounded-full bg-qht-primary/10 flex items-center justify-center mx-auto mb-8">
            <AlertTriangle className="w-12 h-12 text-qht-primary" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-qht-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn-primary">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
