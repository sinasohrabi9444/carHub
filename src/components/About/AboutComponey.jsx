import React from "react";
import "./AboutComponey.css";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { TiArrowForwardOutline } from "react-icons/ti";
import { LuMessagesSquare } from "react-icons/lu";

export default function AboutCompany() {
  return (
    <div className="about-compony-section">
      <div className="wrapper">
        <div className="full-about-section">
          <div className="about-right-side">
            <div className="title-header">
              <h4>درباره مجموعه ما </h4>
              <span className="sub-line"></span>
            </div>
            <h3 >به مجموعه <span className="text-danger">Shahrooz Tuning</span> خوش آمدید</h3>
            <p>
              خود این شرکت یک شرکت بسیار موفق است. الف از حقیقت شما باید کسانی
              باشید که درد را دنبال می کنند مگر اینکه بدانند چگونه باید اینجا را
              ادامه دهند هیچ کس جز رنج ما از رنج برگزیده نجات نخواهد یافت، نتیجه
              همان خطا و درد ذهن است! چیزهای کوچک بزرگتر هستند
            </p>

            <div className="list-column">
              <div className="right-column">
                <span>
                  <TiTick className="about-icon" />
                    احیای رنگ خودرو
                                  </span>
                <span>
                  <TiTick className="about-icon" />
                  صافکاری PDR
                </span>
                <span>
                  <TiTick className="about-icon" />
                  کاور رنگی و شفاف
                </span>
              </div>
              <div className="left-column">
                <span>
                  <TiTick className="about-icon" />
                 سرامیک خودرو
                </span>
                <span>
                  <TiTick className="about-icon" />
                  لیسه گیری خودرو
                </span>
                <span>
                  <TiTick className="about-icon" />
                  نقاشی خودرو
                </span>
              </div>
            </div>

            <div className="more-information-about">
              <Link to={"/about"} className="btn btn-warning more-btn">
                اطلاعات بیشتر
              </Link>

              <div className="message-icon">
                <LuMessagesSquare />
              </div>

              <div className="contactUs">
                <span>با ما در ارتباط باشید</span>
                <div className="quez">
                  <Link  to={"/contact"}>سوالات متداول</Link>
                  <TiArrowForwardOutline className="arrow-icon"/>
                </div>
              </div>
            </div>
          </div>
          <div className="about-left-side">
            <img  src="/img/car4.jpg" className="p-3" alt="" />
           
          </div>
        </div>
      </div>
    </div>
  );
}
