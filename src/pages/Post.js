import React from 'react'
import { Link, useParams } from 'react-router-dom'
import BlogPageRightSide from '../components/BlogPageRightSide'
import "./Post.css"

function Post() {
  const { id } = useParams()
  return (
    <div className='post-page padding-LR-90'>
      <h2 className='page-title'>{"Post title " + id}</h2>
      <div className='post-body'>
        <div className='post-details'>
          <div className='post-image'>
            <img src='/image/blog/spring-boot.png' alt='' />
          </div>
          <div className='post-info'>
            <Link to=""><i className='bi bi-person-fill'></i> ali herawi</Link>
            <Link to=""><i className='bi bi-calendar-event-fill'></i> 2022-2-12</Link>
            <Link to=""><i className='bi bi-chat-fill'></i> comments</Link>
            <Link to=""><i className='bi bi-book-half'></i> 5 minute</Link>
          </div>
          <div className='post-texts'>
            <p>
              MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower

              MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually
            </p>
          </div>
        </div>
        <div className='body-right-side'>
          <BlogPageRightSide />
        </div>
      </div>
    </div>
  )
}

export default Post