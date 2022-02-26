import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false
    }
  }
  async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=fd97076ba1a74c4288010115e4f2fbb4";
    let data= await fetch(url);
    let pasredData = await data.json()
    this.setState({articles : pasredData.articles})
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='p-2'>Top Headlines</h1>
        <div className="row">

          {this.state.articles.map( (element) => {
            return(
              <div className="col-lg-4 col-md-6 col-sm-12" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  url={element.url}
                  />
              </div>
            )
          })}

        </div>
      </div>
    )
  }
}

export default News;
