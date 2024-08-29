import { Button } from "../Button/Button"
import { IoClose } from "react-icons/io5"
import { useRef, useState } from "react"
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi"
import './Window.scss'

export const Window = ({ showWindow, height, width, onClick, title, isBtn, children, disabled, background, color, isWindow }) => {
    const [close, setClose] = useState(true)
    
    const con = useRef(null)

    const window = useRef(null)

    const [isDragging, setIsDragging] = useState(false);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    return (
        <div className='window' style={{ height: height, width: width, zIndex: `${showWindow ? -100 : 100}` }} ref={window}
            onMouseDown={e => {
                setIsDragging(true);
                setOffsetX(e.nativeEvent.offsetX);
                setOffsetY(e.nativeEvent.offsetY);
            }}

            onMouseMove={e => {
                if (isDragging) {
                    window.current.style.left = `${e.clientX - offsetX}px`;
                    window.current.style.top = `${e.clientY - offsetY}px`;
                }
            }}

            onMouseUp={() => setIsDragging(false)}
        >
            <div className="title" style={{ background: `${background}`, color: `${color}` }}>
                {!isWindow ? <><h5>{title}</h5><div style={{  display: 'flex', alignItems: 'center' }}>
                    <Button type='button' width={5} height={12} text={close ? <HiArrowSmDown /> : <HiArrowSmUp />} onClick={() => {
                        setClose(!close)

                        if(close) return con.current.style.height = '10px'

                        con.current.style.display = 'block'
                    }} />

                    {isBtn && <Button type='button' disabled={disabled} width={5} height={12} text={<IoClose />} onClick={onClick} />}
                </div></> : <><div style={{  display: 'flex', alignItems: 'center' }}>
                    <Button type='button' width={5} height={12} text={close ? <HiArrowSmDown /> : <HiArrowSmUp />} onClick={() => {
                        setClose(!close)

                        if(close) return con.current.style.display = 'none'

                        con.current.style.display = 'block'
                    }} />

                    {isBtn && <Button type='button' disabled={disabled} width={5} height={12} text={<IoClose />} onClick={onClick} />}
                </div><h5>{title}</h5></>}
            </div>
            <div className="content" ref={con}>{children}</div>
        </div>
    )
}












