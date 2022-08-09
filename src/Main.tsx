import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "@views/HomePage";
import Layout from "@components/Layout";

export default function Main(): JSX.Element {
    return (
        <Layout>
            <Routes>
                <Route path={"/"} element={<Homepage />} />
            </Routes>
        </Layout>
    );
}
