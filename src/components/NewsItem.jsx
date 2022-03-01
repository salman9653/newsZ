import React, { Component } from 'react';
import news from "./news.jpg"

export class NewsItem extends Component {
  render() {
    let {imgUrl,title,description,author,date,source,url} = this.props;
    return (
      <div className='my-3'>
        <div className="card h-100" style={{borderRadius:"15px"}}>
          <div style={{position:"absolute" , right:"0" , top: "12px"}}>
            <span className="badge bg-danger" style={{borderRadius:" 10px 0 0 10px"}}>{source ? source : ""}</span>
          </div>
          <img src={imgUrl ? imgUrl : news} className="card-img-top" alt={title}  style={{borderRadius:"15px 15px 0 0"}}/>
          <div className="card-header">
            <h5 className="card-title">{title ? title : ""}</h5>
          </div>
          <div className="card-body">
            <p className="card-text">{description ? description.slice(0,150)+"..." : ""}</p>
            <footer className="blockquote-footer">
              By {author ? author : "Unknown"}
            </footer>
            <div className="d-grid">
              <a href={url} className="btn btn-sm btn-primary">Read More </a>
            </div>
          </div>
          <div className="card-footer text-muted  text-center">
            {new Date(date).toGMTString()}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
