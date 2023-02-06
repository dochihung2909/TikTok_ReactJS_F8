import HeadlessTippy from '@tippyjs/react/headless'
import { useState, useEffect, useRef } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'

import AccountItem from '~/components/AccountItem'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Search.module.scss'
import { useDebounce } from '~/hooks'
import * as searchService from '~/apiServices/searchService'

const cx = classNames.bind(styles)

function Search() {
    const [searchResults, setSearchResults] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)

    const searchRef = useRef()

    const debounce = useDebounce(searchValue, 1000)

    useEffect(() => {
        if (!debounce) {
            setSearchResults([])
            return
        }
        setLoading(true)
        // Call API
        const fetchApi = async () => {
            const result = await searchService.search(debounce)

            setSearchResults(result)
            setLoading(false)
        }
        fetchApi()
    }, [debounce])

    const handleClear = () => {
        setSearchValue('')
        setSearchResults([])
        searchRef.current.focus()
    }

    const handleInputSearch = (e) => {
        const value = e.target.value
        if (value === false) {
            setSearchValue(value.trim())
        } else {
            setSearchValue(value)
        }
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
                        {searchResults.map((result) => (
                            <AccountItem key={result.id} data={result}></AccountItem>
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
                    onInput={(e) => handleInputSearch(e)}
                    onFocus={() => setShowResult(true)}
                ></input>
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch}></FontAwesomeIcon>}
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
