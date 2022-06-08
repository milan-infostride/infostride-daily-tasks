const JumbotronComponent = () => {
    let link1 = 'url("images/bg1.jpg")';
    const stl = {
        backgroundImage: link1,
        backgroundSize: "cover",
        height: "60vh"
    }
    const transparent_box = {
        backgroundColor: "#ffffff",
        opacity: "0.6"
    }
    return (  
    <div className="p-5 mb-4 bg-light rounded-3 text-center" style={stl}>
        <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold animate__animated animate__backInUp">Hi i am Milan</h1>
        <h1 className="display-5 fw-bold animate__animated animate__backInDown">Fullstack Developer</h1>
        {/* <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button class="btn btn-primary btn-lg" type="button">Example button</button> */}
        </div>
    </div> );
}
 
export default JumbotronComponent;