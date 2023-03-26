import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import BlogPageRightSide from '../components/BlogPageRightSide'
import "./Post.css"
import posts from '../Constants/Posts'

function Post() {
  const { id } = useParams()
  let postId = parseInt(id.substring(1));
  const post = posts[postId];
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])

  return (
    <div className='post-page padding-LR-90 fade-in'>
      <h2 className='page-title'>{post.title}</h2>
      <div className='post-body'>
        <div className='post-details'>
          <div className='post-image'>
            <img src={post.pictureUrl} alt='' />
          </div>
          <div className='post-texts'>
            <p>
              {post.postBody.text}

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