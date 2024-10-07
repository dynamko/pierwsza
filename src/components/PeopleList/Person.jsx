function Person (props) {

    return <div onMouseEnter={()=> props.onHover(props.name)}>
    <p>{props.name}</p>
    {props.age}
    {props.children}
    </div>
}

export default Person