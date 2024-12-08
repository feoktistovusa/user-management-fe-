import React from "react";
import { AuthPage } from "@refinedev/mui";

export const Login = () => {
    return (
        <AuthPage
            type="login"
            formProps={{
                defaultValues: { email: "admin@gmail.com", password: "admin123" }
            }}
            wrapperProps={{
                style: {
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
            }}
        />
    );
};
