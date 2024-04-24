import React from "react";
import Category from "../component/Category";
import TechData from "../smallComponentData/TeachData";

const Tech = () => {
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
                         <TechData />


                        </div>

                    </div>

                </div>




            </div>
        </div>


     </> )
}

export default Tech;