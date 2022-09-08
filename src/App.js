/* eslint-disable no-unused-vars */
import './App.css';
import LandingPage from "./pages/landingPage";
import Footer from "../src/components/footer";
import Header from "../src/components/header"
import { Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <Outlet/>
        <Footer />
      </div>
    </>
  );
}

export default App;
