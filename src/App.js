import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Utlities/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header";
// import { toast } from "react-toastify";

function App() {
  // const handleToast = () => {
  //   toast.success("wow so ease!", { autoClose: 1000 });
  // };
  return (
    <div>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />
      {/* <div>
        <h1>rajib</h1>
        <button onClick={handleToast}>Open toast</button>
      </div> */}
    </div>
  );
}

export default App;
