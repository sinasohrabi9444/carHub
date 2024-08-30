import React from "react";
import "./ContactUs.css";
import NavbarSection from "../NavbarSection/NavbarSection";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import FAQ from "../FAQ/FAQ";
export default function ContactUs() {
  return (
    <>
      <NavbarSection />

      <div class="contact_us_green">
        <div class="responsive-container-block big-container">
          <div class="responsive-container-block container">
            <div
              class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line"
              id="i69b-2"
            >
              <form class="form-box">
                <div class="container-block form-wrapper">
                  <div class="head-text-box">
                    <p class="text-blk contactus-head">تماس با ما</p>
                    <p class="text-blk contactus-subhead">این یک متن تست است</p>
                  </div>
                  <div class="responsive-container-block">
                    <div
                      class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                      id="i10mt-6"
                    >
                      <p class="text-blk input-title">نام</p>
                      <input class="input" id="ijowk-6" name="FirstName" />
                    </div>
                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p class="text-blk input-title">نام خانوادگی</p>
                      <input class="input" id="indfi-4" name="Last Name" />
                    </div>
                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p class="text-blk input-title">ایمیل</p>
                      <input class="input" id="ipmgh-6" name="Email" />
                    </div>
                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <p class="text-blk input-title">شماره تلفن</p>
                      <input class="input" id="imgis-5" name="PhoneNumber" />
                    </div>
                    <div
                      class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                      id="i634i-6"
                    >
                      <p class="text-blk input-title">
                        چی تو ذهنت میگذره با ما درمیونش بزار !
                      </p>
                      <textarea
                        class="textinput"
                        id="i5vyy-6"
                        placeholder="متنی بنویسید..."
                      ></textarea>
                    </div>
                  </div>
                  <div class="btn-wrapper">
                    <button class="submit-btn btn btn-danger">ارسال</button>
                  </div>
                </div>
              </form>
            </div>
            <div
              class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10"
              id="ifgi"
            >
              <div class="container-box">
                <div class="text-content">
                  <p class="text-blk contactus-head">تماس با ما</p>
                  <p class="text-blk contactus-subhead">
                    ما خوشحال میشیم ازینکه بتونیم به شما کمکی بکنیم با ما تماس
                    بگیرید
                  </p>
                </div>
                <div class="workik-contact-bigbox">
                  <div class="workik-contact-box">
                    <div class="phone text-box">
                      <FaPhoneAlt className="contact-svg" />
                      <p class="contact-text">+98 911 111 1111</p>
                    </div>
                    <div class="address text-box">
                      <LuMail className="contact-svg" />
                      <p class="contact-text">hello@workik.com</p>
                    </div>
                    <div class="mail text-box">
                      <FaLocationDot className="contact-svg" />
                      <p class="contact-text">تهران میدان ازادی</p>
                    </div>
                  </div>
                  <div class="social-media-links">
                    <a href="">
                      <FaFacebookF className="social-svg " />
                    </a>
                    <a href="">
                      <FaGoogle className="social-svg " />
                    </a>
                    <a href="">
                      <FaInstagram className="social-svg " />
                    </a>
                    <a href="">
                      <FaTwitter className="social-svg " />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <FAQ />
    </>
  );
}
