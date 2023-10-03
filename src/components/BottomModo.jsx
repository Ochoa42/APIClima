import React from 'react'


export const BottomModo = ({ModoUpdate,mode}) => {
  return (
      <div>
        <button onClick={ModoUpdate}>
            {mode?(<i className='bx bxs-sun text-yellow-400 text-8xl'></i>):(<i class='bx bxs-moon text-slate-400 text-8xl'></i>)}
        </button>
      </div>
   
  )
}
