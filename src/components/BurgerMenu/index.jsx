import React ,{useState} from 'react';
import Navbar from '../Navbar/Navbar';
import { Div } from './BurgerMenuElements';

const Menu = () => {
    const [state, setState] = useState({
        open:false,
    }) 
    const handelClick = () => {
        setState({ open: !state.open })
   }
    return (
        <>
            <Div open={state.open} onClick={handelClick}>
                <div></div>
                <div></div>
                <div></div>
            </Div>
            <Navbar open={state.open}/>
        </>
    );
};

export default Menu;