import React from "react";
import { Edit } from "@refinedev/mui";
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

export const UserEdit: React.FC = () => {
    const { saveButtonProps, register, formProps } = useForm(); // Correct hook usage

    return (
        <Edit title="Edit User">
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
                        placeholder="Leave blank to keep current password"
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
                            Save Changes
                        </Button>
                    </Box>
                </Box>
            </form>
        </Edit>
    );
};
