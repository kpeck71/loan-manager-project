import React from 'react'
import CardCreator from './CardCreator'

const IdeaBrowser = props => {

 const renderIdeas = (
   props.goalIdeas.map((idea) =>
     <CardCreator goal={idea} className='warning' cardDetails="goalIdea" />
   )
 )

  return (
    <div className="IdeaBrowser row">
      {renderIdeas}
    </div>

  )
}

export default IdeaBrowser
