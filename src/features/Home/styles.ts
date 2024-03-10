import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_800};
  padding: 20px;
  padding-bottom: 0;
`;
