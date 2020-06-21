import React from 'react'
import InputField from './InputField'
import Calendar from 'react-calendar'

class FuelQuoteForm extends React.Component {

   constructor(props){
      super(props);
      this.state = {
         gallons: '',
         date: new Date()
      }
  }

  getUserAddress() {
     return '301 Fannin St. Houston, Texas 77002'
  }

   getPerGallonPrice() {
      return 10
   }

   getTotalAmountDue() {
      return 100
   }

   render() {
      return (
         <div className='fuelQuoteForm'>
            Fuel Quote
            <InputField
               type='text'
               placeholder='Gallons Requested'
               value={this.state.gallons ? this.state.gallons: ''}
               onChange={(val) => this.setState({'gallons':val})}
            />

            <div>
               Shipping Address: {this.getUserAddress()}
            </div>

            <Calendar>
               onChange={(val) => this.setState({'date':val})}
               value={this.state.date}
            </Calendar>

            <div>
               Price per gallon: {this.getPerGallonPrice()}
            </div>

            <div>
               Total amount due: {this.getTotalAmountDue()}
            </div>

         </div>
      );
   }
}

export default FuelQuoteForm