import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as OUT_ROUTES from "./constants/outRoutes";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LocalStorage from "./services/localStorage/localStorage";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(LocalStorage.get("lang"));
  }, [i18n]);
  const routeComponents = Object.values(OUT_ROUTES).map((route) => (
    <Route key={route.id} path={route.path} element={route.element} />
  ));
  return (
    <>
      <Router>
        <Routes>{routeComponents} </Routes>
      </Router>
      <ScrollToTop />
    </>
  );
}

export default App;
