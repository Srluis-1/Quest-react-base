import './button.css'

const Button = (label) => {
    const showLabel = ()=>{
        alert(`Foi 👍: ${label}`)
    }    
    
        return (
            <button className='btn' onClick={showLabel}></button>
        )
    }

    export default Button
