import Button from '~/components/Button'
import styles from './Menu.module.scss'

import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function MenuItem({ data, onClick, className }) {
    const classes = cx(
        'menu-item',
        {
            separate: data.separate,
        },
        className,
    )
    return (
        <div>
            <Button className={classes} to={data.to} leftIcon={data.icon} rightIcon={data.rIcon} onClick={onClick}>
                {data.title}
            </Button>
        </div>
    )
}

MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
    classNames: PropTypes.string,
}

export default MenuItem
