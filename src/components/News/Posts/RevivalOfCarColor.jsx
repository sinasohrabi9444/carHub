import React, { useState, useEffect } from "react";
import { newsData } from "../../../datas";
import { Link, useParams } from "react-router-dom";
import "../SoloNews.css";

import NavbarSection from "../../NavbarSection/NavbarSection";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import SideBar from "../../Sidebar/SideBar";

const RevivalOfCarColor = () => {
  const [postData, setPostData] = useState(newsData);
  const { id } = useParams();

  const postId = parseInt(id, 10);
  const post = postData.find((p) => p.id === postId);
  console.log(post);

  useEffect(() => {
  
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavbarSection />

      {!post ? (
        <h2 className="text-white w-100 bg-danger text-center">
          Post not found
        </h2>
      ) : (
        <div className="container-section-news w-100 d-flex p-3">
          <SideBar postID={postId} />
          <div>
            <div className="center-news ">
              <div className="w-100 text-center">
                <img src={post.img} alt="image news" />
              </div>

              <div className="text-content">
                <h3 className="mt-3 mb-3"> احیای رنگ خودرو و پولیش</h3>

                <h5>1. اهمیت احیای رنگ خودرو :</h5>
                <p className="p-2 ">
                  رنگ خودرو به عنوان یک لایه محافظ عمل می‌کند و از بدنه در برابر
                  عوامل محیطی، زنگ‌زدگی و آسیب‌های فیزیکی محافظت می‌کند. با گذشت
                  زمان، اشعه UV، آلودگی، گرد و غبار و سایر عوامل می‌توانند باعث
                  کدر شدن و آسیب به رنگ خودرو شوند. احیای رنگ خودرو به شما این
                  امکان را می‌دهد که:
                  <ul className="">
                    <li className="">
                      <span className="text-black ">
                        زیبایی خودرو را حفظ کنید:
                      </span>{" "}
                      رنگ براق و درخشان جلوه‌ای زیبا به خودرو می‌دهد.
                    </li>
                    <li className="">
                      <span className="text-black  ">افزایش ارزش خودرو:</span>{" "}
                      یک خودرو با رنگ سالم و درخشان معمولاً ارزش بیشتری دارد
                    </li>
                    <li className="">
                      <span className="text-black  ">
                        زیبایی خودرو را حفظ کنید:
                      </span>{" "}
                      احیای رنگ می‌تواند از زنگ‌زدگی و آسیب‌های دیگر جلوگیری کند
                    </li>
                  </ul>
                </p>
                <h5>2. مراحل احیای رنگ خودرو:</h5>
                <h6>
                  2.1. شستشوی اولیه
                  <br />
                  قبل از هر چیز، خودرو باید به‌طور کامل شسته شود. این مرحله
                  شامل:
                </h6>
                <p className="p-2 ">
                  <ul className="">
                    <li className="">
                      <span className="text-black ">
                        استفاده از آب و صابون:
                      </span>{" "}
                      برای از بین بردن گرد و غبار و آلودگی‌های سطحی
                    </li>
                    <li className="">
                      <span className="text-black  ">
                        شستشوی چرخ‌ها و زیر خودرو:
                      </span>{" "}
                      این بخش‌ها معمولاً بیشتر در معرض آلودگی هستند
                    </li>
                  </ul>
                </p>
                <h6>2.2. بررسی آسیب‌ها</h6>
                <p className="p-2 ">
                  پس از شستشو، باید بدنه خودرو را بررسی کنید. این شامل شناسایی
                  خراش‌ها، زنگ‌زدگی و آسیب‌های دیگر است. در این مرحله می‌توانید
                  تصمیم بگیرید که آیا نیاز به تعمیرات جزئی وجود دارد یا خیر.
                </p>
                <h6>2.3. پولیش کردن</h6>
                <p className="p-2 ">
                  پولیش کردن یکی از مهم‌ترین مراحل احیای رنگ است. این فرآیند
                  شامل:
                  <ul className="">
                    <li className="">
                      <span className="text-black  ">انتخاب پولیش مناسب:</span>{" "}
                      بسته به میزان آسیب، می‌توانید از پولیش‌های خشن، متوسط یا
                      نرم استفاده کنید
                    </li>
                    <li className="">
                      <span className="text-black  ">
                        استفاده از دستگاه پولیش:
                      </span>{" "}
                      برای بهترین نتیجه، از دستگاه پولیش استفاده کنید. این
                      دستگاه به شما کمک می‌کند تا پولیش را به‌طور یکنواخت روی
                      بدنه خودرو بزنید.
                    </li>
                    <li className="">
                      <span className="text-black  ">پولیش کردن به آرامی:</span>{" "}
                      ببا حرکات دایره‌ای و فشار کم، پولیش را روی سطح خودرو
                      بزنید. این کار به از بین بردن خراش‌ها و کدرشدگی کمک
                      می‌کند.
                    </li>
                  </ul>
                </p>

                <h6>2.4. شستشوی مجدد</h6>
                <p className="p-2 ">
                  پس از پولیش کردن، خودرو را دوباره بشویید تا هرگونه باقی‌مانده
                  پولیش و آلودگی‌های دیگر را از بین ببرید.
                </p>

                <h6>2.5. واکس زدن</h6>
                <p className="p-2 ">
                  پس از پولیش، استفاده از واکس بسیار مهم است. واکس به عنوان یک
                  لایه محافظ عمل می‌کند و به درخشش رنگ کمک می‌کند. مراحل واکس
                  زدن شامل:
                  <ul className="">
                    <li className="">
                      <span className="text-black  ">انتخاب واکس مناسب:</span>{" "}
                      می‌توانید از واکس‌های مایع یا پودری استفاده کنید
                    </li>
                    <li className="">
                      <span className="text-black  ">
                        استفاده از دستمال نرم:
                      </span>{" "}
                      واکس را با یک دستمال نرم روی بدنه خودرو بزنید و بگذارید
                      خشک شود
                    </li>
                    <li className="">
                      <span className="text-black  ">براق کردن:</span> پس از خشک
                      شدن، با یک دستمال تمیز و نرم، سطح را براق کنید{" "}
                    </li>
                  </ul>
                </p>

                <h5>3. نکات مهم در احیای رنگ و پولیش خودرو</h5>

                <p className="p-2 ">
                  <ul className="">
                    <li className="">
                      <span className="text-black ">
                        آزمایش در یک بخش کوچک:
                      </span>{" "}
                      قبل از استفاده از هر نوع پولیش یا واکس، آن را در یک بخش
                      کوچک و کمتر قابل مشاهده آزمایش کنید تا مطمئن شوید که به
                      رنگ آسیب نمی‌زند.
                    </li>
                    <li className="">
                      <span className="text-black ">انتخاب زمان مناسب:</span>{" "}
                      بهتر است این کار را در روزهای ابری یا در سایه انجام دهید
                      تا از تبخیر سریع مواد جلوگیری کنید
                    </li>
                    <li className="">
                      <span className="text-black ">
                        استفاده از تجهیزات مناسب:
                      </span>{" "}
                      از دستمال‌های نرم و بدون پرز استفاده کنید تا از خط و خش
                      جلوگیری شود
                    </li>
                    <li className="">
                      <span className="text-black ">نگهداری منظم:</span> برای
                      حفظ درخشش و سلامت رنگ، بهتر است هر چند ماه یک‌بار این
                      فرآیند را تکرار کنید
                    </li>
                  </ul>
                </p>

                <h5>4. نتیجه‌گیری</h5>

                <p className="p-2 ">
                  احیای رنگ خودرو و پولیش یک فرآیند ضروری برای حفظ زیبایی و ارزش
                  خودرو است. با رعایت مراحل و نکات ذکر شده، می‌توانید خودروی خود
                  را به حالت اولیه برگردانید و از آن لذت ببرید. این کار نه تنها
                  به شما کمک می‌کند تا خودرو را در بهترین حالت نگه دارید، بلکه
                  می‌تواند تجربه‌ای لذت‌بخش و آموزشی نیز باشد. با توجه به اهمیت
                  این فرآیند، توصیه می‌شود که به‌طور منظم به نگهداری و احیای رنگ
                  خودرو توجه کنید.
                </p>

                <div className="navbar-icons text-center w-100 d-flex justify-content-evenly ">
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
            </div>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default RevivalOfCarColor;
