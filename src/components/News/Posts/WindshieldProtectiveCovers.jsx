

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
import VideoPlayer from "../../VideoPlayear/VideoPlayear";

const WindshieldProtectiveCovers = () => {
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
               <VideoPlayer videoSrc={post.videoSrc} className={'video-player-post'}/>
              </div>

              <div className="text-content">
                <h3 className="mt-3 mb-3">کاورهای محافظتی بادیفنس</h3>

                <p className="p-2 ">
                  کاورهای محافظتی بادیفنس (BodyFence) یکی از راهکارهای مؤثر برای
                  محافظت از بدنه خودرو در برابر آسیب‌های ناشی از عوامل محیطی، از
                  جمله نور خورشید، گرد و غبار، باران، برف و ضربات کوچک هستند. در
                  ادامه به جزئیات بیشتری در مورد این کاورها پرداخته می‌شود.
                </p>


        
                <div className="text-center w-100">
                  <img
                    src="/img/img-video/bodyfans.jpg"
                    className="mb-4"
                    width={250}
                    alt=""
                  />
                </div>

                <h5>1. جنس و ساختار</h5>
                <p className="p-2 ">
                  <ul className="">
                    <li className="">
                      <span className="text-black ">مواد اولیه :</span> کاورهای
                      بادیفنس معمولاً از مواد نانو و پلی‌اورتان ساخته می‌شوند که
                      مقاومت بالایی در برابر اشعه UV و عوامل جوی دارند. این مواد
                      به‌گونه‌ای طراحی شده‌اند که از رنگ بدنه خودرو محافظت کنند
                      و در عین حال قابلیت انعطاف‌پذیری و چسبندگی خوبی دارند.
                    </li>

                    <li className="">
                      <span className="text-black  ">لایه‌های چندگانه:</span>
                      این کاورها دارای چندین لایه هستند که هر کدام وظیفه خاصی را
                      بر عهده دارند. لایه‌های داخلی معمولاً نرم و محافظت‌کننده
                      هستند، در حالی که لایه‌های خارجی مقاوم در برابر خراش و
                      آسیب می‌باشند.
                    </li>
                  </ul>
                </p>
                <h5>2. مزایا</h5>
                <p className="p-2 ">
                  <ul className="">
                    <li className="">
                      <span className="text-black ">محافظت از رنگ بدنه:</span>{" "}
                      کاورهای بادیفنس به‌طور مؤثری از رنگ بدنه خودرو در برابر
                      تابش مستقیم نور خورشید، باران، برف، و گرد و غبار محافظت
                      می‌کنند. این کار به جلوگیری از آفتاب‌سوختگی و کدر شدن رنگ
                      کمک می‌کند.
                    </li>
                    <li className="">
                      <span className="text-black ">
                        جلوگیری از خراش و ضربه:
                      </span>{" "}
                      این کاورها می‌توانند از بدنه خودرو در برابر خراش‌های کوچک،
                      ضربات و آسیب‌های ناشی از برخورد اجسام خارجی محافظت کنند.
                    </li>
                    <li className="">
                      <span className="text-black ">نصب آسان :</span> نصب
                      کاورهای بادیفنس بسیار ساده است و معمولاً نیازی به ابزار
                      خاصی ندارد. این کاورها به راحتی بر روی بدنه خودرو قرار
                      می‌گیرند و می‌توانند به‌راحتی جدا شوند.
                    </li>
                    <li className="">
                      <span className="text-black ">تمیز کردن آسان :</span>{" "}
                      کاورهای بادیفنس به راحتی قابل تمیز کردن هستند و می‌توانند
                      در صورت کثیف شدن با آب و صابون شسته شوند.
                    </li>
                  </ul>
                </p>
                <h5>3. نکات نصب و نگهداری</h5>

                <p className="p-2 ">
                  <ul className="">
                    <li className="">
                      <span className="text-black ">آمادگی سطح:</span> قبل از
                      نصب کاور، سطح بدنه خودرو باید تمیز و خشک باشد. هرگونه
                      آلودگی یا گرد و غبار ممکن است باعث کاهش چسبندگی کاور شود.
                    </li>
                    <li className="">
                      <span className="text-black ">نصب در دمای مناسب :</span>{" "}
                      بهترین دما برای نصب کاور، دماهای معتدل (بین ۱۵ تا ۲۵ درجه
                      سانتی‌گراد) است. نصب در دماهای خیلی بالا یا خیلی پایین
                      ممکن است باعث مشکلاتی در چسبندگی شود.
                    </li>
                    <li className="">
                      <span className="text-black "> بررسی دوره‌ای:</span> پس از
                      نصب، بهتر است کاور را به‌طور دوره‌ای بررسی کنید تا از عدم
                      وجود خراش یا آسیب اطمینان حاصل شود.
                    </li>
                  </ul>
                </p>

                <h5>5.نتیجه‌گیری</h5>
                <p className="p-2 ">
                  کاورهای محافظتی بادیفنس یک راهکار عالی برای حفظ زیبایی و ارزش
                  خودرو هستند. با استفاده از این کاورها، می‌توانید از بدنه خودرو
                  در برابر آسیب‌های محیطی محافظت کنید و عمر مفید آن را افزایش
                  دهید. با توجه به مزایای فراوان و نصب آسان، این کاورها به عنوان
                  یک گزینه مناسب برای هر خودرویی توصیه می‌شوند.
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

export default WindshieldProtectiveCovers;
