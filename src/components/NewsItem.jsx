import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {imgUrl,title,description,url} = this.props;
    return (
      <div className='my-3'>
        <div className="card" data-bs-toggle="tooltip" data-bs-placement="top" title={title}>
          <img src={imgUrl ? imgUrl : "https://cdn4.vectorstock.com/i/1000x1000/12/78/live-news-logo-flat-style-vector-20901278.jpg"} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,30)}...</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
