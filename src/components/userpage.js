import React from "react";
import searchicon from "../asset/icons8-search-48.png";
const dummydata = [{ CVE: "49857", status: "fixed" }];

const CVETable = ()=>{return(
    <div className="cveTabel"></div>
)}

const Filtetnav = () => {
  return (
    <div className="filternav">
      <div className="search">
        <input className="input" placeholder="Put Ur Search..."></input>
        <div className='searchicon'>
          <img src={searchicon} alt="search icon" />
        </div>
      </div>
      <div className="otherfilter"></div>
    </div>
  );
};
export default function Userpage() {
  return (
    <div className="userpage">
      <Filtetnav />
      
    </div>
  );
}
