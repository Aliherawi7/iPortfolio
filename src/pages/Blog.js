import React from 'react'
import { Link } from 'react-router-dom'
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
                <Link to=""><i className='bi bi-chat-fill'></i>comments</Link>
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
                <Link to=""><i className='bi bi-chat-fill'></i>comments</Link>
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
                <Link to=""><i className='bi bi-chat-fill'></i>comments</Link>
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
                <Link to=""><i className='bi bi-chat-fill'></i>comments</Link>
              </div>
            </div>
          </article>
        </div>
        <div className='body-right-side'>
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
                  <h3>From life was you fish...</h3>
                </a>
                <p>January 12, 2019</p>
              </div>
            </div>
            <div class="media post_item">
              <img src="image/post/post_2.png" alt="post" />
              <div class="media-body">
                <a href="single-blog.html">
                  <h3>The Amazing Hubble</h3>
                </a>
                <p>02 Hours ago</p>
              </div>
            </div>
            <div class="media post_item">
              <img src="image/post/post_3.png" alt="post" />
              <div class="media-body">
                <a href="single-blog.html">
                  <h3>Astronomy Or Astrology</h3>
                </a>
                <p>03 Hours ago</p>
              </div>
            </div>
            <div class="media post_item">
              <img src="image/post/post_4.png" alt="post" />
              <div class="media-body">
                <a href="single-blog.html">
                  <h3>Asteroids telescope</h3>
                </a>
                <p>01 Hours ago</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Blog