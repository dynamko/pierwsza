import './List.css'

function List() {
    const numbers = [231, 24, 221, 321, 321, 321, 454]

    const parsed = numbers.map((val)=> val * 100)

    const people = [{name: "mietek", age: "56"}, {name: "waldek", age: "26"}, {name: "witek", age: "32"}, ]


    return <>
        <div>
            {parsed.map((val, i)=>{return <p key={i}>{i+1}. {val}</p>})}
        </div>
        <div className='wrapper2'>
            {people.map((val, i)=>{return <div key={i}><span>{val.name}</span><span>{val.age}</span></div>})}
        </div>
    </>
}

export default List