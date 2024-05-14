import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetStarted from "./pages/GetStarted";
import CreateAccount from './pages/CreateAccount'
import Home from "./pages/Home";
import Demo from "./pages/Demo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <GetStarted /> }></Route>
          <Route path="/createAccount" element={ <CreateAccount /> }></Route>
          <Route path="/home" element={ <Home /> }></Route>
          <Route path="/demo" element={ <Demo /> }></Route>
        </Routes>
          <ToastContainer autoClose={3000} />
      </Router>
    </div>
  )
}

export default App;
