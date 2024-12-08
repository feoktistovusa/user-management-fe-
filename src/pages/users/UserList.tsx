import React from "react";
import {
    List,
    ShowButton,
    EditButton,
    DeleteButton,
} from "@refinedev/mui";
import { useTable } from "@refinedev/core";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Box,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const UserList: React.FC = () => {
    const { tableQueryResult } = useTable({
        resource: "users"
    });

    return (
        <List title="Users">
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Login</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableQueryResult.data?.data?.data?.map((user: any) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.login}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>
                                <EditButton hideText recordItemId={user.id} />
                                <ShowButton hideText recordItemId={user.id} />
                                <DeleteButton hideText recordItemId={user.id} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </List>
    );
};
