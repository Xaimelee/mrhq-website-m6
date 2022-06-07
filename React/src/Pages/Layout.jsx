import {Outlet} from "react-router-dom";
import InformationHeader from "../Elements/InformationHeader";
import NavigationHeader from "../Elements/NavigationHeader";

function Layout() {
    return (
        <>
            <InformationHeader />
            <NavigationHeader />
            <Outlet />
        </>
    )
}

export default Layout