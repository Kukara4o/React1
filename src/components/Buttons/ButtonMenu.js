import style from './ButtonMenu.module.css';
import {useState} from "react";
import {Title} from '../Titles/Title';
// import {Tab} from './components/Tabs/Tab';
export const ButtonMenu = (props) => {

    const [img, setImg] = useState(true);
    const {title} = props;

    return(
        <div className={style.elems}>
            <button className={`${style.Menu_button}`} onClick={() => setImg(!img)}><img className={`${style.img}`} src={img===true ? ("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png")
                : ("https://cdn-icons-png.flaticon.com/512/17/17047.png")} alt=""/></button>
            <Title title={img===true ? ('') : ('Hi')}>{title}</Title>
        </div>
    );

};