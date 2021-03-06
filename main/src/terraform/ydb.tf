locals {
  database_name = "movies"
}

resource "yandex_ydb_database_serverless" "movies" {
  name      = local.database_name
  folder_id = "b1g0neg05aqth6ead8ki"
}

output "movies_document_api_endpoint" {
  value = yandex_ydb_database_serverless.movies.document_api_endpoint
}

output "movies_path" {
  value = yandex_ydb_database_serverless.movies.database_path
}
