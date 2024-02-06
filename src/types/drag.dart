import 'package:flutter/material.dart';

/// Flutter code sample for [Draggable].

void main() => runApp(const DraggableExampleApp());

class DraggableExampleApp extends StatelessWidget {
  const DraggableExampleApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Draggable Sample')),
        body: const DraggableExample(),
      ),
    );
  }
}

class DraggableExample extends StatefulWidget {
  const DraggableExample({super.key});

  @override
  State<DraggableExample> createState() => _DraggableExampleState();
}

class _DraggableExampleState extends State<DraggableExample> {
  int acceptedData = 0;
  bool isDragStarted = false;
  int currentDragging = -1;
  int firstId = 10;
  int secondId = 20;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: <Widget>[
        Draggable<int>(
          // Data is the value this Draggable stores.
          data: firstId,
          onDragStarted: () {
            setState(() {
              isDragStarted = true;
              currentDragging = firstId;
            });
          },
          onDragEnd: (arg) {
            setState(() {
              isDragStarted = false;
              currentDragging = -1;
            });
          },

          feedback: Container(
            color: Colors.deepOrange,
            height: 100,
            width: 100,
            child: const Icon(Icons.directions_run),
          ),
          childWhenDragging: Container(
            height: 100.0,
            width: 100.0,
            color: Colors.pinkAccent,
            child: const Center(
              child: Text('Child When Dragging'),
            ),
          ),
          child: Container(
            height: 100.0,
            width: 100.0,
            color: Colors.lightGreenAccent,
            child: const Center(
              child: Text('Draggable'),
            ),
          ),
        ),
        Draggable<int>(
          // Data is the value this Draggable stores.
          data: secondId,
          onDragStarted: () {
            setState(() {
              isDragStarted = true;
              currentDragging = secondId;
            });
          },
          onDragEnd: (arg) {
            setState(() {
              isDragStarted = false;
              currentDragging = -1;
            });
          },

          feedback: Container(
            color: Colors.deepOrange,
            height: 100,
            width: 100,
            child: const Icon(Icons.directions_run),
          ),
          childWhenDragging: Container(
            height: 100.0,
            width: 100.0,
            color: Colors.pinkAccent,
            child: const Center(
              child: Text('Child When Dragging'),
            ),
          ),
          child: Container(
            height: 100.0,
            width: 100.0,
            color: Colors.lightGreenAccent,
            child: const Center(
              child: Text('Draggable'),
            ),
          ),
        ),
        DragTarget<int>(
          builder: (
            BuildContext context,
            List<dynamic> accepted,
            List<dynamic> rejected,
          ) {
            return Container(
              height: 100.0,
              width: 100.0,
              color: (isDragStarted & (currentDragging == 10)) ? Colors.red : Colors.cyan,
              child: Center(
                child: Text('Value is updated to: $acceptedData'),
              ),
            );
          },
          onAccept: (int data) {
            setState(() {
              acceptedData += data;
            });
          },
        ),
        DragTarget<int>(
          builder: (
            BuildContext context,
            List<dynamic> accepted,
            List<dynamic> rejected,
          ) {
            return Container(
              height: 100.0,
              width: 100.0,
              color: (isDragStarted & (currentDragging == 20)) ? Colors.red : Colors.cyan,
              child: Center(
                child: Text('Value is updated to: $acceptedData'),
              ),
            );
          },
          onAccept: (int data) {
            setState(() {
              acceptedData += data;
            });
          },
        ),
      ],
    );
  }
}

/*
class HorizontalListDropZone extends StatefulWidget {
  const HorizontalListDropZone({
    super.key,
    this.width,
    this.height,
    required this.props,
    required this.onAcceptDrop,
  });

  final double? width;
  final double? height;
  final IHorizontalListDropZonePropsStruct props;
  final Future Function() onAcceptDrop;

  @override
  _HorizontalListDropZoneState createState() => _HorizontalListDropZoneState();
}

class _HorizontalListDropZoneState extends State<HorizontalListDropZone> {
  @override
  Widget build(BuildContext context) {
    List<IDraggableRectanglePropsStruct> contentList = widget.props.content;
    bool hasContent = contentList.isNotEmpty;
    bool showDropHere =
        widget.props.isAcceptableDrop && widget.props.isAcceptableNew;

    return DragTarget<String>(
      builder: (
        BuildContext context,
        List<String?> accepted,
        List<dynamic> rejected,
      ) {
        return Container(
          width: widget.width,
          height: widget.height,
          decoration: BoxDecoration(
            color: widget.props.isAcceptableDrop ? Colors.green : Colors.grey,
            borderRadius: BorderRadius.circular(8.0),
          ),
          child: Column(
            mainAxisAlignment:
                MainAxisAlignment.center, // Центрирование по вертикали
            children: [
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Wrap(
                  alignment: WrapAlignment
                      .center, // Центрирование элементов внутри Wrap по горизонтали
                  crossAxisAlignment: WrapCrossAlignment
                      .center, // Центрирование элементов внутри Wrap по вертикали
                  direction: Axis.horizontal,
                  children: [
                    if (hasContent)
                      ...contentList.map((item) => Container(
                            margin: EdgeInsets.symmetric(horizontal: 4.0),
                            padding: EdgeInsets.symmetric(
                                horizontal: 12.0, vertical: 8.0),
                            decoration: BoxDecoration(
                              color: Colors.blueGrey,
                              borderRadius: BorderRadius.circular(8.0),
                            ),
                            child: Text(
                              item.title,
                              style: TextStyle(color: Colors.white),
                            ),
                          )),
                    if (showDropHere)
                      Container(
                        margin: EdgeInsets.symmetric(horizontal: 4.0),
                        padding: EdgeInsets.symmetric(
                            horizontal: 12.0, vertical: 8.0),
                        decoration: BoxDecoration(
                          color: Colors.amber,
                          borderRadius: BorderRadius.circular(8.0),
                        ),
                        child: Text(
                          'Drop here',
                          style:
                              FlutterFlowTheme.of(context).bodyText1.override(
                                    fontFamily: 'Manrope',
                                    fontSize: 10,
                                  ),
                        ),
                      ),
                  ],
                ),
              ),
            ],
          ),
        );
      },
      onWillAccept: (String? data) {
        return widget.props.isAcceptableDrop;
      },
      onAccept: (String data) {
        widget.onAcceptDrop();
      },
    );
  }
}

 */