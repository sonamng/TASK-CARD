
import React from 'react'
function Card(props) {
    const {  name, place, img } = props;
    return (
        <div className="main_div">
            <div className="card">
                <img src={img} alt="Avatar" />
                <div className="container">
                    <h4><b>{name}</b></h4>
                    <p>{place}</p>
                    
                </div>
            </div>
        </div>
    )
}
export default Card