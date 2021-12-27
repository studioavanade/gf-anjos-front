import Home from "./modules/pages/home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TOAST_DURATION } from "./constants/feedback-messages";

const App = () => {
  return (
    <div className="App">
      <ToastContainer autoClose={TOAST_DURATION} />
      <Home />
    </div>
  );
};

export default App;
