import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);

    const handleSingles = () => {
        const updadatedRuns = runs+1;
        setRuns(updadatedRuns);
    }
    const batsmanStyle = {
        margin:'20px'
    }
return(
    <div style={batsmanStyle}>
        <h3>Player: Bangla Batsman</h3>
        <h1>Score: {runs}</h1>
        <button onClick={handleSingles}>Singles</button>
    </div>
)
    
}