import React, { Component } from 'react';
import Switch from './switch';
import Context from '../Context';

export function withToggle (Component) {
    function Wrapper ({children}) {
        return (
        <Context.Consumer>
            {(context) => {
                return (
                    <Component {...context}>
                        {children}
                    </Component>
                )
            }}
            </Context.Consumer>
        );
    }
    Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`
    return Wrapper;
}

const ToggleOn = ({on, children}) => {
    return on ? null : <p>{children}</p>
};

const ToggleOff = ({on, children}) => {
    return on ? <p>{children}</p> : null 
};

const ToggleButton = ({on, toggle}) => {
    return <Switch on={on} onClick={toggle}/>
};

export default class Toggle extends Component {
    static On = withToggle(ToggleOn);
    static Off = withToggle(ToggleOff);
    static Button = withToggle(ToggleButton); 
    static defaultProps = {
        onToggle: () => {},
    }
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}