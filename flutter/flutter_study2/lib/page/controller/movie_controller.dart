import 'dart:convert';
import 'dart:io';

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

    try {
      final result = await http.get(uri, headers: headers);

      // var utfParser = utf8.decode(result.bodyBytes);
      // var JsonParser = jsonDecode(utfParser);

      var body = jsonDecode(result.body);
      var movieModel = MovieModel.fromJson(body);

      print("!!! movieModel");
      print(movieModel.items);

      movieList.value = movieModel.items ?? <MovieItem>[];
    } on HttpException catch (err) {
      print("Network error : $err");
      return;
    }
  }
}
