import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as OUT_ROUTES from "./constants/outRoutes";
import { Suspense, useEffect } from "react";
import { Notify } from "./components/Common/Notify";
import { useDispatch, useSelector } from "react-redux";
import { closeMsg, selectMsg, selectSeverity } from "./store/app/appSlice";

function App() {
  const routeComponents = Object.values(OUT_ROUTES).map((route) => (
    <Route key={route.id} path={route.path} element={route.element} />
  ));
  const dispatch = useDispatch();
  const msg = useSelector(selectMsg);
  const severity = useSelector(selectSeverity);
  const handleNotifyClose = () => {
    dispatch(closeMsg());
  };
  useEffect(() => {}, [dispatch]);
  return (
    <>
      <Notify error={msg} onOk={handleNotifyClose} severity={severity}></Notify>
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
