class MovieModel {
  String lastBuildDate;
  int total;
  int start;
  int display;
  List<MovieItem>? items;

  MovieModel({
    required this.lastBuildDate,
    required this.total,
    required this.start,
    required this.display,
  });

  // "lastBuildDate": "Mon, 29 Nov 2021 14:34:59 +0900",
  // "total": 63,
  // "start": 1,
  // "display": 10,
  // "items":

  MovieModel.fromJson(Map json)
      : lastBuildDate = json['lastBuildDate'],
        total = json['total'],
        start = json['start'],
        display = json['display'] {
    var tmp = json['items'];
    items = tmp?.map<MovieItem>((e) => MovieItem.fromJson(e)).toList();
  }
}

class MovieItem {
  String title;
  String link;
  String image;
  String subtitle;
  String pubDate;
  String director;
  String actor;
  String userRating;

  MovieItem({
    required this.title,
    required this.link,
    required this.image,
    required this.subtitle,
    required this.pubDate,
    required this.director,
    required this.actor,
    required this.userRating,
  });

  // "title": "라야와 마지막 <b>드래곤</b>",
  // "link": "https://movie.naver.com/movie/bi/mi/basic.nhn?code=184518",
  // "image": "https://ssl.pstatic.net/imgmovie/mdi/mit110/1845/184518_P08_142725.jpg",
  // "subtitle": "Raya and the Last Dragon",
  // "pubDate": "2020",
  // "director": "돈 홀|까를로스 로페즈 에스트라다|",
  // "actor": "켈리 마리 트란|아콰피나|산드라 오|대니얼 대 킴|젬마 찬|",
  // "userRating": "9.10"

  MovieItem.fromJson(Map json)
      : title = json['title'],
        link = json['link'],
        image = json['image'],
        subtitle = json['subtitle'],
        pubDate = json['pubDate'],
        director = json['director'],
        actor = json['actor'],
        userRating = json['userRating'];
}
