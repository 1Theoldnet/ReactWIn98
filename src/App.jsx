import { useState } from "react"
import { Desktop } from "./components/Desktop/Desktop"
import { Startbar } from "./components/Startbar/Startbar"
import { Menu } from "./components/Menu/Menu"
import { Login } from "./components/Login/Login"
import { Window } from "./components/ui/Window/Window"
import { Install } from "./components/Install/Install"

export const App = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [open, setOpen] = useState(false)

  const [explorer, setExplorer] = useState(false)
  const [txt, setTxt] = useState(false)
  const [notepad, setNotepad] = useState(false)
  const [help, setHelp] = useState(false)
  const [win, setWin] = useState(false)
  const [image, setImage] = useState(false)
  const [ie, setIE] = useState(false)
  const [calc, setCalc] = useState(false)
  const [welcome, setWelcome] = useState(true)
  const [control, setControl] = useState(false)
  const [chat, setChat] = useState(false)
  const [letter, setLetter] = useState(false)
  const [command, setCommand] = useState(false)
  const [taskman, setTaskman] = useState(false)

  const [auth, setAuth] = useState(false)

  const [user, setUser] = useState({})

  const [font, setFont] = useState(false)

  const [install, setInstall] = useState(false)

  if(!install) return <Install setInstall={setInstall} />

  if(!auth) return <Login font={font} setAuth={setAuth} setUser={setUser} />

  return <>
    <Desktop setOpenMenu={setOpenMenu} explorer={explorer} setExplorer={setExplorer} help={help} setHelp={setHelp} txt={txt} setTxt={setTxt} notepad={notepad} setNotepad={setNotepad} win={win} setWin={setWin} image={image} setImage={setImage} ie={ie} setIE={setIE} setOpen={setOpen} open={open} calc={calc} setCalc={setCalc} welcome={welcome} setWelcome={setWelcome} control={control} setControl={setControl} font={font} setFont={setFont} chat={chat} setChat={setChat} user={user} setUser={setUser} letter={letter} setLetter={setLetter} command={command} setCommand={setCommand} taskman={taskman} setTaskman={setTaskman} />

    {openMenu && <Menu user={user} setOpenMenu={setOpenMenu} setExplorer={setExplorer} setHelp={setHelp} setIE={setIE} setOpen={setOpen} setAuth={setAuth} setControl={setControl} font={font} setChat={setChat} setUser={setUser} setLetter={setLetter} />}
    
    <Startbar user={user} setOpenMenu={setOpenMenu} openMenu={openMenu} explorer={explorer} setExplorer={setExplorer} help={help} setHelp={setHelp} txt={txt} setTxt={setTxt} notepad={notepad} setNotepad={setNotepad} win={win} setWin={setWin} image={image} setImage={setImage} ie={ie} setIE={setIE} setOpen={setOpen} open={open} calc={calc} setCalc={setCalc} welcome={welcome} setWelcome={setWelcome} control={control} setControl={setControl} font={font} chat={chat} setChat={setChat} letter={letter} setLetter={setLetter} command={command} setCommand={setCommand} taskman={taskman} setTaskman={setTaskman} />
  </>
}