import React from 'react'

class ActionButton extends React.Component {
    render(){
        return (
            <div className="submitButton">
                <button
                    className="bttn"
                    disabled={this.props.disabled}
                    //onClick={() => this.props.onClick()}
                >
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default ActionButton