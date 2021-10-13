import React, {useState, useEffect} from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'



const Header =(props)=>{

    const {link, linkText, subText} = props

    return(
        <div>
            <Link to={link}>{linkText}</Link>
            <p>{subText}</p>

        </div>

    );
}

export default Header;