import React from 'react'
import { Link } from 'react-router-dom'
import "./BlogPageRightSide.css"

function BlogPageRightSide() {
  return (
    <div className='right-side'>
        <aside class="single_sidebar_widget search_widget">
            <form action="#">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'" />
                <i class="bi bi-search"></i>
              </div>
              <button class="search-btn" type="submit">Search</button>
            </form>
          </aside>
          <aside class="single_sidebar_widget post_category_widget">
            <h4 class="widget_title">Category</h4>
            <ul class="list cat-list">
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
          <aside class="single_sidebar_widget popular_post_widget">
            <h3 class="widget_title">Recent Post</h3>
            <div class="media post_item">
              <img src="/image/post/java.png" alt="post" />
              <div class="media-body">
                <Link to={''}>
                  <h3>Binary search in java</h3>
                </Link>
                <p>January 12, 2019</p>
              </div>
            </div>
            <div class="media post_item">
              <img src="/image/post/spring-data-jpa.png" alt="post" />
              <div class="media-body">
                <Link to={''}>
                  <h3>Spring data jpa</h3>
                </Link>
                <p>02 Hours ago</p>
              </div>
            </div>
            <div class="media post_item">
              <img src="/image/post/java.png"alt="post" />
              <div class="media-body">
                <Link to={''}>
                  <h3>React context api</h3>
                </Link>
                <p>03 Hours ago</p>
              </div>
            </div>
            <div class="media post_item">
              <img src="/image/post/java.png" alt="post" />
              <div class="media-body">
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