import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Html, Head, Body, Container, Heading, Text } from '@react-email/components';
const WelcomeEmail = ({ name }) => (_jsxs(Html, { children: [_jsx(Head, {}), _jsx(Body, { style: { fontFamily: 'Arial, sans-serif' }, children: _jsxs(Container, { children: [_jsx(Heading, { children: "Welcome to Our Service" }), _jsxs(Text, { children: ["Hello ", name, ","] }), _jsx(Text, { children: "Thank you for signing up!" }), _jsx(Text, { children: "Best regards," }), _jsx(Text, { children: "The Team" })] }) })] }));
export default WelcomeEmail;
