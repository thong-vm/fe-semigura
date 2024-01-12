import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as OUT_ROUTES from "./constants/outRoutes";
import { Suspense } from "react";
import NotifyMessage from "./components/NotifyMessage/NotifyMessage";

function App() {
  const routeComponents = Object.values(OUT_ROUTES).map((route) => (
    <Route key={route.id} path={route.path} element={route.element} />
  ));
  return (
    <>
      <NotifyMessage />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>{routeComponents}</Routes>
        </Suspense>
      </Router>
      <ScrollToTop />
    </>
  );
}

export default App;
