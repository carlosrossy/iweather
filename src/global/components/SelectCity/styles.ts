import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const Options = styled.View`
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.GRAY_500};
  border-bottom-width: 1px;
  padding: 16px 20px;
  border-bottom-color: ${({ theme }) => theme.colors.GRAY_600};
  border-radius: 19px;
`;
