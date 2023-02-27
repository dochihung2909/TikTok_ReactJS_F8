import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'

const cx = classNames.bind(styles)

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem
                avt="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1677636000&x-signature=O7gCjE%2FOS322yoTH6hGhuwdEw6o%3D"
                name="Theanh28 Entertainment"
                userName="theanh28entertainment"
            />
            <AccountItem
                avt="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1677636000&x-signature=O7gCjE%2FOS322yoTH6hGhuwdEw6o%3D"
                name="Theanh28 Entertainment"
                userName="theanh28entertainment"
            />
            <AccountItem
                avt="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1677636000&x-signature=O7gCjE%2FOS322yoTH6hGhuwdEw6o%3D"
                name="Theanh28 Entertainment"
                userName="theanh28entertainment"
            />
            <AccountItem
                avt="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1677636000&x-signature=O7gCjE%2FOS322yoTH6hGhuwdEw6o%3D"
                name="Theanh28 Entertainment"
                userName="theanh28entertainment"
            />
            <AccountItem
                avt="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1677636000&x-signature=O7gCjE%2FOS322yoTH6hGhuwdEw6o%3D"
                name="Theanh28 Entertainment"
                userName="theanh28entertainment"
            />
            <button className={cx('more-btn')}>
                <p>See all</p>
            </button>
        </div>
    )
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}

export default SuggestedAccounts
