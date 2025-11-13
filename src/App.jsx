import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 100,
      once: false,
      delay: 100,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Home />
    </div>
  );
};

export default App;
