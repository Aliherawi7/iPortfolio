import React from 'react'
import { Link } from 'react-router-dom'
import "./BlogPageRightSide.css"
import { recentPosts, category } from '../Constants/Posts'

function BlogPageRightSide() {
  return (
    <div className='right-side'>
      <aside className="single_sidebar_widget search_widget">
        <form action="#">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search Keyword" />
            <i className="bi bi-search"></i>
          </div>
          <button className="search-btn" type="submit">Search</button>
        </form>
      </aside>
      <aside className="single_sidebar_widget post_category_widget">
        <h4 className="widget_title">Category</h4>
        <ul className="list cat-list">
          {category.map((item) => {
            return (
              <li key={item.title}>
                <Link to={''}>
                  <p>{item.title}</p>
                  <p>({item.numbers})</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
      <aside className="single_sidebar_widget popular_post_widget">
        <h3 className="widget_title">Recent Post</h3>
        {recentPosts.map((rPost) => {
          return (
            <div className="media post_item" key={rPost.title}>
              <img src={rPost.imgUrl} alt="post" />
              <div className="media-body">
                <Link to={''}>
                  <h3>{rPost.title}</h3>
                </Link>
                <p>{rPost.date}</p>
              </div>
            </div>
          )
        })}
      </aside>
    </div>
  )
}

export default BlogPageRightSide