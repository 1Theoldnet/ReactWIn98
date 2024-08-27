import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { Window } from '../ui/Window/Window'
import { Button } from '../ui/Button/Button'
import { Input } from '../ui/Input/Input'
import { Image } from '../ui/Image/Image'
import { useEffect, useRef, useState } from 'react'
import { text as readme } from '../../main'
import { FaBold, FaHome, FaItalic, FaUsers } from 'react-icons/fa'
import { IoMdHelp } from "react-icons/io"
import { HiArrowLeftCircle } from "react-icons/hi2"
import { HiArrowRightCircle } from "react-icons/hi2"
import { CiUnlock } from 'react-icons/ci'
import { Loading } from '../Loading/Loading'
import './Desktop.scss'
import { colors } from '../../colors'
import { IoClose, IoHelp } from 'react-icons/io5'
import axios from 'axios'

export const Desktop = ({ setOpenMenu, explorer, setExplorer, help, setHelp, txt, setTxt, notepad, setNotepad, win, setWin, image, setImage, ie, setIE, setOpen, open, calc, setCalc, welcome, setWelcome, control, setControl, font, setFont, chat, setChat, user, setUser, letter, setLetter, command, setCommand, taskman, setTaskman }) => {
    useEffect(() => {
        const getMessages = async () => {
            try {
                await axios
                    .get('http://localhost:3000/api/message/get')
                    .then(res => setMessages(res.data))
            } catch (error) {
                console.error(error)
            }
        }

        const getUsers = async () => {
            try {
                await axios
                    .get('http://localhost:3000/api/user')
                    .then(res => setUsers(res.data))
            } catch (error) {
                console.error(error)
            }
        }

        getMessages()
        getUsers()
    }, [])

    const [window, setWindow] = useState(user?.isWindow)

    const [text, setText] = useState('PC')

    const [step, setStep] = useState(0)

    const [page, setPage] = useState(0)

    const [lock, setLock] = useState(false)

    const [about, setAbout] = useState(false)

    const [num, setNum] = useState('')

    const [run, setRun] = useState('')

    const [c, setC] = useState('')

    const [bg, setBg] = useState('')

    const [url, setUrl] = useState('http://666.com/')

    const [error, setError] = useState(false)

    const [errorA, setErrorA] = useState(false)

    const [errorIE, setErrorIE] = useState(false)

    const [errorRun, setErrorRun] = useState(false)

    const not = useRef(null)

    const [loading, setLoading] = useState(true)

    const [explorerAbout, setExplorerAbout] = useState(false)

    const [notepadAbout, setNotepadAbout] = useState(false)

    const load = () => setInterval(() => setLoading(false), 4000)

    const fun = () => {
        if(text === 'PC') {
            setStep(0)
        } else if(text === 'PC/C:') {
            setStep(1)
        } else if(text === 'PC/C:/My Documents') {
            setStep(4)
        } else if(text === 'PC/C:/Windows') {
            setStep(2)
        } else if(text === 'PC/C:/Windows/System32') {
            setStep(3)
        } else {
            setError(true)
        }
    }

    if(explorer) load()

    const [result, setResult] = useState('')
    const [firstNumber, setFirstNumber] = useState(null)
    const [oper, setOper] = useState('')

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    const operations = ['+', '-', '*', '/', 'C', '=']

    const [pageControl, setPageControl] = useState(0)

    const [inpColorWindow, setInpColorWindow] = useState('')
    const [inpBgWindow, setInpBgWindow] = useState('')

    const [inpColorButton, setInpColorButton] = useState('')
    const [inpBgButton, setInpBgButton] = useState('')

    const [inp, setInp] = useState('')

    const [titleDocument, setTitleDocument] = useState('')

    const [openDocument, setOpenDocument] = useState(false)

    const [commandText, setCommandText] = useState('')

    const [ct, setCT] = useState("C:/")

    const [document, setDocument] = useState(null)

    const [messages, setMessages] = useState([])

    const [message, setMessage] = useState('')

    const [search, setSearch] = useState('')

    const [name, setName] = useState(user?.name)

    const [password, setPassword] = useState(user?.password)

    const [p, setP] = useState(0)

    const [n, setN] = useState(null)

    const [l, setL] = useState(null)

    const [users, setUsers] = useState([])

    const [searchI, setSearchI] = useState('')

    const [t, setT] = useState('')

    const [h, setH] = useState(false)

    const [vid, setVid] = useState(false)

    const [windowButton, setWindowButton] = useState(false)

    const [q, setQ] = useState('')

    const [menu, setMenu] = useState(user?.isMenu)

    return (
        <div className="desktop" onClick={() => setOpenMenu(false)} style={{ background: `${user?.background}` }}>
            {taskman && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Taskman' isBtn onClick={() => setTaskman(false)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                    <Button text='Новая задача' onClick={() => setOpen(true)} />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ marginRight: 5 }}>Вид: </p>
                        <Button text={vid ? 'Стандарт' : 'Список'} onClick={() => setVid(!vid)} />
                    </div>
                </div>

                <div className={vid ? 'not-tasks' : 'tasks'}>
                    {explorer && <div className='task' onClick={() => setExplorer(false)}>
                        <img src="https://64.media.tumblr.com/145ba88ac8fe8889043d8a929607a58e/9bd9b9bbc752d2be-8c/s540x810/b48368228fd7effc48dac782474ae5b683b64db6.png" />
                        {vid && <p>Explorer</p>}
                    </div>}

                    {command && <div className='task' onClick={() => setCommand(false)}>
                        <img src="https://64.media.tumblr.com/97be78594f1e4d436f7bb370c7a6f686/fa69fb22c9d76ca2-60/s540x810/1ab18fa126787e9e10ca198e5302dbaea5d15f4c.png" />
                        {vid && <p>Command</p>}
                    </div>}

                    {control && <div className='task' onClick={() => setControl(false)}>
                        <img src="https://win98icons.alexmeub.com/icons/png/directory_control_panel_cool-4.png" />
                        {vid && <p>Control</p>}
                    </div>}

                    {letter && <div className='task' onClick={() => setLetter(false)}>
                        <img src="https://64.media.tumblr.com/28f7d41869ff8aec052777020eeb6242/3f276049d15c8c6e-91/s540x810/385b0d2b0f77ad276bbbdc640695b2b71a483d7a.png" />
                        {vid && <p>Почта</p>}
                    </div>}

                    {chat && <div className='task' onClick={() => setChat(false)}>
                        <img src="https://64.media.tumblr.com/ed74df4f311fb03716ecfd541736bab6/68ea07cdc3fbb503-fb/s540x810/1e9cc23bcb0739462b961f57ea3f5f1a5128a385.png" />
                        {vid && <p>Chat</p>}
                    </div>}

                    {help && <div className='task' onClick={() => setHelp(false)}>
                        <img src="https://res.cloudinary.com/penry/image/upload/v1474990254/help_book_small_ra0uhc.ico" />
                        {vid && <p>Help</p>}
                    </div>}

                    {txt && <div className='task' onClick={() => setTxt(false)}>
                        <img src="https://64.media.tumblr.com/18c2a365f1c29f9ac87483aa28bec32a/7278b44044d05aac-19/s540x810/b6652a087de2d49c1a45251d3b0ba18ea07cc965.png" />
                        {vid && <p>Readme</p>}
                    </div>}

                    {notepad && <div className='task' onClick={() => setNotepad(false)}>
                        <img src="https://64.media.tumblr.com/73f34eb6543708c5b237fd739b389a55/a76707adad47a36a-a6/s540x810/d5ca09678f2f10b2fa2f553a2c28a650fe3732b4.png" />
                        {vid && <p>Notepad</p>}
                    </div>}

                    {win && <div className='task' onClick={() => setWin(false)}>
                        <img src="https://64.media.tumblr.com/115e57a6dfcf00b6c4671c05094683a4/e0f6c415c66a9725-87/s540x810/35ed66e525c6b94402b93f93a832045cbf22bb74.png" />
                        {vid && <p>Winver</p>}
                    </div>}

                    {calc && <div className='task' onClick={() => setCalc(false)}>
                        <img src="https://64.media.tumblr.com/c8d12905363fffff08c37f8eca363590/2e42f87909d61a4f-81/s540x810/4c69d12663cfa490bdc6f7f07bd8ae881dcc58cf.png" />
                        {vid && <p>Calc</p>}
                    </div>}

                    {image && <div className='task' onClick={() => setImage(false)}>
                        <img src="https://64.media.tumblr.com/0bfe58dfae1d6f346e01e6511f1c6442/e0d6a4ae716e89a1-a9/s540x810/17dea01d51239ab276b7060b6b9b8b8440a5ad46.png" />
                        {vid && <p>Image</p>}
                    </div>}

                    {ie && <div className='task' onClick={() => setIE(false)}>
                        <img src="https://64.media.tumblr.com/78e5e1fb87d13924b0a4b410d131b930/c6cb2fd44af16922-23/s540x810/1afa8a3117c9b8643b207a66449e9a9f8317dd5e.png" />
                        {vid && <p>Internet</p>}
                    </div>}

                    {open && <div className='task' onClick={() => setOpen(false)}>
                        <img src="https://res.cloudinary.com/penry/image/upload/v1474990231/application_hourglass_small_yyhy5z.ico" />
                        {vid && <p>Выполнить</p>}
                    </div>}

                    {welcome && <div className='task' onClick={() => setWelcome(false)}>
                        <img src="https://64.media.tumblr.com/ed74df4f311fb03716ecfd541736bab6/68ea07cdc3fbb503-fb/s540x810/1e9cc23bcb0739462b961f57ea3f5f1a5128a385.png" />
                        {vid && <p>Welcome</p>}
                    </div>}
                </div>    
            </Window>}

            {letter && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Почта' isBtn onClick={() => { setLetter(false), setP(0) }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginBottom: 5 }}>
                    {p !== 0 ? <Button color={user?.colorButton} background={user?.bgButton} text={<GoArrowLeft />} onClick={() => { setP(0), setT(''), setN(null), setL(null) }} /> : <Button color={user?.colorButton} background={user?.bgButton} text={<GoArrowLeft />} disabled />}
                    <Button color={user?.colorButton} background={user?.bgButton} text={<FaHome />} onClick={() => setP(0)} />
                    <Button color={user?.colorButton} background={user?.bgButton} text={<FaUsers />} onClick={() => setP(1)} />
                    <Button color={user?.colorButton} background={user?.bgButton} text={<IoHelp />} onClick={() => setP(3)} />
                </div>

                {p === 0 && <div>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr', gap: 3, marginTop: 3, height: 110, overflow: 'auto' }}>
                        {user?.letters?.map((el, i) => <div key={i} className='letter' onClick={() => { setP(4), setL(i) }}>
                            <p>Письмо: {i}</p>
                            <p>От кого: {el.username}</p>
                        </div>)}
                    </div>
                </div>}

                {p === 1 && <div>
                    <Input type='search' placeholder='Поиск по имени' value={searchI} onChange={e => setSearchI(e.target.value)} />
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr', gap: 3, marginTop: 3, height: 110, overflow: 'auto' }}>
                        {users?.filter(el => el.name.toLowerCase().includes(searchI.toLowerCase())).map((el, i) => <div key={i} className='btn' onClick={() => { setP(2), setN(i) }}>
                            <img width={25} src="https://64.media.tumblr.com/3a0a6a2aed96741709ab8717e3318818/76c94287993d6a1d-61/s540x810/750ed8a95cdc700e25693c357aadf23e525d7773.png" />
                        </div>)}
                    </div>
                </div>}

                {p === 2 && <div>
                    <textarea style={{ width: 150, height: 150, resize: 'none' }} placeholder='Text' value={t} onChange={e => setT(e.target.value)}></textarea>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 3 }}>
                        <Button color={user?.colorButton} background={user?.bgButton} text='Send' disabled={t !== '' ? false : true} width={150} onClick={async () => {
                            try {
                                if(users[n].id === user?.id) {
                                    alert('Вы не можете отправить письмо себе!')
                                    setP(1)
                                    setT('')
                                    return
                                }

                                const dto = {
                                    username: user?.name,
                                    text: t,
                                    user: users[n].id,
                                }

                                await axios
                                    .post('http://localhost:3000/api/letter', dto)
                                    .then(() => alert(`Вы успешно отправили письмо ${users[n].name}`))
                            } catch (error) {
                                console.error(error)
                            }
                        }} />
                    </div>
                </div>}

                {p === 3 && <div style={{ textAlign: 'center' }}>
                    <img width={100} src='https://64.media.tumblr.com/28f7d41869ff8aec052777020eeb6242/3f276049d15c8c6e-91/s540x810/385b0d2b0f77ad276bbbdc640695b2b71a483d7a.png' />
                    <h6>{font ? '_______ ____' : 'Почта v1.0'}</h6>
                    <h6 style={{ marginTop: '2px', textAlign: 'center' }}>&copy;2023-2024</h6>
                </div>}

                {p === 4 && <div className='text'>
                    <p>{user?.letters[l].text}</p>
                </div>}
            </Window>}

            {command && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='MS-DOS prompt' isBtn onClick={() => setCommand(false)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                    <Input placeholder='Command' value={commandText} onChange={e => setCommandText(e.target.value)} />
                    <Button color={user?.colorButton} background={user?.bgButton} text='GO' onClick={() => {
                        if(ct === 'C:/' && commandText === 'dir') {
                            setCT(`
                                Windows
                                My Documents    
                            `)
                        } else if(ct === 'C:/' || ct === `
                                Windows
                                My Documents    
                            ` && commandText === 'cd Windows') {
                            setCT('C:/Windows')
                        } else if(ct === 'C:/' || ct === `
                            Windows
                            My Documents    
                        ` && commandText === 'cd My Documents') {
                            setCT('C:/My Documents')
                        } else if(ct === 'C:/My Documents' && commandText === 'cd..') {
                            setCT('C:/')
                        } else if(ct === 'C:/Windows' && commandText === 'cd..') {
                            setCT('C:/')
                        } else if(ct === 'C:/Windows' && commandText === 'dir') {
                            setCT('System32')
                        } else if(ct === 'C:/Windows' || ct === 'System32' && commandText === 'cd System32') {
                            setCT('C:/Windows/System32')
                        } else if(ct === 'C:/Windows/System32' && commandText === 'cd..') {
                            setCT('C:/C:/Windows')
                        } else if(ct === 'C:/Windows/System32' && commandText === 'dir') {
                            setCT('File(s)11')
                        } else if(commandText === 'ver') {
                            setCT('MS-DOS version 1.0')
                        } else if(commandText === 'cls') {
                            setCT('')
                        } else if(commandText === 'help') {
                            setCT(`
                                dir : files, folders
                                cd : change directory
                                cd.. : back directory
                                ver : MS-DOS version
                                cls : clear screnn
                                help : All commands
                            `)
                        } else if(commandText === '') {
                            setCT('Enter command')
                        } else {
                            setCT('Invalid command, Enter command "help"')
                        }

                        setCommandText('')
                    }} />
                </div>
                <div className="command">
                    {ct}
                </div>
            </Window>}

            {control && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title={pageControl === 0 ? 'Панель управления' : pageControl === 1 ? 'Экран' : pageControl === 2 ? 'Окна' : pageControl === 3 ? 'Кнопки' : pageControl === 4 ? 'User' : pageControl === 5 ? 'Система' : 'Пуск'} isBtn onClick={() => { setControl(false), setPageControl(0), setInpColorWindow(''), setInpBgWindow(''), setInpColorButton(''), setInpBgButton('') } }>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                    {pageControl !== 0 && <Button color={user?.colorButton} background={user?.bgButton} text={<GoArrowLeft />} onClick={() => setPageControl(0)} />}
                </div>

                <div className='controls'>
                    {pageControl === 0 && <div style={{ display: 'grid', height: 150, overflow: 'auto' }}>
                        <div className="control" onClick={() => setPageControl(1)}>
                            <img width={50} src="https://64.media.tumblr.com/7709e9a07b13f77c96bc22b5e54abd39/69139efd51962ab2-19/s540x810/28044a7efcd578adf0c435d07a302ca5a4b29edd.png" />
                            <b>{font ? '_____' : 'Экран'}</b>
                        </div>
                        <div className="control" onClick={() => setPageControl(2)}>
                            <img width={50} src="https://64.media.tumblr.com/e94f8a0537e0507397be9bcc5db99130/aa9bc13e4b6cc0d3-7e/s540x810/5379e1d0e2833ee4dc46bea3fdd09b9a3220da8d.png" />
                            <b>{font ? '____' : 'Окна'}</b>
                        </div>
                        <div className="control" onClick={() => setPageControl(3)}>
                            <img width={50} src="https://win98icons.alexmeub.com/icons/png/no-1.png" />
                            <b>{font ? '______' : 'Кнопки'}</b>
                        </div>
                        <div className="control" onClick={() => setPageControl(4)}>
                            <img width={50} src="https://64.media.tumblr.com/3a0a6a2aed96741709ab8717e3318818/76c94287993d6a1d-61/s540x810/750ed8a95cdc700e25693c357aadf23e525d7773.png" />
                            <b>{font ? '____' : 'User'}</b>
                        </div>
                        <div className="control" onClick={() => setPageControl(6)}>
                            <img width={50} src="https://64.media.tumblr.com/403c0e97947995546835614ee3607ca4/9c9cb14c832d85d9-af/s540x810/d83394c54f1bb9270be418c8343c29d7dcefdb15.png" />
                            <b>{font ? '____' : 'Пуск'}</b>
                        </div>
                        <div className="control" onClick={() => setPageControl(5)}>
                            <img width={50} src="https://64.media.tumblr.com/9e343edbf77aba6d787dcadf3525c22d/59b79f41579a3087-2d/s540x810/e16f3618a2898ddeb6da22e0c833339311ecdc7d.png" />
                            <b>{font ? '_______' : 'Система'}</b>
                        </div>
                    </div>}

                    {pageControl === 1 && <div style={{ display: 'grid', gridTemplateColumns: '3fr 3fr', gap: 5 }}>
                        {colors.map(el => <div key={el.color} style={{ background: `${el.color}`, padding: 5, height: 40, width: 40, border: `${el.color === 'white' ? '1px solid black' : ''}`, cursor: 'pointer' }} onClick={async () => {
                            try {
                                await axios
                                    .put(`http://localhost:3000/api/user/updateBackground/${user?.id}`, { background: el.color })
                                    .then(async () => {
                                        try {
                                            await axios
                                                .get(`http://localhost:3000/api/user/${user?.id}`)
                                                .then(res => setUser(res.data))
                                        } catch (error) {
                                            console.error(error)
                                        }
                                    })
                            } catch (error) {
                                
                            }
                        }}></div>)}
                    </div>}

                    {pageControl === 6 && <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Input placeholder='Фон' value={q} onChange={e => setQ(e.target.value)} />
                            <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'} disabled={q === '' ? true : false} onClick={async () => {
                                try {
                                    await axios
                                        .put(`http://localhost:3000/api/user/updateBgStartbar/${user?.id}`, { bgStartbar: q })
                                        .then(async () => {
                                            try {
                                                axios
                                                    .get(`http://localhost:3000/api/user/${user?.id}`)
                                                    .then(res => { setUser(res.data), setQ('') })
                                            } catch (error) {
                                                console.error(error)
                                            }
                                        })
                                } catch (error) {
                                    console.error(error)
                                }
                            }} />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            Вид: <Button text={menu ? 'Анимированный' : 'Класический'} onClick={async () => {
                                try {
                                    setMenu(!menu)

                                    await axios
                                        .put(`http://localhost:3000/api/user/updateIsMenu/${user?.id}`, { isMenu: menu })
                                        .then(async () => {
                                            try {
                                                axios
                                                    .get(`http://localhost:3000/api/user/${user?.id}`)
                                                    .then(res => setUser(res.data))
                                            } catch (error) {
                                                console.error(error)
                                            }
                                        })
                                } catch (error) {
                                    console.error(error)
                                }
                            }} />
                        </div>
                    </div>}

                    {pageControl === 2 && <div style={{ display: 'block', width: 200 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Input placeholder='Цвет' value={inpColorWindow} onChange={e => setInpColorWindow(e.target.value)} />
                            <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'} disabled={inpColorWindow === '' ? true : false} onClick={async () => {
                                try {
                                    await axios
                                        .put(`http://localhost:3000/api/user/updateColorWindow/${user?.id}`, { colorWindow: inpColorWindow })
                                        .then(async () => {
                                            try {
                                                axios
                                                    .get(`http://localhost:3000/api/user/${user?.id}`)
                                                    .then(res => { setUser(res.data), setInpColorWindow('')})
                                            } catch (error) {
                                                console.error(error)
                                            }
                                        })
                                } catch (error) {
                                    console.error(error)
                                }
                            }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Input placeholder='Фон' value={inpBgWindow} onChange={e => setInpBgWindow(e.target.value)} />
                            <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  disabled={inpBgWindow === '' ? true : false} onClick={async () => {
                                try {
                                    await axios
                                        .put(`http://localhost:3000/api/user/updateBgWindow/${user?.id}`, { bgWindow: inpBgWindow })
                                        .then(async () => {
                                            try {
                                                axios
                                                    .get(`http://localhost:3000/api/user/${user?.id}`)
                                                    .then(res => { setUser(res.data), setInpBgWindow('') })
                                            } catch (error) {
                                                console.error(error)
                                            }
                                        })
                                } catch (error) {
                                    console.error(error)
                                }
                            }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 2 }}>
                            <Button color={user?.colorButton} background={user?.bgButton} text={windowButton ? 'Кнопки в право' : 'Кнопки в лево'}  onClick={async () => {
                                try {
                                    setWindowButton(!windowButton)

                                    await axios
                                        .put(`http://localhost:3000/api/user/updateIsWindow/${user?.id}`, { isWindow: windowButton })
                                        .then(async () => {
                                            try {
                                                axios
                                                    .get(`http://localhost:3000/api/user/${user?.id}`)
                                                    .then(res => { setUser(res.data), setWindow(res.data?.isWindow) })
                                            } catch (error) {
                                                console.error(error)
                                            }
                                        })
                                } catch (error) {
                                    console.error(error)
                                }
                            }}/>
                        </div>
                    </div>}

                    {pageControl === 3 && <div style={{ display: 'block', width: 200 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Input placeholder='Цвет' value={inpColorButton} onChange={e => setInpColorButton(e.target.value)} />
                            <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  disabled={inpColorButton === '' ? true : false} onClick={async () => {
                                try {
                                    await axios
                                        .put(`http://localhost:3000/api/user/updateColorButton/${user?.id}`, { colorButton: inpColorButton })
                                        .then(async () => {
                                            try {
                                                axios
                                                    .get(`http://localhost:3000/api/user/${user?.id}`)
                                                    .then(res => { setUser(res.data), setInpColorButton('') })
                                            } catch (error) {
                                                console.error(error)
                                            }
                                        })
                                } catch (error) {
                                    console.error(error)
                                }
                            }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Input placeholder='Фон' value={inpBgButton} onChange={e => setInpBgButton(e.target.value)} />
                            <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  disabled={inpBgButton === '' ? true : false} onClick={async () => {
                                try {
                                    await axios
                                        .put(`http://localhost:3000/api/user/updateBgButton/${user?.id}`, { bgButton: inpBgButton })
                                        .then(async () => {
                                            try {
                                                axios
                                                    .get(`http://localhost:3000/api/user/${user?.id}`)
                                                    .then(res => { setUser(res.data), setInpBgButton('') })
                                            } catch (error) {
                                                console.error(error)
                                            }
                                        })
                                } catch (error) {
                                    console.error(error)
                                }
                            }} />
                        </div>
                    </div>}

                    {pageControl === 4 && <div style={{ display: 'block' }}>
                        <Input placeholder='Имя' value={name} onChange={e => setName(e.target.value)} />
                        <Input placeholder='Пароль' value={password} onChange={e => setPassword(e.target.value)} />
                        <Button text={font ? '-_________' : 'Сохранить'} onClick={async () => {
                            try {
                                await axios
                                    .put(`http://localhost:3000/api/user/update/${user?.id}`, { name, password })
                                    .then(async () => {
                                        try {
                                            axios
                                                .get(`http://localhost:3000/api/user/${user?.id}`)
                                                .then(res => { setUser(res.data), setName(''), setPassword('') })
                                        } catch (error) {
                                            console.error(error)
                                        }
                                    })
                            } catch (error) {
                                console.error(error)
                            }
                        }} />
                    </div>}

                    {pageControl === 5 && <div style={{ display: 'block', width: 200 }}>
                        <img width={100} src='https://64.media.tumblr.com/9e343edbf77aba6d787dcadf3525c22d/59b79f41579a3087-2d/s540x810/e16f3618a2898ddeb6da22e0c833339311ecdc7d.png' />

                        <table border={2}>
                            <tbody>
                                <tr>
                                    <td>{font ? '__' : 'OC'}: Windows 98 v2.0</td>
                                </tr>
                                <tr>
                                    <td>{font ? '___' : 'CPU'}: Intel Pentium 3</td>
                                </tr>
                                <tr>
                                    <td>{font ? '______' : 'Memory'}: 64mb</td>
                                </tr>
                                <tr>
                                    <td>{font ? '___' : 'HHD'}: 1gb</td>
                                </tr>
                                <tr>
                                    <td>{font ? '_____' : 'Mouse'}: YES USB 2.0</td>
                                </tr>
                                <tr>
                                    <td>{font ? '________' : 'Keyboard'}: YES PCI port</td>
                                </tr>
                                <tr>
                                    <td>{font ? '____ _______' : 'Date created'}: 2024 years</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>}
                </div>
            </Window>}

            {explorer && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Проводник' isBtn onClick={() => { setExplorer(false), setStep(0), setText('PC'), setExplorerAbout(false) }}>
                {!loading && <>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                        <Button color={user?.colorButton} background={user?.bgButton} onClick={() => {
                            if(text === 'PC/C:') {
                                setStep(0)
                                setText('PC')
                            } else if(text === 'PC/C:/My Documents') {
                                setText('PC/C:')
                                setStep(1)
                            } else if(text === 'PC/C:/Windows') {
                                setText('PC/C:')
                                setStep(1)
                            } else if(text === 'PC/C:/Windows/System32') {
                                setStep(2)
                                setText('PC/C:/Windows')
                            } else {
                                setError(true)
                            }

                        }} text={<GoArrowLeft />} disabled={text === 'PC' ? true : false} />
                        <Button color={user?.colorButton} background={user?.bgButton} onClick={() => {
                            if(text === 'PC/C:') {
                                setStep(2)
                                setText('PC/C:/Windows')
                            } else if(text === 'PC/C:/Windows') {
                                setStep(3)
                                setText('PC/C:/Windows/System32')
                            } else {
                                setError(true)
                            }

                        }} text={<GoArrowRight />} disabled={text === 'PC/C:/Windows/System32'  || text === 'PC' || text === 'PC/C:' || text === 'PC/C:/My Documents' ? true : false} />
                    </div>
                    <div style={{ marginLeft: '5px' }}><Button color={user?.colorButton} background={user?.bgButton} text={<FaHome />} onClick={() => { setStep(0), setText('PC') }} /></div>
                    <div style={{ marginLeft: '5px' }}><Button color={user?.colorButton} background={user?.bgButton} text={<IoMdHelp />} onClick={() => setExplorerAbout(true)} /></div>
                    <div style={{ marginLeft: '5px', marginRight: '5px' }}><Input value={text} onChange={e => setText(e.target.value)} /></div>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'GO'} onClick={() => fun()} />
                </div>
                </>}

                <div className='block' style={{ overflow: 'auto', height: 250 }}>
                    {loading ? <Loading /> : <div>
                        <div className="content">
                        {step === 0 && <><div className="card mb" onClick={() => { setStep(1), setText('PC/C:')}}>
                            <b className='ml'>{font ? '__' : 'C:'}</b>
                            <img src="https://64.media.tumblr.com/8ea62d47b493e93d8fceec19cac21ccf/37533a1f12d803fd-37/s540x810/928144c16daf6f7aa25c02f54056cae899971c62.png" />
                        </div>
                        <div className="card mb" onClick={() => setErrorA(true)}>
                            <b className='ml'>{font ? '__' : 'A:'}</b>
                            <img src="https://64.media.tumblr.com/a24117e2a68b9a480c033287e092b5fd/cfef550547f3c5a4-da/s540x810/b0b9498f0be2ef2f2964a2c423e2edcbece73c32.png" />
                        </div></>}
                        {step === 1 && <><div className="card mb" onClick={() => { setStep(2), setText('PC/C:/Windows') }}>
                            <img src="https://64.media.tumblr.com/3dc3abc574ec2b98f20960b00075db88/666c5f1c604d890c-57/s540x810/0e01457e2446dccc660d034a5ab9c44358defb8e.png" />
                            <b className='mr'>{font ? '_______' : 'Windows'}</b>
                        </div>
                        <div className="card mb" onClick={() => { setStep(4), setText('PC/C:/My Documents') }}>
                            <img src="https://64.media.tumblr.com/d519f7393d9ee25a0a8a0835ef93c488/8e467617da3b8b01-63/s540x810/ba5279820e44357b83ac1fdb6824e5a52ec4162f.png" />
                            <b className='mr'>{font ? '__ _________' : 'My Documents'}</b>
                        </div>
                        <div className="card mb" onClick={() => setControl(true)}>
                            <img src="https://win98icons.alexmeub.com/icons/png/directory_control_panel_cool-4.png" />
                            <b className='mr'>{font ? '_______' : 'Control'}</b>
                        </div>
                        <div className="card mb">
                            <img src="https://64.media.tumblr.com/89cb2ed5f8509f2e0c9c31758ebee77b/93b208a1da5839d3-e1/s540x810/8a1cdac2bce9729a5db3a13f8d84d5a905c9b438.png" />
                            <b className='mr'>Autoexec.bat</b>
                        </div>
                        <div className="card mb">
                            <img src="https://64.media.tumblr.com/e811c12f3312db4a2c7ab43dbfa7c4e2/8b68af590e85460c-6b/s540x810/50de09aa8b7f1970ddd162ea4ca9f48ed89dfba5.png" />
                            <b className='mr'>Config.log</b>
                        </div>
                        <div className="card mb" onClick={() => setCommand(true)}>
                            <img src="https://64.media.tumblr.com/97be78594f1e4d436f7bb370c7a6f686/fa69fb22c9d76ca2-60/s540x810/1ab18fa126787e9e10ca198e5302dbaea5d15f4c.png" />
                            <b className='mr'>MS-DOS prompt</b>
                        </div></>}
                        {step === 2 && <><div className="card mb" onClick={() => { setStep(3), setText('PC/C:/Windows/System32') }}>
                            <img src="https://64.media.tumblr.com/3dc3abc574ec2b98f20960b00075db88/666c5f1c604d890c-57/s540x810/0e01457e2446dccc660d034a5ab9c44358defb8e.png" />
                            <b className='mr'>{font ? '________' : 'System32'}</b>
                        </div></>}
                        {step === 3 && <><div className="card mb" onClick={() => setHelp(true)}>
                            <img src="https://64.media.tumblr.com/b89f9559300c18dbfc9514122aa9a8aa/995df7f1b9b55f5e-65/s540x810/e412dc3e5e375e84caefe78d10676aac799ab1bf.png" />
                            <b className='mr'>Help.exe</b>
                        </div>
                        <div className="card mb">
                            <img src="https://64.media.tumblr.com/145ba88ac8fe8889043d8a929607a58e/9bd9b9bbc752d2be-8c/s540x810/b48368228fd7effc48dac782474ae5b683b64db6.png" />
                            <b className='mr'>Explorer.exe</b>
                        </div>
                        <div className="card mb" onClick={() => setNotepad(true)}>
                            <img src="https://64.media.tumblr.com/73f34eb6543708c5b237fd739b389a55/a76707adad47a36a-a6/s540x810/d5ca09678f2f10b2fa2f553a2c28a650fe3732b4.png" />
                            <b className='mr'>Notepad.exe</b>
                        </div>
                        <div className="card mb" onClick={() => setTxt(true)}>
                            <img src="https://64.media.tumblr.com/18c2a365f1c29f9ac87483aa28bec32a/7278b44044d05aac-19/s540x810/b6652a087de2d49c1a45251d3b0ba18ea07cc965.png" />
                            <b className='mr'>Readme.txt</b>
                        </div>
                        <div className="card mb" onClick={() => setWin(true)}>
                            <img src="https://64.media.tumblr.com/115e57a6dfcf00b6c4671c05094683a4/e0f6c415c66a9725-87/s540x810/35ed66e525c6b94402b93f93a832045cbf22bb74.png" />
                            <b className='mr'>Winver.exe</b>
                        </div>
                        <div className="card mb" onClick={() => setTaskman(true)}>
                            <img src="https://64.media.tumblr.com/de739f53d0b25890cc4239e013a3d34c/457d8691505d2e11-1b/s1280x1920/5caf0bccbe2a01162648153eac9e5a337e7c60dd.png" />
                            <b className='mr'>Taskman.exe</b>
                        </div>
                        <div className="card mb" onClick={() => setWelcome(true)}>
                            <img src="https://64.media.tumblr.com/ed74df4f311fb03716ecfd541736bab6/68ea07cdc3fbb503-fb/s540x810/1e9cc23bcb0739462b961f57ea3f5f1a5128a385.png" />
                            <b className='mr'>Welcome.exe</b>
                        </div>
                        <div className="card mb" onClick={() => setCalc(true)}>
                            <img src="https://64.media.tumblr.com/c8d12905363fffff08c37f8eca363590/2e42f87909d61a4f-81/s540x810/4c69d12663cfa490bdc6f7f07bd8ae881dcc58cf.png" />
                            <b className='mr'>Calc.exe</b>
                        </div>
                        <div className="card mb" onClick={() => setIE(true)}>
                            <img src="https://64.media.tumblr.com/78e5e1fb87d13924b0a4b410d131b930/c6cb2fd44af16922-23/s540x810/1afa8a3117c9b8643b207a66449e9a9f8317dd5e.png" />
                            <b className='mr'>Internet.exe</b>
                        </div>
                        <div className="card mb">
                            <img src="https://64.media.tumblr.com/ef1c3c922d4f40f3a52db4a9823a7054/bcc4b6a07bb287db-13/s540x810/fafa5139ae5b8e2b5914c5d5039647f3b7e75703.png" />
                            <b className='mr'>System.sys</b>
                        </div>
                        {!font && <div className="card mb">
                            <img src="https://64.media.tumblr.com/4e8defe6a9b950e0f01d8c8be84e2bb4/59f273f308615131-71/s540x810/0c67a6b92bf1333ab9bf5d1b011db2ac54790195.png" />
                            <b className='mr'>Font file</b>
                            <div style={{ marginRight: 15 }}><Button text='Удалить' onClick={() => setFont(true)} /></div>
                        </div>}
                        <div className="card mb" onClick={() => setImage(true)}>
                            <img src="https://64.media.tumblr.com/6cf58feaaf6e65878d42ed8661e99dc7/7b07fc547cc9c009-13/s540x810/b4cbafa7be1981e6e03b09eaecab0756bc10d282.png" />
                            <b className='mr'>Image.gif</b>
                        </div></>}
                        {step === 4 && <>
                            {user?.documents?.length === 0 && <p style={{ margin: 100 }}>{font ? '___ _____ ______' : 'Эта пупка пустая'}</p>}
                            {user?.documents?.map((el, index) => <div className="card mb" key={el.id}>
                                <img src='https://64.media.tumblr.com/18c2a365f1c29f9ac87483aa28bec32a/7278b44044d05aac-19/s540x810/b6652a087de2d49c1a45251d3b0ba18ea07cc965.png' />
                                <b className='mr'>{el.title.length > 10 ? '...' : el.title === '' ? 'Document' : el.title}{el.format}</b>
                                <div style={{ marginRight: '10px' }}><Button onClick={async () => {
                                    try {
                                        setOpenDocument(false), setDocument(null)

                                        await axios
                                            .delete(`http://localhost:3000/api/document/${el.id}`)
                                            .then(async () => {
                                                try {
                                                    await axios
                                                        .get(`http://localhost:3000/api/user/${user?.id}`)
                                                        .then(res => setUser(res.data))
                                                } catch (error) {
                                                    console.error(error)
                                                }
                                            })
                                    } catch (error) {
                                        console.error(error)
                                    }
                                }} text={<IoClose />} /></div>
                                <div style={{ marginRight: '10px' }}>
                                    {document === index && openDocument ? <Button text='Закрыть' onClick={() => {
                                        setDocument(null)

                                        setOpenDocument(false)
                                    }} /> : <Button text='Открыть' onClick={() => {
                                        setDocument(index)
    
                                        setOpenDocument(true)
                                    }} />}
                                </div>
                            </div>)}
                        </>}
                        </div>
                    </div>}
                </div>
            </Window>}

            {openDocument && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title={user?.documents[document].title === '' ? 'Documnent' : user?.documents[document].title > 10 ? '...' : user?.documents[document].title} isBtn onClick={() => { setOpenDocument(false), setDocument(null) }}>
                <div style={{ overflow: 'auto', padding: '5px', background: `${user?.documents[document].backround}`, color: `${user?.documents[document].color}`, fontSize: `${user?.documents[document].size}px`, width: 250, height: 250 }}>
                    {user?.documents[document].text}
                </div>
            </Window>}

            {error && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Ошибка' isBtn onClick={() => setError(false)}>
                <h6>{font ? '____________ ____ ______' : 'Неправильный путь папки!'}</h6>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  onClick={() => setError(false)} />
                </div>
            </Window>}

            {errorA && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Ошибка' isBtn onClick={() => setErrorA(false)}>
                <h6>{font ? '_______ _______ _ _________' : 'Вставте дискету в флаповод!'}</h6>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  onClick={() => setErrorA(false)} />
                </div>
            </Window>}

            {help && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Справка' isBtn onClick={() => setHelp(false)}>
                <h6>{font ? '______ ______ _______ ________ _________' : 'Данная версия windows является улутшеной'}</h6>
                <h6>{font ? '______ _______ __ _____' : 'версией windows 98 v1.0.'}</h6>
                <h6>{font ? '___ ____ __________ ____, _____ ________ _ ________' : 'Тут были исправлены баги, более приятный и понятный'}</h6>
                <h6>{font ? '________________ _________, _________ _________' : 'пользовательский интерфейс, добавился проводник'}</h6>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  onClick={() => setHelp(false)} />
                </div>
            </Window>}

            {chat && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Chat' isBtn onClick={() => setChat(false)}>
                <div className="messages">
                    <div style={{ marginBottom: '5px' }}><Input value={search} onChange={e => setSearch(e.target.value)} type='search' placeholder='Поиск сообщений' /></div>
                    {messages.filter(el => el.text.toLowerCase().includes(search.toLowerCase())).map(message => <div key={message.id} style={{ marginTop: `${messages.length > 1 ? '5px' : '0px'}` }} className={`${message.user?.id === user?.id ? 'your' : 'user'}`}>
                        {message.user?.id === user?.id ? 'Your' : `${message.user.name}`}
                        <h6>{message.text}</h6>
                        {message.user?.id === user?.id && <div style={{ marginTop: 5 }}><Button text='❌' onClick={async () => {
                            try {
                                await axios
                                    .delete(`http://localhost:3000/api/message/${message.id}`)
                                    .then(res => {
                                        try {
                                            axios
                                                .get('http://localhost:3000/api/message/get')
                                                .then(res => setMessages(res.data))
                                        } catch (error) {
                                            console.error(error)
                                        }
                                    })
                            } catch (error) {
                                console.error(error)
                            }
                        }} /></div>}
                    </div>)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginTop: '3px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} text='😊' onClick={() => setMessage(message + '😊')} />
                    <Button color={user?.colorButton} background={user?.bgButton} text='😎' onClick={() => setMessage(message + '😎')} />
                    <Button color={user?.colorButton} background={user?.bgButton} text='👍' onClick={() => setMessage(message + '👍')} />
                    <Button color={user?.colorButton} background={user?.bgButton} text='💖' onClick={() => setMessage(message + '💖')} />
                    <Button color={user?.colorButton} background={user?.bgButton} text='😁' onClick={() => setMessage(message + '😁')} />
                    <Button color={user?.colorButton} background={user?.bgButton} text='🤣' onClick={() => setMessage(message + '🤣')} />
                    <div style={{ marginLeft: 5, marginRight: 5 }}><Input type='search' placeholder='Сообщение' value={message} onChange={e => setMessage(e.target.value)} /></div>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'GO'} disabled={message === '' ? true : false} onClick={async () => {
                        try {
                            const dto = { text: message, user: user?.id }

                            await axios
                                .post('http://localhost:3000/api/message/post', dto)
                                .then(res => {
                                    try {
                                        axios
                                            .get('http://localhost:3000/api/message/get')
                                            .then(res => setMessages(res.data))
                                    } catch (error) {
                                        console.error(error)
                                    }
                                })

                            setMessage('')
                        } catch (error) {
                            console.error(error)
                        }
                    }} />
                </div>
            </Window>}

            {welcome && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Welcome' isBtn onClick={() => setWelcome(false)}>
                <h6>{font ? '_____ __________ _ _______ __ ____ ___' : 'Добро пожаловать в windows 98 v2.0 RTM'}</h6>
                <div style={{ marginLeft: '3.8rem', marginTop: '3px' }}><Image width={100} src='https://64.media.tumblr.com/3606de52c4d1b46b3461ec56de67ecf1/1deb8f7c5ea20016-36/s540x810/100ee5271f31915b6757108e58cb210a27606d26.gifv' /></div>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr', marginTop: '5px', gap: '2px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '_______' : 'Справка'} onClick={() => setHelp(true)} />
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '_________' : 'Проводник'} onClick={() => setExplorer(true)} />
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '_________' : 'Выполнить'} onClick={() => setOpen(true)} />
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '________' : 'Интернет'} onClick={() => setIE(true)} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', marginTop: '3px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '_______' : 'Закрыть'} onClick={() => setWelcome(false)} />
                </div>
            </Window>}

            {txt && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Readme' isBtn onClick={() => setTxt(false)}>
                <div style={{ overflow: 'auto', padding: '5px', background: 'white', width: 250, height: 250 }}>
                    {readme}
                </div>
            </Window>}

            {calc && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Calc' isBtn onClick={() => { setCalc(false), setOper(''), setFirstNumber(null), setResult('') }}>
                <Input value={result} onChange={e => setResult(e.target.value)} />
                <div style={{ display: 'grid', marginTop: '5px', gridTemplateColumns: '1fr 1fr 1fr' }}>
                    {numbers.map(el => <Button color={user?.colorButton} key={el} background={user?.bgButton} text={el} onClick={() => setResult(result + el)} />)}
                </div>
                <div style={{ display: 'grid', marginTop: '5px', gridTemplateColumns: '1fr 1fr 1fr' }}>
                    {operations.map(el => <Button key={el} disabled={result === '' ? true : false} color={user?.colorButton} background={user?.bgButton} text={el} onClick={() => {
                        setOper(el), setFirstNumber(result), setResult('')

                        if(el === '=') {
                            if(oper === '+') {
                                setResult(Number(firstNumber) + Number(result))
                            } else if(oper === '-') {
                                setResult(Number(firstNumber) - Number(result))
                            } else if(oper === '*') {
                                setResult(Number(firstNumber) * Number(result))
                            } else if(oper === '/') {
                                setResult(Number(firstNumber) / Number(result))
                            }

                            setOper('')
                        } else if(el === 'C') {
                            setResult('')
                            setFirstNumber(null)
                            setOper('')
                        }
                    }} />)}
                </div>
            </Window>}

            {h && <Window isWindow={window} title='Warning' isBtn onClick={() => setH(false)}>
                <h4>Your can save this document on you pc?</h4>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
                    <Button text='Yes' onClick={async () => {
                        try {
                            const dto = {
                                title: titleDocument,
                                text: inp,
                                color: c === '' ? 'black' : c,
                                background: bg === '' ? 'white' : bg,
                                size: Number(num),
                                user: user?.id
                            }

                            await axios
                                .post('http://localhost:3000/api/document', dto)
                                .then(async () => {
                                    try {
                                        await axios
                                            .get(`http://localhost:3000/api/user/${user?.id}`)
                                            .then(res => {
                                                setH(false)
                                                setUser(res.data)
                                                setBg('')
                                                setInp('')
                                                setC('')
                                                setNum('')
                                                setTitleDocument('')
                                                setStep(4)
                                                setText('PC/C:/My Documents')
                                                setExplorer(true)
                                            })
                                    } catch (error) {
                                        console.error(error)
                                    }
                                })                         
                        } catch (error) {
                            console.error(error)
                        }
                    }} />
                    <Button text='No' onClick={() => setH(false)} />
                </div>
            </Window>}

            {notepad && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title={titleDocument === '' ? 'Notepad' : titleDocument.length > 10 ? '...' : titleDocument} isBtn onClick={() => { 
                setH(true)

                // setNotepad(false), not.current.style.fontSize = `13px`, setNum(''), not.current.style.fontStyle = `normal`, not.current.style.fontWidth = `normal`, not.current.style.background = `white`, not.current.style.color = `black`, setC(''), setBg(''), setInp(''), setNotepadAbout(false)
             }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginBottom: '5px' }}>
                    <Input placeholder='Размер шрифта' value={num} onChange={e => setNum(e.target.value)} />
                    <div style={{ marginLeft: '5px' }}><Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  disabled={num === '' ? true : false} onClick={() => { not.current.style.fontSize = `${num}px`} } /></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginBottom: '5px' }}>
                    <Input placeholder='Название документа' value={titleDocument} onChange={e => setTitleDocument(e.target.value)} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginBottom: '5px' }}>
                    <div><Button color={user?.colorButton} background={user?.bgButton} width={38} text={<FaBold />} onClick={() => not.current.style.fontWidth = `bolder`} /></div>
                    <div style={{ marginLeft: '5px' }}><Button color={user?.colorButton} background={user?.bgButton} width={38} text={<FaItalic />} onClick={() => not.current.style.fontStyle = `italic`} /></div>
                    <div style={{ marginLeft: '5px' }}><Button color={user?.colorButton} background={user?.bgButton} text='R' onClick={() => { not.current.style.fontSize = `13px`, setNum(''), not.current.style.fontStyle = `normal`, not.current.style.fontWidth = `normal`, not.current.style.background = `white`, not.current.style.color = `black`, setC(''), setBg(''), setInp('') }} /></div>
                    <div style={{ marginLeft: '5px' }}><Button color={user?.colorButton} background={user?.bgButton} text={<IoMdHelp />} onClick={() => setNotepadAbout(true)} /></div>
                    <div style={{ marginLeft: '5px' }}><Button color={user?.colorButton} background={user?.bgButton} text='Сохранить' onClick={async () => {
                        try {
                            const dto = {
                                title: titleDocument,
                                text: inp,
                                color: c === '' ? 'black' : c,
                                background: bg === '' ? 'white' : bg,
                                size: Number(num),
                                user: user?.id
                            }

                            await axios
                                .post('http://localhost:3000/api/document', dto)
                                .then(async () => {
                                    try {
                                        await axios
                                            .get(`http://localhost:3000/api/user/${user?.id}`)
                                            .then(res => {
                                                setUser(res.data)
                                                setBg('')
                                                setInp('')
                                                setC('')
                                                setNum('')
                                                setTitleDocument('')
                                                setStep(4)
                                                setText('PC/C:/My Documents')
                                                setExplorer(true)
                                            })
                                    } catch (error) {
                                        console.error(error)
                                    }
                                })                         
                        } catch (error) {
                            console.error(error)
                        }
                    }} /></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginBottom: '5px' }}>
                    <Input placeholder='Цвет' width={150} value={c} onChange={e => setC(e.target.value)} />
                    <div style={{ marginLeft: '5px' }}><Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  disabled={c === '' ? true : false} onClick={() => { not.current.style.color = `${c}` }} /></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginBottom: '5px' }}>
                    <Input placeholder='Фон' value={bg} onChange={e => setBg(e.target.value)} />
                    <div style={{ marginLeft: '5px' }}><Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  disabled={bg === '' ? true : false} onClick={() => { not.current.style.background = `${bg}` }} /></div>
                </div>
                <textarea value={inp} onChange={e => setInp(e.target.value)} ref={not} style={{ width: 205, height: 225, outline: 'none', resize: 'none' }}></textarea>
            </Window>}

            {win && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Winver' isBtn onClick={() => setWin(false)}>
                <div style={{ marginLeft: '1rem' }}><img width={75} src='https://64.media.tumblr.com/3606de52c4d1b46b3461ec56de67ecf1/1deb8f7c5ea20016-36/s540x810/100ee5271f31915b6757108e58cb210a27606d26.gifv' /></div>
                <h6>{font ? '_______ __ _____ ___' : 'Windows 98 v2.0 RTM'}</h6>
                <h6 style={{ marginTop: '2px', textAlign: 'center' }}>&copy;2023-2024</h6>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  onClick={() => setWin(false)} />
                </div>
            </Window>}

            {image && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Image' isBtn onClick={() => setImage(false)}>
                <img width={200} height={250} src='https://i.pinimg.com/originals/e2/4a/f9/e24af94047b82498bc4342908be42ecb.gif' />
            </Window>}

            {ie && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Internet Explorer' isBtn onClick={() => setIE(false)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                        <Button color={user?.colorButton} background={user?.bgButton} text={<HiArrowLeftCircle />} onClick={() => { setUrl('http://666.com/'), setPage(0) }} disabled={page === 0 ? true : false} />
                        <Button color={user?.colorButton} background={user?.bgButton} text={<HiArrowRightCircle />} onClick={() => { setUrl('http://666.com/666.html'), setPage(1) }} disabled={page === 0 ? false : true} />
                        <Button color={user?.colorButton} background={user?.bgButton} text={<FaHome />} onClick={() => { setPage(0), setUrl('http://666.com/') }} />
                        <Button color={user?.colorButton} background={user?.bgButton} text={<CiUnlock />} onClick={() => setLock(true)} />
                        <Button color={user?.colorButton} background={user?.bgButton} text={<IoMdHelp />} onClick={() => setAbout(true)} />
                    </div>
                    <div style={{ marginLeft: '5px', marginRight: '5px' }}><Input value={url} onChange={e => setUrl(e.target.value)} /></div>
                    <Button color={user?.colorButton} background={user?.bgButton} text='GO' onClick={() => {}} />
                </div>

                <div className="block" style={{ height: '200px', background: `${page === 0 ? 'black' : 'red'}`, color: 'white', display: 'flex', justifyContent: 'center' }}>

                </div>
            </Window>}
            
            {lock && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Безопастность' isBtn onClick={() => setLock(false)}>
                <img style={{ marginLeft: '15px' }} width={75} src='https://win98icons.alexmeub.com/icons/png/key_padlock-0.png' />
                <h6>{font ? '____ ____ ________' : 'Этот сайт является'}</h6>
                <h6>{font ? '__ __________ ___' : 'не зашищённым так'}</h6>
                <h6>{font ? '___ __ __________' : 'как он использует'}</h6>
                <h6>{font ? '______ ________' : 'старый протокол'}</h6>
                <h6>{font ? '________ ______' : 'передачи данных'}</h6>
                <h6>{font ? '___ ______ ___ _' : 'TLS версии 1.0 !'}</h6>
                <h6 style={{ marginTop: '2px', textAlign: 'center' }}>&copy;2023-2024</h6>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  onClick={() => setLock(false)} />
                </div>
            </Window>}

            {about && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='About' isBtn onClick={() => setAbout(false)}>
                <img style={{ marginLeft: '15px' }} width={75} src='https://64.media.tumblr.com/78e5e1fb87d13924b0a4b410d131b930/c6cb2fd44af16922-23/s540x810/1afa8a3117c9b8643b207a66449e9a9f8317dd5e.png' />
                <h6>{font ? '________ ________ ____' : 'Internet Explorer v2.0'}</h6>
                <h6 style={{ marginTop: '2px', textAlign: 'center' }}>&copy;2023-2024</h6>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  onClick={() => setAbout(false)} />
                </div>
            </Window>}

            {errorIE && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Ошибка' isBtn onClick={() => setErrorIE(false)}>
                <h6>{font ? '____________ _____, _________ ________' : 'Неправильный адрес, повторите попытку!'}</h6>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  onClick={() => setErrorIE(false)} />
                </div>
            </Window>}

            {open && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Выполнить' isBtn onClick={() => setOpen(false)}>
                <div style={{ marginBottom: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Image width={50} src='https://res.cloudinary.com/penry/image/upload/v1474990231/application_hourglass_small_yyhy5z.ico' />

                    <div style={{ border: '1px solid black', width: 120, padding: 5 }}>
                        <h6>{font ? '_______ ___ _________' : 'Введите имя программы'}</h6>
                    </div>
                </div>

                <Input value={run} onChange={e => setRun(e.target.value)} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '5px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} disabled={run === '' ? true : false} text={font ? '__' : 'ОК'}  onClick={() => {
                        if(run === 'Help.exe' || run === 'Help') {
                            setHelp(true)
                        } else if(run === 'Explorer.exe' || run === 'Explorer') {
                            setExplorer(true)
                        } else if(run === 'Notepad.exe' || run === 'Notepad') {
                            setNotepad(true)
                        } else if(run === 'Readme.txt' || run === 'Readme') {
                            setTxt(true)
                        } else if(run === 'Winver.exe' || run === 'Winver') {
                            setWin(true)
                        } else if(run === 'Internet Explorer.exe' || run === 'Internet Explorer') {
                            setIE(true)
                        } else if(run === 'Image.gif' || run === 'Image') {
                            setImage(true)
                        } else if(run === 'Calc.exe' || run === 'Calc') {
                            setCalc(true)
                        } else if(run === 'Welcome.exe' || run === 'Welcome') {
                            setWelcome(true)
                        } else if(run === 'Taskman.exe' || run === 'Taskman') {
                            setTakman(true)
                        } else {
                            setErrorRun(true)
                        }

                        setRun('')
                        setOpen(false)
                    }} />
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '______' : 'Отмена'} onClick={() => setOpen(false)} />
                </div>
            </Window>}

            {errorRun && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='Ошибка' isBtn onClick={() => { setErrorRun(false), setOpen(true) }}>
                <h6>{font ? '_______ ___ __________' : 'Неправильное имя программы!'}</h6>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  onClick={() => { setErrorRun(false), setOpen(true) }} />
                </div>
            </Window>}

            {explorerAbout && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='About' isBtn onClick={() => setExplorerAbout(false) }>
                <img width={70} src='https://64.media.tumblr.com/145ba88ac8fe8889043d8a929607a58e/9bd9b9bbc752d2be-8c/s540x810/b48368228fd7effc48dac782474ae5b683b64db6.png' />
                <h6>{font ? '________ ____' : 'Explorer v1.0'}</h6>
                <h6 style={{ marginTop: '2px', textAlign: 'center' }}>&copy;2023-2024</h6>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  onClick={() => setExplorerAbout(false)} />
                </div>
            </Window>}

            {notepadAbout && <Window isWindow={window} color={user?.colorWindow} background={user?.bgWindow} title='About' isBtn onClick={() => setNotepadAbout(false) }>
                <img width={70} src='https://64.media.tumblr.com/73f34eb6543708c5b237fd739b389a55/a76707adad47a36a-a6/s540x810/d5ca09678f2f10b2fa2f553a2c28a650fe3732b4.png' />
                <h6>{font ? '_______ ____' : 'Notepad v2.0'}</h6>
                <h6 style={{ marginTop: '2px', textAlign: 'center' }}>&copy;2023-2024</h6>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
                    <Button color={user?.colorButton} background={user?.bgButton} text={font ? '__' : 'ОК'}  onClick={() => setNotepadAbout(false)} />
                </div>
            </Window>}
        </div>
    )
}