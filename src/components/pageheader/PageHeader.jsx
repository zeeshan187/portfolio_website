import React from 'react'
import './pageheader.css'
const PageHeader = (props) => {
  return (
    <>
    <div className="page_header">
        <div className="page_head_heading">
                {props.heading}
        </div>
        {props.icon}
    </div>
    </>
  )
}

export default PageHeader