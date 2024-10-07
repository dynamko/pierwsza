function Element (props) {

    return <div className= "element" onClick={()=> props.changeFun(props.id)}>
    <p>
    <span className={props.done && "zrobione"}>{props.text}
    </span>
    <button className="buttDel"onClick={()=> props.delFun(props.id)}>X</button>
    </p>
    </div>
}
export default Element