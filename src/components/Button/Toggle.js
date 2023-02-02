import classNames from 'classnames/bind'
import styles from './Button.module.scss'
const cx = classNames.bind(styles)

function Toggle({ onClick, children }) {
    return (
        <div onClick={onClick} className={cx('toggle-wrapper')}>
            <input id="toggle" className={cx('toggle-btn')} type="checkbox" />
            <label htmlFor="toggle">{children}</label>
        </div>
    )
}

export default Toggle
