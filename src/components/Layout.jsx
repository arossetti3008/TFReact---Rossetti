import React, { useEffect } from "react";
import { useLocation, useOutlet } from "react-router-dom"; // 1. Importa useOutlet
import { AnimatePresence, motion } from "framer-motion";
import Navegador from "./Navegador";
import Footer from "./Footer";
import "../css/Styles.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function Layout() {
  const location = useLocation();
  const element = useOutlet(); // 2. Captura el elemento de la ruta actual

  return (
    <div className="contenedor">
      <ScrollToTop />
      <header>
        <Navegador />
      </header>
      <main>
        <section>
          {/* mode="wait" asegura que primero termine de salir el viejo antes de entrar el nuevo */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0}} //y: 20 }}
              animate={{ opacity: 1}} // y: 0 }}
              exit={{ opacity: 0}} //, y: -20 }}
              transition={{ duration: 0.25, ease: "easeInOut" }} // Un poco más suave
              style={{ width: "100%" }}
            >
              {/* 3. Renderiza la variable 'element' en lugar del componente <Outlet /> */}
              {element}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
