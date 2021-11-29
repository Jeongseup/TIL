import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) => MyList();
}

class MyList extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _MyState();
}

class _MyState extends State<MyList> {
  final myController = TextEditingController();
  final List<String> entries = [];

  @override
  void dispose() {
    setState(() {
      entries.add(myController.text);
      myController.clear();
    });
  }

  @override
  Widget build(BuildContext context) => MaterialApp(
        home: Scaffold(
          appBar: AppBar(
            title: const Center(
              child: Text(
                "송도 Flutter 스터디 과제 No.1",
                style: TextStyle(fontSize: 14),
              ),
            ),
          ),
          body: SafeArea(
            child: Column(
              children: [
                Flexible(
                  flex: 4,
                  child: _MyListViewWidget(entries.reversed.toList()),
                ),
                Flexible(
                  flex: 1,
                  child: Row(
                    children: [
                      Flexible(
                        flex: 3,
                        child: TextField(controller: myController),
                      ),
                      Flexible(
                        flex: 1,
                        child: ElevatedButton(
                            onPressed: dispose,
                            child: const Text(
                              "Add text",
                              style: TextStyle(fontSize: 10),
                            )),
                      )
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      );
}

class _MyListViewWidget extends StatelessWidget {
  final List<String> entries;
  final List<int> colorCodes = [900, 700, 500, 300, 100];

  _MyListViewWidget(this.entries);

  @override
  Widget build(BuildContext context) => ListView.builder(
        padding: const EdgeInsets.all(8.0),
        itemCount: entries.length,
        itemBuilder: (context, index) => Container(
          height: 50,
          margin: const EdgeInsets.only(top: 4.0),
          color: Colors.amber[colorCodes[index % colorCodes.length]],
          child: Center(
            child: Text(
              entries[index],
              style: TextStyle(color: Colors.white),
            ),
          ),
        ),
      );
}
