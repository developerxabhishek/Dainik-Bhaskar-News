import React from "react";
import Category from "../component/Category";
import SportsData from "../smallComponentData/SportsData";

const Sports = () => {

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
                         <SportsData />


                        </div>

                    </div>

                </div>




            </div>
        </div>


     </> )
}

export default Sports;