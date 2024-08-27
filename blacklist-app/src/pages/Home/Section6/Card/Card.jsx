import "./Card.css";


export default function Card(props) {
  return (
    <div className="home6-card">
        <div className="home6-card-icon">
            {props.icon}
        </div>
        <div className="home6-card-header">
            <h5>
                {props.title}
               
            </h5>
            <p>
               {props.para}
            </p>
        </div>
    </div>
  )
}
