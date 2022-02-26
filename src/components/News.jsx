import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "SamMobile"
      },
      "author": "SamMobile",
      "title": "You can pre-order the Samsung Neo QLED 8K and 4K TV lineup from March 16 - SamMobile",
      "description": "Amidst reports that Samsung Electronics is expected to ship around 3-3.5 million LED TV units in 2022, the company has recently ...",
      "url": "https://www.sammobile.com/news/you-can-pre-order-samsung-neo-qled-8k-and-4k-tv-line-up-from-16-march",
      "urlToImage": "https://www.sammobile.com/wp-content/uploads/2022/01/Samsung-Neo-QLED-TV-2022-720x405.jpg",
      "publishedAt": "2022-02-21T15:34:00Z",
      "content": "Amidst reports that Samsung Electronics is expected to ship around 3-3.5 million LED TV units in 2022, the company has recently announced on its official blog the pre-order and pre-registration dates… [+2010 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Inverse"
      },
      "author": "Corey Plante",
      "title": "'Destiny 2: Witch Queen' launch time, file size, and maintenance details - Inverse",
      "description": "One of the biggest 'Destiny 2' expansions — 'The Witch Queen' — is almost here. Here's everything you need to know to get ready for it.",
      "url": "https://www.inverse.com/gaming/destiny-2-witch-queen-launch-time-maintenance-update-size-twab",
      "urlToImage": "https://imgix.bustle.com/uploads/image/2022/2/18/94601218-9f27-4d3b-8c5f-7128e8f095f1-destiny-2_-the-witch-queen-launch-trailer-0-21-screenshot.png?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
      "publishedAt": "2022-02-21T15:30:25Z",
      "content": "After years of \r\nmaneuvering behind the scenes, manipulating some of Destiny 2s major story arcs, the evil alien Hive God Savathûn is about to take the spotlight in The Witch Queen, a massive new exp… [+3781 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GSMArena.com"
      },
      "author": "Ro",
      "title": "Dimensity 9000-powered vivo X80 phone tops AnTuTu, Geekbench charts - GSMArena.com news - GSMArena.com",
      "description": "It could be the vivo X80 Pro.",
      "url": "https://www.gsmarena.com/dimensity_9000powered_vivo_phone_posts_an_impressive_antutu_score-news-53239.php",
      "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/02/vivo-x80-dimensity-9000-antutu/-952x498w6/gsmarena_000.jpg",
      "publishedAt": "2022-02-21T15:15:01Z",
      "content": "A couple of impressive benchmark scorecards surfaced today belonging to an upcoming vivo phone. Codenamed V2186A it's a member of the vivo X80 and is powered by the Dimensity 9000 chipset by MediaTek… [+1769 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Oppo Find X5 series to feature these chipsets along with Hasselblad - Livemint",
      "description": "Oppo might also launch Oppo Pad on February 24",
      "url": "https://www.livemint.com/technology/oppo-find-x5-series-to-feature-these-chipsets-along-with-hasselblad-11645450281773.html",
      "urlToImage": "https://images.livemint.com/img/2022/02/21/600x338/Oppo_Find_X5_series_1645276602056_1645450478529.jpg",
      "publishedAt": "2022-02-21T13:39:05Z",
      "content": "Oppo Find X5 series will use the latest Snapdragon 8 Gen 1 chipset confirmed by the brand today. The new Oppo Find X5 series will see two premium flagship smartphones; Oppo Find X5 Pro and Oppo Find … [+1421 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Mid-day"
      },
      "author": null,
      "title": "YouTube adds TikTok-style live rings to show when someone is streaming - Mid-Day",
      "description": "Google-owned video-streaming giant YouTube is adding a new indicator to show when a channel is live streaming on the platform",
      "url": "https://www.mid-day.com/technology/article/youtube-adds-tiktok-style-live-rings-to-show-when-someone-is-streaming-23215363",
      "urlToImage": "https://images.mid-day.com/images/images/2022/feb/social media_d.jpg",
      "publishedAt": "2022-02-21T13:30:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": null,
      "title": "iPhone 14 production begins with trial phase; Luxshare will reportedly make only low-end models - 9to5Mac",
      "description": "The very first phase of iPhone 14 production is reportedly underway, in a stage known as trial production. In this phase, a small number ...",
      "url": "https://9to5mac.com/2022/02/21/iphone-14-production-trial/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/02/iPhone-14-production-begins-with-trial-phase.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-02-21T13:04:00Z",
      "content": "The very first phase of iPhone 14 production is reportedly underway, in a stage known as trial production. In this phase, a small number of devices are assembled in order to gather data that will gui… [+1855 chars]"
    }
  ];
  constructor(){
    super();
    this.state = {
      articles : this.articles,
      loading : false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsZ - Top Headlines</h2>
        <div className="row">

          {this.state.articles.map( (element) => {
            return(
              <div className="col-lg-4 col-md-6 col-sm-12" key={element.url}>
                <NewsItem
                  title={element.title.slice(0,40)}
                  description={element.description.slice(0,80)}
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
