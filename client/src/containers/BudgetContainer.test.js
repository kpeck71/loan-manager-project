import React from 'react'
import 'react-testing-library/cleanup-after-each'
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"
import { cleanup, render, fireEvent } from 'react-testing-library'
import BudgetContainer from './BudgetContainer'
import BudgetInput from './BudgetInput'
import {reducer, App} from '../App'

// props factory to help us arrange tests for this component

const createStore = () => {
  const mockStore = configureMockStore();
  const store = mockStore({});
}

const createEmptyExpensesProps = props => ({
  budget: {
    expenseTotal: 0,
    expenses: [],
    income: [],
  },
  createExpense: jest.fn(), ...props
})


const createProps = props => ({
  budget: {
    expenseTotal: 350,
    expenses: [
		{
			// id: 'comment-0',
			name: 'Groceries',
			amount: 150,
			category: 'Essentials'
		},
		{
			name: 'Dinner out',
			amount: 100,
			category: 'Fun'
		}
	 ],
   income: [1000]
 },
	createExpense: jest.fn(), ...props
})


describe('BudgetContainer', () => {
  afterEach(cleanup);

  it('renders the Budget Container', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});
    const HEADER_TEXT = "Current Expenses:"
    let props = createEmptyExpensesProps()
    const { queryByText } = render(
      <Provider store={store}>
      <BudgetContainer {...props} />
      <BudgetInput {...props} />
      </Provider>)
    const header = queryByText(HEADER_TEXT)
    expect(header.innerHTML).toBe(HEADER_TEXT)
  })

  it('renders the empty expense list', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});
    let props = createEmptyExpensesProps()
    const { container } = render(
      <Provider store={store}>
      <BudgetContainer {...props} />
      <BudgetInput {...props} />
      </Provider>)
    const expenseNodes = container.querySelectorAll('.Expense')
    expect(expenseNodes.length).toBe(props.expenses.length)
  })

  it('renders the expense list with some expenses', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});
    let props = createProps()
    const { container } = render(
      <Provider store={store}>
      <BudgetContainer {...props} />
      <BudgetInput {...props} />
      </Provider>)
    const expenseNodes = container.querySelectorAll('.Expense')
    expect(expenseNodes.length).toBe(props.expenses.length)
  })

  // it('allows the user to add a comment', () => {
  //   //Arrange - create props and locate elements
  //   const newComment = { author: 'Socrates', text: 'Why?' }
  //   let props = createProps()
  //   const { container, getByLabelText } = render(
  //     <CommentFeed {...props} />
  //   )
  //   const authorNode = getByLabelText('Author')
  //   const textNode = getByLabelText('Comment')
  //   const formNode = container.querySelector('form')
  //
  //   //Act - simulate changes to elements
  //   fireEvent.change(authorNode, {
  //     target: { value: newComment.author }
  //   })
  //   fireEvent.change(textNode, {
  //     target: { value: newComment.text}
  //   })
  //
  //   fireEvent.submit(formNode)
  //
  //   //Assert - check whether the desired functions were called
  //   expect(props.createComment).toHaveBeenCalledTimes(1)
  //   expect(props.createComment).toHaveBeenCalledWith(newComment)
  // })
  //
  // it('allows the user to like a comment', () => {
  //    let props = createProps()
  //    let id = props.comments[1].id
  //    const { getByTestId } = render(<CommentFeed {...props} />)
  //
  //    const likeNode = getByTestId(id)
  //    fireEvent.click(likeNode)
  //
  //    expect(props.likeComment).toHaveBeenCalledTimes(1)
  //    expect(props.likeComment).toHaveBeenCalledWith(id, props.auth)
  // })
  //
  // it('allows the user to unlike a comment', () => {
  //   let props = createProps()
  //   let id = props.comments[0].id
  //   const { getByTestId } = render(<CommentFeed {...props} />)
  //
  //   const likeNode = getByTestId(id)
  //   fireEvent.click(likeNode)
  //
  //   expect(props.unlikeComment).toHaveBeenCalledTimes(1)
  //   expect(props.unlikeComment).toHaveBeenCalledWith(id, props.auth)
  // })
})
