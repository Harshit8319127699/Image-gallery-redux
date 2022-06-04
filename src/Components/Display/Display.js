import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteimage } from '../../Redux/Actions/Actions'

import "../Display/Display.css"

function Display() {
    const dispatch = useDispatch()
const state=useSelector(state=>state.img.imageurl)
console.log(state);
const handler=(e)=>{
const arr=[...state]
arr.splice(e.target.id,1)
dispatch(deleteimage(arr))
}


const hold=state.map((elem,index)=>{
return <div className="imagecard" onClick={handler} key={index} id={index}>
<img src={elem.imageurl} alt="" />
</div>

})

    return (
    <div className='container2'>
{state.length>0?hold:<h1 className='head'>No images to display</h1>}        
    </div>
  )
}

export default Display