const About_me_component = (props) => {

    return (
        <div>
            {/* <div className="row text-center">
                About Me...
            </div> */}
            <div id={props.id} className="row justify-content-center">
            <div className="card col-lg-10 col-11 p-0 mt-4">
                <h5 className="card-header bg-dark text-light text-center fs-2"><i className="fas fa-user-circle"></i> About Me</h5>
                <div className="card-body bg-warning text-dark">
                    
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                </div>
            </div> 
        </div>
    );
}
 
export default About_me_component;