import 'package:flutter/material.dart';

class DetailPage02 extends StatelessWidget {
  const DetailPage02({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('DetailPage02'),
      ),
      body: Column(
        children: [
          Text("DetailPage02"),
          SizedBox(
            height: 20,
          ),
          InkWell(
              onTap: () {
                Navigator.pop(context);
              },
              child: Text("뒤로하기")),
        ],
      ),
    );
  }
}
