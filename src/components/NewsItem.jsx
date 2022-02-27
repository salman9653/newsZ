import React, { Component } from 'react';
import news from "./news.jpg"

export class NewsItem extends Component {
  render() {
    let {imgUrl,title,description,author,date,source,url} = this.props;
    return (
      <div className='my-3'>
        <div className="card h-100">
          <img src={imgUrl ? imgUrl : news} className="card-img-top" alt="" />
          <div className="card-header">
            <h5 className="card-title">{title ? title.slice(0,60) : ""}...</h5>
          </div>
          
          <div className="card-body">
          <span className="badge bg-danger">{source ? source : ""}</span>
            <p className="card-text">{description ? description.slice(0,120)+"..." : ""}</p>
            <footer className="blockquote-footer">
              By {author ? author : "Unknown"}
            </footer>
            <div className="d-grid">
              <a href={url} className="btn btn-sm btn-primary">Read More </a>
            </div>
          </div>
          <div className="card-footer text-muted  text-center">
            on {new Date(date).toGMTString()}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
