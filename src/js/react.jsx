import React from "react"
import {render} from "react-dom"

const MyReactComponent = () => {
    return (
        <div className={"wp-card-less"}>
            <h2>react JSX test</h2>
        </div>
    )
}

const el = document.getElementById("react-test")

if (!!el)
    render(<MyReactComponent />, el)