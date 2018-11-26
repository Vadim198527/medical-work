import React from 'react'

const Field = ({label, bora, top}) => {
   const classes = []
   classes.push('First')
   classes.push('Second')
   return (
      <div style={{top: top + 'px', position: 'absolute'}}>
         <label className={classes.join(' ')} style={{display: 'block'}}>{label}:</label>
         <input type="text" placeholder={bora}/>
      </div>
   )
}

export default Field