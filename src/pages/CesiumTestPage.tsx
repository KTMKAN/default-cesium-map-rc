import CesiumScreen from "@/src/components/cesium-screen/CesiumScreen"

let CesiumTestPage = function () {

    return (
        <div className="cesium-test-page-wrap">
            <div id="sidebar" className="sidebar">

            </div>
            <div id="contents" className="contents">
                <CesiumScreen />
            </div>
        </div>
    )
}

export default CesiumTestPage;