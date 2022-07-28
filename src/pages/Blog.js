import React from 'react'
import { Link } from 'react-router-dom'
import BlogPageRightSide from '../components/BlogPageRightSide'
import "./Blog.css"

function Blog() {
  return (
    <div className='blog right-to-left'>
      <h1 className='blog-header'>Blog</h1>
      <div className='blog-body padding-LR-90'>
        <div className='articles'>
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
                <Link to=""><i className='bi bi-person-fill'></i> ali herawi</Link>
                <Link to=""><i className='bi bi-calendar-event-fill'></i> 2022-2-12</Link>
                <Link to=""><i className='bi bi-chat-fill'></i> comments</Link>
              </div>
            </div>
          </article>
          <article className='blog-item'>
            <div className='blog-img'>
              <img src='/image/2.png' alt='' />
            </div>
            <div className='blog-details'>
              <div className='title-text'>
                <h2>Spring boot microservices</h2>
                <p>microservices are the common subject on spring boot framwork learning</p>
              </div>
              <div className='blog-info'>
                <Link to=""><i className='bi bi-person-fill'></i> ali herawi</Link>
                <Link to=""><i className='bi bi-calendar-event-fill'></i> 2022-2-12</Link>
                <Link to=""><i className='bi bi-chat-fill'></i> comments</Link>
              </div>
            </div>
          </article>
          <article className='blog-item'>
            <div className='blog-img'>
              <img src='/image/3.png' alt='' />
            </div>
            <div className='blog-details'>
              <div className='title-text'>
                <h2>Spring boot microservices</h2>
                <p>microservices are the common subject on spring boot framwork learning</p>
              </div>
              <div className='blog-info'>
                <Link to=""><i className='bi bi-person-fill'></i> ali herawi</Link>
                <Link to=""><i className='bi bi-calendar-event-fill'></i> 2022-2-12</Link>
                <Link to=""><i className='bi bi-chat-fill'></i> comments</Link>
              </div>
            </div>
          </article>
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
                <Link to=""><i className='bi bi-person-fill'></i> ali herawi</Link>
                <Link to=""><i className='bi bi-calendar-event-fill'></i> 2022-2-12</Link>
                <Link to=""><i className='bi bi-chat-fill'></i> comments</Link>
              </div>
            </div>
          </article>
        </div>
        <div className='body-right-side'>
          <BlogPageRightSide />
        </div>
      </div>
    </div>
  )
}

export default Blog