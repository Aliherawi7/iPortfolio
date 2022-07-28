import React from 'react'
import { Link } from 'react-router-dom'
import "./Blog.css"

function Blog() {
  return (
    <div className='blog right-to-left'>
        <h1 className='blog-header'>Blog</h1>
        <div className='blog-body'>
            <article className='blog-item'>
                <div className='blog-img'>
                  <img src='/image/1.png' alt='' />
                </div>
                <div className='blog-details'>
                  <div className='title-text'>
                      <h2>Spring boot microservices</h2>
                      <p>microservices are the common subject on spring boot framwork learning</p>
                  </div>
                  <div className='blog-info'>
                      <Link to="">author: ali herawi</Link>
                      <Link to="">data: 2022-2-12</Link>
                      <Link to="">comments</Link>
                  </div>
                </div>
            </article>
        </div>
    </div>
  )
}

export default Blog