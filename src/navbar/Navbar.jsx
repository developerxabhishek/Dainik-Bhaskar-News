import React from "react";
import "./Navbar.css"
import dinikBhaskarLogo from "./dinikBhaskarLogo.png";
import HomeIcon from '@material-ui/icons/Home';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Switch from '@material-ui/core/Switch';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [isVisible, setIsVisible] = useState(false);

  const [theme, setTheme] = useState("light-theme");  // dark mode state 👍



  const handleClick = () => {
   setIsVisible(prevState => !prevState); // lofin din toggle prograam
   }



  const toggleTheme = () => {             // dark mode programm

    if(theme === "dark-theme"){
       setTheme("light-theme")
    }
    else{
      setTheme("dark-theme")
    }

  }


  useEffect( () => {
    document.body.className = theme;
  }, [theme])
  


    return(<> 


    
    <div className="navbar-head">

     <div className="navbar-head2" style={{backgroundColor:"white"}}>


        <div style={{backgroundColor:"white"}}>
        <Link to="/" style={{textDecoration:"none"}}><img className="responsive-logo" style={{backgroundColor:"white",marginTop:"5px"}} src={dinikBhaskarLogo} width="144px" height="50px" alt="img"/></Link>
        </div>

        <div className="navbar-ul">


         <ul >    
            <Link to="/" style={{textDecoration:"none"}}> <span className="mobile-span-none"> <li style={{display:"flex"}}> <HomeIcon className="homeIcon" style={{ color: 'black',backgroundColor:"white", marginTop:"3px"}} />  <a>  <span className="li-span">Home</span> </a> </li> </span> </Link>

            <Link to="/gallery" style={{textDecoration:"none"}}> <span className="mobile-span-none"> <li style={{display:"flex"}}> <PlayCircleOutlineIcon className="homeIcon" style={{ color: 'black', backgroundColor:"white", marginTop:"3px" }}/> <a href="#">   <span className="li-span">Gallery</span>   </a></li> </span> </Link>

            <Link to="/search" style={{textDecoration:"none"}}> <li style={{display:"flex"}}> <span className="mobile-icon1"> <SearchIcon className="homeIcon" style={{ color: 'black', backgroundColor:"white", marginTop:"3px" }}/>  </span>   <a href="#">   <span className="li-span">Search</span>   </a> </li> </Link>

            <span className="mobile-span-none">  <li><hr style={{height:"27px", width:"0.1px", color:"gray"}}/></li>  </span>

            <Link to="/webstory" style={{textDecoration:"none",backgroundColor:"white"}}> <li style={{display:"flex"}}> <span className="mobile-icon"> <img style={{backgroundColor:"white",marginTop:"3px"}} src="https://cdn-icons-png.flaticon.com/512/733/733474.png" width="24px" height="24px" alt="img" /> </span>  <a href="#">  <span className="li-span">Web-stories</span>  </a></li> </Link>

            <span className="mobile-span-none"> <li style={{display:"flex"}}> <img src="https://banner2.cleanpng.com/20180326/vvw/kisspng-computer-icons-newspaper-news-media-source-news-5ab99e2d93bf60.1641143115221140936052.jpg" width="24px" height="24px" alt="img" style={{marginTop:"3px"}} />  <a href="#"> <span className="li-span"> E-Paper</span>  </a></li> </span>

            <li style={{display:"flex"}}>  <a onClick={handleClick} href="#"> <span className="mobile-icon"> <img src="https://cdn-icons-png.flaticon.com/128/860/860784.png" width="25px" height="25px" style={{backgroundColor:"white"}} alt="img"/><KeyboardArrowDownIcon style={{ fontSize: 31, color: 'black', backgroundColor:"white" }}/> </span> </a>  </li>
         </ul>



    


         { isVisible && (  
          <div className="login-main-div">
             <div className="login-second-div">
                <div>
                   <ul>
                     <li style={{display:"flex"}}><a href="#" className="login-span" style={{display:"flex"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWXwl_HONi9kFuA9BtSCTEQqW-Bi_b7RKaQ&usqp=CAU" width="30px" height="30px" alt="img" /> &ensp; <span style={{fontSize:"15px",fontWeight:"900",marginLeft:"2px",color:"black"}}><b style={{backgroundColor:"white"}}>Profile</b></span> </a> <span className="login-span2">  <a href="#"> <button className="login-button">Log-in</button> </a> </span>  </li>
                               <hr style={{width:"270px",marginLeft:"-45px"}} />
                     <li> <span className="login-span" ><b style={{backgroundColor:"white"}}>Dark Mode</b></span> <span className="login-span2" style={{backgroundColor:"red"}} > <Switch style={{backgroundColor:"black", height:"2px",width:"4px",marginTop:"8px",marginLeft:"5px"}}  onChange={toggleTheme} {...label} defaultChecked  /> </span> </li>
                               <hr style={{width:"270px",marginLeft:"-45px"}} />
                     <li><span className="login-span"><b style={{backgroundColor:"white"}}> FAQs </b></span> <span className="login-span2"> <a href="#" > <LiveHelpOutlinedIcon  style={{backgroundColor:"white"}}/>  </a> </span>  </li>
                               <hr style={{width:"270px",marginLeft:"-45px"}} />
                     <li><span  className="login-span"><b style={{backgroundColor:"white"}}>Feedback</b></span> <span className="login-span2"> <a href="#"> <EmailOutlinedIcon  style={{backgroundColor:"white"}}/> </a> </span> </li>
                   </ul>
                </div>
             </div>
          </div>
            ) };

       
        
        </div>

     </div>
    </div>





     </>)
}

export default Navbar;