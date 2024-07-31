import type { TreeData } from "./types";
import styled from "@emotion/styled";
import { Label } from "./Label";

const Content = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 5px 0;
  cursor: pointer;
`;

export const File = ({
  item,
  onChange,
}: {
  item: TreeData;
  onChange: (value: string) => void;
}) => {
  const onClick = () => {
    item.onClick && item.onClick();
    onChange(item.value);
  };

  return (
    <Content onClick={onClick}>
      <span className="material-symbols-outlined">draft</span>
      <Label title={item.title} />
    </Content>
  );
};
