import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { newsData } from "../../datas";
import { SlClock } from "react-icons/sl";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about-footer">
          <div className="about-title-footer">
            <img src="/img/img-video/logo.png" alt="logo" />
            <h4>شهروز تیونینگ</h4>
          </div>
          <p>
            این یه متن نمونه است ؛ خیلی ممنون. از کجا کسی که بخواهد از چیزها چشم
            پوشی کند، اتفاقاً بزرگتر می شود، چیزهای بزرگ را تحمل می کند دردها
            انتخاب عاقلانه ای برای لذت بردن هستند، مگر اینکه وظیفه باشند. تمایز
            پیروی از او در واقع باید انتخاب شود، اما به حق، همه من او را به
            کارهای سخت تر و چاپلوس تر باز نمی کنم گرفتاری ها و امثال آن بدن
            بزرگ. عواقب در هر صورت!
          </p>

          <Link to={"/about"} className="btn btn-warning  ">
            درباره مجموعه بیشتر بدانید
          </Link>
        </div>
       <div className="two-section">
       <div className="contact-footer ">
          <h4>اطلاعات تماس</h4>
          <ul>
            <li>
              <FaPhoneFlip /> 09128765403
            </li>
            <li>
              <FaPhoneFlip /> 09120827255
            </li>
            <li>
              <CgMail /> example@gmail.com
            </li>
          </ul>
          <div className="navbar-icons">
            <div className="navbar-icon">
              <a href={"www.instagram.com"}>
                <FaInstagram />
              </a>
            </div>
            <div className="navbar-icon">
              <a href={"facebook.com"}>
                <FaFacebookF />
              </a>
            </div>
            <div className="navbar-icon">
              <a href={"telegram.com"}>
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
        <div className="services-footer">
          <h4>خدمات ما</h4>
          <ul>
            {newsData.map((news) => (
              <Link to={`${news.url}/${news.id}`}>
                <li>{news.title}</li>
              </Link>
            ))}
          </ul>
        </div>
       </div>
        <div className="work-time">
          <h4>ساعت کاری ما</h4>
          <div className="d-flex week-day">
            <div>
              <ul>
                <li>
                  <span>
                    <SlClock />
                  </span>
                  شنبه
                </li>
                <li>
                  <span>
                    <SlClock />
                  </span>
                  یکشنبه
                </li>

                <li>
                  <span>
                    <SlClock />
                  </span>
                  دوشنبه
                </li>
                <li>
                  <span>
                    <SlClock />
                  </span>
                  سه شنبه
                </li>
                <li>
                  <span>
                    <SlClock />
                  </span>
                  چهارشنبه
                </li>
                <li>
                  <span>
                    <SlClock />
                  </span>
                  پنجشنبه
                </li>
                <li>
                  <span>
                    <SlClock />
                  </span>
                  جمعه
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li> 9 تا 7</li>
                <li> 9 تا 7</li> <li> 9 تا 7</li> <li> 9 تا 7</li>
                <li> 9 تا 7</li> <li> 9 تا 7</li> <li> 9 تا 7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
