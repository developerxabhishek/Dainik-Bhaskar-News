import React from "react";
import { Link } from "react-router-dom";


const Category = () => {

    return (  <>  

  <div className="category-div">
    <div className="category-ul-div">
    
        <ul>
            <Link to="/topnews" style={{textDecoration:"none"}}> <li>  <span> <a > <img className="category-img"  src="https://www.bhaskar.com/assets/images/top-news.a4108012.svg"  width="23px" height="23px" alt="img"  /> <span>Top News</span> </a> </span>  </li> </Link> 
            <Link to="/bhaskarspecial" style={{textDecoration:"none"}}> <li> <span> <a > <img className="category-img" src="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2023/07/24/bhaskar-khaas_1690206370.png"  width="23px" height="23px" alt="img"/> Bhaskar Special</a> </span></li> </Link>
            <Link to="/bollywood" style={{textDecoration:"none"}}>   <li> <span> <a> <img className="category-img" src="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icdboriginals1_1585398537.png"  width="23px" height="23px" alt="img"/> Bollywood </a> </span></li> </Link>
            <Link to="/worldcup" style={{textDecoration:"none"}}>  <li>  <span> <a> <img className="category-img" src="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2021/11/16/ipl15989555741599046844115991331121634106872_1637060692.png"  width="23px" height="23px" alt="img"/> Cricket </a> </span> </li> </Link> 
            <Link to="/dborijinal" style={{textDecoration:"none"}}> <li>  <span> <a> <img className="category-img" src="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icentertainment1_1585397701.png"  width="23px" height="23px" alt="img"/> DB Original  </a> </span> </li> </Link> 
            <Link to="/women" style={{textDecoration:"none"}}>   <li> <span> <a> <img className="category-img" src="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icwomen1_1585398587.png"  width="23px" height="23px" alt="img"/> Women</a> </span></li> </Link>
            <Link to="/country" style={{textDecoration:"none"}}>  <li> <span> <a> <img className="category-img" src="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icdesh1_1585397553.png"  width="23px" height="23px" alt="img"/> Country</a> </span></li> </Link>
            <Link to="/abroad" style={{textDecoration:"none"}}>    <li> <span> <a> <img className="category-img" src="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icvidesh1_1585398719.png"  width="23px" height="23px" alt="img"/> Abroad</a> </span></li> </Link>
            <Link to="/business" style={{textDecoration:"none"}}>    <li> <span> <a> <img className="category-img" src="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icmoneybhaskar15853186191_1585398499.png"  width="23px" height="23px" alt="img"/> Business</a> </span></li> </Link>
            <Link to="/career" style={{textDecoration:"none"}}>    <li> <span> <a> <img className="category-img" src="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icjobsandeducation1_1585398629.png"  width="23px" height="23px" alt="img"/> Career</a> </span></li> </Link>
            <Link to="/tech" style={{textDecoration:"none"}}>    <li> <span> <a> <img className="category-img" src="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/ictechandauto1_1585398692.png"  width="23px" height="23px" alt="img"/> Tech - auto</a> </span></li> </Link>
            <Link to="/sports" style={{textDecoration:"none"}}>    <li> <span> <a> <img className="category-img" src="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/03/28/icsports1_1585397795.png" width="23px" height="23px" alt="img"/> Sports</a> </span></li> </Link>
            <Link to="/science" style={{textDecoration:"none"}}>    <li> <span> <a> <img className="category-img" src="https://images.bhaskarassets.com/webp/thumb/128x0/web2images/521/2020/10/27/life-science1_1603794515.png"  width="23px" height="23px" alt="img"/> Science</a> </span></li> </Link>
        </ul>

    </div>    
    </div>

        <br/>

      
    
     </>  )
    }
export default Category;
