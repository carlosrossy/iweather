import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.GRAY_700};
  border-radius: 12px;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
