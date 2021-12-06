import 'package:tmdb_api/tmdb_api.dart';

late TMDB tmdb;
readyForTMDB() async {
  tmdb = TMDB(
    ApiKeys('a1bb1f41f331d9e18222a3150f31ba32', 'apiReadAccessTokenv4'),
  );
}
