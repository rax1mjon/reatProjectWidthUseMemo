import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  const localIsAuth = JSON.parse(localStorage.getItem("isAuth"));
  const [isAuth, setIsAuth] = useState(localIsAuth);

  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={isAuth ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="login" element={<LoginPage setIsAuth={setIsAuth} />} />
      </Route>
    </Routes>
  );
}

export default App;
