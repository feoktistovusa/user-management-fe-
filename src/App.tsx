import React from "react";
import {
    Authenticated,
    GitHubBanner,
    Refine,
} from "@refinedev/core";
import {
    DevtoolsPanel,
    DevtoolsProvider,
} from "@refinedev/devtools";
import {
    RefineKbar,
    RefineKbarProvider,
} from "@refinedev/kbar";

import {
    ErrorComponent,
    notificationProvider,
    RefineSnackbarProvider,
    ThemedLayoutV2,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
    CatchAllNavigate,
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import simpleRestProvider from "@refinedev/simple-rest";
import { BrowserRouter, Outlet, Route, Routes, Navigate } from "react-router-dom";
import { authProvider } from "./authProvider";
import { Header } from "./components/Header";
import { ColorModeContextProvider } from "./contexts/color-mode";

// Import your user management pages
import { UserList, UserCreate, UserEdit, UserShow } from "./pages/users";
import { Login } from "./pages/login";
import dataProvider from "./dataProvider";
function AppRoutes() {
    return (
        <Routes>
            {/* Authenticated Routes */}
            <Route
                element={
                    <Authenticated
                        fallback={<CatchAllNavigate to="/login" />}
                    >
                        <ThemedLayoutV2 Header={Header}>
                            <Outlet />
                        </ThemedLayoutV2>
                    </Authenticated>
                }
            >
                {/* Default Route */}
                <Route
                    index
                    element={<NavigateToResource resource="users" />}
                />

                {/* Users Resource */}
                <Route path="/users">
                    <Route index element={<UserList />} />
                    <Route path="create" element={<UserCreate />} />
                    <Route path="edit/:id" element={<UserEdit />} />
                    <Route path="show/:id" element={<UserShow />} />
                </Route>

                {/* Catch-All Route for Authenticated Users */}
                <Route path="*" element={<ErrorComponent />} />
            </Route>

            {/* Public Routes */}
            <Route
                element={
                    <Authenticated
                        fallback={<Outlet />}
                        authenticated={false}
                    >
                        <NavigateToResource />
                    </Authenticated>
                }
            >
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    );
}

function App() {

    return (
        <BrowserRouter>
            <RefineKbarProvider>
                <ColorModeContextProvider>
                    <CssBaseline />
                    <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
                    <RefineSnackbarProvider>
                        <DevtoolsProvider>
                            <Refine
                                dataProvider={dataProvider}
                                notificationProvider={notificationProvider}
                                routerProvider={routerBindings}
                                authProvider={authProvider}
                                resources={[
                                    {
                                        name: "users",
                                        list: "/users",
                                        create: "/users/create",
                                        edit: "/users/edit/:id",
                                        show: "/users/show/:id",
                                        meta: {
                                            canDelete: true,
                                            requiresAdmin: true, // Custom meta to indicate admin
                                        },
                                    },
                                ]}
                                options={{
                                    syncWithLocation: true,
                                    warnWhenUnsavedChanges: true,
                                    useNewQueryKeys: true,
                                }}
                            >
                                <AppRoutes />
                                <RefineKbar />
                                <UnsavedChangesNotifier />
                                <DocumentTitleHandler />
                            </Refine>
                            <DevtoolsPanel />
                        </DevtoolsProvider>
                    </RefineSnackbarProvider>
                </ColorModeContextProvider>
            </RefineKbarProvider>
        </BrowserRouter>
    );
}

export default App;
