import React, { useState, useEffect } from "react";
import { newsData } from "../../../datas";
import { Link, useParams } from "react-router-dom";
import "../SoloNews.css";
import "./PdrSmoothin.css";

import NavbarSection from "../../NavbarSection/NavbarSection";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import SideBar from "../../Sidebar/SideBar";
import Footer from "../../Footer/Footer";

const CarSunburn = () => {
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
       <div className="d-flex flex-column">
         <div className="container-section-news w-100 d-flex p-3">
          <SideBar postID={postId} />
          <div className="">
            <div className="center-news w-100">
              <div className="w-100 text-center">
                <img src={post.img} alt="image news" />
              </div>

              <div className="text-content">
                <h3 className="mt-3 mb-3">
                  {" "}
                  چکونه از افتاب سوختکی جلوگیری کنیم ؟{" "}
                </h3>

                <h5>1. پارک کردن در سایه</h5>
                <p className="p-2 ">
                  یکی از ساده‌ترین و مؤثرترین روش‌ها برای جلوگیری از
                  آفتاب‌سوختگی، پارک کردن ماشین در مکان‌های سایه‌دار است. این
                  کار به کاهش دمای داخلی خودرو و جلوگیری از تابش مستقیم نور
                  خورشید به بدنه و شیشه‌ها کمک می‌کند. کرده و از هزینه‌های اضافی
                  رنگ‌آمیزی جلوگیری می‌کند.
                </p>
                <h5>2. استفاده از کاور ماشین</h5>
                <p className="p-2 ">
                  <ul className="">
                    <li className="">
                      <span className="text-black ">توضیح :</span> استفاده از
                      کاور مخصوص خودرو می‌تواند به‌طور مؤثری از تابش نور خورشید
                      به بدنه ماشین جلوگیری کند. این کاورها معمولاً از مواد عایق
                      حرارتی ساخته شده‌اند و می‌توانند دمای داخلی خودرو را پایین
                      نگه دارند.
                    </li>

                    <div className="text-center w-100">
                      <img
                        src="/img/aftab-car.webp"
                        className="mb-4"
                        width={250}
                        alt="carsunBourn"
                      />
                    </div>

                    <li className="">
                      <span className="text-black  ">نکته :</span>
                      مطمئن شوید که کاور از جنس مناسب و مقاوم در برابر UV باشد.
                    </li>
                  </ul>
                </p>
                <h5>3. استفاده از عایق‌های حرارتی</h5>
                <p className="p-2 ">
                  <ul className="">
                    <li className="">
                      <span className="text-black ">توضیح:</span> نصب عایق‌های
                      حرارتی در داخل خودرو می‌تواند به کاهش دما و جلوگیری از
                      تابش مستقیم نور خورشید کمک کند. این عایق‌ها معمولاً در
                      قسمت‌های سقف و درب‌ها نصب می‌شوند.
                    </li>
                    <li className="">
                      <span className="text-black ">نکته:</span> عایق‌های حرارتی
                      می‌توانند به کاهش مصرف انرژی در سیستم تهویه مطبوع نیز کمک
                      کنند
                    </li>
                  </ul>
                </p>
                <h5>4. شیشه‌های تیره</h5>

                <p className="p-2 ">
                  <ul className="">
                    <li className="">
                      <span className="text-black ">توضیح:</span> نصب شیشه‌های
                      تیره یا استفاده از فیلم‌های UV می‌تواند از نفوذ اشعه‌های
                      مضر UV به داخل خودرو جلوگیری کند. این کار نه تنها به حفظ
                      رنگ داخلی کمک می‌کند، بلکه از داغ شدن بیش از حد خودرو نیز
                      جلوگیری می‌کند.
                    </li>
                  </ul>
                </p>

                <h5>5. پوشش‌های محافظ</h5>
                <p className="p-2 ">
                  <ul>
                    <li className="">
                      <span className="text-black ">توضیح:</span> استفاده از
                      پوشش‌های خاص برای بدنه ماشین می‌تواند از آسیب‌های ناشی از
                      نور خورشید جلوگیری کند. این پوشش‌ها معمولاً از مواد نانو
                      ساخته می‌شوند و به‌طور مؤثری از رنگ بدنه محافظت می‌کنند.
                    </li>
                    <li className="">
                      <span className="text-black ">نکته:</span> این پوشش‌ها
                      همچنین می‌توانند به تمیز نگه‌داشتن خودرو کمک کنند و از
                      تجمع گرد و غبار جلوگیری کنند.
                    </li>
                  </ul>
                </p>

                <h5> 6. تمیز کردن منظم</h5>
                <p className="p-2 ">
                  <ul className="">
                    <li className="">
                      <span className="text-black ">توضیح:</span> تمیز نگه داشتن
                      بدنه ماشین و استفاده از واکس می‌تواند به حفظ رنگ و جلوگیری
                      از آفتاب‌سوختگی کمک کند. گرد و غبار و آلودگی می‌توانند به
                      رنگ آسیب برسانند و در برابر نور خورشید آسیب‌پذیرتر شوند.
                    </li>
                    <li className="">
                      <span className="text-black ">نکته:</span> هر چند وقت
                      یکبار ماشین را شسته و از واکس‌های مخصوص خودرو استفاده کنید
                    </li>
                  </ul>
                </p>

                <h5>نتیجه‌گیری</h5>

                <p className="p-2 ">
                  با رعایت این نکات، می‌توانید به خوبی از ماشین خود در برابر
                  آسیب‌های ناشی از نور خورشید محافظت کنید. این اقدامات نه تنها
                  به حفظ زیبایی و ارزش خودرو کمک می‌کنند، بلکه می‌توانند
                  هزینه‌های تعمیرات آینده را نیز کاهش دهند. با توجه به اهمیت این
                  موضوع، توصیه می‌شود که به طور مرتب به این نکات توجه کنید و از
                  آن‌ها بهره‌برداری کنید.
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
          <div>

          </div>

       
        </div>
        <div>
     
        </div>
       </div>
      )}
    </div>
  );
};

export default CarSunburn;
