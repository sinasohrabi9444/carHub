import React from "react";
import "./GoodJob.css";
import { Link } from "react-router-dom";
export default function GoodJob() {
  return (
    <div className="container-goodjob">
      <div className="bg-img">
        <img src="/img/car-background.png" alt="" />
      </div>
      <div className="left-side-content-goodjob">
        <h2>کار با کیفیت اولویت اول ماست</h2>
        <p>
          در کارگاه ما، ارائه خدمات با بالاترین کیفیت، اصلی‌ترین هدف ماست. با
          افتخار، خدمات حرفه‌ای پولیش ماشین، صافکاری بی‌رنگ (PDR)، و ترمیم خودرو
          را ارائه می‌دهیم. ما از تجهیزات پیشرفته و تکنیک‌های به‌روز استفاده
          می‌کنیم تا به خودروی شما جلوه‌ای تازه ببخشیم و آن را به بهترین شکل
          ممکن بازیابی کنیم. تیم ما متعهد است تا با دقت و تخصص، هر خراش،
          فرورفتگی یا آسیبی را بدون نیاز به رنگ‌آمیزی برطرف کند. اعتماد شما به
          ما، بزرگترین سرمایه ماست و ما همیشه تلاش می‌کنیم تا انتظارات شما را
          فراتر از حد تصور برآورده کنیم. کیفیت خدمات ما تضمین شده و رضایت شما
          برای ما در اولویت است.
        </p>
        <Link className="btn btn-warning d-block  width100" to={"/about"}>بیشتر بخوانید</Link>
      </div>
    </div>
  );
}
