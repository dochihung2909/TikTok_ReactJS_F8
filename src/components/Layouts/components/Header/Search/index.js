import HeadlessTippy from '@tippyjs/react/headless'
import { useState, useEffect, useRef } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import AccountItem from '~/components/AccountItem'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import styles from './Search.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Search() {
    const [searchResults, setSearchResults] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(false)

    const searchRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 2])
        }, 0)
    }, [])

    const handleClear = () => {
        setSearchValue('')
        setSearchResults([])
        searchRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h3 className={cx('search-title')}>Accounts</h3>
                        {searchResults.map((result, index) => (
                            <AccountItem key={index}></AccountItem>
                        ))}
                    </PopperWrapper>
                </div>
            )}
            visible={searchValue && showResult && searchResults.length > 0}
            interactive
            placement="bottom-start"
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={searchRef}
                    value={searchValue}
                    type="text"
                    className={cx('search-bar')}
                    placeholder="Search accounts and videos"
                    spellCheck="false"
                    onInput={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                ></input>
                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                )}
                <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch}></FontAwesomeIcon>
                <Tippy content="Search">
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </Tippy>
            </div>
        </HeadlessTippy>
    )
}

export default Search
