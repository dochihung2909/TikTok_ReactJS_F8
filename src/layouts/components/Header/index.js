import { Menu } from '~/components/Popper'
import Button from '~/components/Button'
import Toggle from '~/components/Button/Toggle'
import { InboxIcon, MessageIcon, PlusIcon } from '~/components/Icons'
import Image from '~/components/Image'
import images from '~/assets/images'
import styles from './Header.module.scss'
import Search from './Search'
import config from '~/config/'

import { Fragment } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faPlus,
    faSignOut,
    faVideo,
} from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion, faKeyboard, faMoon, faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language123',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>,
        title: 'Dark mode',
        isDark: true,
        rIcon: <Toggle></Toggle>,
    },
]

function Header() {
    const currentUser = true

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: config.routes.userProfile,
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: config.routes.coins,
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'LIVE Studio',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: config.routes.setting,
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: config.routes.logout,
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <img src={images.logo} className={cx('logo')} alt="Tiktok" />
                </Link>
                {/* Search */}
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button leftIcon={<PlusIcon />} normal medium>
                                <span>Upload</span>
                            </Button>
                            <Tippy delay={[0, 150]} content={'Message'}>
                                <button className={cx('user-action-btn')}>
                                    <MessageIcon />
                                    <span className={cx('badge')}>122</span>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 150]} content={'Inbox'}>
                                <button className={cx('user-action-btn', 'inbox-icon')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Fragment>
                            <Button leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>} normal medium>
                                <span>Upload</span>
                            </Button>
                            <Button primary medium>
                                Login
                            </Button>
                            <button className={cx('make-effect-btn')}>
                                <img src={images.makeEffect} alt="Make EffectTraversy Media" />
                            </button>
                        </Fragment>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <button className={cx('user-avatar')}>
                                <Image
                                    alt={currentUser.toString()}
                                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/22b18f0159ac27a4a517dd1fe8b34bac~c5_100x100.jpeg?x-expires=1675137600&x-signature=j5g8kSUgig2LYW33EJ3IUKKbBTM%3D"
                                />
                            </button>
                        ) : (
                            <button className={cx('options')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
