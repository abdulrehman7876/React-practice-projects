import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import { ProfileShow } from "./components/Profile.jsx";
import TodoApp from "./todoapp/TodoApp.jsx";
import { Counter } from "./counter/Counter.jsx";
import { Form } from "./form/Form.jsx";
import { FormEasyWay } from "./form/FormEasyWay.jsx";
import { ToggleSwitch } from "./components/Toggle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ToggleSwitch /> */}
    <TodoApp />
    {/* <Counter /> */}
    {/* <Form /> */}
    {/* <FormEasyWay /> */}
  </StrictMode>
);
