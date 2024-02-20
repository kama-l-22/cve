import React from "react";

const Box = ({ width, height, des, focus,className }) => {
  return (
    <div className="box" style={{ width: width, height: height }}>
      <div className={`focus ${className}`}>{focus}</div>
      <div className={`des`}>{des}</div>
    </div>
  );
};

export default function Individualpage() {
  return (
    <div className="userBox">
      <div className="usersub">
        <Box width={400} height={230} des={"Total CVE Fixed"} focus={234} className={'big'} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Box width={290} height={100} des={"Pr Raised"} focus={23} className={'small'} />
          <Box width={290} height={100} des={"Assigend"} focus={34} className={'small'} />
        </div>
        <Box width={770} height={70}  focus={"Currently Viewing The Details of User: Kamaleshvaran"}/>
      </div>
      <div className="link">View All issue</div>
    </div>
  );
}
