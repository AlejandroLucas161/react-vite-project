import { FunctionComponent } from "react";
import { PlusIcon } from "../../style";
import Task from "./Task";
import {
  TaskListContainer,
  TaskListFooter,
  TaskListTitle,
  Tasks,
} from "./style";

const TaskList: FunctionComponent = () => {
  return (
    <>
      <TaskListContainer>
        <TaskListTitle>Task title</TaskListTitle>

        <Tasks>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </Tasks>

        <TaskListFooter>
          <PlusIcon size="16px" />
          Add a task
        </TaskListFooter>
      </TaskListContainer>
    </>
  );
};

export default TaskList;
