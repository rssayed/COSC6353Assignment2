import React from 'react'
import InputField from './InputField'
import SubmitButton from './ActionButton'

class LoginForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false
        }
    }

    setInputValue(property, val){
        val = val.trim();
        if(val.length > 12){
            return;
        }
        this.setState({
            [property]: val
        })
    }

    resetForm(){
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
    }
    
    render(){
        return (
            <div className="loginForm">
                Log in:
                <InputField
                    type='text'
                    placeholder='Username'
                    value={this.state.username ? this.state.username: ''}
                    onChange={(val) => this.setInputValue('username', val)}
                />

                <InputField
                    type='password'
                    placeholder='Password'
                    value={this.state.password ? this.state.password: ''}
                    onChange={(val) => this.setInputValue('password', val)}
                />

                <SubmitButton
                    text='Login'
                    disbled={this.state.buttonDisabled}
                    //onClick={() => loginFunc()}
                />

                <SubmitButton
                    text='Register'
                    disabled={this.state.buttonDisabled}
                    //onClick={() => registerFunc()}
                />
            </div>
        );
    }
}

export default LoginForm