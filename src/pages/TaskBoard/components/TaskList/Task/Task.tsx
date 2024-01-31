import { FunctionComponent } from "react";
import { TaskText, TaskTextContaner } from "./style";
// import { TaskTextarea } from "./style";

const Task: FunctionComponent = () => {
  return (
    <>
      <TaskTextContaner>
        <TaskText>Task</TaskText>
      </TaskTextContaner>

      {/* <TaskTextarea placeholder="Enter a task name..." /> */}
    </>
  );
};

export default Task;
