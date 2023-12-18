import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as OUT_ROUTES from "./constants/outRoutes";
import { Suspense } from "react";
import { Notify } from "./components/Common/Notify";
import { useDispatch, useSelector } from "react-redux";
import { selectMsg, setMsg } from "./store/app/appSlice";

function App() {
  const routeComponents = Object.values(OUT_ROUTES).map((route) => (
    <Route key={route.id} path={route.path} element={route.element} />
  ));
  const dispatch = useDispatch();
  const msg = useSelector(selectMsg);
  return (
    <>
      <Notify error={msg} onOk={() => dispatch(setMsg)}></Notify>
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
