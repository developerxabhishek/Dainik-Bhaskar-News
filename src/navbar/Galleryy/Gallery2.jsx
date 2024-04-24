// import React, { useEffect, useState } from "react";
// import "./Gallery.css";
// import { Link } from "react-router-dom";


// const Gallery2 = () => {

//     const [gallery2, setGallery2] = useState([]);


//     useEffect(() => {
//         fetch(
//             "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=96da10f763844fbfb2355aab1dc6e459"
//         )
//             .then((response) => response.json())
//             .then((data) => setGallery2(data.articles));
//     }, []);


//     return (
//         <>  
           
//                             <div className="Gallery-main-div">

//                          {/* <div className="Top-news-title"> <h1>Top News</h1> </div> */}

//                 <div className="Gallery-second-div">
                   


//                     {gallery2.map((article2) => (



//                         <div className="slider">
//                             <div className="images">

//                                 <div className="gallery-main-img">
                                    
//                                 <Link to="/bhaskarspecial" style={{textDecoration:"none"}}> <img src={article2.urlToImage} width="300px" height="200px" style={{borderRadius:"5px", boxShadow:"1px 5px 5px 3px black"}} alt="img"  />
//                                   <div className="gallery-img-title"><p style={{width:"95%",margin:"auto",textAlign:"center",backgroundColor:"#2c28283e"}} ><b style={{backgroundColor:"#2c282887"}}>{article2.title.slice(0,70)+"..."}</b></p></div> </Link>

//                                 </div>

//                             </div>
//                         </div>


//                     ))}
//                 </div>
//             </div>



//         </>
//     );
// };

// export default Gallery2;

//                               business

import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { Link } from "react-router-dom";


const Gallery2 = () => {

    const [gallerys, setGallerys] = useState([]);


    useEffect(() => {
        fetch(
            "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=96da10f763844fbfb2355aab1dc6e459"
        )
            .then((response) => response.json())
            .then((data) => setGallerys(data.articles));
    }, []);


   
    return (
        <>  
            <div className="Gallery-main-div">

                         {/* <div className="Top-news-title"> <h1>Top News</h1> </div> */}

                <div className="Gallery-second-div">
                   


                    {gallerys.map((article) => (



                        <div className="slider2">
                            <div className="images2">

                                <div className="gallery-main-img">
                                    
                                <Link to="/bhaskarspecial" style={{textDecoration:"none"}}> <img src={article.urlToImage} width="300px" height="200px" style={{borderRadius:"5px", boxShadow:"1px 5px 5px 3px black"}} alt="img" />
                                  <div className="gallery-img-title"><p style={{width:"95%",margin:"auto",textAlign:"center",backgroundColor:"#2c28283e"}} ><b style={{backgroundColor:"#2c282887"}}>{article.title.slice(0,70)+"..."}</b></p></div> </Link>

                                </div>

                            </div>
                        </div>


                    ))}


                    
                </div>
            </div>

                            

        </>
    );
};

export default Gallery2;
















