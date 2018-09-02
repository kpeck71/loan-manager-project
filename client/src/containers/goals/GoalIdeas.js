import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


const GoalIdeas = props => {
  const options = [
  { value: '25', label: 'Up to $25' },
  { value: '50', label: '$25 - 50' },
  { value: '100', label: '$50 - 100' },
  { value: '150', label: '$100 - 150' },
  { value: '500', label: '500+' },
  ]

  const defaultOption = "Pick an amount"

    return (
      <div className="GoalIdeas">
        <p>Filter based on how much you want to put aside for a new goal</p>
        <div style={{width: '50%'}} >
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        </div>


        <ul>
          <li>Flights for under $/budgetamount/</li>
          <li>Donate it!</li>
          <li>Savings!</li>
        </ul>
      </div>
    );
  }

export default GoalIdeas
