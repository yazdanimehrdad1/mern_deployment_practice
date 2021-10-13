import React, {useState, useEffect} from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'
import Header from './Header'




const AddAuthor =(props)=>{

    const{id} = props
    const [newAuthor, setNewAuthor] = useState({})
    const[errorMsg, setErrorMsg] = useState({})




    const onChangeHandler = (e)=>{
        e.preventDefault()
        const newStateObject = {...newAuthor}
        newStateObject[e.target.name] = e.target.value
        setNewAuthor(newStateObject)

    }


    const onSubmitHandler = (e)=>{
        e.preventDefault()
        console.log(newAuthor)
        axios.post(`http://localhost:8000/api/project`, newAuthor)
        .then(res=>{
            // console.log(res.data);
            navigate("/")
        })
        .catch( err=>{
            console.log(err.response.data.errors)
            setErrorMsg(err.response.data.errors)
        }
        )

    }

    return(
        <div>

            <Header link={'/'} linkText="Home" subText="Add a new author"/>

            <form onSubmit={onSubmitHandler}>

                { errorMsg.title? <span>{errorMsg.title.message}</span> :null}

                <div>
    
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={newAuthor.title}
                        onChange={ onChangeHandler}
                    
                    ></input>
                </div>

                { errorMsg.age? <span>{errorMsg.age.message}</span> :null}
                <div>
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={newAuthor.age}
                        onChange={ onChangeHandler}
                    
                    ></input>
                </div>

                <div>
                    <label>Bio</label>
                    <input
                        type="text"
                        name="bio"
                        value={newAuthor.bio}
                        onChange={ onChangeHandler}
                    
                    ></input>
                </div>
                <button onClick={(e)=> navigate("/")}>Cancel</button>
                <button>Submit</button>
                

            </form>
            

        </div>

    );
}

export default AddAuthor;