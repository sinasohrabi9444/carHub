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

const PdrSmoothing = () => {
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
            <div className="center-news">
              <div className="w-100 text-center">
                <img src={post.img} alt="image news" />
              </div>

              <div className="text-content">
                <h3 className="mt-3 mb-3"> صافکاری PDR</h3>

                <h5>PDR چیست ؟</h5>
                <p className="p-2 ">
                  PDR یک تکنیک تعمیر بدنه خودرو است که در آن با استفاده از
                  ابزارهای خاص، دندانه‌ها و آسیب‌های سطحی به طور مستقیم از پشت
                  بدنه خودرو اصلاح می‌شوند. این روش به حفظ رنگ اصلی خودرو کمک
                  کرده و از هزینه‌های اضافی رنگ‌آمیزی جلوگیری می‌کند.
                </p>
                <h5>2. مزایای PDR :</h5>
                <p className="p-2 ">
                  <ul className="">
                    <li className="">
                      <span className="text-black ">صرفه‌جویی در هزینه:</span>{" "}
                      PDR معمولاً هزینه کمتری نسبت به روش‌های سنتی تعمیر دارد.
                    </li>
                    <li className="">
                      <span className="text-black  ">زمان کمتر :</span> تعمیرات
                      با PDR معمولاً سریع‌تر انجام می‌شوند و ممکن است تنها در
                      چند ساعت به اتمام برسند.
                    </li>
                    <li className="">
                      <span className="text-black  ">حفظ رنگ اصلی:</span> از
                      آنجا که در این روش نیازی به رنگ‌آمیزی نیست، رنگ اصلی خودرو
                      حفظ می‌شود
                    </li>
                    <li className="">
                      <span className="text-black  ">
                        دوستانه با محیط زیست:
                      </span>{" "}
                      PDR به دلیل عدم استفاده از رنگ و مواد شیمیایی مضر، یک روش
                      سازگار با محیط زیست است.
                    </li>
                  </ul>
                </p>
                <h5>3.مراحل انجام PDR</h5>
                <p className="p-2 ">
                  <ul className="">
                    <li className="">
                      <span className="text-black ">بررسی آسیب :</span> تکنسین
                      ابتدا آسیب را بررسی کرده و تعیین می‌کند که آیا PDR برای آن
                      آسیب مناسب است یا خیر.
                    </li>
                    <li className="">
                      <span className="text-black ">
                        دسترسی به ناحیه آسیب‌دیده:
                      </span>{" "}
                      تکنسین باید به پشت بدنه خودرو دسترسی پیدا کند. این ممکن
                      است شامل جدا کردن قطعات داخلی مانند تودوزی‌ها باشد.
                    </li>
                    <li className="">
                      <span className="text-black ">
                        استفاده از ابزارهای خاص:
                      </span>{" "}
                      با استفاده از ابزارهای خاص، تکنسین به آرامی دندانه را از
                      پشت به سمت جلو فشار می‌دهد تا به شکل اصلی خود برگردد.
                    </li>
                    <li className="">
                      <span className="text-black ">بررسی نهایی :</span> پس از
                      اصلاح دندانه، تکنسین ناحیه را بررسی کرده و اطمینان حاصل
                      می‌کند که آسیب به طور کامل برطرف شده است.
                    </li>
                  </ul>
                </p>
                <h5>4. تفاوت‌های PDR با صافکاری معمولی</h5>

                <table>
                  <tr>
                    <th>ویژگی</th>
                    <th>صافکاری PDR</th>
                    <th>صافکاری معمولی</th>
                  </tr>
                  <tr>
                    <td>روش تعمیر</td>
                    <td>اصلاح دندانه از پشت بدنه</td>
                    <td>استفاده از رنگ و مصالح جدید</td>
                  </tr>
                  <tr>
                    <td>زمان تعمیر</td>
                    <td>سریع (چند ساعت)</td>
                    <td>طولانی‌تر (روزها)</td>
                  </tr>
                  <tr>
                    <td>هزینه</td>
                    <td>معمولاً کمتر</td>
                    <td>معمولاً بیشتر</td>
                  </tr>
                  <tr>
                    <td>حفظ رنگ</td>
                    <td> رنگ اصلی حفظ می‌شود</td>
                    <td> ممکن است نیاز به رنگ‌آمیزی مجدد باشد</td>
                  </tr>
                  <tr>
                    <td>محدودیت‌ها</td>
                    <td>مناسب برای آسیب‌های کوچک و سطحی</td>
                    <td>می‌تواند برای آسیب‌های بزرگ‌تر نیز استفاده شود</td>
                  </tr>
                </table>

                <div className="text-center w-100">
                  <img
                    src="/img/PDR-car-smoothing10.webp"
                    className="mb-4"
                    width={250}
                    alt=""
                  />
                </div>

                <h5>5. مراحل انجام PDR</h5>
                <p className="p-2 ">
                  <ul>
                    <li className="">
                      <span className="text-black ">بررسی آسیب :</span> تکنسین
                      آسیب را بررسی کرده و تعیین می‌کند که آیا PDR مناسب است یا
                      خیر.
                    </li>
                    <li className="">
                      <span className="text-black ">
                        دسترسی به ناحیه آسیب‌دیده:
                      </span>{" "}
                      دسترسی به پشت بدنه برای تعمیر دندانه‌ها
                    </li>
                    <li className="">
                      <span className="text-black ">
                        استفاده از ابزارهای خاص:
                      </span>{" "}
                      با ابزارهای خاص، دندانه‌ها به آرامی از پشت به سمت جلو فشار
                      داده می‌شوند
                    </li>
                  </ul>
                </p>

                <h6> چه نوع آسیب‌هایی را می‌توان با PDR تعمیر کرد؟</h6>
                <p className="p-2 ">
                  <ul className="">
                    <li className="">
                      <span className="text-black ">دندانه‌های کوچک :</span>{" "}
                      ناشی از برخورد با اشیاء کوچک
                    </li>{" "}
                    <li className="">
                      <span className="text-black ">
                        آسیب‌های ناشی از تگرگ:
                      </span>{" "}
                      دندانه‌های ناشی از بارش تگرگ
                    </li>
                    <li className="">
                      <span className="text-black ">
                        آسیب‌های ناشی از درب خودرو:
                      </span>{" "}
                      دندانه‌هایی که ناشی از باز شدن درب خودرو دیگران هستند
                    </li>
                  </ul>
                </p>

                <h5>7. نتیجه‌گیری</h5>

                <p className="p-2 ">
                  صافکاری PDR یک روش مؤثر و اقتصادی برای تعمیر دندانه‌ها و
                  آسیب‌های بدنه خودرو است که به حفظ ظاهر و ارزش خودرو کمک
                  می‌کند. این روش گزینه‌ای عالی برای آسیب‌های کوچک و سطحی به
                  شمار می‌رود.
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

export default PdrSmoothing;
