"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button = ({ title, onPress, style, textStyle }) => {
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: [styles.button, style], onPress: onPress },
        react_1.default.createElement(react_native_1.Text, { style: [styles.buttonText, textStyle] }, title)));
};
const styles = react_native_1.StyleSheet.create({
    button: {
        backgroundColor: '#0077B6',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});
exports.default = Button;
