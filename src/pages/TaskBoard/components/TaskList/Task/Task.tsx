import { FunctionComponent } from "react";
import { TaskText, TaskTextContaner, TaskTextarea } from "./style";

type TaskProps = {
  task?: string;
  addingTask?: boolean;
};

const Task: FunctionComponent<TaskProps> = ({ task, addingTask }) => {
  return (
    <>
      {!addingTask ? (
        <TaskTextContaner>
          <TaskText>{task || ""}</TaskText>
        </TaskTextContaner>
      ) : (
        <TaskTextarea placeholder="Enter a task name..." />
      )}
    </>
  );
};

export default Task;
