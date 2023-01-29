import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleNotch,
    faCircleXmark,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} className={cx('logo')} alt="Tiktok" />
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
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
                <div className={cx('action')}>
                    <button className={cx('upload')}>
                        <FontAwesomeIcon className={cx('upload-icon')} icon={faPlus}></FontAwesomeIcon>
                        Upload
                    </button>
                    <button className={cx('login')}>Login</button>
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
