export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt="Image Not Uploaded"></img>
            <h3>{props.name}</h3>
            <p>{props.club}</p>
            <p>date and time: {props.date} at {props.time}</p>
            <p>venue: {props.venue}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                Sign up link
            </a>
        </div>
    )
}