import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    function handleClick(event) {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>Contador {count}</button>
    )
}