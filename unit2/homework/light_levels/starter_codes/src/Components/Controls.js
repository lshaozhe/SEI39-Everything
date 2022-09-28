import React from 'react'

function Controls(props) {

  const handleClick = (button) => {
    console.log('Controls - handleClick - button', button)
  }

  const lightButtons = props.controls.map( (d,i) => {
    return <button 
      key={i}
      onClick={() => handleClick(d)}
    >{d}</button>
  })

  return (
    <>
      <div className="controls">
      {lightButtons}
    </div>

   </>
  )
}

export default Controls