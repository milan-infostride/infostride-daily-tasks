const FooterComponent = () => {
    return ( 
        <div className="container-fluid mt-5 py-4 bg-dark" >
            <div className="row justify-content-center">
                <div className="col-md-10 col-11">
                    <div className="row">
                        <div className="col-6 p-4">
                            <h2 className="fs-2 fw-bold text-light">Milandeep Singh Bhalla</h2>
                            <h3 className="fs-3 fw-bold text-light">Full Stack Dev</h3>
                        </div>
                        <div className="col-6 p-3">
                            <div className="row">
                                <div className="col-6">
                                    <a className="nav-link p-1 d-block text-light" href="#about">About</a>
                                    <a className="nav-link p-1 d-block text-light" href="#languages">Languages</a>
                                </div>
                                <div className="col-6">
                                    <a className="nav-link p-1 d-block text-light" href="#education">Education</a>
                                    <a className="nav-link p-1 d-block text-light" href="#projects">Projects</a>

                                </div>

                            </div>
                            
                            
                        </div>
                        <hr className="style-eight text-light"></hr>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-5 col-11">
                            <div className="row">
                                <div className="col-3  text-center fs-3 p-2 text-light">
                                <a href="https://www.instagram.com/milandeep_singh_bhalla/" style={{color: "var(--bs-light-rgb)"}}><i class="fab fa-instagram"></i></a>
                                </div>
                                <div className="col-3 text-center fs-3 p-2 text-light">
                                <a href="https://www.linkedin.com/in/milandeep-singh-bhalla-b6aa6721a/" style = {{color: "#0072b1"}}><i class="fab fa-linkedin-in mr-2"></i></a>
                                </div>
                                <div className="col-3 text-center fs-3 p-2 text-light">
                                <a href="mailto:milansinghdav@gmail.com" style={{color: "var(--bs-light-rgb)"}} className="text-decoration-none"><i class="fas fa-envelope mr-2"></i></a>
                                </div>
                                <div className="col-3 text-center fs-3 p-2 text-light">
                                <a href="https://twitter.com/ms_bhalla"><i class="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-5 col-11 text-center">
                            <span className="text-light">&#64;Copyright All Rights Reserved</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FooterComponent;
