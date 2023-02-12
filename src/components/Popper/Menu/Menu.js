import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import Header from './Header'

import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { useState } from 'react'

const cx = classNames.bind(styles)

const defaultFn = () => {}

function Menu({ items = [], children, hideOnClick = false, onChange = defaultFn }) {
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

    const renderResult = (attrs) => (
        <div animation="fade" className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    )

    // Reset menu to first page
    const handleResetMenu = () => {
        setHistory([{ data: items }])
    }

    return (
        <Tippy
            render={renderResult}
            offset={[10, 10]}
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            hideOnClick={hideOnClick}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    )
}

Menu.propTypes = {
    items: PropTypes.array,
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu
