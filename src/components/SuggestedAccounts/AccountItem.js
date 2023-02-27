import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'
import { Link } from 'react-router-dom'
import { CheckIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function AccountItem({ avt, name, userName }) {
    return (
        <Link to={`/@${userName}`} className={cx('account-item')}>
            <div className={cx('account-avt')}>
                <img src={avt} alt="user-avatar" />
            </div>
            <div className={cx('account-info')}>
                <div className={cx('account-username')}>
                    <h4>{userName}</h4>
                    <div>
                        <CheckIcon className={cx('check')} />
                    </div>
                </div>

                <p className={cx('account-name')}>{name}</p>
            </div>
        </Link>
    )
}

AccountItem.propTypes = {
    avt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
}

export default AccountItem
