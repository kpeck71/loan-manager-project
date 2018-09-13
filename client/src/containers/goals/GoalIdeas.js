import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import Select from 'react-select';
import 'react-dropdown/style.css';
import { allIdeas, getByCategory, getBetweenCost } from '../../data/ideas';
import IdeaBrowser from '../../components/goals/IdeaBrowser'

class GoalIdeas extends Component {

  constructor(props) {
    super(props)
    this.state = {
      goalIdeas: allIdeas,
      filters: {
        type: 'all'
      }
    }
  }

  onClick = (e) => {
   const type = this.state.filters.type;
   console.log('type is ', type)
   let results = ''
   if (type !== 'all'){
     let results = getByCategory(type)
     this.setState({
       goalIdeas: results
     })
    }
   }

   onChangeType = (event) => {
     // let values = event.map((e) => e.value)
     let value = event.value
     this.setState({
       filters: {
         type: value
         }
       }, () => console.log(this.state.filters))
   }

  render() {
    const typeOptions = [
      { value: 'charity', label: 'Charity' },
      { value: 'travel', label: 'Travel' },
      { value: 'fun', label: 'Fun Stuff' },
      { value: '0 to 25', label: '< $25' },
      { value: '50 to 75', label: '$50-75' },
      { value: '100+', label: '$100+' },
      { value: '300+', label: '$300+' },
    ]


    const typeOption = "Choose a Category"
    const amountOption= "Choose an Amount"

    return (
      <div className="GoalIdeas">
        <p>What kind of goal do you want to set for yourself?</p>
        <div>
          <Select options={typeOptions} onChange={this.onChangeType} placeholder="Select an option" />
          <button onClick={this.onClick}>Find goals</button>
        </div>
        <IdeaBrowser goalIdeas={this.state.goalIdeas} />
      </div>
    );
  }
}

export default GoalIdeas
