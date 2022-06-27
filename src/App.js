import Header from "./Components/Header";
import Routes from "./Routes/routes";
<<<<<<< HEAD
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
=======
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
>>>>>>> 515e69e4f7f022262d3b485491af7d0848bf4536

function App() {
  return (
    <div>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ToastContainer />
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
