import React from "react";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import {
    TextField,
    Select,
    MenuItem,
    Button,
    Box,
    FormControl,
    InputLabel,
} from "@mui/material";

export const UserCreate: React.FC = () => {
    const { saveButtonProps, register, formProps } = useForm(); // Correct hook usage

    return (
        <Create title="Create User">
            <form {...formProps}>
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="Login"
                        {...register("login")}
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        {...register("password")}
                        required
                    />
                    <FormControl>
                        <InputLabel id="role-label">Role</InputLabel>
                        <Select
                            labelId="role-label"
                            label="Role"
                            defaultValue="regular"
                            {...register("role")}
                            required
                        >
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="regular">Regular</MenuItem>
                        </Select>
                    </FormControl>
                    <Box mt={2}>
                        <Button type="submit" variant="contained" color="primary" {...saveButtonProps}>
                            Create
                        </Button>
                    </Box>
                </Box>
            </form>
        </Create>
    );
};
