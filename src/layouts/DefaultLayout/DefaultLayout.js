import styles from './DefaultLayout.module.scss'
import Header from '~/layouts/components/Header'
import Sidebar from '~/layouts/components/Sidebar'
import Button from '~/components/Button'

import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

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

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout
