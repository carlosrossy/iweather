import styled from "styled-components/native";

interface ContainerProps {
  isLast: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
  border-bottom-width: ${({ isLast }) => (isLast ? "0" : "1")}px;
  border-bottom-color: ${({ theme }) => theme.colors.GRAY_600};
`;

export const BorderBottom = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.GRAY_700};
`;

export const View = styled.View`
  flex-direction: row;
  align-items: center;
`;