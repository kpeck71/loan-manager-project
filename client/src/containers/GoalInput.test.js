import React from 'react'
import { render } from 'react-testing-library'
import GoalInput from './GoalInput'

describe('GoalInput', () => {
  it ('renders the Goal form', () => {
    const { queryByText } = render(<GoalInput />)
    const title = queryByText('New Goal')
    expect(title.innerHTML).toBe('New Goal')
  })

})
