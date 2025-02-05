import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: { 
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

function App() {
  const [location] = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-roboto relative overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-background to-background/80 pointer-events-none" />
        <Navigation />
        <main className="container mx-auto px-6 pt-28 pb-16 relative">
          <AnimatePresence mode="wait" initial={false}>
            <Switch location={location} key={location}>
              <Route
                path="/"
                component={() => (
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    className="min-h-screen"
                  >
                    <Home />
                  </motion.div>
                )}
              />
              <Route
                path="/contact"
                component={() => (
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    className="min-h-screen"
                  >
                    <Contact />
                  </motion.div>
                )}
              />
              <Route
                path="/admin"
                component={() => (
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    className="min-h-screen"
                  >
                    <Admin />
                  </motion.div>
                )}
              />
              <Route
                component={() => (
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    className="min-h-screen"
                  >
                    <NotFound />
                  </motion.div>
                )}
              />
            </Switch>
          </AnimatePresence>
        </main>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;