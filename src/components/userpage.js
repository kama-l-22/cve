import React from "react";
import searchicon from "../asset/icons8-search-48.png";
import DataTableuser from "./datatable";
const dummydata = [
  { CVE: "49857- thsi can be osme text", status: "fixed", Assigne:"kamal", one:"one",Two:'two',Enough:'final'},
  { CVE: "49857- thsi can be osme text", status: "fixed", Assigne:"kamal", one:"one",Two:'two',Enough:'final'},
  { CVE: "49857- thsi can be osme text", status: "fixed", Assigne:"kamal", one:"one",Two:'two',Enough:'final'},
  { CVE: "49857- thsi can be osme text", status: "fixed", Assigne:"kamal", one:"one",Two:'two',Enough:'final'},
  { CVE: "49857- thsi can be osme text", status: "fixed", Assigne:"kamal", one:"one",Two:'two',Enough:'final'},
  { CVE: "49857- thsi can be osme text", status: "fixed", Assigne:"kamal", one:"one",Two:'two',Enough:'final'},
  { CVE: "49857- thsi can be osme text", status: "fixed", Assigne:"kamal", one:"one",Two:'two',Enough:'final'},
  { CVE: "49857- thsi can be osme text", status: "fixed", Assigne:"kamal", one:"one",Two:'two',Enough:'final'},
  { CVE: "49857- thsi can be osme text", status: "fixed", Assigne:"kamal", one:"one",Two:'two',Enough:'final'},
  { CVE: "49857- thsi can be osme text", status: "fixed", Assigne:"kamal", one:"one",Two:'two',Enough:'final'},
  { CVE: "49857- thsi can be osme text", status: "fixed", Assigne:"kamal", one:"one",Two:'two',Enough:'final'},

];

const CVETable = () => {
  return <div className="cveTabel"></div>;
};

const Filtetnav = () => {
  return (
    <div className="filternav">
      <div className="search">
        <input className="input" placeholder="Put Ur Search..."></input>
        <div className="searchicon">
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
      <DataTableuser data={dummydata} />
    </div>
  );
}
