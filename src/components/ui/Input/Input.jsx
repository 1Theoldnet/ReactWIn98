import './Input.scss'

export const Input = ({ width, height, type, disabled, value, onChange, placeholder }) => {
    return <input width={width} height={height} className={disabled ? 'input-disabled' : 'input'} type={type} disabled={disabled} value={value} onChange={onChange} placeholder={placeholder} />
}