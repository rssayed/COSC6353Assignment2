import React from 'react'

class DropdownField extends React.Component {
   render() {
      return(
         <div>
            <label>
               <select value>
                  {this.props.value.map((choice) => (
                     <option>
                        {choice}
                     </option>
                  ))}
               </select>
            </label>
         </div>
      );
   }
}

export default DropdownField