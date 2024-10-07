import './Lista.css'
import { useState, useEffect } from "react"
import Element from "./Element.jsx"

function Lista() {
    const [string, setString] = useState("")
    const [list, setList] = useState([])
    function handleButton() {
        setList(prev=> [...prev, {id:new Date().getTime(), text: string, done:false}])
    }

    function handleClick(id) {
        setList(prev=>prev.map((val)=>id===val.id ? {...val, done:!val.done} : val))
    }

    function delFun(id) {
        setList(prev=>prev.filter((val) => val.id !== id))
    }

    return <div>
    <h1>simple to-do list</h1>
    <p>task:</p>
    <input className = "wpis" id= "zadanie" type="text" onChange={(e)=> setString(e.target.value)}/>
    <button className = "buttDodaj" onClick={handleButton}>add</button>
    <br />
    <br />
    <h2>to-do:</h2>
    {list.map((val) => {
        return <Element id={val.id} text={val.text} done={val.done} changeFun={handleClick} delFun={delFun}>

        </Element>
    })}
    </div>

}


export default Lista