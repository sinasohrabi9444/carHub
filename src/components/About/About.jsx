import React, { useEffect } from "react";
import "./About.css";
import VideoPlayer from "../VideoPlayear/VideoPlayear";
import NavbarSection from "../NavbarSection/NavbarSection";
import { Link } from "react-router-dom";
import Slider from "../Silder/Slider";
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="section-about">
      <div className="about-header">
        <NavbarSection />
      </div>

      <div className="video-background">
        <video autoPlay loop muted>
          <source src="/img/img-video/finaly.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className="text-center mb-5 ">درباره ما </h1>
      <div className="container-about">
        <div className="wrapper-about w-100 ">
          <div className="about-item">
            <div className="right-about-img">
              <img src="/img/img-video/newfolder/car1.jpg" alt="img about us" />
            </div>

            <div className="left-about-text">
              <h4 className="text-danger mb-4">درباره مجموعه شهروز تیونینگ</h4>

              <p>
                مجموعه شهروز تیونینگ با افتخار ۲۰ سال سابقه در زمینه خدمات
                سرامیک خودرو، پولیش و صافکاری PDR (Paintless Dent Repair) به شما
                عزیزان ارائه می‌شود. ما به عنوان یک تیم متخصص و با تجربه، به
                کیفیت و دقت در کار خود اهمیت می‌دهیم و هدف ما حفظ زیبایی و ارزش
                خودروهای شماست. خدمات ما شامل: سرامیک خودرو: با استفاده از
                بهترین محصولات و تکنیک‌ها، سطح خودرو را در برابر خراشیدگی و
                آلودگی محافظت می‌کنیم و درخشندگی آن را به حداکثر می‌رسانیم.
                پولیش خودرو: با تکنیک‌های حرفه‌ای، نقص‌ها و خط و خش‌های روی بدنه
                خودرو را برطرف کرده و ظاهری جدید و درخشان به آن می‌بخشیم.
                صافکاری PDR: با استفاده از روش‌های پیشرفته و بدون رنگ، دندانه‌ها
                و آسیب‌های کوچک را به طور مؤثر و سریع اصلاح می‌کنیم. در شهروز
                تیونینگ، ما به رضایت مشتریان خود اهمیت می‌دهیم و همواره در
                تلاشیم تا با ارائه بهترین خدمات، تجربه‌ای بی‌نظیر برای شما به
                ارمغان آوریم. با ما تماس بگیرید و از خدمات تخصصی ما بهره‌مند
                شوید!
              </p>
            </div>
            <div></div>
          </div>
          <div className="about-item  mt-4">
            <div className="right-about-img">
              <img src="/img/img-video/newfolder/car3.jpg" alt="img about us" />
            </div>


            <div className="left-about-text">
              <h4 className="text-danger mb-4">درباره مجموعه شهروز تیونینگ</h4>

              <p>
                در دنیای امروز، خودروها نه تنها وسیله‌ای برای حمل و نقل هستند،
                بلکه نشان‌دهنده شخصیت و سلیقه مالکینشان نیز محسوب می‌شوند. به
                همین دلیل، حفظ زیبایی و کیفیت خودرو از اهمیت ویژه‌ای برخوردار
                است. در این راستا، ما در شهروز تیونینگ به ارائه خدماتی با کیفیت
                عالی در زمینه‌های پولیش، سرامیک و صافکاری خودرو می‌پردازیم.
                <br />
                <span className="f-bold text-danger">
                  چرا ما را انتخاب کنید؟ 
                </span>{" "}
                <br />
                کیفیت بالا: ما به کیفیت خدمات خود افتخار می‌کنیم و همواره تلاش می‌کنیم تا
                بهترین نتیجه را برای مشتریان خود به ارمغان بیاوریم. تجربه و
                تخصص: تیم ما متشکل از کارشناسان با تجربه است که با جدیدترین
                تکنیک‌ها و تجهیزات آشنا هستند. رضایت مشتری: رضایت شما اولویت
                ماست. ما به نظرات و پیشنهادات شما گوش می‌دهیم و همواره در تلاشیم
                تا خدمات خود را بهبود بخشیم. محصولات با کیفیت: ما از بهترین و
                معتبرترین برندها در صنعت خودرو استفاده می‌کنیم تا نتایج مطلوبی
                را به دست آوریم.
                <br />
                در  شهروز تیونینگ ، ما به کار با کیفیت و رضایت مشتریان خود
                اهمیت می‌دهیم. اگر به دنبال خدمات پولیش، سرامیک و صافکاری با
                کیفیت هستید، با ما تماس بگیرید. ما آماده‌ایم تا به شما کمک کنیم
                تا خودروی خود را به بهترین شکل ممکن حفظ کنید.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Slider />


      <div className="need-help-about">
        <div className="need-help-text">
          <h2>به کمک نیاز دارید ؟</h2>
          <span>با ما تماس بگیرید با شماره 09121111111</span>
        </div>
        <Link to={"/contact"} className="btn-contanct-us">
          <Link className="btn-text">تماس با ما </Link>
        </Link>
      </div>
    </div>
  );
}
