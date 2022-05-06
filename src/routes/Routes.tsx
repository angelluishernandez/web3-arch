import { Route, Routes } from "react-router-dom";
import About from "../pages/About/CreateTodo";
import Home from "../pages/Home/Home";

export default function RouterConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-todo" element={<About />} />
      </Routes>
    </>
  );
}
