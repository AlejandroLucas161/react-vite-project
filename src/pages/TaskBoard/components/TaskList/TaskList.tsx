import useStore, { TaskListType } from "@/store/store";
import {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";
import { v4 } from "uuid";
import { PlusIcon } from "../../style";
import Task from "./Task";
import {
  CloseIcon,
  TaskAddButton,
  TaskListContainer,
  TaskListFooter,
  TaskListTitle,
  Tasks,
} from "./style";

type TaskListProps = {
  title?: string;
  isAdding?: boolean;
  setIsAdding?: Dispatch<SetStateAction<boolean>>;
};

const TaskList: FunctionComponent<TaskListProps> = ({
  title,
  isAdding,
  setIsAdding,
}) => {
  const { setLists } = useStore();
  const [addingTask, setAddingTask] = useState<boolean>(false);
  const [taskList, setTaskList] = useState<TaskListType>({
    id: null,
    title: title || "",
    tasks: [],
    isAdding: isAdding,
  });

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTaskList({ ...taskList, title: e.target.value });

  const handleAddList = () => {
    setTaskList({
      ...taskList,
      id: v4(),
      title: taskList.title,
      isAdding: false,
    });
    setIsAdding?.(false);
    setLists(taskList);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && taskList.title) {
      handleAddList();
    }
  };

  return (
    <>
      <TaskListContainer>
        <TaskListTitle
          autoFocus
          value={taskList.isAdding ? taskList.title : title}
          readOnly={!taskList.isAdding}
          onChange={handleTitleChange}
          onKeyDown={handleKeyDown}
        />

        <Tasks>
          {addingTask ? (
            <Task addingTask />
          ) : (
            taskList.tasks &&
            taskList.tasks.map(({ id, task }) => <Task key={id} task={task} />)
          )}
        </Tasks>

        {taskList.isAdding || addingTask ? (
          <TaskListFooter isAdding>
            <TaskAddButton
              disabled={!taskList.title}
              onClick={addingTask ? () => setAddingTask(false) : handleAddList}
            >
              Add {taskList.isAdding ? "list" : "card"}
            </TaskAddButton>

            <CloseIcon
              size="16px"
              onClick={() =>
                taskList.isAdding ? setIsAdding?.(false) : setAddingTask(false)
              }
            />
          </TaskListFooter>
        ) : (
          <TaskListFooter
            isAdding={!!taskList.isAdding}
            onClick={() => setAddingTask(!addingTask)}
          >
            <PlusIcon size="16px" />
            Add a task
          </TaskListFooter>
        )}
      </TaskListContainer>
    </>
  );
};

export default TaskList;
