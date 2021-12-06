import 'package:flex_color_scheme/flex_color_scheme.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_study3/util/logger/logger.dart';
import 'package:flutter_study3/util/tmdb/ready.dart';
import 'package:get/get.dart';

startApp(Widget home) async {
  await readyForRunAppStart();
  return runApp(ScreenUtilInit(
    designSize: const Size(360, 960),
    builder: () => MyApp(home),
  ));
}

class MyApp extends StatelessWidget {
  MyApp(this.home, {Key? key}) : super(key: key);
  final Widget home;

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: "송도 Flutter 스터디 과제 No.3",
      // 컬러 설정을 해주는 부분
      theme: FlexThemeData.light(scheme: FlexScheme.indigo),
      darkTheme: FlexThemeData.dark(scheme: FlexScheme.indigo),
      // system으로 하면 시스템에서 설정한 모드로 변경됨.
      themeMode: ThemeMode.dark,
      debugShowCheckedModeBanner: false,
      // OnInit 처음에 앱 실행전에 돌리는 함수
      onInit: () async {
        return await readyForAppStart(context);
      },
      home: home,
    );
  }
}

readyForRunAppStart() {}
readyForAppStart(BuildContext context) async {
  await readyForTMDB();
  await readyForLogger();
}
