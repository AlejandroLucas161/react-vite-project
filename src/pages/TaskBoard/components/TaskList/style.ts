import closeIcon from "@/assets/close-icon.svg";
import { css, styled } from "@mui/material";

export const TaskListContainer = styled("div")`
  display: flex;
  flex-direction: column;

  width: 272px;
  height: fit-content;

  padding: 8px 0px;

  font-size: 14px;

  border-radius: 12px;
  background-color: #444;
`;

export const TaskListTitle = styled("input")`
  display: inline-block;

  padding: 6px;
  margin: 0 8px 12px;

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

export const TaskListFooter = styled("div")<{ isAdding: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  padding: 6px;
  margin: 12px 6px 0;

  color: #b5b5b5;

  border-radius: 8px;
  transition: background-color 300ms;

  ${({ isAdding }) =>
    isAdding
      ? css`
          cursor: default;
          padding: 8px 6px 0;
          margin: 0;
        `
      : css`
          cursor: pointer;

          &:hover {
            background-color: rgba(119, 119, 119, 0.4);
          }
        `}
`;

export const TaskAddButton = styled("button")`
  width: fit-content;

  padding: 8px 10px;

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

export const CloseIcon = styled("div")<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  background-image: url(${closeIcon});
  background-size: cover;

  object-fit: cover;

  transition: all 300ms;
  opacity: 0.6;

  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
