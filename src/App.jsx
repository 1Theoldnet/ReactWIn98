import { useState } from "react"
import { Desktop } from "./components/Desktop/Desktop"
import { Startbar } from "./components/Startbar/Startbar"
import { Menu } from "./components/Menu/Menu"

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
  const [command, setCommand] = useState(false)
  const [taskman, setTaskman] = useState(false)

  const [font, setFont] = useState(false)

  const [isStartbar, setIsStartbar] = useState(localStorage.getItem('isStartbar') === null ? 'bottom' : localStorage.getItem('isStartbar'))
  const [bgStartbar, setBgStartbar] = useState(localStorage.getItem('bgStartbar') === null ? 'grey' : localStorage.getItem('bgStartbar'))
  const [colorWindow, setColorWindow] = useState(localStorage.getItem('colorWindow') === null ? 'white' : localStorage.getItem('colorWindow'))
  const [bgWindow, setBgWindow] = useState(localStorage.getItem('bgWindow') === null ? 'blue' : localStorage.getItem('bgWindow'))
  const [isWindow, setIsWindow] = useState(localStorage.getItem('isWindow') === null ? false : localStorage.getItem('isWindow'))
  const [isMenu, setIsMenu] = useState(localStorage.getItem('isMenu') === null ? false : localStorage.getItem('isMenu'))
  const [background, setBackground] = useState(localStorage.getItem('background') === null ? 'https://avatars.mds.yandex.net/i?id=c0e929f1c1df741db3960d9ce77e90305679e0f7-12501258-images-thumbs&n=13' : localStorage.getItem('background'))
  const [bgButton, setBgColor] = useState(localStorage.getItem('bgButton') === null ? 'grey' : localStorage.getItem('bgButton'))
  const [colorButton, setColorButton] = useState(localStorage.getItem('colorButton') === null ? 'black' : localStorage.getItem('colorButton'))

  const [showWindow, setShowWindow] = useState(false)

  return <div>
    <Desktop setIsWindow={setIsWindow} setBgStartbar={setBgStartbar} setIsMenu={setIsMenu} setIsStartbar={setIsStartbar} setBgWindow={setBgWindow} setColorWindow={setColorWindow} setBgColor={setBgColor} setColorButton={setColorButton} setBackground={setBackground} colorButton={colorButton} bgButton={bgButton} background={background} isMenu={isMenu} isWindow={isWindow} bgWindow={bgWindow} colorWindow={colorWindow} showWindow={showWindow} setOpenMenu={setOpenMenu} explorer={explorer} setExplorer={setExplorer} help={help} setHelp={setHelp} txt={txt} setTxt={setTxt} notepad={notepad} setNotepad={setNotepad} win={win} setWin={setWin} image={image} setImage={setImage} ie={ie} setIE={setIE} setOpen={setOpen} open={open} calc={calc} setCalc={setCalc} welcome={welcome} setWelcome={setWelcome} control={control} setControl={setControl} font={font} setFont={setFont} command={command} setCommand={setCommand} taskman={taskman} setTaskman={setTaskman} />

    {openMenu && <Menu isMenu={isMenu} isStartbar={isStartbar} setOpenMenu={setOpenMenu} setExplorer={setExplorer} setHelp={setHelp} setIE={setIE} setOpen={setOpen} setControl={setControl} font={font} />}
    
    <Startbar showWindow={showWindow} isStartbar={isStartbar} bgStartbar={bgStartbar} setShowWindow={setShowWindow} setOpenMenu={setOpenMenu} openMenu={openMenu} explorer={explorer} setExplorer={setExplorer} help={help} setHelp={setHelp} txt={txt} setTxt={setTxt} notepad={notepad} setNotepad={setNotepad} win={win} setWin={setWin} image={image} setImage={setImage} ie={ie} setIE={setIE} setOpen={setOpen} open={open} calc={calc} setCalc={setCalc} welcome={welcome} setWelcome={setWelcome} control={control} setControl={setControl} font={font} command={command} setCommand={setCommand} taskman={taskman} setTaskman={setTaskman} />
  </div>
}