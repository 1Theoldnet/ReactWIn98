import Draggable from "react-draggable"
import { Button } from "../Button/Button"
import { IoClose } from "react-icons/io5"
import { useRef, useState } from "react"
import { HiArrowSmDown, HiArrowSmUp, HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi"
import './Window.scss'

export const Window = ({ height, width, onClick, title, isBtn, children, disabled, background, color, isWindow }) => {
    const [close, setClose] = useState(true)

    const [open, setOpen] = useState(true)

    const [count, setCount] = useState(1000)

    const con = useRef(null)

    return (
        <Draggable>
            <div className='window' style={{ height: height, width: width }} >
                <div className={isWindow ? "not-title" : "title"} style={{ background: `${background}`, color: `${color}` }}>
                    {!isWindow ? <h5>{title}</h5> : <div style={{  display: 'flex', alignItems: 'center' }}>
                    <Button type='button' width={5} height={12} text={close ? <HiArrowSmDown /> : <HiArrowSmUp />} onClick={() => {
                        setClose(!close)

                        if(close) return con.current.style.display = 'none'

                        con.current.style.display = 'block'
                    }} />

                    <Button type='button' width={5} height={12} text={open ? <HiOutlinePlusSm /> : <HiOutlineMinusSm />} onClick={() => {
                        setOpen(!open)

                        if(open) {
                            window.current.style.top = 0
                            window.current.style.right = 0
                            return
                        }

                        window.current.style.top = ''
                        window.current.style.right = ''
                    }} />
                    {isBtn && <Button type='button' disabled={disabled} width={5} height={12} text={<IoClose />} onClick={onClick} />}
                    </div>}
                    {!isWindow ? <div style={{  display: 'flex', alignItems: 'center' }}>
                    <Button type='button' width={5} height={12} text={close ? <HiArrowSmDown /> : <HiArrowSmUp />} onClick={() => {
                        setClose(!close)

                        if(close) return con.current.style.display = 'none'

                        con.current.style.display = 'block'
                    }} />

                    <Button type='button' width={5} height={12} text={open ? <HiOutlinePlusSm /> : <HiOutlineMinusSm />} onClick={() => {
                        setOpen(!open)

                        if(open) {
                            window.current.style.top = 0
                            window.current.style.right = 0
                            return
                        }

                        window.current.style.top = ''
                        window.current.style.right = ''
                    }} />
                    {isBtn && <Button type='button' disabled={disabled} width={5} height={12} text={<IoClose />} onClick={onClick} />}
                    </div> : <h5>{title}</h5>}
                </div>
                <div className="content" ref={con}>{children}</div>
            </div>
        </Draggable>
    )
}