import 'package:flutter/material.dart';
import 'package:get/get.dart';

class GetXDetailPage02 extends StatelessWidget {
  const GetXDetailPage02({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('GetXDetailPage02'),
      ),
      body: Column(
        children: [
          Text("GetXDetailPage02"),
          SizedBox(height: 20),
          InkWell(
              onTap: () {
                Get.back();
              },
              child: Text("뒤로하기")),
        ],
      ),
    );
  }
}
