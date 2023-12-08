import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as OUT_ROUTES from "./constants/outRoutes";

function App() {
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
