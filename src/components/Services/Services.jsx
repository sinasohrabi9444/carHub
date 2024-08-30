import React, { useEffect } from 'react'
import { newsData } from '../../datas'
import './Services.css'
import { Link } from 'react-router-dom'
import NavbarSection from '../NavbarSection/NavbarSection'
export default function Services() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
  return (
    <>
   <NavbarSection />
      <div className="container-news">
        <div className="header-news">
          <h3>خدمات ما</h3>
        </div>
        <div className="news-items">
          {newsData.map((news) => (
            <div className="news-item ">
              <h4>{news.title} </h4>
              <img src={news.img} alt={news.title} />
              <p className="mt-3">{news.description}</p>
              <Link  className="" to={`${news.url}/${news.id}`}>
                بیشتر بخوانید
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="need-help-about">
        <div className="need-help-text">
          <h2>به کمک نیاز دارید ؟</h2>
          <span>با ما تماس بگیرید با شماره 09121111111</span>
        </div>
        <Link to={"/contact"} className="btn-contanct-us">
          <Link className="btn-text">تماس با ما </Link>
        </Link>
      </div>
      
    </>
  )
}
