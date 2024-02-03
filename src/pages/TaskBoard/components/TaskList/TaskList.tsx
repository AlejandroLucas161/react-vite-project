import {
  ChangeEvent,
  Dispatch,
  FunctionComponent,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";
import useStore, { TaskListType } from "../../../../store/store";
import { PlusIcon } from "../../style";
// import Task from "./Task";
import { v4 } from "uuid";
import {
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
  const [taskList, setTaskList] = useState<TaskListType>({
    id: null,
    title: title || "",
    tasks: [],
    isEditing: isAdding,
  });

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTaskList({ ...taskList, title: e.target.value });

  const handleAddList = () => {
    setTaskList({
      ...taskList,
      id: v4(),
      title: taskList.title,
      isEditing: false,
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
          value={taskList.isEditing ? taskList.title : title}
          isEditing={!!taskList.isEditing}
          readOnly={!taskList.isEditing}
          onChange={handleTitleChange}
          onKeyDown={handleKeyDown}
        />

        <Tasks>
          {/* {Array(4)
            .fill({})
            .map((_, idx) => (
              <Task key={idx} />
            ))} */}
        </Tasks>

        <TaskListFooter isEditing={!!taskList.isEditing}>
          {!taskList.isEditing ? (
            <>
              <PlusIcon size="16px" />
              Add a task
            </>
          ) : (
            <TaskAddButton disabled={!taskList.title} onClick={handleAddList}>
              Add list
            </TaskAddButton>
          )}
        </TaskListFooter>
      </TaskListContainer>
    </>
  );
};

export default TaskList;
