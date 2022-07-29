import React from 'react'
import { Link } from 'react-router-dom'
import "./BlogPageRightSide.css"

function BlogPageRightSide() {
  return (
    <div className='right-side'>
        <aside className="single_sidebar_widget search_widget">
            <form action="#">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search Keyword" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Search Keyword'" />
                <i className="bi bi-search"></i>
              </div>
              <button className="search-btn" type="submit">Search</button>
            </form>
          </aside>
          <aside className="single_sidebar_widget post_category_widget">
            <h4 className="widget_title">Category</h4>
            <ul className="list cat-list">
              <li>
                <Link to={''}>
                  <p>Java</p>
                  <p>(7)</p>
                </Link>
              </li>
              <li>
                <Link to={''}>
                  <p>Spring boot</p>
                  <p>(5)</p>
                </Link>
              </li>
              <li>
                <Link to={''}>
                  <p>Javascript</p>
                  <p>(03)</p>
                </Link>
              </li>
              <li>
                <Link to={''}>
                  <p>React Js</p>
                  <p>(4)</p>
                </Link>
              </li>
              <li>
                <Link to={''}>
                  <p>Spring security</p>
                  <p>(2)</p>
                </Link>
              </li>
            </ul>
          </aside>
          <aside className="single_sidebar_widget popular_post_widget">
            <h3 className="widget_title">Recent Post</h3>
            <div className="media post_item">
              <img src="/image/post/java.png" alt="post" />
              <div className="media-body">
                <Link to={''}>
                  <h3>Binary search in java</h3>
                </Link>
                <p>January 12, 2019</p>
              </div>
            </div>
            <div className="media post_item">
              <img src="/image/post/spring-data-jpa.png" alt="post" />
              <div className="media-body">
                <Link to={''}>
                  <h3>Spring data jpa</h3>
                </Link>
                <p>02 Hours ago</p>
              </div>
            </div>
            <div className="media post_item">
              <img src="/image/post/java.png"alt="post" />
              <div className="media-body">
                <Link to={''}>
                  <h3>React context api</h3>
                </Link>
                <p>03 Hours ago</p>
              </div>
            </div>
            <div className="media post_item">
              <img src="/image/post/java.png" alt="post" />
              <div className="media-body">
                <Link to={''}>
                  <h3>Arrays in Javascript</h3>
                </Link>
                <p>01 Hours ago</p>
              </div>
            </div>
          </aside>
    </div>
  )
}

export default BlogPageRightSide