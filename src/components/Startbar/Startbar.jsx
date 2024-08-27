import './Startbar.scss'
import { Button } from "../ui/Button/Button"

export const Startbar = ({ user, setOpenMenu, openMenu, explorer, setExplorer, help, setHelp, txt, setTxt, notepad, setNotepad, win, setWin, image, setImage, ie, setIE, setOpen, open, calc, setCalc, welcome, setWelcome, control, setControl, font, chat, setChat, letter, setLetter, command, setCommand, taskman, setTaskman }) => {
    return (
        <div className="startbar" style={{ background: `${user?.bgStartbar}` }}>
            <Button text={font ? '_____' : 'Start'} onClick={() => setOpenMenu(!openMenu)} />
            <div className="quvicks">
                <div className='quvick' onClick={() => { setExplorer(false), setHelp(false), setTxt(false), setNotepad(false), setWin(false), setImage(false), setIE(false), setOpen(false), setCalc(false), setWelcome(false), setControl(false), setChat(false), setLetter(false), setCommand(false), setTaskman(false) }}>
                    <img src="https://64.media.tumblr.com/ac3f1df3b5926d156ce5380a0a3fc316/1e54630572dcf2a2-1a/s540x810/b6c1e86a2a3b4d7befe0c8422611e42a1b30791f.png" />
                </div>
                <div className='quvick' onClick={() => setIE(true)}>
                    <img src="https://64.media.tumblr.com/78e5e1fb87d13924b0a4b410d131b930/c6cb2fd44af16922-23/s540x810/1afa8a3117c9b8643b207a66449e9a9f8317dd5e.png" />
                </div>
                <div className='quvick right' onClick={() => setExplorer(true)}>
                    <img src="https://64.media.tumblr.com/145ba88ac8fe8889043d8a929607a58e/9bd9b9bbc752d2be-8c/s540x810/b48368228fd7effc48dac782474ae5b683b64db6.png" />
                </div>
            </div>
            <div className='apps'>
                {explorer && <div className='app' onClick={() => setExplorer(false)}>
                    <img src="https://64.media.tumblr.com/145ba88ac8fe8889043d8a929607a58e/9bd9b9bbc752d2be-8c/s540x810/b48368228fd7effc48dac782474ae5b683b64db6.png" />
                    <b>{font ? '_________' : 'Проводник'}</b>
                </div>}

                {command && <div className='app' onClick={() => setCommand(false)}>
                    <img src="https://64.media.tumblr.com/97be78594f1e4d436f7bb370c7a6f686/fa69fb22c9d76ca2-60/s540x810/1ab18fa126787e9e10ca198e5302dbaea5d15f4c.png" />
                    <b>{font ? '_________' : 'MS-DOS prompt'}</b>
                </div>}

                {control && <div className='app' onClick={() => setControl(false)}>
                    <img src="https://win98icons.alexmeub.com/icons/png/directory_control_panel_cool-4.png" />
                    <b>{font ? '______ __________' : 'Панель управления'}</b>
                </div>}

                {taskman && <div className='app' onClick={() => setTaskman(false)}>
                    <img src="https://64.media.tumblr.com/de739f53d0b25890cc4239e013a3d34c/457d8691505d2e11-1b/s1280x1920/5caf0bccbe2a01162648153eac9e5a337e7c60dd.png" />
                    <b>{font ? '______' : 'Taskman'}</b>
                </div>}

                {letter && <div className='app' onClick={() => setLetter(false)}>
                    <img src="https://64.media.tumblr.com/28f7d41869ff8aec052777020eeb6242/3f276049d15c8c6e-91/s540x810/385b0d2b0f77ad276bbbdc640695b2b71a483d7a.png" />
                    <b>{font ? '_____' : 'Почта'}</b>
                </div>}

                {chat && <div className='app' onClick={() => setChat(false)}>
                    <img src="https://64.media.tumblr.com/ed74df4f311fb03716ecfd541736bab6/68ea07cdc3fbb503-fb/s540x810/1e9cc23bcb0739462b961f57ea3f5f1a5128a385.png" />
                    <b>{font ? '____' : 'Chat'}</b>
                </div>}

                {help && <div className='app' onClick={() => setHelp(false)}>
                    <img src="https://res.cloudinary.com/penry/image/upload/v1474990254/help_book_small_ra0uhc.ico" />
                    <b>{font ? '_______' : 'Справка'}</b>
                </div>}

                {txt && <div className='app' onClick={() => setTxt(false)}>
                    <img src="https://64.media.tumblr.com/18c2a365f1c29f9ac87483aa28bec32a/7278b44044d05aac-19/s540x810/b6652a087de2d49c1a45251d3b0ba18ea07cc965.png" />
                    <b>{font ? '______' : 'Readme'}</b>
                </div>}

                {notepad && <div className='app' onClick={() => setNotepad(false)}>
                    <img src="https://64.media.tumblr.com/73f34eb6543708c5b237fd739b389a55/a76707adad47a36a-a6/s540x810/d5ca09678f2f10b2fa2f553a2c28a650fe3732b4.png" />
                    <b>{font ? '_______' : 'Notepad'}</b>
                </div>}

                {win && <div className='app' onClick={() => setWin(false)}>
                    <img src="https://64.media.tumblr.com/115e57a6dfcf00b6c4671c05094683a4/e0f6c415c66a9725-87/s540x810/35ed66e525c6b94402b93f93a832045cbf22bb74.png" />
                    <b>{font ? '______' : 'Winver'}</b>
                </div>}

                {calc && <div className='app' onClick={() => setCalc(false)}>
                    <img src="https://64.media.tumblr.com/c8d12905363fffff08c37f8eca363590/2e42f87909d61a4f-81/s540x810/4c69d12663cfa490bdc6f7f07bd8ae881dcc58cf.png" />
                    <b>{font ? '____' : 'Calc'}</b>
                </div>}

                {image && <div className='app' onClick={() => setImage(false)}>
                    <img src="https://64.media.tumblr.com/0bfe58dfae1d6f346e01e6511f1c6442/e0d6a4ae716e89a1-a9/s540x810/17dea01d51239ab276b7060b6b9b8b8440a5ad46.png" />
                    <b>{font ? '_____' : 'Image'}</b>
                </div>}

                {ie && <div className='app' onClick={() => setIE(false)}>
                    <img src="https://64.media.tumblr.com/78e5e1fb87d13924b0a4b410d131b930/c6cb2fd44af16922-23/s540x810/1afa8a3117c9b8643b207a66449e9a9f8317dd5e.png" />
                    <b>{font ? '_______ ________' : 'Internet Explorer'}</b>
                </div>}

                {open && <div className='app' onClick={() => setOpen(false)}>
                    <img src="https://res.cloudinary.com/penry/image/upload/v1474990231/application_hourglass_small_yyhy5z.ico" />
                    <b>{font ? '_________' : 'Выполнить'}</b>
                </div>}

                {welcome && <div className='app' onClick={() => setWelcome(false)}>
                    <img src="https://64.media.tumblr.com/ed74df4f311fb03716ecfd541736bab6/68ea07cdc3fbb503-fb/s540x810/1e9cc23bcb0739462b961f57ea3f5f1a5128a385.png" />
                    <b>{font ? '_______' : 'Welcome'}</b>
                </div>}
            </div>
        </div>
    )
}