import './Button.css'

function Button() {

    function handleButton() {
        console.log("clicked");
    }

    function handleButton2() {
        console.log("hovered");
    }



    
    return <>
    <button onClick={handleButton}>click me!!11!!1</button>
    <button onMouseEnter={handleButton2}>hover</button>
    </>
}

export default Button