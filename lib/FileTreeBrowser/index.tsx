import { Directory } from "./Directory";
import { File } from "./File";
import type { TreeData } from "./types";
import styled from "@emotion/styled";

const Container = styled.div`
  font-family: ${({ theme }) => theme.typography.family.body};
`;

const FileTreeBrowser = ({
  data,
  onChange = () => null,
}: {
  data: TreeData[];
  onChange?: (value: string) => void;
}) => {
  return (
    <Container>
      {data.map((node) => {
        if (node.children) {
          return <Directory item={node} onChange={onChange} />;
        } else {
          return <File item={node} onChange={onChange} />;
        }
      })}
    </Container>
  );
};

export default FileTreeBrowser;
