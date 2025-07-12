import { createRoot } from "react-dom/client";
import "./App.css"
const root  = createRoot(document.getElementById("root"))
import MyApp from "./App";
root.render(
  <MyApp/>
)