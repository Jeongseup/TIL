import 'dart:convert';

import 'package:flutter_study2/page/model/movie_model.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;

class MovieController extends GetxController {
  final RxList<MovieItem> movieList = <MovieItem>[].obs;

  void search(String keyword) async {
    // api setting
    Map<String, String>? headers = Map();
    headers['X-Naver-Client-Id'] = 'EutXAe7lBUmyfpqF1ibg';
    headers['X-Naver-Client-Secret'] = 'mLBpCRUqgV';

    // api uri ? url이랑은 무슨 차이일까?
    Uri uri = Uri.parse(
        'https://openapi.naver.com/v1/search/movie.json?query=${keyword}&display=10&genre=15');

    await http
        .get(
      uri,
      headers: headers,
    )
        .then((res) {
      var utfParser = utf8.decode(res.bodyBytes);
      var body = jsonDecode(utfParser);
      var movieModel = MovieModel.fromJson(body);
    }).catchError((dynamic, StackTrace) {
      // error
      print(dynamic.toString());
    });
  }
}
