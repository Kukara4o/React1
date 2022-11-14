import style from './Tab.module.css';
export const Tab = (props) => {
    const { title, disabled} = props;
    const button = style.button;
    return <button disabled={disabled} className={style.button}>{title}</button>;
};