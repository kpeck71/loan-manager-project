import React from 'react'
import Goal from '../containers/Goal'

const IdeaBrowser = props => {

 const renderIdeas = (
   props.goalIdeas.map((idea) =>
     <Goal goal={idea} className='warning' cardDetails="goalIdea" />
   )
 )

  return (
    <div className="IdeaBrowser row">
      {renderIdeas}
    </div>

  )
}

export default IdeaBrowser
