interface TreeData {
  value: string;
  title: string | React.ReactNode;
  onClick?: () => void;
  children?: TreeData[];
}

export type { TreeData };
