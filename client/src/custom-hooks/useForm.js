import {useState} from 'react';

const useForm =(initialState)=>{
    const [state,setValues]=useState(initialState)
    return[
        state,
        (event)=>{
            setValues({...state,[event.target.name]:event.target.value})
        }
    ]
}

export default useForm;