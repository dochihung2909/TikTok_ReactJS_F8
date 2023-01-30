import Button from '~/components/Button'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ data }) {
    return (
        <div>
            <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon}>
                {data.title}
            </Button>
        </div>
    )
}

export default MenuItem
