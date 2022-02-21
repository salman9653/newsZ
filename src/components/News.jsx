import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsZ - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem 
              title="News Title"
              description="News Description goes Here"
              imgUrl="https://imgix.bustle.com/uploads/image/2022/2/18/94601218-9f27-4d3b-8c5f-7128e8f095f1-destiny-2_-the-witch-queen-launch-trailer-0-21-screenshot.png?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
              url="https://www.inverse.com/gaming/destiny-2-witch-queen-launch-time-maintenance-update-size-twab"
              />
          </div>
          <div className="col-md-4">
            <NewsItem 
              title="News Title"
              description="News Description goes Here"
              imgUrl="https://imgix.bustle.com/uploads/image/2022/2/18/94601218-9f27-4d3b-8c5f-7128e8f095f1-destiny-2_-the-witch-queen-launch-trailer-0-21-screenshot.png?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
              url="https://www.inverse.com/gaming/destiny-2-witch-queen-launch-time-maintenance-update-size-twab"
              />
          </div>
          <div className="col-md-4">
            <NewsItem 
              title="News Title"
              description="News Description goes Here"
              imgUrl="https://imgix.bustle.com/uploads/image/2022/2/18/94601218-9f27-4d3b-8c5f-7128e8f095f1-destiny-2_-the-witch-queen-launch-trailer-0-21-screenshot.png?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
              url="https://www.inverse.com/gaming/destiny-2-witch-queen-launch-time-maintenance-update-size-twab"
              />
          </div>
        </div>
      </div>
    )
  }
}

export default News;
