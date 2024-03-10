import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.GRAY_700};
  padding: 20px;
  border-radius: 12px;
`;

// export const Container = styled.Image.attrs({
//   resizeMode: "cover",
// })`
//   background-color: ${({ theme }) => theme.colors.GRAY_700};
//   padding: 20px;
//   border-radius: 8px;
//   justify-content: space-between;
//   overflow: hidden;
// `;

export const Photo = styled.Image.attrs({
  resizeMode: "cover",
})`
  padding: 20px;
  border-radius: 8px;
  justify-content: space-between;
  overflow: hidden;
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
