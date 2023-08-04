import { useEffect } from "react"

let CesiumScreen = function () {

    let uiCesium: any = null;

    useEffect(() => {
        let cesiumContainer = document.querySelector("#cesiumContainer");
        console.log(cesiumContainer);

    }, []);

    return (
        <div id="cesiumWrap">
            <div id="cesiumContainer">

            </div>
        </div>
    )
}

export default CesiumScreen;