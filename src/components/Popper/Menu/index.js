import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/components/Popper'

import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

import MenuItem from './MenuItem'
import Header from './Header'
import { useState, useRef } from 'react'

const cx = classNames.bind(styles)

function Menu({ items = [], children }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const handleSubItem = (isParent, item) => {
        if (isParent) {
            setHistory((prev) => [...prev, item.children])
        }
    }

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return (
                <MenuItem
                    key={index}
                    data={item}
                    className={cx({ 'sub-item': history.length > 1 })}
                    onClick={() => handleSubItem(isParent, item)}
                ></MenuItem>
            )
        })
    }

    const handleBack = () => {
        setHistory((prev) => {
            return prev.slice(0, history.length - 1)
        })
    }

    return (
        <Tippy
            render={(attrs) => (
                <div animation="fade" className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {current.title && <Header title={current.title} onBack={handleBack} />}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            offset={[10, 10]}
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            hideOnClick="false"
            onHide={() => {
                setHistory([{ data: items }])
            }}
        >
            {children}
        </Tippy>
    )
}

export default Menu
