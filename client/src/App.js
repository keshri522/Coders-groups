import "./App.css";
import Navbar from "./Components/Pages/Navbar/Nav";
import MainSidebar from "./Components/Pages/Sidebar/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Router from "./Components/Router/Routes";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <MainSidebar></MainSidebar>
      <Router></Router>
    </div>
  );
}

export default App;
