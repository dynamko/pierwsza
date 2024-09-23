import './infoBox.css'

function InfoBox() {

    const name = 'waldek'

    const date = new Date().toDateString()

    return <div className="wrapper">
        <p>Pierwsza linia</p>
        <p>Druga</p>
        <p>{name}</p>
        <p>{date}</p>
    </div>
}
export default InfoBox;