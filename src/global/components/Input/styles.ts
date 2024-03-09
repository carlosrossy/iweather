import { verticalScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

interface IContainerProps {
    isErrored?: boolean;
    width?: string;
    height?: string;
}  

export const Container = styled.View<IContainerProps>`
  width: ${({ width }) => (width ? width : `100%`)};
`;

export const ContentInput = styled.View<IContainerProps>`
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "56px")};
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.GRAY_600};
    border-radius: 19px;
    padding: 12px 16px;
  `;

export const TextInputNative = styled.TextInput.attrs((props) => ({
    placeholderTextColor: props.theme.colors.GRAY_400,
  }))`
    flex: 1;
    height: ${verticalScale(44)}px;
    color: ${({ theme }) => theme.colors.GRAY_400};
    font-size: 16px;
  `;