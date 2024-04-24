
import React, { useEffect, useState } from "react";

const BollywoodData = () => {


    const [smallcomponent, setSmallcomponent] = useState([]);

    useEffect( () => {

        fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=96da10f763844fbfb2355aab1dc6e459")
        .then( res => res.json() )
        .then( data => setSmallcomponent(data.articles) )

    }, [])



    return ( <> 
                    {smallcomponent.map( news => ( 

                <div>
                        <div className="small-component-third-head">
                        <a className="third-head-title" href="#"><h3><span style={{color:"rgb(244, 67, 54)"}}>{news.title.slice(0,22)}:</span> 
                        {news.description && news.description.length > 1 ? news.description.slice(0,80)+"...." : ''} </h3></a>
                        <div className="small-component-third-photo" ><img src={news.urlToImage} width="134px" height="98px" /></div>
                        </div>

                        <br />

                        <div className="MainContainer-third-pic">

                        <div style={{display:"flex"}}>

                        <a style={{color:"#808080",textDecoration:"none"}} href="#"><b><span> Read_more</span></b></a>


                        <div className="container-div-ul">
                        <ul>
                            <li><button className="social-icon"><img style={{borderRadius:"30px"}} src="https://logodix.com/logo/1238026.png" width="30px" height="30px" /></button></li>
                            <li><button className="social-icon"><img style={{borderRadius:"30px"}} src="https://www.pngitem.com/pimgs/m/204-2040928_logo-twitter-circle-grey-current-twitter-logo-png.png" width="30px" height="30px" /></button></li>
                            <li><button className="social-icon"><img style={{borderRadius:"30px"}} src="https://cdn.icon-icons.com/icons2/2550/PNG/512/link_icon_152591.png" width="30px" height="30px" /></button></li>
                        </ul>
                        </div>

                        </div>

                        <hr />

                        </div>

                </div>
                       
                     ) )}
                           

     </> )
}

export default BollywoodData;