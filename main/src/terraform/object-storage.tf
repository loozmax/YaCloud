locals {
  images_bucket_name_prefix  = "movies-images"
  website_bucket_name_prefix = "movies-website"
}

resource "yandex_storage_bucket" "movies_images_bucket" {
  bucket     = "${local.images_bucket_name_prefix}-${local.folder_id}"
  access_key = "YCAJEgy46sepY2cJ1lL05VPP2"
  secret_key = "YCMZ8m0qCXCB-LG7BZwBafSTA7ZVltHd-4XF-Ega"
}

output "movies_images_bucket" {
  value = yandex_storage_bucket.movies_images_bucket.bucket
}