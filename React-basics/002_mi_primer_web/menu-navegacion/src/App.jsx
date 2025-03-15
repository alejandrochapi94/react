import { NavBar } from "./routes/components/NavBar";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
  //Explicación de las rutas y cómo estás se crean en la barra de direcciones
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </>
  );
};
