import React, {Component} from 'react';
import { Menu } from "@material-ui/icons";
import { IconButton } from '@material-ui/core';
import DrawBar from "./DrawBar";
import './styles/NavBar.css';

class Navbar extends Component{
    state = {
        drawBarIsVisible: false,
    }

    changeDrawBarVisibility(){
        this.setState({drawBarIsVisible: !this.state.drawBarIsVisible});
    }

    render(){
        return (
            <nav id="NavBar" >
                <IconButton onClick={() => this.changeDrawBarVisibility()}>
                    <Menu className='menuBtn'/>
                </IconButton>
                <DrawBar isVisible={this.state.drawBarIsVisible} close={() => this.changeDrawBarVisibility()}/>
                <span>Portfolio</span>
            </nav>
        );
    }
}

export default Navbar;