import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

function MenuItem({ to, title, icon, activeIcon }) {
    const resolved = useResolvedPath(to)
    const match = useMatch({ path: resolved.pathname })
    console.log(match)
    return (
        <NavLink to={to} className={(navData) => cx('menu-item', { active: navData.isActive })}>
            {match ? activeIcon : icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    )
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
}

export default MenuItem
