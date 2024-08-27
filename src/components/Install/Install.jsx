import { useEffect, useState } from 'react'
import './Install.scss'
import { Window } from '../ui/Window/Window'
import { Button } from '../ui/Button/Button'
import { Input } from '../ui/Input/Input'

export const Install = ({ setInstall }) => {
    const [step, setStep] = useState(0)

    const [count, setCount] = useState(0)

    const [open, setOpen] = useState(false)

    const [key, setKey] = useState('')

    useEffect(() => {
        if(count >= 100) {
            setStep(3)
        }
    }, [count])

    return (
        <div className="install">
            <div className="win">
                <img width={75} src="https://64.media.tumblr.com/3606de52c4d1b46b3461ec56de67ecf1/1deb8f7c5ea20016-36/s540x810/100ee5271f31915b6757108e58cb210a27606d26.gifv" />
                <h4>Установка Windows 98 v2.0</h4>
            </div>
            <div className="wrapper">
                <div className="bar">
                    <div className={step === 0 ? 'active' : 'step'}>
                        <img src="https://64.media.tumblr.com/55bb3c83c8d9eaabff09ef656c31f0b3/f0a1615c2bca7383-57/s540x810/b5240eff7dd8a56ffb54a66302d8d5bea94d755a.png" />
                    </div>
                    <div className={step === 1 ? 'active' : 'step'}>
                        <img src="https://64.media.tumblr.com/deddb83af85bf826ee08a57ca790edcb/77839765fdf59eee-7c/s540x810/1a373ca6ecdf82d3605777cf694b22637ac406d0.png" />
                    </div>
                    <div className={step === 2 ? 'active' : 'step'}>
                        <img src="https://64.media.tumblr.com/2a8939ee32c9fd167af542dccf2ff70e/412b6d5d5a669993-9a/s540x810/4e3c3ac41d6ab1227105523ba9aa486a86e7a49c.png" />
                    </div>
                    <div className={step === 3 ? 'active' : 'step'}>
                        <img src="https://64.media.tumblr.com/9e343edbf77aba6d787dcadf3525c22d/59b79f41579a3087-2d/s540x810/e16f3618a2898ddeb6da22e0c833339311ecdc7d.png" />
                    </div>
                </div>
                <div className="main">
                    <Window title={step === 0 ? 'Установка' : step === 1 ? 'Ключ продукта' : count < 100 && step === 2 ? 'Копирование файлов...' : count >= 100 && step === 2 ? 'Завершение установки' : null}>
                        {step === 0 && <div className='step1'>
                            <div className="image">
                                <img width={150} height={180} src="https://64.media.tumblr.com/55bb3c83c8d9eaabff09ef656c31f0b3/f0a1615c2bca7383-57/s540x810/b5240eff7dd8a56ffb54a66302d8d5bea94d755a.png" />
                            </div>

                            <div className="content">
                                <h3>Вас приветствует программа</h3>
                                <h3>Windows 98 v2.0</h3>
                                <h3>Нажмите на "Далее", чтобы</h3>
                                <h3>продолжить установку системы</h3>

                                <div style={{ background: 'grey', marginTop: '2.7rem', padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                    <Button width={50} height={30} text='Далее' onClick={() => setStep(1)} />
                                </div>
                            </div>
                        </div>}

                        {step === 1 && <div className='step2'>
                            <div className="image">
                                <img width={150} height={180} src="https://64.media.tumblr.com/deddb83af85bf826ee08a57ca790edcb/77839765fdf59eee-7c/s540x810/1a373ca6ecdf82d3605777cf694b22637ac406d0.png" />
                            </div>

                            <div className="content">
                                <h3>Ключ продукта</h3>

                                <Input value={key} onChange={e => setKey(e.target.value)} />

                                <div style={{ background: 'grey', marginTop: '5.5rem', padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                    <Button width={150} height={30} text='У меня нет ключа продукта' onClick={() => { setStep(2), setOpen(false), setInterval(() => setCount(prev => prev + 20), 1000) }} />
                                    <Button width={50} height={30} text='Далее' onClick={() => {
                                        if(key !== '1111') {
                                            setKey('')
                                            setOpen(true)
                                        } else {
                                            setStep(2)
                                            setInterval(() => setCount(prev => prev + 20), 1000)
                                            setOpen(false)
                                        }
                                    }} />
                                </div>
                            </div>
                        </div>}

                        {count < 100 && step === 2 && <div className='step2'>
                            <div className="image">
                                <img width={150} height={180} src="https://64.media.tumblr.com/2a8939ee32c9fd167af542dccf2ff70e/412b6d5d5a669993-9a/s540x810/4e3c3ac41d6ab1227105523ba9aa486a86e7a49c.png" />
                            </div>

                            <div className="content">
                                <h3>Копирование файлов...</h3>
                                <img src="https://64.media.tumblr.com/02f1e684630962dfde601535ca66c7ec/4f559fadb3dc32b2-db/s540x810/bf8f8eaf893c46983127deb450ebe31dd9e46771.gifv" />
                                <meter min={0} value={count} max={100} />
                            </div>
                        </div>}

                        {count >= 100 && <div className='step1'>
                            <div className="image">
                                <img width={150} height={180} src="https://64.media.tumblr.com/9e343edbf77aba6d787dcadf3525c22d/59b79f41579a3087-2d/s540x810/e16f3618a2898ddeb6da22e0c833339311ecdc7d.png" />
                            </div>

                            <div className="content">
                                <h3>Спасибо за выбор!</h3>
                                <h3>Разработчик Windows 98 v2.0</h3>

                                <div style={{ background: 'grey', marginTop: '5.4rem', padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                    <Button width={50} height={30} text='ОК' onClick={() => setInstall(true)} />
                                </div>
                            </div>
                        </div>}
                    </Window>

                    {open && <Window title='Ошибка' isBtn onClick={() => setOpen(false)}>
                        <h3>Неправильный ключ продукта</h3>
                        <div style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Button width={50} height={30} text='ОК' onClick={() => setOpen(false)} />
                        </div>
                    </Window>}
                </div>
            </div>
        </div>
    )
}