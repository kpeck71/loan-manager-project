import React from 'react'
import { render } from 'react-testing-library'
import GoalInput from './GoalInput'

describe('GoalInput', () => {
  it ('renders the Goal form', () => {
    const { getByPlaceholderText } = render(<GoalInput />)
    const placeholder = getByPlaceholderText('Title')
    expect(placeholder.innerHTML).toBe('Title')
  })

})
