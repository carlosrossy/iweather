import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_700};
  padding: 20px;
  border-radius: 8px;
`;

export const Image = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height:  335px;
  padding: 20px;
  border-radius: 8px;
`;

export const Footer = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const Details = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 16px;
`;
