import React, { Component } from 'react'
import './style/Post.css'

const Post = (props) => {
        return (
            <div className="post">
                <img src={props.src}/>
                <h5>Autor: {props.autor}</h5>
                <p>{props.text}</p>
            </div>
        )
}

export default Post
    