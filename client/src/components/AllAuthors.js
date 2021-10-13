import React, {useState, useEffect} from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'
import Header from './Header'



const AllAuthors =(props)=>{

    const [authors, setAuthors] = useState([]);
    

    useEffect( ()=>{
        axios.get("http://localhost:8000/api/project")
        .then( res => {
            console.log(res);
            setAuthors(res.data);

        } )
        .catch( err => console.log(err))
    },[])


    const onDeleteHandler = (index,id)=>{
        axios.delete(`http://localhost:8000/api/project/${id}`)
        .then( res=>{
            console.log(res);
            const authorsCopy = [...authors]

            const filteredAuthors = authorsCopy.filter( (author,idx)=>(idx != index) )

            setAuthors(filteredAuthors)

        }
        ).catch(err=>
            console.log(err)
        )

    }

    return(
        <div>
            <h1>All Authors</h1>

            <Header link={'/new'} linkText="Add an Author" subText="We have quotes by"/>

            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action available</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        authors ?
                            authors.map( (author, index)=>(
                                <tr key={index}>

                                    <td>{author.title}</td>
                                    <td>{author.age}</td>
                                    <td>
                                        <button onClick={ ()=>{navigate(`/edit/${author._id}`)} }>Edit</button>
                                        <button onClick={()=>onDeleteHandler(index, author._id)}>Delete</button>
                                    </td>


                                </tr>

                            ) )
                        :
                        null
                    }
                </tbody>

        


            </table>
            

        </div>

    );
}

export default AllAuthors;