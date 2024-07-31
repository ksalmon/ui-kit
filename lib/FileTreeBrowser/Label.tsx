import styled from "@emotion/styled";

const Span = styled.span`
  color: ${({ theme }) => theme.colors.black};
`;

export const Label = ({ title }: { title: string | React.ReactNode }) => (
  <Span>{title}</Span>
);
