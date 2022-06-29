import classnames from 'classnames'
import { FieldProps, useField } from 'formik'
import React from 'react'
import '../../styles/formFields.scss'

export const TextInput: React.FC<any & FieldProps> = ({
    width,
    innerComponent,
    className,
    ...props
}) => {
    const [field, meta, helpers] = useField(props)
    const classes = classnames('FormField', className, {
        [`Width-${width}`]: !!width,
    })
    return (
        <div className={classes}>
            <input {...field} {...props} type="text" className="FormInput" />
            {innerComponent && innerComponent}

            {meta.touched && meta.error ? (
                <div className="FormError">{meta.error}</div>
            ) : null}
        </div>
    )
}
