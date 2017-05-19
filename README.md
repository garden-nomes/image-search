# image-search
https://www.freecodecamp.com/challenges/image-search-abstraction-layer

## Routes

### /search/\<term\>

```bash
$ curl https://noaner-image-search.herokuapp.com/search/lolcats%20funny?offset=1
[
  {
    "url": "http://www.lolcats.com/images/u/08/50/lolcatsdotcomrq4lywopmz2tyzsb.jpg",
    "snippet": "LOLCats - Page 6 - Funny cat pictures",
    "context": "http://www.lolcats.com/page-6.html"
  },
  {
    "url": "http://harry.enzoverder.be/cats/lolcats-funny-pictures-requests-in-triplicat.jpg",
    "snippet": "Album: lolcats-funny-pictures-requests-in-triplicat",
    "context": "http://harry.enzoverder.be/cats/tn/lolcats-funny-pictures-requests-in-triplicat.jpg.html"
  },
  ...
  {
    "url": "https://s-media-cache-ak0.pinimg.com/736x/aa/b4/ba/aab4baf0faf37acd36abe1403fa304c8.jpg",
    "snippet": "Funniest Lolcats | LOLCAts funny cats | Animal Memes | Pinterest ...",
    "context": "https://www.pinterest.com/pin/490540584383748065/"
  }
]
```

### /latest

```bash
$ curl https://noaner-image-search.herokuapp.com/latest
[
  {
    "term": "lolcats funny",
    "timestamp": "2017-05-19T18:15:21.249Z"
  },
  {
    "term": "lolcats funnier",
    "timestamp": "2017-05-19T18:13:36.155Z"
  },
  ...
  {
    "term": "lolcats funniest",
    "timestamp": "2017-05-19T17:51:26.329Z"
  }
]
```
