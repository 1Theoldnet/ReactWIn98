import './Button.scss'

export const Button = ({ height, width, text, onClick, type, disabled, background, color }) => {
    return <button style={{ height: height, width: width, background: `${background}`, color: `${color}` }} className={disabled ? 'disabled' : 'btn'} type={type} onClick={onClick} disabled={disabled}><h6>{text}</h6></button>
}