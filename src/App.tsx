import { FunctionComponent } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, TaskBoard } from "./pages";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-board" element={<TaskBoard />} />
        <Route path="/project-management" element={<></>} />
      </Routes>
    </Router>
  );
};

export default App;
