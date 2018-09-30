import React from 'react'
import CardCreator from '../CardCreator'
import Goal from './Goal'

const IdeaBrowser = props => {

 const renderIdeas = (
   props.goalIdeas.map((idea) =>
     <CardCreator goal={idea} className='warning' cardDetails="goalIdea" handleAdd={props.handleAdd} />
   )
 )

  return (
    <div className="IdeaBrowser row">
      {renderIdeas}
    </div>

  )
}

export default IdeaBrowser
