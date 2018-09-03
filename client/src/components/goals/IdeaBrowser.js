import React from 'react'
import Goal from './Goal'

const IdeaBrowser = props => {

 const renderIdeas = (
   props.goalIdeas.map((idea) =>
     <Goal goal={idea} />
   )
 )

  return (
    <div className="IdeaBrowser">Filtered Ideas:
      {renderIdeas}
    </div>

  )
}

export default IdeaBrowser
