import { useState, useRef, useEffect } from "react";
import { File } from "./File";
import { Label } from "./Label";
import styled from "@emotion/styled";
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import type { TreeData } from "./types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  height: 30px;
  cursor: pointer;
`;

const usePrevious = <T,>(value: T) => {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
};

export const Directory = ({
  item,
  onChange = () => null,
}: {
  item: TreeData;
  onChange: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const previous = usePrevious(isOpen);

  const onClick = () => {
    setIsOpen(!isOpen);
    onChange(item.value);
    item.onClick && item.onClick();
  };

  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : -10,
    },
  });

  return (
    <Container>
      <Content onClick={onClick}>
        <span
          style={{ opacity: isOpen ? 1 : 0.3 }}
          className="material-symbols-outlined"
        >
          folder
        </span>
        <Label title={item.title} />
      </Content>
      <animated.div
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <animated.div ref={ref} style={{ marginLeft: 15, y }}>
          {item.children?.map((node) => {
            if (node.children) {
              return <Directory item={node} onChange={onChange} />;
            } else {
              return <File item={node} onChange={onChange} />;
            }
          })}
        </animated.div>
      </animated.div>
    </Container>
  );
};
