import React from 'react';

const BudgetInput = props => {
  // const renderFields = {
    // if (props.income > 0){
    //   return (
    //     <input type="text" name="expense_name" value={props.expense_name} placeholder="Monthly Expense" onChange={props.handleChange} />
    //     <input type="number" name="expense_amount" value={props.expense_amount} placeholder="Total" onChange={props.handleChange} />
    //     <input type="text" name="expense_category" value={props.expense_category} placeholder="Category" onChange={props.handleChange} />
    //   )
    // } else {
    //   return (
    //     <input type="text" name="income" value={this.props.income } placeholder="Monthly Income" onChange={this.props.handleChange} />
    //   )
    // }
  // }

    return (
      <React.Fragment>
        <div className="col-md-5 border border-primary rounded m-2 p-1 mx-auto">
          <h3>First things first - how much do you have to spend each month?</h3>
          <form onSubmit={props.handleSubmit}>
            <input type="number" name="income" value={props.income} placeholder="Monthly Income" onChange={props.handleChange}/>
            <input type="submit" />
          </form>
        </div>
      </React.Fragment>
    );
  }

export default BudgetInput;
