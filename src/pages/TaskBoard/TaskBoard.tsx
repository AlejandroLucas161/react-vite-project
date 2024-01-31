import { FunctionComponent } from "react";
import Navbar from "../../components/Navbar";
import TaskList from "./components/TaskList";
import { AddTaskListButton, PlusIcon, TasksWrapper } from "./style";

const TaskBoard: FunctionComponent = () => {
  return (
    <>
      <Navbar />

      <TasksWrapper>
        <TaskList />
        <TaskList />

        <AddTaskListButton>
          <PlusIcon size="16px" />
          Add task list
        </AddTaskListButton>
      </TasksWrapper>
    </>
  );
};

export default TaskBoard;
