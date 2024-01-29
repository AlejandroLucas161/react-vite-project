import { FunctionComponent } from "react";
import Task from "./Task";
import { TasksWrapper } from "./style";

const Tasks: FunctionComponent = () => {
  return (
    <TasksWrapper>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </TasksWrapper>
  );
};

export default Tasks;
