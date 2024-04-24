import React from "react";
import Category from "../component/Category";
import CountryData from "../smallComponentData/CountryData";

const Country = () => {
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
                         <CountryData />


                        </div>

                    </div>

                </div>




            </div>
        </div>


     </> )
}

export default Country;