import React, { useEffect, useState } from "react";

const MainContainer = () => {
    const [container, setContainer] = useState(null);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=96da10f763844fbfb2355aab1dc6e459')
        .then(ref => ref.json())
        .then(detas => setContainer(detas.articles[0]))
        
    }, []);

    

    return ( <> 
    
     <div>


     {container && ( <div> <hr />
                <h3 className="MainContainer-title">
                    <b><span style={{color: "#e16e3e"}}>{container.title}:</span> </b>
                </h3>
           

            <img src={container.urlToImage} width="600px" height="450px" alt="img" />
                    <br/><br/>
                    </div>
                    )}

            <div className="MainContainer-third-pic">


                <div style={{display:"flex"}}>

                       <a style={{color:"#808080",textDecoration:"none"}} href="#"><b><span>Top_News</span></b></a>


                    <div className="container-div-ul">
                        <ul>
                            <li><a href="https://www.facebook.com"><button className="social-icon"><img style={{borderRadius:"30px"}} src="https://logodix.com/logo/1238026.png" width="30px" height="30px" alt="img"/></button></a></li>
                            <li><a href="https://twitter.com"><button className="social-icon"><img style={{borderRadius:"30px"}} src="https://www.pngitem.com/pimgs/m/204-2040928_logo-twitter-circle-grey-current-twitter-logo-png.png" width="30px" height="30px" alt="img" /></button></a></li>
                            <li><button className="social-icon"><img style={{borderRadius:"30px"}} src="https://cdn.icon-icons.com/icons2/2550/PNG/512/link_icon_152591.png" width="30px" height="30px" alt="img" /></button></li>
                        </ul>
                    </div>
              
                </div>

            </div>

        </div>

       




    
     </> )
}
export default MainContainer;



