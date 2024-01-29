import { FunctionComponent } from "react";
import Navbar from "../../components/Navbar";
import Tasks from "./components/Tasks";

const TaskBoard: FunctionComponent = () => {
  return (
    <>
      <Navbar />

      <Tasks />
    </>
  );
};

export default TaskBoard;
