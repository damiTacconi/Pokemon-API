import React from "react"


export default function Button({ click, disabled, text }) {
    return (
        <button onClick={() => click()} disabled={disabled} >{text}</button>
    )
}

export function ButtonsPrevNext({ click, prev, next, loading }) {

    return (
        <div className="buttons">
            <Button click={() => click(prev)} disabled={prev === null || loading} text="Prev" />
            <Button click={() => click(next)} disabled={next === null || loading} text="Next" />
        </div>
    )
}