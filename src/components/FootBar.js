import React, {Component} from 'react';
import { Computer, Smartphone, Storage, Cloud, Language, Web} from "@material-ui/icons";
import './styles/FootBar.css';

class Footbar extends Component{

    render(){
        return (
            <nav id="FootBar" >
                <span><Web/><Computer/><Smartphone/><Language/><Storage/><Cloud/></span>
            </nav>
        );
    }
}

export default Footbar;