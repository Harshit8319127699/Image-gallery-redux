import React from 'react'
import "../Form/Form.css"

import {useForm} from "react-hook-form"
import { addimage } from '../../Redux/Actions/Actions'
import { useDispatch } from 'react-redux'

function Form() {
    const dispatch = useDispatch()
    const {register, handleSubmit, errors} = useForm()
const handler=(data)=>{
dispatch(addimage(data))
}
    return (
    <div className='container1'>
        <div className='form-holder'>
            <form onSubmit={handleSubmit(handler)}>
                <input type="text" name='imageurl' placeholder='imageurl' {...register("imageurl")}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form