import { styled } from "@mui/material";
import plusIcon from "../../assets/plus-icon.svg";

export const TasksWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 12px;

  height: calc(100vh - 68px);
  padding: 12px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  & > * {
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    height: 12px;
  }
`;

export const AddTaskListButton = styled("button")`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 272px;
  height: fit-content;

  padding: 12px;

  color: #b5b5b5;
  font-size: 14px;
  font-weight: 600;

  border-radius: 12px;
  background-color: rgba(68, 68, 68, 0.4);

  transition: background-color 300ms;

  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(68, 68, 68, 0.25);
  }
`;

export const PlusIcon = styled("div")<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  background-image: url(${plusIcon});

  object-fit: cover;
`;

export const DeleteAllList = styled("span")`
  text-decoration: underline;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 260px;
  color: yellow;
  font-weight: 900;
`;
