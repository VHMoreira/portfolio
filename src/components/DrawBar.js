import React, {Component} from 'react';
import { Close } from "@material-ui/icons";
import { IconButton } from '@material-ui/core';
import './styles/DrawBar.css';

class Drawbar extends Component{

    render(){
        return (
            <div id='DrawBar' style={this.props.isVisible? {display:'flex'}: {display:'none'}}>
                <IconButton className='closeBtn' onClick={this.props.close}>
                    <Close className="closeIcon"/>
                </IconButton>
                <div className="links">
                    <a href="#Home" onClick={this.props.close}><span>Boas Vindas</span></a>
                    <a href="#QuemSou" onClick={this.props.close}><span>Quem sou</span></a>
                    <a href="#Profissional" onClick={this.props.close}><span>Experiência Profissional</span></a>
                    <a href="#Projetos" onClick={this.props.close}><span>Projetos</span></a>
                    <a href="#Contatos" onClick={this.props.close}><span>Contatos</span></a>
                </div>
            </div>
        );
    }
}

export default Drawbar;