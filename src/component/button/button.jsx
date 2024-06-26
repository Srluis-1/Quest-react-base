import './button.css'

const Button = ({label}) => {
    const showLabel = ()=>{
        alert(`A label desse botão é: ${'Olá 👍🤘'}`)
    }    
    
        return (
            <button className='btn' onClick={showLabel}>Clique</button>
        )
    }

    export default Button
