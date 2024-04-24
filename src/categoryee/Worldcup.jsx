import React from "react";
import WorldCupData from "../smallComponentData/WorldCupData";
import Category from "../component/Category";


const Worldcup = () => {
    return ( <> 
    
    <div>
            <div className="AllCompo-main-div">


                <div className="category-div">
                    <Category />
                </div>



                <div className="main-container">

                    <div className="main-second-container">

                        <div className="main-third-container">

                            <hr />
                         <WorldCupData />


                        </div>

                    </div>

                </div>




            </div>
        </div>


     </> )
}

export default Worldcup;