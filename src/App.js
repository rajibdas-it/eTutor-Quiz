import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Utlities/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
