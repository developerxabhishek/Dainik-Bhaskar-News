import React from "react";
import Category from "../component/Category";
import ScienceData from "../smallComponentData/ScienceData";

const Science = () => {
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
                         <ScienceData />


                        </div>

                    </div>

                </div>




            </div>
        </div>


     </> )
}

export default Science;