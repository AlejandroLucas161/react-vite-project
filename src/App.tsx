import { FunctionComponent } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/react-vite-project" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
