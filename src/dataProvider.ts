import { DataProvider } from "@refinedev/core";
import simpleRestProvider from "@refinedev/simple-rest";
import axiosInstance from "./axiosInstance";

const API_URL = import.meta.env.VITE_API_URL;

const dataProvider: DataProvider = simpleRestProvider(API_URL, axiosInstance);

export default dataProvider;
