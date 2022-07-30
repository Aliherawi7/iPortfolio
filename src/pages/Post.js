import React,{useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import BlogPageRightSide from '../components/BlogPageRightSide'
import "./Post.css"
import posts from '../Posts'

function Post() {
  const { id } = useParams()
  let postId = parseInt(id.substring(1));
  const post = posts[postId];
  useEffect(() => {
    window.scrollTo(0,0);

  }, [])
  
  return (
    <div className='post-page padding-LR-90 fade-in'>
      <h2 className='page-title'>{post.title}</h2>
      <div className='post-body'>
        <div className='post-details'>
          <div className='post-image'>
            <img src={post.pictureUrl} alt='' />
          </div>
          <div className='post-info'>
            <Link to=""><i className='bi bi-person-fill'></i> {post.author}</Link>
            <Link to=""><i className='bi bi-calendar-event-fill'></i> {post.date}</Link>
            <Link to=""><i className='bi bi-chat-fill'></i> {post.comment.length}</Link>
            <Link to=""><i className='bi bi-book-half'></i> {post.timeout}</Link>
          </div>
          <div className='post-texts'>
            <p>
              {post.postBody.text}
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