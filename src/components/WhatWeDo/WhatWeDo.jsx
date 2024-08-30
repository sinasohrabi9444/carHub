import React from "react";
import "./WhatWeDo.css";
import VideoPlayer from '../VideoPlayear/VideoPlayear'
import { Link } from "react-router-dom";
export default function WhatWeDo() {
  return (
    <div className="container-we-do">
      <div className="bg">
        <h4>ما چه کاری انجام میدهیم</h4>
        <h6>ما ماشین قبلی شما رو برده یکی دیگه تحویلتون میدیم </h6>

        <div id="card-area">
          <div class="wrapper-card-area">
            <div class="box-area">
              <div class="box">
                <img alt="" src="img/car6.jpg" />

                

                <div class="overlay">
                  <h3>دیتیلینگ خودرو</h3>
                  <p>
                    دیتیلینگ خودرو شامل فرآیندهای تمیز کردن، ترمیم و حفاظت از
                    تمامی بخش‌های داخلی و خارجی خودرو است تا ظاهر آن را بهبود
                    بخشد و عمر مفید آن را افزایش دهد.
                  </p>
                  <a href="#">Book Now</a>
                </div>
              </div>
              <div class="box">
                <img alt="" src="img/car-polishing.jpg" />
                <div class="overlay">
                  <h3>نقاشی خودرو</h3>
                  <p>
                    نقاشی خودرو فرآیند بازسازی یا تغییر رنگ بدنه خودرو است که
                    شامل آماده‌سازی سطح، اعمال رنگ و پوشش نهایی برای حفاظت و
                    بهبود ظاهر خودرو می‌باشد.
                  </p>
                  <a href="#">Book Now</a>
                </div>
              </div>
              <div class="box">
                <img alt="" src="img/cover.jpg" />
                <div class="overlay">
                  <h3>کاور های مات و رنگی</h3>
                  <p>
                    کاورهای مات و رنگی خودرو، پوشش‌هایی هستند که به‌منظور تغییر
                    ظاهر و حفاظت از بدنه خودرو استفاده می‌شوند و به خودرو
                    جلوه‌ای منحصر به فرد و شخصی می‌بخشند.
                  </p>
                  <a href="#">Book Now</a>
                </div>
              </div>
              <div class="box">
                <img alt="" src="img/seramic-car.jpg" />
                <div class="overlay">
                  <h3>سرامیک خودرو</h3>
                  <p>
                    سرامیک بدنه خودرو یک پوشش محافظ است که از رنگ و بدنه در
                    برابر خراش، آلودگی و اشعه UV محافظت کرده و دوام و درخشش آن
                    را افزایش می‌ده
                  </p>
                  <a href="#">Book Now</a>
                </div>
              </div>
              <div class="box">
                <img alt="" src="img/car5.jpg" />
                <div class="overlay">
                  <h3>صافکاری PDR</h3>
                  <p>
                    صافکاری PDR (Paintless Dent Repair) روشی است که با استفاده
                    از ابزارهای خاص، دندانه‌ها و خراش‌های بدنه خودرو را بدون
                    نیاز به رنگ‌آمیزی ترمیم می‌کند و ظاهر خودرو را به حالت اولیه
                    برمی‌گرداند.
                  </p>
                  <a href="#">Book Now</a>
                </div>
              </div>
              <div class="box">
                <img alt="" src="img/car1.jpg" />

                <div class="overlay">
                  <h3>پولیش خودرو</h3>
                  <p>
                    پولیش خودرو فرآیندی است که با استفاده از مواد ساینده و
                    ابزارهای خاص، خراش‌ها و نواقص سطحی رنگ بدنه را برطرف کرده و
                    درخشش و شفافیت آن را افزایش می‌دهد.
                  </p>
                  <a href="#">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
