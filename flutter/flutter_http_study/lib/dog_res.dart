class DogResponse {
  List<String> message;
  String status;

  DogResponse(this.message, this.status);

  factory DogResponse.fromJson(Map<String, dynamic> json) {
    List<String> message = (json['message'] as List<dynamic>).cast<String>();
    return DogResponse(message, json['status']);
  }

  @override
  String toString() {
    return 'DogImages{message: $message, status: $status}';
  }
}
