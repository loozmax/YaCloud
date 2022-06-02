resource "yandex_container_registry" "default" {
  name      = "default"
  folder_id = "b1g0neg05aqth6ead8ki"
}

resource "yandex_container_repository" "movies_api_repository" {
  name = "${yandex_container_registry.default.id}/movies-api"
}

output "movies_api_repository_name" {
  value = "cr.yandex/${yandex_container_repository.movies_api_repository.name}"
}