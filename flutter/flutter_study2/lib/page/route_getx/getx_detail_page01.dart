import 'package:flutter/material.dart';
import 'package:get/get.dart';

class GetXDetailPage01 extends StatelessWidget {
  const GetXDetailPage01({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text("GetxRoute"),
        SizedBox(height: 10),
        InkWell(
            onTap: () {
              Get.toNamed('/getxdetailpage02');
            },
            child: Container(
                height: 100, child: Center(child: Text("GetXDetailPage02")))),
        Container(
          color: Colors.black,
        ),
      ],
    );
  }
}
