import { useEffect, useState } from "react";
import SplashScreen from "./components/splashScreen";
import {initializeApp} from "./utils/initializer";
import { motion, AnimatePresence } from "framer-motion";

//ROUTES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

//Pages
import ContactsPage from "./pages/ContactsPage";


export default function App(){

  const [isInitializing, setIsInitializing] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function startApp() {
      const result = await initializeApp(3000);
      setIsInitializing(result);
    }
    startApp();
  }, []);
  

  return (
    <AnimatePresence mode="wait">
      {isInitializing ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <SplashScreen isLoading={isInitializing} />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/contacts"
                element={<ContactsPage isLoading={isLoading} setIsLoading={setIsLoading} />}
              />
            </Routes>
          </Router>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
