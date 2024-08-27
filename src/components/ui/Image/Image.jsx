import './Image.scss'

export const Image = ({ src, width, height }) => {
    return <img className='img' src={src} width={width} height={height} />
}