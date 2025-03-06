import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
