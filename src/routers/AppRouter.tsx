import { HashRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage"
import { Fragment } from "react";


const AppRouter = () => {
    return(
        <Fragment>
            <HashRouter>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </HashRouter>
        </Fragment>
    )
}

export default AppRouter;
