import 'package:flex_color_scheme/flex_color_scheme.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:styled_widget/styled_widget.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("light").center().gestures(onTap: () {
              Get.changeTheme(FlexThemeData.light(scheme: FlexScheme.indigo));
            }),
            Text("dark").center().gestures(onTap: () {
              Get.changeTheme(FlexThemeData.dark(scheme: FlexScheme.indigo));
            }),
          ],
        ),
      ),
    );
  }
}
