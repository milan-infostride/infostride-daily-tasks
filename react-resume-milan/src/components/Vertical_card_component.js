import { useEffect, useState } from "react";

const Vertical_card_component = (props) => {
    let cols = ["74C0FC","E599F7","FF8787","63E6BE","FFD43B","B197FC"]
    let [selected_col,setcol] = useState("");
    useEffect(()=>{
        let index = Math.floor(Math.random() * (5 + 1));
        setcol(cols[index]);
    })
    const bg_col = {
        backgroundColor : "#" + selected_col
    }
    
    return ( 
        <div className="col mb-4">
            <div className="card mx-3 p-0 h-100">
            <img src={props.item.img} className="card-img-top" alt="..."/>
            <div className="card-body" style={bg_col}>
            <h5 className="card-title fw-bold">{props.item.title}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        </div>
     );
}
 
export default Vertical_card_component;