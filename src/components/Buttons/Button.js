import styles from './Button.module.css';

export const Button = (props) => {
    // console.log(props);
    const { disabled, title, type, click} = props;

    const st = {
        primary: styles.primary,
        secondary:styles.secondary,
    };

    const getFirstLeters = (name) =>
         name
            .split(' ')
            .map((el) => el[0].toUpperCase())
                .join('');



    return (
        <button
            disabled={disabled}
            className={`${st[type]}`}
            onClick={() => alert('Hi')}>
            <div className={styles.leters}>{getFirstLeters(title)}</div>
            {getFirstLeters(title) + ' | ' + title}
    </button>
);
};