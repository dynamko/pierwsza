import { useState, useEffect } from "react"

function Iterator() {
    const [number, setNumber] = useState(2)
    const [showMessage, setShowMessage] = useState(false)
    const[string, setString] = useState(true)
    const [numberList, setNumbersList] = useState([5, 4, 32, 65, 75])

    useEffect(()=>{
        console.log('wykonany use effect')
        if(string === 'haslo'){
            setShowMessage(true)
        }
        else {
            setShowMessage(false)
        }
    },[string])

    return <div>
        <p>wartość zmiennej: {number}</p>
        <button onClick={() => setNumber(10)}>Ustaw wartość na 10</button><br></br>
        <button onClick={() => setNumber((prev)=> prev - 1)}>Zmniejsz o -1</button>
        <button onClick={() => setNumber((prev)=> prev + 1)}>Zwiększa o +1</button>
        <br />
        <br />
        <button onClick={()=>setShowMessage((prev)=> !prev)}>{showMessage === true ? 'ukryj wiadomosc ':'pokaz wiadomosc'}</button>
        {showMessage && <h2>hidden message</h2>}
        <br />
        <br />
        <input type="text" onChange={(e)=>setString(e.target.value)}/>
        <p>string value: {string}</p>
        <br />
        <br />
        {numberList.map((element) => element + ', ')}
        <button onClick={()=>setNumbersList(prev => [...prev, prev[2]])}>dodaj 100 do tablicy</button>
    </div>
}
export default Iterator