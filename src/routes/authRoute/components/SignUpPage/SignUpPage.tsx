import {
  Box,
  Typography,
  Button,
  Link,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import { LoginStep } from "./steps/LoginStep";
import { FullNameStep } from "./steps/FullNameStep";
import { PasswordStep } from "./steps/PasswordStep";
import { stepLabels, conditions } from "./const";
import { useStepper } from "../../../../hooks/useStepper";
import { PersonalInfoStep } from "./steps/PersonalInfoStep";
import { useColorMode } from "../../../../components/ColorModeProvider";
import {
  emailValidation,
  loginValidation,
  nameValidation,
  surnameValidation,
} from "./validation";
import { Gender } from "../../../../types";

type Inputs = {
  login: string;
  email: string;
  name: string;
  surname: string;
  gender: Gender;
  birthDate: Dayjs | null;
  password: string;
  confirmPassword: string;
};

export const SignUpPage: FC = () => {
  const { mode } = useColorMode();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
    setValue,
  } = useForm<Inputs>();

  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const birthDate = dayjs("1900-01-01");

  const handleBirthDateChange = (value: Dayjs | null) => {
    setValue("birthDate", value);
  };

  const steps = [
    <LoginStep
      key="login"
      loginRegister={register("login", loginValidation)}
      emailRegister={register("email", emailValidation)}
      errors={errors}
    />,
    <>
      <FullNameStep
        key="name"
        nameRegister={register("name", nameValidation)}
        surnameRegister={register("surname", surnameValidation)}
        errors={errors}
      />
    </>,
    <>
      <PersonalInfoStep
        key="personalInfo"
        birthDate={birthDate}
        handleBirthChange={handleBirthDateChange}
        genderRegister={register("gender", { required: true })}
        genderValue={watch("gender")}
        errors={errors}
      />
    </>,
    <>
      <PasswordStep
        key="password"
        passwordRegister={register("password", {
          required: {
            value: true,
            message: "This field is required",
          },
          minLength: {
            value: 8,
            message: "Minimal password length is 8 characters",
          },
          maxLength: {
            value: 32,
            message: "Maximum password length is 32 characters",
          },
          onChange: async (event) => {
            setPasswordStrength(0);

            const value = event.target.value;
            conditions.forEach((item) => (item.completed = false));

            if (value.length >= 8) {
              setPasswordStrength((prevValue) => prevValue + 1);
              conditions[0].completed = true;
            }
            if (value.match(/[a-z]/)) {
              setPasswordStrength((prevValue) => prevValue + 1);
              conditions[1].completed = true;
            }
            if (value.match(/[A-Z]/)) {
              setPasswordStrength((prevValue) => prevValue + 1);
              conditions[2].completed = true;
            }
            if (value.match(/\W/)) {
              setPasswordStrength((prevValue) => prevValue + 1);
              conditions[3].completed = true;
            }
            if (value.match(/\d/)) {
              setPasswordStrength((prevValue) => prevValue + 1);
              conditions[4].completed = true;
            }

            console.log(passwordStrength);
          },
          validate: (value: string) => {
            console.log(passwordStrength);
            if (value.includes(" ")) {
              return "Password contains invalid characters";
            }
            if (passwordStrength < 4) {
              return "";
            }
          },
        })}
        passwordConfirmRegister={register("confirmPassword", {
          required: {
            value: true,
            message: "This field is required",
          },
          validate: (value: string) => {
            if (watch("password").trim() !== value.trim()) {
              return "Passwords do not match";
            }
          },
        })}
        errors={errors}
        passwordStrength={passwordStrength}
        conditions={conditions}
      />
    </>,
  ];

  const stepper = useStepper(steps);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("ok");
    console.log("submited", data, birthDate?.toDate());

    navigate("/");
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          alignSelf: "center",
          zIndex: 5,
          display: "flex",
          height: "400px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            textAlign: "center",
            borderRadius: "20px 0px 0px 20px",
            backdropFilter: "blur(100px)",
            boxShadow: "-3px 0px 10px 2px rgba(0,0,0,0.2)",
            "@media screen and (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          <Typography variant="h4">Welcome Back</Typography>
          <Typography variant="h6">
            Already have an account? Login with your personal info{" "}
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              width: "100%",
              maxWidth: "200px",
              borderRadius: 5,
              mt: 1,
            }}
            onClick={() => {
              navigate("/auth/login");
            }}
          >
            Log In
          </Button>
        </Box>
        <Box
          sx={{
            right: 16,
            p: 2,
            height: "100%",
            maxWidth: "500px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: 2,
            alignItems: "center",
            borderRadius: "0px 20px 20px 0px",
            backdropFilter: "blur(100px)",
            boxShadow: "3px 0px 10px 2px rgba(0,0,0,0.2)",
            "@media screen and (max-width: 600px)": {
              borderRadius: "20px 20px 20px 20px",
            },
          }}
        >
          <Typography variant="h4" sx={{ pb: 1, fontStyle: "bold" }}>
            Sign Up
          </Typography>
          <Stepper
            nonLinear
            activeStep={stepper.activeStep}
            sx={{ width: "100%", pb: 2, pt: 1 }}
            alternativeLabel
          >
            {stepLabels.map((item, index) => (
              <Step key={item.label} completed={stepper.completed[index]}>
                <StepLabel />
              </Step>
            ))}
          </Stepper>
          {steps[stepper.activeStep]}
          <Box
            sx={{
              display: "flex",
              justifyContent: stepper.isFirstStep() ? "right" : "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {!stepper.isFirstStep() && (
              <>
                <Button
                  size="large"
                  sx={{
                    width: "100%",
                    maxWidth: "100px",
                    mt: 1,
                    borderRadius: 5,
                  }}
                  onClick={stepper.handleBack}
                >
                  Back
                </Button>
              </>
            )}
            <Button
              sx={{
                width: "100%",
                maxWidth: "100px",
                mt: 1,
                borderRadius: 5,
              }}
              size="large"
              variant="contained"
              type="submit"
              onClick={async () => {
                const triggered = await trigger(
                  stepLabels[stepper.activeStep].registerLabels
                );

                console.log(triggered);

                if (triggered) {
                  stepper.activeStep === stepper.totalSteps() - 1
                    ? handleSubmit(onSubmit)()
                    : stepper.handleComplete();
                }
              }}
            >
              {stepper.activeStep === stepper.totalSteps() - 1
                ? "Sign Up"
                : "Next"}
            </Button>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              "@media screen and (min-width: 600px)": {
                display: "none",
              },
            }}
          >
            Already have an account?{" "}
            <Link
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/auth/login")}
            >
              Log In
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background: `url("/public/auth-bg.png")`,
          position: "absolute",
          left: 0,
          width: "50%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          "@media screen and (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backdropFilter:
              mode === "dark" ? "brightness(20%) grayscale(100%)" : "",
            zIndex: 2,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          background:
            mode === "light"
              ? "linear-gradient(to right, #c7cfe3 40%, #fefefe, #ffffff)"
              : "linear-gradient(to right, #121212, #5e5e5e)",
          position: "absolute",
          right: 0,
          width: "50%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          "@media screen and (max-width: 600px)": {
            width: "100%",
          },
        }}
      ></Box>
    </>
  );
};
