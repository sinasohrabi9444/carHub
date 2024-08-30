import React from "react";
import "./Result.css";
import { TbSettingsCog } from "react-icons/tb";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { RiContactsLine } from "react-icons/ri";
export default function Result() {
  return (
    <div className="result-container">
      <h4>100% گارانتی نتیجه</h4>
      <h6>ما خدمات تعمیر و نگهداری خودروی کامل را ارائه می‌دهیم</h6>
      <div className="wrapper-result">
        <div className="result-item">
          <HiOutlineWrenchScrewdriver className="result-icon" />
          <span className="line-3"></span>
          <div className="text-result-item">
            <h5> تمامی مدل‌های خودرو</h5>
            <p>ما انواع مختلفی از خدمات تعمیر و نگهداری برای تمامی مدل‌ها و برندهای خودرو، حتی برای خودروهای خارجی و کلاسیک، ارائه می‌دهیم.</p>
          </div>
        </div>
        <div className="result-item">
          <TbSettingsCog className="result-icon" />
          <span className="line-3"></span>
          <div className="text-result-item">
            <h5>خدمات مختلف</h5>
            <p>اصلی اصل کار ما ارائه مجموعه ای گسترده از خدمات تعمیر خودروی با کیفیت است و ما این کار را از روز اول خود انجام داده ایم.</p>
          </div>
        </div>
        <div className="result-item">
          <RiContactsLine className="result-icon" />
          <span className="line-3"></span>
          <div className="text-result-item">
            <h5>پشتیبانی با کیفیت </h5>
            <p>Car Repair Services برنامه‌های پشتیبانی با کیفیت برای هر نوع وسیله نقلیه ارائه می‌دهد که به آن‌ها امکان می‌دهد همواره به طور کامل کارایی داشته باشند.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
