import React, {useState, useEffect} from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'



const Error =(props)=>{

    return(
        <div>
            <h1>Sorry the author with this ID doesn't exist</h1>
            <Link to="/">Home</Link>


        </div>

    );
}

export default Error;