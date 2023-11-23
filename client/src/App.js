import "./App.css";
import Navbar from "./Components/Pages/Navbar/Nav";
import MainSidebar from "./Components/Pages/Sidebar/Sidebar";
import AddAnalytics from "./Components/Pages/Analytics/Analytic";
import CardsComponent from "./Components/Pages/Dashboard/Dashboard";
import AdminDashboard from "./Components/Pages/AdminDahsboard/AdminDahsboard";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainSidebar></MainSidebar>
      {/* <AddAnalytics></AddAnalytics> */}
      <AdminDashboard></AdminDashboard>
      <CardsComponent></CardsComponent>
    </div>
  );
}

export default App;
