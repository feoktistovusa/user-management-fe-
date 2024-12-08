import React from "react";
import { Show } from "@refinedev/mui";
import { TextField } from "@mui/material";
import { Box, Typography, Grid, Paper } from "@mui/material";

export const UserShow: React.FC = () => {
    return (
        <Show title="User Details">
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">ID</Typography>
                        <Typography variant="body1">
                            <TextField source="id" />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Login</Typography>
                        <Typography variant="body1">
                            <TextField source="login" />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Role</Typography>
                        <Typography variant="body1">
                            <TextField source="role" />
                        </Typography>
                    </Grid>
                    {/* Add more fields as necessary */}
                </Grid>
            </Paper>
        </Show>
    );
};
