import React, { Component } from 'react';
// import Dropdown from 'react-dropdown';
import Select from 'react-select';
import 'react-dropdown/style.css';
import { allIdeas, getByCategory, getBetweenCost } from '../data/ideas';
import { createGoal } from '../actions/goals'
import IdeaBrowser from '../components/IdeaBrowser'

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

  onClick = (event) => {
   const type = this.state.filters.type;
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


     handleAdd = goal => {
       this.props.createGoal(goal);
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
        <div style={{width: '35%', margin: 'auto', padding: '5px'}}>
          <Select options={typeOptions} onChange={this.onChangeType} placeholder="What kind of goal do you want to set for yourself?"/>
          <button style={{marginTop: 10}} onClick={this.onClick}>Find goals</button>
        </div>
        <IdeaBrowser goalIdeas={this.state.goalIdeas} />
      </div>
    );
  }
}

export default GoalIdeas
