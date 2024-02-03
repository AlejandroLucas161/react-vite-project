import { css, styled } from "@mui/material";

export const TaskListContainer = styled("div")`
  display: flex;
  flex-direction: column;

  width: 272px;
  height: fit-content;

  padding: 8px 6px;

  font-size: 14px;

  border-radius: 12px;
  background-color: #444;
`;

export const TaskListTitle = styled("input")<{ isEditing: boolean }>`
  display: inline-block;

  padding: 6px;
  margin: 0 6px 12px;

  color: #b5b5b5;
  font-weight: 600;

  border-radius: 8px;

  border: 1px solid #b5b5b5;
  outline: none;
  background: none;

  transition: all 300ms;

  &:active {
    background: none;
    outline: none;
  }

  &:read-only {
    border: 1px solid transparent;
  }
`;

export const Tasks = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;

  max-height: calc(100vh - 198px);
  padding: 0 6px;

  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(102, 102, 102, 0.3);
    border-radius: 4px;
    margin: 0px;
  }
`;

export const TaskListFooter = styled("div")<{ isEditing: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  padding: 6px;
  margin: 12px 4px 0;

  color: #b5b5b5;

  border-radius: 8px;
  transition: background-color 300ms;

  ${({ isEditing }) =>
    isEditing
      ? css`
          cursor: default;
          margin-top: 0;
        `
      : css`
          cursor: pointer;

          &:hover {
            background-color: rgba(119, 119, 119, 0.4);
          }
        `}
`;

export const TaskAddButton = styled("button")`
  padding: 6px 12px;

  border-radius: 4px;
  background-color: #b8e6c7;

  transition: all 300ms;

  border: none;
  outline: none;

  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  &:not(:disabled):hover {
    background-color: #a2c8b6;
  }
`;
