import React from 'react'
import InputField from './InputField'
import SubmitButton from './ActionButton'
import DropdownField from './DropdownField'

// Will be moved to lower layer later
const States = ['AZ', 'TX', 'NY']

class UserProfileForm extends React.Component {
   
   defaultState = {
      fullname: '',
      addr1: '',
      addr2: '',
      city: '',
      zipcode: '',
      state: ''
   }

   constructor(props) {
      super(props)
      this.state = this.defaultState
   }

   setInputValue(property, val, maxchars){
      val = val.trim();
      if(val.length > maxchars){
          return;
      }
      this.setState({
          [property]: val
      })
   }

   resetForm(){
      this.state = this.defaultState
   }

   render() {
      return (
         <div className="loginForm">
            Update Profile:
            <InputField
               type='text'
               placeholder='Full Name'
               value={this.state.username ? this.state.username: ''}
               onChange={(val) => this.setInputValue('username', val)}
            />

            <InputField
               type='text'
               placeholder='primary address'
               value={this.state.addr1 ? this.state.addr1: ''}
               onChange={(val) => this.setInputValue('addr1', val)}
            />

            <InputField
               type='text'
               placeholder='secondary address'
               value={this.state.addr2 ? this.state.addr2: ''}
               onChange={(val) => this.setInputValue('addr2', val)}
            />

            <InputField
               type='text'
               placeholder='city'
               value={this.state.city ? this.state.city: ''}
               onChange={(val) => this.setInputValue('city', val)}
            />

            <InputField
               type='text'
               placeholder='zipcode'
               value={this.state.zipcode ? this.state.zipcode: ''}
               onChange={(val) => this.setInputValue('zipcode', val)}
            />

            <DropdownField
               value={States}
            />

            <SubmitButton
               text='Update'
               disabled={this.state.buttonDisabled}
               //onClick={() => updateFunc()}
            />
         </div>
     );
   }
}

export default UserProfileForm