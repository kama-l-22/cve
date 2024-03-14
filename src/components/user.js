import React from 'react'
import { useNavigate } from "react-router-dom";
export default function User({name}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/userpage');
  }
  return (
    <div className='user'>
        <div className='name'>
            {name}
        </div>
        <button className='CommonButton' onClick={handleClick}>
            Continue
        </button>
    </div>
  )
}
