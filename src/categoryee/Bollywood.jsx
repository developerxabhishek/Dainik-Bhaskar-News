import React from "react";
import Category from "../component/Category";
import BollywoodData from "../smallComponentData/BollywoodData";


const Bollywood = () => {
    
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
                         <BollywoodData />


                        </div>

                    </div>

                </div>




            </div>
        </div>


     </> )
}

export default Bollywood;