import { useState } from "react"
import MenCount from './men-counter/MenCounter';
import WomanCount from './woman-counter/WomanCounter';
import TotalCounter from './total-counter/TotalCounter';
import './PeopleCounter.css';


export default function PeopleCounter() {
    const [menCountValue, setMenCount] = useState(0);
    const [womanCountValue, setWomanCount] = useState(0);

    function womanCountFunc(removeCount = false) {
        if (removeCount) {
            if (womanCountValue !== 0) {
                setWomanCount(womanCountValue - 1);
            }
        } else {
            setWomanCount(womanCountValue + 1);
        }

    }

    function menCountFunc(removeCount = false) {
        if (removeCount) {
            if (menCountValue !== 0) {
                setMenCount(menCountValue - 1);
            }
        } else {
            setMenCount(menCountValue + 1);
        }

    }
    function resetCount() {
        setMenCount(0);
        setWomanCount(0);
    }

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="people-counter-card">
                <div className="people-counter-card-header d-flex justify-content-between align-items-center mb-1 p-1">
                    <div>
                        <p>Total</p>
                    </div>
                    <TotalCounter count={(menCountValue + womanCountValue)} />
                    <button className="p-1 cursor-pointer" onClick={resetCount}>Resetar</button>
                </div>

                <div className="w-100">
                    <MenCount count={menCountValue} addClick={() => menCountFunc()} removeClick={() => menCountFunc(true)} />
                    <WomanCount count={womanCountValue} addClick={() => womanCountFunc()} removeClick={() => womanCountFunc(true)} />
                </div>
            </div>
        </div>
    )
}