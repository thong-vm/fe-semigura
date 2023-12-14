import { ErrorMessage } from "@hookform/error-message";
import { Button, Checkbox, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import classes from "./GeneralForm.module.css";
import { useTranslation } from "react-i18next";

function GeneralForm({ fields, handleProcess, submitBtn }) {
  const { t } = useTranslation("general_form");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const fieldRender = (field, key) => {
    let result;
    switch (field.type) {
      case "password":
        result = (
          <div key={key} className={classes.formContainer}>
            <div className={classes.formInput}>
              <TextField
                {...register(field.register, {
                  required: `${field.label} ${t("IS_REQUIRED")}.`,
                })}
                label={field.label}
                variant={`${field.variant || "outlined"}`}
                sx={{ width: "100%" }}
                type="password"
              />
            </div>
            <div className={classes.inputError}>
              <ErrorMessage errors={errors} name={field.register} />
            </div>
          </div>
        );
        break;
      case "text":
        result = (
          <div key={key} className={classes.formContainer}>
            <div className={classes.formInput}>
              <TextField
                {...register(field.register, {
                  required: `${field.label} ${t("IS_REQUIRED")}.`,
                })}
                label={field.label}
                variant={`${field.variant || "outlined"}`}
                sx={{ width: "100%" }}
              />
            </div>
            <div className={classes.inputError}>
              <ErrorMessage errors={errors} name={field.register} />
            </div>
          </div>
        );
        break;
      case "checkbox":
        result = (
          <div key={key} className={classes.containerCheckbox}>
            <Checkbox
              sx={{ padding: 0 }}
              id={field.register}
              {...register(field.register)}
            />
            <label htmlFor={field.register}>{field.label}</label>
          </div>
        );
        break;

      default:
        result = (
          <div key={key} className={classes.formContainer}>
            <div className={classes.formInput}>
              <TextField
                {...register(field.register, {
                  required: `${field.label} ${t("IS_REQUIRED")}.`,
                })}
                label={field.label}
                variant={`${field.variant || "outlined"}`}
                sx={field.sx && { width: "100%" }}
              />
            </div>
            <div className={classes.inputError}>
              <ErrorMessage errors={errors} name={field.register} />
            </div>
          </div>
        );
    }
    return result;
  };
  return (
    <div className={classes.containerMain}>
      <form
        className={classes.containerForm}
        onSubmit={handleSubmit((data) => handleProcess(data))}
      >
        {fields.map((field, index) => fieldRender(field, index))}
        <div className={classes.submitBtn}>
          <Button sx={{ width: "100%" }} type="submit" variant="contained">
            {submitBtn}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default GeneralForm;
