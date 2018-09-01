import App from "./components/App";
import StorybookUI from "./storybook";

const UI = process.env.REACT_NATIVE_STORYBOOK ? StorybookUI : App;
export default UI;
