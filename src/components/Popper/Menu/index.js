import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/components/Popper'

import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

import MenuItem from './MenuItem'

const cx = classNames.bind(styles)

function Menu({ items = [], children }) {
    const renderItem = () => {
        return items.map((item, index) => <MenuItem key={index} data={item}></MenuItem>)
    }

    return (
        <Tippy
            render={(attrs) => (
                <div animation="fade" className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItem()}</PopperWrapper>
                </div>
            )}
            delay={[0, 700]}
            interactive
            placement="bottom-end"
        >
            {children}
        </Tippy>
    )
}

export default Menu
