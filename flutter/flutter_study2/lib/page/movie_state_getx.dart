import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_study2/page/controller/movie_controller.dart';
import 'package:flutter_study2/page/model/movie_model.dart';
import 'package:get/get.dart';

class MovieStateWithGetx extends StatelessWidget {
  MovieStateWithGetx({Key? key}) : super(key: key) {
    print('!!!!! MovieStateWithGetx');
  }

  MovieController movieController = Get.find();

  final TextEditingController _textController = TextEditingController();

  search() {
    String inputText;
    if ((inputText = _textController.text) == '') return;

    movieController.search(inputText);
    _textController.text = '';
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Column(
        children: [
          Flexible(
            child: Obx(() => CustomListView(movieController.movieList.value)),
            flex: 5,
          ),
          Flexible(
              child: Container(
                decoration: const BoxDecoration(
                    border: Border.symmetric(
                        horizontal: BorderSide(color: Colors.grey))),
                child: Row(
                  children: [
                    Flexible(
                      flex: 6,
                      child: Padding(
                        padding: const EdgeInsets.symmetric(
                            vertical: 8, horizontal: 4),
                        child: TextField(
                          controller: _textController,
                          decoration: const InputDecoration(
                            hintText: '검색할 영화의 키워드를 입력하세요.',
                            enabledBorder: InputBorder.none,
                          ),
                          textInputAction: TextInputAction.go,
                          onSubmitted: (_) {
                            search();
                          },
                        ),
                      ),
                    ),
                    Expanded(
                      child: TextButton(
                        onPressed: () {
                          search();
                        },
                        child: const Text('검색'),
                      ),
                    )
                  ],
                ),
              ),
              flex: 1),
        ],
      ),
    );
  }
}

class CustomListView extends StatelessWidget {
  final List<MovieItem> _list;
  final _controller = ScrollController();

  static const List<Color> colors = [
    Colors.red,
    Colors.orange,
    Colors.yellow,
    Colors.green,
    Colors.blue,
    Colors.indigo,
    Colors.purple,
  ];

  CustomListView(this._list, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        controller: _controller,
        padding: const EdgeInsets.symmetric(vertical: 12),
        itemCount: _list.length,
        itemBuilder: (BuildContext context, int index) {
          if (index == (_list.length - 1))
            Timer(
              Duration(milliseconds: 10),
              () => _controller.jumpTo(_controller.position.maxScrollExtent),
            );

          return Card(
            color: Colors.white,
            shadowColor: Colors.black,
            child: Row(
              children: [
                _list[index].image.isNotEmpty
                    ? Image.network(_list[index].image,
                        width: 100, fit: BoxFit.contain)
                    : Container(
                        width: 100,
                        height: 150,
                        color: Colors.black12,
                        child: Center(
                          child: Text("NO IMAGE"),
                        ),
                      ),
                Text(
                  _list[index].title,
                  style: TextStyle(
                    color: Colors.black,
                  ),
                ),
              ],
            ),
          );
        });
  }
}
