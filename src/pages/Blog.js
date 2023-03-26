import React from 'react'
import { Link } from 'react-router-dom'
import BlogPageRightSide from '../components/BlogPageRightSide'
import "./Blog.css"
import posts from '../Constants/Posts'
function Blog() {

  return (
    <div className='blog fade-in'>
      <h1 className='blog-header'>Blog</h1>
      <div className='blog-body padding-LR-90'>
        <div className='articles'>
          {posts.map((post) => {
            return (
              <article className='blog-item' key={post.id}>
                <div className='blog-img'>
                  <img src={post.pictureUrl} alt='' />
                </div>
                <div className='blog-details'>
                  <div className='title-text'>
                    <Link to={"/blog/post:" + post.id}>
                      <h2>{post.title}</h2>
                    </Link>
                    <p>{post.postBody.text}</p>
                  </div>
                </div>
              </article>
            )

          })}
        </div>
        <div className='body-right-side'>
          <BlogPageRightSide />
        </div>
      </div>
    </div>
  )
}

export default Blog