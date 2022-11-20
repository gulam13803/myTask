import React from 'react'

const Main = () => {
  return (
    <div className='main'>
    <div className="mainContent">
        <h4>INCLUSIVE DEVLEOPMENT</h4>
        
        <h1 style={{width : "160px" }}>  What is Inclusion?</h1>
        <p style={{width : "360px"}}>
        Every person is essential to the transformation of their own societies, and yet many are still denied full access to legal protections, social and economic participation and essential services. Social inclusion in health means accountably, affordably, and reliably expanding health care access to the poor and most vulnerable, and is essential to ensure the human right to health and achieve sustainable development.
        </p>
        <button>LEARN MORE</button>
    </div>
    <div>
    <h4 style={{marginLeft : "400px"}}>NEVIGATE TO RESOURCES</h4>
    <img src="./img/MainImg.png" alt="" id='mainImg'/>
    </div>
    </div>
  )
}

export default Main
