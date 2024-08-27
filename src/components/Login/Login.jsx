import { useState } from "react"
import { Button } from "../ui/Button/Button"
import { Input } from "../ui/Input/Input"
import { Window } from "../ui/Window/Window"
import axios from "axios"

export const Login = ({ setAuth, font, setUser }) => {
    const [open, setOpen] = useState(false)

    const [form ,setForm] = useState({
        name: '',
        password: '',
        name1: '',
        password1: ''
    })

    return (
        <div className="login">
            <Window title={!open ? 'Login' : 'Sign up'} isBtn={false}>
                {!open ? <>
                    <Input value={form.name} placeholder='Имя' onChange={e => setForm({...form, name: e.target.value})} />
                    <br />
                    <div style={{ marginTop: '3px' }}><Input value={form.password} onChange={e => setForm({...form, password: e.target.value })} placeholder='Пароль' /></div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '3px' }}>
                        <Button disabled={form.name === '' || form.password === '' ? true : false} text={font ? '_____' : 'Login'} onClick={async () => {
                            try {
                                const dto = {
                                    name: form.name,
                                    password: form.password
                                }

                                await axios
                                    .post('http://localhost:3000/api/user/login', dto)
                                    .then(res => {
                                        if(res.data === false) {
                                            return alert('Неправильное имя или пароль!')
                                        } 

                                        setUser(res.data)
                                        setForm({ ...form, name: '', password: '' })
                                        setAuth(true)
                                    })
                            } catch (error) {
                                console.error(error)
                            }
                        }} />

                        <Button text={font ? '____ __' : 'Sign up'} onClick={() => setOpen(true)} />
                    </div>
                </> : <>
                    <Input value={form.name1} placeholder='Имя' onChange={e => setForm({...form, name1: e.target.value })} />
                    <br />
                    <div style={{ marginTop: '3px' }}><Input value={form.password1} onChange={e => setForm({...form, password1: e.target.value })} placeholder='Пароль' /></div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '3px' }}>
                        <Button disabled={form.name1 === '' || form.password1 === '' ? true : false} text={font ? '____ __' : 'Sign up'} onClick={async () => {
                            try {
                                const dto = {
                                    name: form.name1,
                                    password: form.password1
                                }

                                axios
                                    .post('http://localhost:3000/api/user/register', dto)
                                    .then(() => { alert('Успешно'), setOpen(false), setForm({ ...form, name1: '', password1: '' }) })
                            } catch (error) {
                                console.error(error)
                            }
                        }} />

                        <Button text={font ? '_____' : 'Login'} onClick={() => setOpen(false)} />
                    </div>
                </>}
            </Window>
        </div>
    )
}