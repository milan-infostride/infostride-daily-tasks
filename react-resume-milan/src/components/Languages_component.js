import Vertical_card_component from "./Vertical_card_component";
const Languages_component = (props) => {
    

    return ( 
        <div className="my-4" id={props.id}>
            <div className="row text-center mt-4 mb-3">
                <div className="col-12">
                    <span className="fs-2 fw-bold"><i className={props.icon_class}></i> {props.prop_title}</span>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                {
                    props.data.map((item)=>{
                        return (<Vertical_card_component item={item} key={item.id}></Vertical_card_component>)
                    })
                }
            </div>

        </div>
     );
}
 
export default Languages_component;