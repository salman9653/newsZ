import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Footer from './Footer';


export class News extends Component {
  static defaultProps = {
    country : "in",
    pageSize : 6,
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
      loading : true,
      totalResults : 0,
      page : 1
    }
  }

  capitalize = (word) => {
    return word.charAt(0).toUpperCase()+word.slice(1); 
  }
  async updateNews(){
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd97076ba1a74c4288010115e4f2fbb4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let pasredData = await data.json()
    this.setState({
      articles : pasredData.articles,      
      totalResults : pasredData.totalResults,
      loading:false
  });
    document.title = `NewsZ | ${this.capitalize(this.props.category)}`;
  }

  async componentDidMount(){
    this.updateNews();
  }
  
  fetchMoreData = async () => {
    this.setState({page : this.state.page+1});
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd97076ba1a74c4288010115e4f2fbb4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let pasredData = await data.json()
    this.setState({
      articles : this.state.articles.concat(pasredData.articles),      
      totalResults : pasredData.totalResults,
      loading:false
    });
  };

  render() {
    return (
      <div>
        <div className='container my-4'>
          <h1 className='p-2 text-center'>Top Stories - {this.capitalize(this.props.category)}</h1>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map( (element) => {
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
            </div>
          </InfiniteScroll>        
        </div>
        {!this.state.loading && <Footer />}
      </div>
    )
  }
}

export default News;
