import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'

import Header from '~/layouts/components/Header'
import Sidebar from './Sidebar'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>{children}</div>
            </div>

            <Button
                className={cx('back-to-top')}
                rounded
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Get app
            </Button>
        </div>
    )
}

export default DefaultLayout
