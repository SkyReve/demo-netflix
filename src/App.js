import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import MainPage from "./pages/MainPage";
import React, { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import instance, { changeBaseURL } from "./api/axios";

const Layout = (props) => {
  return (
    <div>
      <Nav baseURL={props.baseURL} changeBaseURL={props.changeBaseURL} />

      <Outlet />

      <Footer />
    </div>
  );
};

export const CommonStateContext = React.createContext();

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [baseURL, setBaseURL] = useState(instance.defaults.baseURL);

  const handleChangeBaseURL = (url) => {
    changeBaseURL(url);
    setBaseURL(url);
  };

  return (
    <CommonStateContext.Provider value={{ isClicked, setIsClicked }}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Layout baseURL={baseURL} changeBaseURL={handleChangeBaseURL} />
            }
          >
            <Route index element={<MainPage baseURL={baseURL} />} />
            <Route path="search" element={<SearchPage baseURL={baseURL} />} />
          </Route>
        </Routes>
      </div>
    </CommonStateContext.Provider>
  );
}

export default App;
