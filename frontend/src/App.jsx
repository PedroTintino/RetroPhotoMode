import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <GetStarted/> }></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
