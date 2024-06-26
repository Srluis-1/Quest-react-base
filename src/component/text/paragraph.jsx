import './paragraph.css'
import React from 'react'


const Paragraph = (children, color, transform) => {
    return (
        <p className="text" style={{color, transform: transform}}>children</p>
    )

}
Paragraph.defaltProps ={
    color: "blue",
    transform : "uppercase"
}

export default Paragraph
