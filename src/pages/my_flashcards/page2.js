import React from "react"
import './page2.css'
// import {BsArrowRight} from 'react-icons/bs';
// import page3 from ".src/pages/flashcard_details/page3";
import {Route, Routes} from 'react-router-dom';
import { CardData } from "../../features/CardData";

const page2 = () => {

    return(
        <>
        <div className="container container-flash">
            <CardData/>
        </div>
        
        <Routes>
            <Route path="/flash-details" element={<page3 />} />
        </Routes>
            
        </>
    );
}

export default page2


///

{/* <div className="card col-md-4">
                        <div className="row align-items-center  me-auto">
                            <div className="col-md-4">
                                <img className="card-img" src="https://th.bing.com/th/id/OIP.dH-CWl8sGmBTTP2MBeN0YgHaH6?w=179&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
                            </div>
                            <div className="col-md-8 ">
                                <h4 className="card-title">Web</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p> lorem Ipsum is dadsasdddsa .....</p>
                                <Link to="/flash-details">
                                <button className="btn btn-light">View Cards {<BsArrowRight style={{fontSize:'23px',color:'red'}}/>} </button>
                                </Link>
                                
                            </div>
                        </div>

                </div>
                <div className="card col-md-4">
                        <div className="row align-items-center me-auto">
                            <div className="col-md-4">
                                <img className="card-img" src="https://th.bing.com/th/id/OIP.dH-CWl8sGmBTTP2MBeN0YgHaH6?w=179&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
                            </div>
                            <div className="col-md-8 ">
                                <h4 className="card-title">Web</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p> lorem Ipsum is dadsasdddsa .....</p>
                                <Link to="/flash-details">
                                <button className="btn btn-light">View Cards {<BsArrowRight style={{fontSize:'23px',color:'red'}}/>} </button>
                                </Link>
                            </div>
                        </div>

</div>
<div className="card col-md-4">
        <div className="row align-items-center me-auto">
            <div className="col-md-4">
                <img className="card-img" src="https://th.bing.com/th/id/OIP.dH-CWl8sGmBTTP2MBeN0YgHaH6?w=179&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
            </div>
            <div className="col-md-8 ">
                <h4 className="card-title">Web</h4>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <p> lorem Ipsum is dadsasdddsa .....</p>
                <Link to="/flash-details">
                <button className="btn btn-light">View Cards {<BsArrowRight style={{fontSize:'23px',color:'red'}}/>} </button>
                </Link>
            </div>
        </div>

</div> */}

{/* <div className="container row l">
    <div className="col-sm-6">
        <div className="card end">
            
                <div className="container card-body">
                <div className="row justify-content-center">
                <img className="col-6 card-img" src="https://th.bing.com/th/id/OIP.G6D_ekKdN5VnMaBGhObxIAHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="sans"/>
                <div className="col-6">
                    <h5 className="card-title">Title and no.of cards go here</h5>
                    x number of cards
                </div>
                </div>
            </div>
            
            <div className="container card-body ">
            <div className="row justify-content-center">
                <div className="col-sm-12">
                    <p className="card-text">Description goes here</p>
                    <Link to="/flash-details">
                        <button className="btn btn-light">View Cards {<BsArrowRight style={{fontSize:'23px',color:'red'}}/>} </button>
                    </Link>
                </div>
            </div>
            </div>
            
        </div>
    </div>
</div>
<div className="container row l">
    <div className="col-sm-6">
        <div className="card end">
            
                <div className="container card-body">
                <div className="row justify-content-center">
                <img className="col-6 card-img" src="https://th.bing.com/th/id/OIP.G6D_ekKdN5VnMaBGhObxIAHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="sans"/>
                <div className="col-6">
                    <h5 className="card-title">Title and no.of cards go here</h5>
                    x number of cards
                </div>
                </div>
            </div>
            
            <div className="container card-body ">
            <div className="row justify-content-center">
                <div className="col-sm-12">
                    <p className="card-text">Description goes here</p>
                    <Link to="/flash-details">
                        <button className="btn btn-light">View Cards {<BsArrowRight style={{fontSize:'23px',color:'red'}}/>} </button>
                    </Link>
                </div>
            </div>
            </div>
            
        </div>
    </div>
</div> */}

/// Rendering HTML

{/* <div className="card end">
                                
    <div className="container card-body">
    <div className="row justify-content-center">
    <img className="col-6 card-img" src="https://th.bing.com/th/id/OIP.G6D_ekKdN5VnMaBGhObxIAHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="sans"/>
    <div className="col-6">
        <h5 className="card-title">Title1 and no.of cards go here</h5>
        x number of cards
    </div>
    </div>
</div>

<div className="container card-body ">
<div className="row justify-content-center">
    <div className="col-sm-12">
        <p className="card-text">Description1 goes here</p>
        <Link to="/flash-details">
            <button className="btn btn-light">View Cards {<BsArrowRight style={{fontSize:'23px',color:'red'}}/>} </button>
        </Link>
    </div>
</div>
</div>

</div> */}