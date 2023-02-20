import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import Menu, { MenuItem } from './Menu'
import config from '~/config'
import {
    GroupUserIcon,
    GroupUserActiveIcon,
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons'

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<GroupUserIcon />}
                    activeIcon={<GroupUserActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                ></MenuItem>
            </Menu>
        </aside>
    )
}

export default Sidebar
