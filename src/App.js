import React from "react";
import Navbar from "./navbar/Navbar";
import './index.css';
import AllCompo from "./component/AllCompo";
import Topnews from "./categoryee/Topnews";
import Worldcup from "./categoryee/Worldcup";
import DBOrijinal from "./categoryee/BhaskarOrijinal";
import BhaskarSpecial from "./categoryee/BaskarSpecial";
import Bollywood from "./categoryee/Bollywood";
import Women from "./categoryee/Women";
import Country from "./categoryee/Country";
import Abroad from "./categoryee/Abroad";
import Business from "./categoryee/Business";
import Career from "./categoryee/Career";
import Tech from "./categoryee/Tech";
import Sports from "./categoryee/Sports";
import Science from "./categoryee/Science";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Gallery from "./navbar/Galleryy/Gallery";
import Search from "./navbar/Search/Search";
import Webstory from "./navbar/webstories/Webstory";

function App() {
  return (
    <>
     <br/><br/><br /><br />



      <Router>
        <Navbar />
   
            <Routes>
                <Route path="/gallery" element={<Gallery />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/webstory" element={<Webstory />}></Route>

                <Route index element={ <AllCompo />}></Route>
                <Route path="/topnews" element={<Topnews />}></Route>
                <Route path="/bhaskarspecial" element={<BhaskarSpecial />}></Route>
                <Route path="/Worldcup" element={<Worldcup />}></Route>
                <Route path="/dborijinal" element={<DBOrijinal />}></Route>
                <Route path="/bollywood" element={<Bollywood />}></Route>
                <Route path="/women" element={<Women />}></Route>
                <Route path="/country" element={<Country />}></Route>
                <Route path="/abroad" element={<Abroad />}></Route>
                <Route path="/business" element={<Business />}></Route>
                <Route path="/career" element={<Career />}></Route>
                <Route path="/tech" element={<Tech />}></Route>
                <Route path="/sports" element={<Sports />}></Route>
                <Route path="/science" element={<Science />}></Route>
                <Route path="/*" element={ <AllCompo /> }></Route>
            </Routes>
                 
      </Router>

     
      

    </>
  )
}

export default App;
