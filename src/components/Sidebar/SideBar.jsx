import React ,{useState} from "react";
import { newsData } from "../../datas";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import { GrUserManager } from "react-icons/gr";
export default function SideBar({postID}) {
  const [postData, setPostData] = useState(newsData);
  return (
    <div className="w-100 right-side-container ">
      <div className="right-side-news   ">
        <h4 className="mt-3">پست های اخیر</h4>

        <div className="card-news-container d-flex  ">
          {postData.filter(post => post.id !== postID).map((news) => (
            <div className="card-news ">
              <img
                className="rounded"
                src={news.img}
                width={120}
                alt={news.title}
              />
              <div className="text-card d-flex flex-column">
                <Link to={`${news.url}/${news.id}`}>
                  {" "}
                  <h6>{news.title}</h6>
                </Link>
                <span>
                  {news.date} <MdDateRange />{" "}
                  <span className="creator ">
                    مدیر
                    <GrUserManager />
                  </span>
                </span>
              </div>
            </div>
          ))}

     

          
        </div>
      </div>
    </div>
  );
}
