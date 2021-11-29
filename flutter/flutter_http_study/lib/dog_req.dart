import 'package:http/http.dart' as http;

Future<http.Response> fetchDogs(int count) {
  return http.get(Uri.parse('https://dog.ceo/api/breeds/image/random/$count'));
}
