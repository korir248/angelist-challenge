import React, { useState} from "react";
import {useDispatch } from "react-redux"

const Search = ()=> {
    const dispatch = useDispatch()

    const [searchItem, setSearchItem] = useState("")

    const handleChange = (e)=>{
        e.preventDefault()
        setSearchItem()

    }
    const search = (item) =>{
        dispatch(item)

    }

    return (
        <div>
            <form onSubmit={e=>search(e)}>
                <label >Username</label>
                <input name="username" placeholder="Enter Username" onChange={handleChange} required/>
            </form>
        </div>
    )
}
export default Search