// import React from "react";
// import "./Search.css";
// import { Link } from "react-router-dom";


// const Search = () => {
//     return(<> 
    
//         <div>
//             <div className="search-main-div">

//                 <div className="search-second-div">

//                     <div className="search-input-text">
//                             <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="img" width="30px" height="30px" className="search-img-icon" /> 
//                             <input type="text" placeholder="Search Your Intrest" className="input-div" /> 
//                     </div>

//                         <hr />
                   
//                    <div className="button-text">

//                         <ul>
//                             <Link to="/topnews" style={{textDecoration:"none"}}> <li><button className="buttonn-li">Top News</button></li> </Link>
//                             <Link to="/bhaskarspecial" style={{textDecoration:"none"}}> <li><button className="buttonn-li">Bhaskar Special</button></li> </Link>
//                             <Link to="/bollywood" style={{textDecoration:"none"}}>  <li><button className="buttonn-li">Boolywood</button></li> </Link>
//                             <Link to="/worldcup" style={{textDecoration:"none"}}>  <li><button className="buttonn-li">World Cup</button></li> </Link> 
//                             <Link to="/business" style={{textDecoration:"none"}}>  <li><button className="buttonn-li">Bussiness</button></li> </Link>
//                         </ul>

//                         <ul>
//                             <Link to="/women" style={{textDecoration:"none"}}><li><button className="buttonn-li">Women</button></li> </Link>
//                             <Link to="/country" style={{textDecoration:"none"}}>  <li><button className="buttonn-li">Country</button></li> </Link>
//                             <Link to="/abroad" style={{textDecoration:"none"}}>  <li><button className="buttonn-li">Abroad</button></li> </Link>
//                             <Link to="/business" style={{textDecoration:"none"}}> <li><button className="buttonn-li">Bussiness</button></li> </Link>
//                             <Link to="/sports" style={{textDecoration:"none"}}>  <li><button className="buttonn-li">Sports</button></li> </Link>
//                             <Link to="/worldcup" style={{textDecoration:"none"}}>  <li><button className="buttonn-li">World Cup</button></li> </Link>
//                         </ul>

//                         <ul>
//                             <Link to="/tech" style={{textDecoration:"none"}}>  <li><button className="buttonn-li">Tech</button></li>  </Link>
//                             <Link to="/tech" style={{textDecoration:"none"}}> <li><button className="buttonn-li">Auto</button></li> </Link>
//                             <Link to="/bhaskarspecial" style={{textDecoration:"none"}}> <li><button className="buttonn-li">Bhaskar Special</button></li> </Link>
//                             <Link to="/sports" style={{textDecoration:"none"}}>  <li><button className="buttonn-li">Sports</button></li> </Link>
//                             <Link to="/bhaskarspecial" style={{textDecoration:"none"}}> <li><button className="buttonn-li">Bhaskar Special</button></li> </Link>
//                             <Link to="/worldcup" style={{textDecoration:"none"}}><li><button className="buttonn-li">World Cup</button></li> </Link>
//                         </ul>

//                         <ul>
//                           <Link to="/science" style={{textDecoration:"none"}}>  <li><button className="buttonn-li">Science</button></li> </Link>
//                           <Link to="/career" style={{textDecoration:"none"}}>  <li><button className="buttonn-li">Career</button></li> </Link>
//                           <Link to="/dborijinal" style={{textDecoration:"none"}}> <li><button className="buttonn-li">DB Orijinal</button></li> </Link>
//                           <Link to="/tech" style={{textDecoration:"none"}}> <li><button className="buttonn-li">Auto</button></li> </Link>
//                           <Link to="/dborijinal" style={{textDecoration:"none"}}>  <li><button className="buttonn-li">DB Orijinal</button></li> </Link>
//                           <Link to="/business" style={{textDecoration:"none"}}> <li><button className="buttonn-li">Bussiness</button></li> </Link>
//                         </ul>

//                    </div>
                                
//                 </div>  

//             </div>
//         </div>

//      </>)
// }

// export default Search;





import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = () => {


    const [searchQuery, setSearchQuery] = useState(""); 

    const handleInputChange = (e) => { 
        setSearchQuery(e.target.value);
    };

    const content = [

        { label: "Top News", link: "/topnews" },
        { label: "Bhaskar Special", link: "/bhaskarspecial" },
        { label: "Tech", link: "/tech" },
        { label: "Bollywood", link: "/bollywood" },
        { label: "sports", link: "/sports" },
        { label: "science", link: "/science" },
 
        // Add more content items as needed
    ];

    const filteredContent = content.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );



    return (
        <>
            <div>
                <div className="search-main-div">
                    <div className="search-second-div">

                        <div className="search-input-text">
                            <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="img" width="30px" height="30px" className="search-img-icon" /> 
                            <input 
                                type="text" 
                                placeholder="Search Your Interest" 
                                className="input-div" 
                                value={searchQuery} 
                                onChange={handleInputChange} 
                            />
                        </div>

                        <hr />

                        <div className="button-text">

                            <ul>

                               {filteredContent.map((item, index) => (
                                    <Link to={item.link} style={{textDecoration: "none"}} key={index}>
                                        <li><button className="buttonn-li">{item.label}</button></li>
                                    </Link>
                                ))} 
                                
                                 {/* <li>  {filteredContent.map((item, index) => (
                                    <Link to={item.link} style={{textDecoration: "none"}} key={index}>
                                        <li><button className="buttonn-li">{item.label}</button></li>
                                    </Link>
                                ))} </li>

                                    <li>  {filteredContent.map((item, index) => (
                                    <Link to={item.link} style={{textDecoration: "none"}} key={index}>
                                        <li><button className="buttonn-li">{item.label}</button></li>
                                    </Link>
                                ))} </li>

                                    <li>  {filteredContent.map((item, index) => (
                                    <Link to={item.link} style={{textDecoration: "none"}} key={index}>
                                        <li><button className="buttonn-li">{item.label}</button></li>
                                    </Link>
                                ))} </li> */}

                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;












// import React, { useState } from "react";
// import "./Search.css";
// import { Link } from "react-router-dom";

// const Search = () => {

//     const [searchQuery, setSearchQuery] = useState(""); 

//     const handleInputChange = (e) => { 
//         setSearchQuery(e.target.value);
//     };

//     const content = [

//         { label: "Top News", link: "/topnews" },
//         { label: "Bhaskar Special", link: "/bhaskarspecial" },
//         { label: "Bollywood", link: "/bollywood" },
      
//         // Add more content items as needed
//     ];

//     const filteredContent = [];

//     for (let i = 0; i < content.length; i++) {

//         const item = content[i];
//         if (item.label.toLowerCase().includes(searchQuery.toLowerCase())) {
//             filteredContent.push(
//                 <Link to={item.link} style={{textDecoration: "none"}} key={i}>
//                     <li><button className="buttonn-li">{item.label}</button></li>
//                 </Link>
//             );
//         }
//     }

//     return (
//         <>
//             <div>
//                 <div className="search-main-div">
//                     <div className="search-second-div">
//                         <div className="search-input-text">
//                             <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="img" width="30px" height="30px" className="search-img-icon" /> 
//                             <input 
//                                 type="text" 
//                                 placeholder="Search Your Interest" 
//                                 className="input-div" 
//                                 value={searchQuery} 
//                                 onChange={handleInputChange} 
//                             />
//                         </div>
//                         <hr />
//                         <div className="button-text">

//                             <ul>
//                                 <li>{filteredContent}</li>
//                             </ul>


//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Search;
