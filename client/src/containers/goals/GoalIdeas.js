import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { getAll, getByCategory, getBetweenCost } from '../../data/ideas'
import IdeaBrowser from '../../components/goals/IdeaBrowser'

class GoalIdeas extends Component {

  constructor(props) {
    super(props)
    this.state = {
      goalIdeas: [],
      filters: {
        type: 'all'
      }
    }
  }

  onCategoryClick = (e) => {
   const type = this.state.filters.type;
   // var url = `/data/ideas`;
   if (type !== 'all'){
     // url = `/api/ideas?type=${type}`;
     const results = getByCategory(type)
     console.log(type)
     console.log(results)
     this.setState({
       goalIdeas: results
     })
   }

   // fetch(url)
   //   .then(response => response.json())
   //   .then(data => this.setState({ goals: data }));
   }

   onChangeType = (e) => {
     this.setState({
       filters: {
         type: e.value,
         }
       }, () => console.log(this.state.filters))
   }

  render() {
    const options = [
    { value: 'charity', label: 'Charity' },
    { value: 'travel', label: 'Travel' },
    { value: 'fun', label: 'Fun Stuff' },
    ]

    const defaultOption = "Choose a Category"

    return (
      <div className="GoalIdeas">
        <p>What kind of goal do you want to set for yourself?</p>
        <div style={{width: '50%'}} >
        <Dropdown options={options} onChange={this.onChangeType} value={defaultOption} placeholder="Select an option" />
        <button onClick={this.onCategoryClick}>Find goals</button>
        </div>
        <IdeaBrowser goalIdeas={this.state.goalIdeas} />
      </div>
    );
  }
}

export default GoalIdeas
