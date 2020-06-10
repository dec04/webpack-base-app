import("lodash")                                            // Lazy loading package
// import * as $ from "jquery"                              // jQuery default loading
import AppDebug from "./AppDebug"                           // JS
import "./babel"
import "./react.jsx"
import "@css/app.css"                                       // Styles CSS
import "@css/less.less"                                     // Styles LESS
import "@css/scss.scss"                                     // Styles SCSS / SASS
import TestLogo from "@img/logo_demo_512.png"               // Test images

const appDebug = new AppDebug()

document.addEventListener("DOMContentLoaded", () => {
    appDebug.storeLog("DOM content loaded")
    appDebug.storeLog(`Loading assets test (${TestLogo})`)

    import('jquery').then(({ default: $ }) => {
        $("pre.wp-code").html(
            JSON.stringify(
                appDebug.getLog(),
                null,
                2)
        )

        $("#small-logo").css("background-image", `url("${TestLogo}")`)
    });
});

window.appLog = appDebug.getLog()