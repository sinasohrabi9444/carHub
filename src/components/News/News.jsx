import React from "react";
import "./News.css";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { newsData } from "../../datas";
export default function News() {
  const { id } = useParams();
  const post = newsData.find((p) => p.id === id);

  const LimitedText = ({ text, maxLength }) => {
    // بررسی طول متن و نمایش متن محدود شده
    const displayText =
      text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    return <p className="limited-text text-black-50">{displayText}</p>;
  };

  return (
    <div className="news-container text-center">
      <h3>آخرین اخبار ما</h3>
      <h6>
        ما هفتگی اخباری از بروزرسانی دنیای خودرو ها منتشر میکنیم. منتظر باشید
      </h6>

      <div className="card-wrapper-news">
        {newsData.slice(0, 3).map((news) => (
          <div className="card-body-news" key={news.id}>
            <img src={news.img} alt={news.title} />
            <h4 className="text-black"> {news.title} </h4>

            <LimitedText maxLength={100} text={news.description} />

            <Link to={`${news.url}/${news.id}`}>
              <div className="btn btn-warning">بیشتر بخوانید</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
