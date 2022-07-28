import React from 'react'
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
                <a href="#" class="d-flex">
                  <p>Java</p>
                  <p>(7)</p>
                </a>
              </li>
              <li>
                <a href="#" class="d-flex">
                  <p>Spring boot</p>
                  <p>(5)</p>
                </a>
              </li>
              <li>
                <a href="#" class="d-flex">
                  <p>Javascript</p>
                  <p>(03)</p>
                </a>
              </li>
              <li>
                <a href="#" class="d-flex">
                  <p>React Js</p>
                  <p>(4)</p>
                </a>
              </li>
              <li>
                <a href="#" class="d-flex">
                  <p>Spring security</p>
                  <p>(2)</p>
                </a>
              </li>
            </ul>
          </aside>
          <aside class="single_sidebar_widget popular_post_widget">
            <h3 class="widget_title">Recent Post</h3>
            <div class="media post_item">
              <img src="image/post/post_1.png" alt="post" />
              <div class="media-body">
                <a href="single-blog.html">
                  <h3>Binary search in java</h3>
                </a>
                <p>January 12, 2019</p>
              </div>
            </div>
            <div class="media post_item">
              <img src="image/post/post_2.png" alt="post" />
              <div class="media-body">
                <a href="single-blog.html">
                  <h3>Spring data jpa</h3>
                </a>
                <p>02 Hours ago</p>
              </div>
            </div>
            <div class="media post_item">
              <img src="image/post/post_3.png" alt="post" />
              <div class="media-body">
                <a href="single-blog.html">
                  <h3>React context api</h3>
                </a>
                <p>03 Hours ago</p>
              </div>
            </div>
            <div class="media post_item">
              <img src="image/post/post_4.png" alt="post" />
              <div class="media-body">
                <a href="single-blog.html">
                  <h3>Arrays in Javascript</h3>
                </a>
                <p>01 Hours ago</p>
              </div>
            </div>
          </aside>
    </div>
  )
}

export default BlogPageRightSide