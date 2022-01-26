import "react-toastify/dist/ReactToastify.css";
import "./styles/global-style.css";
import "./styles/fonts.css";
import AppRoutes from "./routes/index";
import "./settings/firebase";

const App = () => {
  return <AppRoutes />;
};

export default App;
