import "./App.css";
import Layout from "./components/shared/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthContextProvider } from "./components/shared/AuthContext";
import FavouriteMovie from "./pages/FavouriteMovie";
import ProtectedRoute from "./components/shared/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route
              path="/login"
              element={
                <ProtectedRoute accessBy="non-authenticated">
                  <Login />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/fav-movies"
              element={
                <ProtectedRoute accessBy="">
                  <FavouriteMovie />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </Layout>
      </AuthContextProvider>
    </>
  );
}

export default App;
