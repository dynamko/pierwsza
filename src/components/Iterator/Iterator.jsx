import { useState, useEffect } from "react"

function Iterator() {
    const [number, setNumber] = useState(2)
    const [showMessage, setShowMessage] = useState(false)
    const[string, setString] = useState(true)

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
    </div>
}
export default Iterator