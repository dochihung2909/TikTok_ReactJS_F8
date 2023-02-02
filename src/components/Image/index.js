import { forwardRef, useState } from 'react'
import images from '~/assets/images'
import styles from './Image.module.scss'
import classNames from 'classnames'

const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('')

    const handleError = () => {
        setFallBack(customFallBack)
    }

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    )
})

export default Image
