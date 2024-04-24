import React from "react";
import "./AllCompo.css"
import Category from "./Category";
import MainContainer from "./MainContainer";
import SmallComponent from "./SmallComponent"

const AllCompo = () => {
    return (<>



        <div>
            <div className="AllCompo-main-div">

                <div className="category-div">
                    <Category />
                </div>



                <div className="main-container">


                    <div className="main-second-container">
                        <div className="main-third-container">

                            <MainContainer />
                               <hr/>
                            <SmallComponent />
                            



                        </div>

                    </div>


                </div>







            </div>
        </div>

    </>)
}
export default AllCompo;