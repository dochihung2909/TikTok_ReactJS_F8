import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/22b18f0159ac27a4a517dd1fe8b34bac~c5_100x100.jpeg?x-expires=1675137600&x-signature=j5g8kSUgig2LYW33EJ3IUKKbBTM%3D"
                alt="Hieu"
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4>Hoaaa</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <span className={cx('username')}>hoaaaaaaa</span>
            </div>
        </div>
    )
}

export default AccountItem
