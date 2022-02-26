import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from "./Spinner"

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1
    }
  }
  async componentDidMount(){
    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=fd97076ba1a74c4288010115e4f2fbb4&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let pasredData = await data.json()
    this.setState({
      articles : pasredData.articles,
      totalResults : pasredData.totalResults,
      loading:false

    })
  }
  handelPre = async ()=>{
    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=fd97076ba1a74c4288010115e4f2fbb4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let pasredData = await data.json()
    this.setState({
      page : this.state.page - 1,
      articles : pasredData.articles,
      loading:false
  })
  }
  handelNext = async ()=>{
      let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=fd97076ba1a74c4288010115e4f2fbb4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data= await fetch(url);
      let pasredData = await data.json()
      this.setState({
        page : this.state.page + 1,
        articles : pasredData.articles,
        loading:false
    })
  }

  render() {
    return (
      <div className='container my-3'>

        <h1 className='p-2 text-center'>Top Stories</h1>

        {!this.state.loading && <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} className='btn btn-primary' onClick={this.handelPre}>&#10094; Privious</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-primary' onClick={this.handelNext}>Next &#10095;</button>
        </div>}

        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading && this.state.articles.map( (element) => {
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

        {!this.state.loading && <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} className='btn btn-primary' onClick={this.handelPre}>&#10094; Privious</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-primary' onClick={this.handelNext}>Next &#10095;</button>
        </div>}
      </div>
    )
  }
}

export default News;
