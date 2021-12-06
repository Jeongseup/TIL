import 'package:logger/logger.dart';

late Logger myLogger;
readyForLogger() {
  myLogger = Logger(
    printer: PrettyPrinter(
      methodCount: 2,
      errorMethodCount: 0,
      lineLength: 120,
      colors: true,
      printEmojis: true,
      printTime: false,
    ),
  );
}
