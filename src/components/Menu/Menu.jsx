import './Menu.scss'

export const Menu = ({ setOpenMenu, setExplorer, setHelp, setIE, setOpen, setControl, font, isStartbar, isMenu }) => {
    return (
        <>
            {isStartbar === 'bottom' && isMenu ? <div className="menu">
                <ul className="menu-content">
                    <li className="item" onClick={() => { setOpenMenu(false), setControl(true) }}><img src='https://win98icons.alexmeub.com/icons/png/directory_control_panel_cool-4.png' /><b>{font ? '______ _______' : 'Панель управления'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setIE(true) }}><img src='https://64.media.tumblr.com/78e5e1fb87d13924b0a4b410d131b930/c6cb2fd44af16922-23/s540x810/1afa8a3117c9b8643b207a66449e9a9f8317dd5e.png' /><b>{font ? '_______' : 'Internet'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setExplorer(true) }}><img src='https://64.media.tumblr.com/145ba88ac8fe8889043d8a929607a58e/9bd9b9bbc752d2be-8c/s540x810/b48368228fd7effc48dac782474ae5b683b64db6.png' /><b>{font ? '_________' : 'Проводник'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setHelp(true) }}><img src='https://res.cloudinary.com/penry/image/upload/v1474990254/help_book_small_ra0uhc.ico' /><b>{font ? '_______' : 'Справка'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setOpen(true) }}><img src='https://res.cloudinary.com/penry/image/upload/v1474990231/application_hourglass_small_yyhy5z.ico' /><b>{font ? '_________' : 'Выполнить'}</b></li>
                    <li className="item" onClick={() => setOpenMenu(false)}><img src='https://res.cloudinary.com/penry/image/upload/v1474990258/key_win_anpnfo.ico' /><b>{font ? '___ ___' : 'Log off'}</b></li>
                    <li className="item" onClick={() => setOpenMenu(false)}><img src='https://res.cloudinary.com/penry/image/upload/v1474990281/shut_down_normal_t24or4.ico' /><b>{font ? '________' : 'Shutdown'}</b></li>
                </ul>
            </div> : isStartbar === 'bottom' && !isMenu ? <div className="m">
                <div className="sidebar"></div>
                <div className="headline"><b>Windows 98 v2.0</b></div>
                <ul className="mc">
                    <li className="item" onClick={() => { setOpenMenu(false), setControl(true) }}><img src='https://win98icons.alexmeub.com/icons/png/directory_control_panel_cool-4.png' /><b>{font ? '______ _______' : 'Панель управления'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setIE(true) }}><img src='https://64.media.tumblr.com/78e5e1fb87d13924b0a4b410d131b930/c6cb2fd44af16922-23/s540x810/1afa8a3117c9b8643b207a66449e9a9f8317dd5e.png' /><b>{font ? '_______' : 'Internet'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setExplorer(true) }}><img src='https://64.media.tumblr.com/145ba88ac8fe8889043d8a929607a58e/9bd9b9bbc752d2be-8c/s540x810/b48368228fd7effc48dac782474ae5b683b64db6.png' /><b>{font ? '_________' : 'Проводник'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setHelp(true) }}><img src='https://res.cloudinary.com/penry/image/upload/v1474990254/help_book_small_ra0uhc.ico' /><b>{font ? '_______' : 'Справка'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setOpen(true) }}><img src='https://res.cloudinary.com/penry/image/upload/v1474990231/application_hourglass_small_yyhy5z.ico' /><b>{font ? '_________' : 'Выполнить'}</b></li>
                    <li className="item" onClick={() => setOpenMenu(false)}><img src='https://res.cloudinary.com/penry/image/upload/v1474990258/key_win_anpnfo.ico' /><b>{font ? '___ ___' : 'Log off'}</b></li>
                    <li className="item" onClick={() => setOpenMenu(false)}><img src='https://res.cloudinary.com/penry/image/upload/v1474990281/shut_down_normal_t24or4.ico' /><b>{font ? '________' : 'Shutdown'}</b></li>  
                </ul>
            </div> : isStartbar === 'top' && isMenu ? <div className="menu-top-animate">
                <ul className="menu-content">
                    <li className="item" onClick={() => { setOpenMenu(false), setControl(true) }}><img src='https://win98icons.alexmeub.com/icons/png/directory_control_panel_cool-4.png' /><b>{font ? '______ _______' : 'Панель управления'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setIE(true) }}><img src='https://64.media.tumblr.com/78e5e1fb87d13924b0a4b410d131b930/c6cb2fd44af16922-23/s540x810/1afa8a3117c9b8643b207a66449e9a9f8317dd5e.png' /><b>{font ? '_______' : 'Internet'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setExplorer(true) }}><img src='https://64.media.tumblr.com/145ba88ac8fe8889043d8a929607a58e/9bd9b9bbc752d2be-8c/s540x810/b48368228fd7effc48dac782474ae5b683b64db6.png' /><b>{font ? '_________' : 'Проводник'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setHelp(true) }}><img src='https://res.cloudinary.com/penry/image/upload/v1474990254/help_book_small_ra0uhc.ico' /><b>{font ? '_______' : 'Справка'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setOpen(true) }}><img src='https://res.cloudinary.com/penry/image/upload/v1474990231/application_hourglass_small_yyhy5z.ico' /><b>{font ? '_________' : 'Выполнить'}</b></li>
                    <li className="item" onClick={() => setOpenMenu(false)}><img src='https://res.cloudinary.com/penry/image/upload/v1474990258/key_win_anpnfo.ico' /><b>{font ? '___ ___' : 'Log off'}</b></li>
                    <li className="item" onClick={() => setOpenMenu(false)}><img src='https://res.cloudinary.com/penry/image/upload/v1474990281/shut_down_normal_t24or4.ico' /><b>{font ? '________' : 'Shutdown'}</b></li>
                </ul>
            </div> : isStartbar === 'top' && !isMenu ? <div className="menu-top-not-animate">
                <div class="sidebar"></div>
                <div class="headline"><b>Windows 98 v2.0</b></div>
                <ul class="mc">
                    <li className="item" onClick={() => { setOpenMenu(false), setControl(true) }}><img src='https://win98icons.alexmeub.com/icons/png/directory_control_panel_cool-4.png' /><b>{font ? '______ _______' : 'Панель управления'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setIE(true) }}><img src='https://64.media.tumblr.com/78e5e1fb87d13924b0a4b410d131b930/c6cb2fd44af16922-23/s540x810/1afa8a3117c9b8643b207a66449e9a9f8317dd5e.png' /><b>{font ? '_______' : 'Internet'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setExplorer(true) }}><img src='https://64.media.tumblr.com/145ba88ac8fe8889043d8a929607a58e/9bd9b9bbc752d2be-8c/s540x810/b48368228fd7effc48dac782474ae5b683b64db6.png' /><b>{font ? '_________' : 'Проводник'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setHelp(true) }}><img src='https://res.cloudinary.com/penry/image/upload/v1474990254/help_book_small_ra0uhc.ico' /><b>{font ? '_______' : 'Справка'}</b></li>
                    <li className="item" onClick={() => { setOpenMenu(false), setOpen(true) }}><img src='https://res.cloudinary.com/penry/image/upload/v1474990231/application_hourglass_small_yyhy5z.ico' /><b>{font ? '_________' : 'Выполнить'}</b></li>
                    <li className="item" onClick={() => setOpenMenu(false)}><img src='https://res.cloudinary.com/penry/image/upload/v1474990258/key_win_anpnfo.ico' /><b>{font ? '___ ___' : 'Log off'}</b></li>
                    <li className="item" onClick={() => setOpenMenu(false)}><img src='https://res.cloudinary.com/penry/image/upload/v1474990281/shut_down_normal_t24or4.ico' /><b>{font ? '________' : 'Shutdown'}</b></li>  
                </ul>
            </div> : <></>}
        </>
    )
}