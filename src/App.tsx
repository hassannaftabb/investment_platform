import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

function App() {
  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  );
}

export default App;
