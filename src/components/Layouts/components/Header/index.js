import { useState, useEffect, Fragment } from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'

import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleNotch,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faMagnifyingGlass,
    faPlus,
    faSignOut,
    faVideo,
} from '@fortawesome/free-solid-svg-icons'
import {
    faCircleQuestion,
    faKeyboard,
    faMessage,
    faMoon,
    faPaperPlane,
    faUser,
} from '@fortawesome/free-regular-svg-icons'

import { Link } from 'react-router-dom'
import { Wrapper as PopperWrapper, Menu } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'
import Toggle from '~/components/Button/Toggle'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
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

    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {}, [])

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/userProfile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'LIVE Studio',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <img src={images.logo} className={cx('logo')} alt="Tiktok" />
                </Link>
                <HeadlessTippy
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>Accounts</h3>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                    visible={searchResults.length > 0}
                    interactive
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            className={cx('search-bar')}
                            placeholder="Search account and video"
                            spellCheck="false"
                        ></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch}></FontAwesomeIcon>
                        <HeadlessTippy content="Search">
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                            </button>
                        </HeadlessTippy>
                    </div>
                </HeadlessTippy>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>} normal medium>
                                <span>Upload</span>
                            </Button>
                            <Tippy delay={[0, 150]} content={'Message'}>
                                <button className={cx('user-action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 150]} content={'Inbox'}>
                                <button className={cx('user-action-btn')}>
                                    <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
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
                                <img src={images.makeEffect} />
                            </button>
                        </Fragment>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <button className={cx('user-avatar')}>
                                <img
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
