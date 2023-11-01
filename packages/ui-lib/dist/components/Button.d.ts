import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
