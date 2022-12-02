import React  from 'react'
import './ProgressBar.css'


function ProgressBar({counter , length}) {
    let progressStyle={
        transition: '0.5s',
        height: '100%',
        backgroundColor: 'green',
        borderRadius: '10px',
        width: String(counter / length * 100 ) + '%'
    }


  return (
<div className="progressBar">
    <div style={progressStyle}></div>
</div>
  )
}

export default ProgressBar

