import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'

import Tippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleNotch,
    faCircleXmark,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function Header() {
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {}, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} className={cx('logo')} alt="Tiktok" />
                <Tippy
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
                        <Tippy content="Search">
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                            </button>
                        </Tippy>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>} normal medium>
                        <span>Upload</span>
                    </Button>
                    <Button primary medium>
                        Login
                    </Button>
                    {/* <button className={cx('login')}>Login</button> */}
                    <button className={cx('make-effect-btn')}>
                        <img src={images.makeEffect} />
                    </button>
                    <button className={cx('options')}>
                        <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
