import React from "react"
import {render} from "react-dom"

const MyReactComponent = () => {
    return (
        <div className={"wp-card-less"}>
            <h2>react JSX test</h2>
        </div>
    )
}

render(<MyReactComponent />, document.getElementById("react-test"))