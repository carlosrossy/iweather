import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_900};
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`;
