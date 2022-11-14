import './Dz.css';
import {Title} from './components/Titles/Title';
import {ButtonMenu} from './components/Buttons/ButtonMenu';
import {Tab} from './components/Tabs/Tab';

function Dz() {

    return(
        <div className="Dz">
            <Title title={'Sign In'}/>
            <div className='Menu'>
                <div className='menu_area'>
                    <ButtonMenu />
                </div>
            </div>
            <div className='main'>
                <Tab title={"All"} />
                <div className='hov'><Tab title={"My favourite"}/></div>
                <Tab disabled title={"Popular"}/>
            </div>
        </div>
    );
}

export default Dz;