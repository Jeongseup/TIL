import 'package:flutter/material.dart';
import 'package:flutter_study2/page/controller/movie_controller.dart';
import 'package:flutter_study2/page/controller/mycontroller.dart';
import 'package:flutter_study2/page/route/detail_page01.dart';
import 'package:flutter_study2/page/route_getx/getx_detail_page01.dart';
import 'package:flutter_study2/page/route_getx/getx_detail_page02.dart';
import 'package:get/get.dart';

import 'page/movie_state_getx.dart';
import 'page/state.dart';
import 'page/state_getx.dart';

void main() {
  runApp(
    GetMaterialApp(
      title: "MyApp",
      home: const MyApp(),
      initialBinding: BindingsBuilder(() {
        Get.put(MovieController());
        Get.put(MyController());
      }),
      getPages: [
        GetPage(name: '/getxdetailpage02', page: () => GetXDetailPage02())
      ],
    ),
  );
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  _MyApp createState() => _MyApp();
}

class _MyApp extends State<MyApp> {
  int _selectedIndex = 0;

  final List _widgetOptions = [
    DetailPage01(),
    GetXDetailPage01(),
    StateWithSetState(),
    StateWithGetx(),
    MovieStateWithGetx()
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Center(
          child: Text(
            "송도 Flutter 스터디 과제 No.1",
            style: TextStyle(fontSize: 14),
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        backgroundColor: Colors.grey,
        selectedItemColor: Colors.red,
        unselectedItemColor: Colors.white,
        selectedFontSize: 14,
        unselectedFontSize: 14,
        currentIndex: _selectedIndex, //현재 선택된 Index
        onTap: (int index) {
          setState(() {
            _selectedIndex = index;
          });
        },
        items: const [
          BottomNavigationBarItem(
            label: '라우트',
            icon: Icon(Icons.favorite),
          ),
          BottomNavigationBarItem(
            label: '라우트 getx',
            icon: Icon(Icons.music_note),
          ),
          BottomNavigationBarItem(
            label: 'state',
            icon: Icon(Icons.location_on),
          ),
          BottomNavigationBarItem(
            label: 'state getx',
            icon: Icon(Icons.library_books),
          ),
          BottomNavigationBarItem(
            label: 'Movie Search',
            icon: Icon(Icons.library_books),
          ),
        ],
      ),
      body: Center(
        child: _widgetOptions.elementAt(_selectedIndex),
      ),
    );
  }
}
