import React from "react";
import styles from './FormsControl.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    // деструктуризацией достаем инпут, мета и оставшиеся методы оставить в пропсах

    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
                {props.children}
            </div>
            <div className={styles.formControl + ' ' + styles.error}>
                {hasError && <span>{meta.error}</span>}

            </div>
        </div>
    )

};

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
};
