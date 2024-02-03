import { FunctionComponent, useState } from "react";
import Navbar from "../../components/Navbar";
import useStore from "../../store/store";
import TaskList from "./components/TaskList";
import {
  AddTaskListButton,
  DeleteAllList,
  PlusIcon,
  TasksWrapper,
} from "./style";

const TaskBoard: FunctionComponent = () => {
  const { lists, deleteAllLists } = useStore();
  const [isAdding, setIsAdding] = useState<boolean>(false);

  return (
    <>
      <Navbar />

      <DeleteAllList onClick={() => deleteAllLists()}>
        Delete all lists "Temporary click"
      </DeleteAllList>

      <TasksWrapper>
        {lists.map(({ id, title }) => (
          <TaskList
            key={id}
            title={title}
            isAdding={isAdding}
            setIsAdding={setIsAdding}
          />
        ))}

        {!isAdding ? (
          <AddTaskListButton onClick={() => setIsAdding(true)}>
            <PlusIcon size="16px" />
            Add task list
          </AddTaskListButton>
        ) : (
          <TaskList isAdding={isAdding} setIsAdding={setIsAdding} />
        )}
      </TasksWrapper>
    </>
  );
};

export default TaskBoard;
