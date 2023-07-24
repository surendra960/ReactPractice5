// import React from 'react'

function User(props) {
    const data = "Anil Sidhu";
  return (
    <div className='box'>
        <h1>User Name</h1>
        <button className='btn' onClick={()=>props.alert(data)}>Click Me</button>
    </div>
  )
}

export default User