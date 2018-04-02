import React, { Component } from 'react';
import Toggle, {withToggle} from './components/Toggle';
import Context from './Context';
import './App.css';

class MyProvider extends Component {
    toggle = () => {
        this.setState(({on}) => ({on: !on}));
    }
    state = { 
        on: false,
        toggle: this.toggle.bind(this)
    };
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

const MyToggle = ({on, toggle}) => {
    return <button onClick={toggle}>
        { on ? 'on' : 'off'}
    </button>
}

const MyToggleWrapper = withToggle(MyToggle)

function App() {
    return (
        <MyProvider>
            <Toggle>
                <Toggle.Button/>
                <Toggle.On>The toggle is on</Toggle.On>
                <Toggle.Off>The toggle is off</Toggle.Off>
                <MyToggleWrapper/>
            </Toggle>
        </MyProvider>
    );
}

export default App;
