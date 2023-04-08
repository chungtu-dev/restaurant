import React from 'react'

const Helmet = (props) => {
    const title = 'Food ordering app - ' + props.title
  return (
    <div className="main-content" style={{width: '100%', backgroundColor:'rgb(37 37 37)'}}>{props.children}</div>
  )
}

export default Helmet