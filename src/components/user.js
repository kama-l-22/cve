import React from 'react'

export default function User({name}) {
  return (
    <div className='user'>
        <div className='name'>
            {name}
        </div>
        <button className='CommonButton'>
            Continue
        </button>
    </div>
  )
}
