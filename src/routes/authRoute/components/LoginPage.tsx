import {
  Box,
  TextField,
  Typography,
  Button,
  Divider,
  Link,
} from "@mui/material";
import React, { FC } from "react";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useColorMode } from "../../../components/ColorModeProvider";

type Inputs = {
  password: string;
  login: string;
};

export const LoginPage: FC = () => {
  const { mode } = useColorMode();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("submited", data);
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
            borderRadius: "20px 0px 0px 20px",
            backdropFilter: "blur(100px)",
            boxShadow: "3px 0px 10px 2px rgba(0,0,0,0.2)",
            "@media screen and (max-width: 600px)": {
              borderRadius: "20px 20px 20px 20px",
            },
          }}
        >
          <Typography variant="h4" sx={{ pb: 1 }}>
            Log In
          </Typography>
          <TextField
            label="Login or email"
            {...register("login", { required: true })}
            fullWidth
          ></TextField>
          <PasswordInput
            register={register("password", { required: true })}
            label="Password"
          />
          <Button
            sx={{
              width: "100%",
              maxWidth: "200px",
              mt: 1,
              borderRadius: 5,
            }}
            size="large"
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Log In
          </Button>
          <Box
            sx={{
              width: "100%",
              "@media screen and (min-width: 600px)": {
                display: "none",
              },
            }}
          >
            <Divider sx={{ width: "100%" }} />
            <Typography>
              Don&apost have an account yet?{" "}
              <Link
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/auth/signup");
                }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
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
            borderRadius: "0px 20px 20px 0px",
            backdropFilter: "blur(100px)",
            boxShadow: "-3px 0px 10px 2px rgba(0,0,0,0.2)",
            "@media screen and (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          <Typography variant="h4">Hello, Friend!</Typography>
          <Typography variant="h6">
            Give us the information and start using Memora for free{" "}
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
              navigate("/auth/signup");
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          background:
            mode === "light"
              ? "linear-gradient(to left, #c7cfe3 40%, #fefefe, #ffffff)"
              : "linear-gradient(to left, #121212, #5e5e5e)",
          position: "absolute",
          left: 0,
          width: "50%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          "@media screen and (max-width: 600px)": {
            width: "100%",
          },
        }}
      ></Box>
      <Box
        sx={{
          background: `url("/public/auth-bg.png")`,
          position: "absolute",
          right: 0,
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
    </>
  );
};
