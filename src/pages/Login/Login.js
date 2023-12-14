import { Link } from "@mui/material";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import * as ROUTES from "../../constants/routes";
import classes from "./Login.module.css";
import GeneralForm from "../../components/GeneralForm/GeneralForm";

import * as COLORS from "../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { getAuthStatus, loginAsync } from "../../store/auth/authSlice";
import { LOADING, SUCCEEDED } from "../../constants/store";
import { useTranslation } from "react-i18next";
function Login() {
  const { t } = useTranslation();
  const LOGIN_PAGE = t("LOGIN_PAGE", { returnObjects: true });
  const ref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(getAuthStatus);
  const [login, setLogin] = useState(false);

  const handleLogin = (data) => {
    setLogin(true);
    dispatch(loginAsync(data));
  };
  useEffect(() => {
    if (status === SUCCEEDED && login) {
      setLogin(false);
      navigate(ROUTES.dashBoard.path);
    }
  }, [status, navigate, login]);
  const fields = [
    {
      register: "username",
      label: "Username",
      type: "text",
    },
    {
      register: "password",
      label: "Password",
      type: "password",
    },
    {
      register: "rememberMe",
      label: "Remember me",
      type: "checkbox",
    },
  ];
  useEffect(() => {
    if (status === SUCCEEDED && login) {
      setLogin(false);
      navigate(ROUTES.dashBoard.path);
    }
  }, [status, navigate, login]);
  return (
    <>
      {status === LOADING && (
        <>
          <LoadingBar background={COLORS.primaryMain} ref={ref} />
        </>
      )}
      <div className={classes.containerWrap}>
        <div style={{ width: "40%" }}>
          <div className={classes.containerTitle}>
            <span
              style={{ color: COLORS.primaryMain }}
              className={classes.title}
            >
              {LOGIN_PAGE.LOGIN}
            </span>
          </div>
          <GeneralForm
            fields={fields}
            handleProcess={handleLogin}
            submitBtn={LOGIN_PAGE.LOGIN_BTN}
          />
          <div className={classes.forgotSignup}>
            <Link className={classes.forgotSingupLink}>
              {LOGIN_PAGE.FORGOT_PASSWORD}
            </Link>
            <Link className={classes.forgotSingupLink}>
              {LOGIN_PAGE.SIGN_UP}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
