import React, {useState, useEffect} from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'
import Header from './Header'




const EditAuthor =(props)=>{

    const{id} = props
    const [editAuthor, setEditAuthor] = useState({})
    const[errorMsg, setErrorMsg] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/project/${id}`)
        .then( res=>{
            console.log(res.data);
            setEditAuthor(res.data);
        })
        .catch( err=>{
            console.log(err);
            navigate("/error")
        })

    },[id])


    const onChangeHandler = (e)=>{
        e.preventDefault()
        const newStateObject = {...editAuthor}
        newStateObject[e.target.name] = e.target.value
        setEditAuthor(newStateObject)

    }


    const onSubmitHandler = (e)=>{
        e.preventDefault()
        console.log(editAuthor)
        axios.put(`http://localhost:8000/api/project/${id}`, editAuthor)
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
            <Header link={'/'} linkText="Home" subText="Edit this author"/>

            <form onSubmit={onSubmitHandler}>

                { errorMsg.title? <span>{errorMsg.title.message}</span> :null}

                <div>
    
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={editAuthor.title}
                        onChange={ onChangeHandler}
                    
                    ></input>
                </div>

                { errorMsg.age? <span>{errorMsg.age.message}</span> :null}
                <div>
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={editAuthor.age}
                        onChange={ onChangeHandler}
                    
                    ></input>
                </div>

                <div>
                    <label>Bio</label>
                    <input
                        type="text"
                        name="bio"
                        value={editAuthor.bio}
                        onChange={ onChangeHandler}
                    
                    ></input>
                </div>
                <button onClick={(e)=> navigate("/")}>Cancel</button>
                <button>Submit</button>
                

            </form>
            

        </div>

    );
}

export default EditAuthor;