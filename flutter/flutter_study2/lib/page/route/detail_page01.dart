import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'detail_page02.dart';

class DetailPage01 extends StatelessWidget {
  const DetailPage01({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text("Nav"),
        SizedBox(height: 10),
        InkWell(
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => DetailPage02(),
              ),
            );
          },
          child: Container(
            height: 100,
            child: Center(child: Text("DetailPage02")),
          ),
        ),
        Container(
          color: Colors.black,
        ),
      ],
    );
  }
}
