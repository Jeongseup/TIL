import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_study3/setting/constant.dart';
import 'package:flutter_study3/setting/start.dart';
import 'package:flutter_study3/util/tmdb/ready.dart';
import 'package:line_awesome_flutter/line_awesome_flutter.dart';
import 'package:styled_widget/styled_widget.dart';

class NexflixTestPage extends StatelessWidget {
  const NexflixTestPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      // 컨텐츠가 좀 더 안전하게 나온다.. ?
      child: Scaffold(
        body: Stack(children: [
          Container()
              .backgroundImage(DecorationImage(
                  image: CachedNetworkImageProvider(
                      tmdb.images.getUrl("pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg")!),
                  fit: BoxFit.cover))
              .height(480),
          Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [
                Colors.black.withOpacity(1),
                Colors.black.withOpacity(0.0),
                Colors.black.withOpacity(0.25),
                Colors.black.withOpacity(1),
              ], end: Alignment.topCenter, begin: Alignment.bottomCenter),
            ),
          ).height(480),
          Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container()
                      .backgroundImage(DecorationImage(
                          image: CachedNetworkImageProvider(netflixIconUrl),
                          fit: BoxFit.contain))
                      .height(480)
                      .width(30)
                      .opacity(0.9),
                  Icon(LineAwesomeIcons.chromecast).iconSize(29).opacity(0.7),
                ],
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text("TV 프로그램"),
                  Text("영화"),
                  Text("카테고리"),
                ],
              )
            ],
          ).padding(horizontal: 6, vertical: 15)
        ]),
      ),
    );
  }
}

main() async {
  return await startApp(NexflixTestPage());
}
