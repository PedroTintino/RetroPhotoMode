import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Auth from './pages/Auth'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <GetStarted/> }></Route>
          <Route path="/auth" element={ <Auth/> }></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
