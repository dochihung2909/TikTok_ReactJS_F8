import Button from '~/components/Button'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

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

export default MenuItem
