import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


export class News extends Component {
  static defaultProps = {
    country : "in",
    pageSize : 9,
    category : "general"
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1
    }
  }
  async componentDidMount(){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd97076ba1a74c4288010115e4f2fbb4&page=1&pageSize=${this.props.pageSize}`;
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
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd97076ba1a74c4288010115e4f2fbb4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
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
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd97076ba1a74c4288010115e4f2fbb4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data= await fetch(url);
      let pasredData = await data.json()
      this.setState({
        page : this.state.page + 1,
        articles : pasredData.articles,
        loading:false
    })
  }
  capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1); 
}

  render() {
    return (
      <div className='container my-3'>

        <h1 className='p-2 text-center'>Top Stories | {this.capitalize(this.props.category)}</h1>

        {!this.state.loading && <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} className='btn btn-primary' onClick={this.handelPre}>&#10094; Privious</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-primary' onClick={this.handelNext}>Next &#10095;</button>
        </div>}

        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading && this.state.articles.map( (element) => {
            return(
              <div className="row col-lg-4 col-md-6 col-sm-12" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
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
