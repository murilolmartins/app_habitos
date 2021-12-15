import "./App.css";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ModalUser from "./components/ModalUser";
import ModalGoals from "./components/ModalGoals";

function App() {
  return (
    <div className="App">
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
      <div className="App-Container">
        <Routes />

        {/* <ModalUser></ModalUser> */}
        <ModalGoals />
      </div>
    </div>
  );
}

export default App;
