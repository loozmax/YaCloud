terraform {
  required_providers {
    yandex = {
      source = "yandex-cloud/yandex"
    }
  }
}

provider "yandex" {
  token     = "AQAAAAA6HZB-AATuwZTgAoX2YUkdny1CDV6yXO0"
  cloud_id  = "b1geukl7pcuo8lp0cssb"
  folder_id = "b1g0neg05aqth6ead8ki"
  zone      = "ru-central1-a"
}

locals {
  cloud_id  = "b1geukl7pcuo8lp0cssb"
  folder_id = "b1g0neg05aqth6ead8ki"
  zone      = "ru-central1-a"
}
