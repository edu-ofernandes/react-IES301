
export default function TotalCounter({count, onClick}) {
    return (
        <span className="w-10 p-1" onClick={onClick}>{count}</span>
    )
}