import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/components/Popper'

import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

import MenuItem from './MenuItem'
import Header from './Header'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Menu({ items = [], children }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]
    console.log(current)

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children])
                        }
                    }}
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
            visible
            delay={[0, 700]}
            interactive
            placement="bottom-end"
        >
            {children}
        </Tippy>
    )
}

export default Menu
