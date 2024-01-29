import { FunctionComponent } from "react";
import { PlusIcon } from "../../style";
import { TaskContainer, TaskFooter, TaskTitle } from "./style";

const Task: FunctionComponent = () => {
  return (
    <>
      <TaskContainer>
        <TaskTitle>Task title</TaskTitle>

        <></>

        <TaskFooter>
          <PlusIcon size="16px" />
          Add a task
        </TaskFooter>
      </TaskContainer>
    </>
  );
};

export default Task;
