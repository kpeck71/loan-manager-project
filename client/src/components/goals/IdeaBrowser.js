import React from 'react'
import Goal from './Goal'

const IdeaBrowser = props => {

 const renderIdeas = (
   props.goalIdeas.map((idea) =>
     <Goal goal={idea} style="col-md-3 border border-info rounded m-2 p-1 mx-5" />
   )
 )

  return (
    <div className="IdeaBrowser row">
      {renderIdeas}
    </div>

  )
}

export default IdeaBrowser
