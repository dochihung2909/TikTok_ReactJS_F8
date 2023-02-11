import styles from './Button.module.scss'

import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    small = false,
    medium = false,
    large = false,
    normal = false,
    disabled = false,
    rounded = false,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps,
    }

    if (disabled) {
        // eslint-disable-next-line array-callback-return
        Object.keys(props).map((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        normal,
        small,
        medium,
        large,
        disabled,
        rounded,
        [className]: className,
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    normal: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button