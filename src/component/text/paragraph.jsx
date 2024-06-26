import './paragraph.css'
import React from 'react'


const Paragraph = ({children= 'children', color=' #6d6e6e', transform='uppercase'}) => {
    return (
        <div>
            <p className="text" style={{ color, transform: transform}}>{children}</p>
        </div>
    )

}

//({children= 'children', color='blue', transform='uppercase'}) cabaei pesquisando no chat gpt um erro que não saida do console, e em futuras verçoes do reac o suporte ao defaultProps sera removido 

export default Paragraph
