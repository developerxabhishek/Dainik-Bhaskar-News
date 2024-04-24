import React, { useEffect, useState } from "react";
import Category from "../component/Category";
import BhaskarSpecialData from "../smallComponentData/BhaskarSpecialData";

const BhaskarSpecial = () => {
  const [topnews, setTopnews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=96da10f763844fbfb2355aab1dc6e459"
    )
      .then((ref) => ref.json())
      .then((data) => setTopnews(data.articles[0]));
  }, []);

  return (
    <>
      <div>
        <div className="AllCompo-main-div">
          <div className="category-div">
            <Category />
          </div>

          <div className="main-container">
            <div className="main-second-container">
              <div className="main-third-container">
                <hr />
                <BhaskarSpecialData />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BhaskarSpecial;
