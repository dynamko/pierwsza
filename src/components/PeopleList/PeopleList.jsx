import Person from "./Person"

function PeopleList() {
    const people = [{name: "mietek", age: "56"}, {name: "waldek", age: "26"}, {name: "witek", age: "32"}, ]

    function handleHover(name){
        console.log("Najechałeś na użytkownika:", name)
    }

    return <div className="wrapper2">
        {people.map((val,i) => {
            return <Person key={i} name={val.name} age={val.age} onHover={handleHover}>
                    <h1>przekazanie jako children</h1> 
                </Person>
        })}

    </div>

}

export default PeopleList