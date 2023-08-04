import { Outlet } from "react-router-dom"

let BasicLayout = function () {

    return (
        <div id="basicLayout" className="wrap">
            <div id="header" className="header">

            </div>
            <div id="main" className="main">
                <Outlet />
            </div>
            <div id="footer" className="footer">

            </div>
        </div >
    )
}

export default BasicLayout; 