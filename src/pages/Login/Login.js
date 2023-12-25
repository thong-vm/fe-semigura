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
import Language from "../../components/Language/Language";
import LocalStorage from "../../services/localStorage/localStorage";
import * as LOCAL_STORAGE from "../../constants/localStorage";
import LoginCarousel from "../../components/Carousle/Carousel";
function Login() {
  const { t } = useTranslation("login_page");
  const ref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(getAuthStatus);
  const [login, setLogin] = useState(false);

  const handleLogin = (data) => {
    setLogin(true);
    LocalStorage.set(
      LOCAL_STORAGE.REMEMBER_ME,
      data[LOCAL_STORAGE.REMEMBER_ME]
    );
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
      label: t("USERNAME"),
      type: "text",
    },
    {
      register: "password",
      label: t("PASSWORD"),
      type: "password",
    },
    {
      register: LOCAL_STORAGE.REMEMBER_ME,
      label: t("REMEMBER_ME"),
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
          <LoadingBar height={5} background={COLORS.primaryMain} ref={ref} />
        </>
      )}
      <div className={classes.containerWrap}>
        <div style={{ color: COLORS.primaryMain }} className={classes.language}>
          <Language />
        </div>
        <div className={classes.mainPanel}>
          <div className={classes.loginCarousel}>
            <LoginCarousel />
          </div>
          <div className={classes.loginPanel}>
            <div className={classes.containerTitle}>
              <span
                style={{ color: COLORS.primaryMain }}
                className={classes.title}
              >
                {t("LOGIN")}
              </span>
            </div>
            <GeneralForm
              fields={fields}
              handleProcess={handleLogin}
              submitBtn={t("LOGIN_BTN")}
            />
            <div className={classes.forgotSignup}>
              <Link className={classes.forgotSingupLink}>
                {t("FORGOT_PASSWORD")}
              </Link>
              <Link className={classes.forgotSingupLink}>{t("SIGN_UP")}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
