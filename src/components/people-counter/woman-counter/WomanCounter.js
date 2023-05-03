import '../PeopleCounter.css';

export default function WomanCounter({count, addClick, removeClick}) {
    return (
        <div className="people-counter d-flex justify-content-between align-items-center p-1">
            <div>
                <button className='w-10 p-1 me-1 cursor-pointer' onClick={addClick}>+</button>
                <button className='w-10 p-1 me-1 cursor-pointer' onClick={removeClick}>-</button>
            </div>

            <span>{count}</span>
        </div>
    )
}