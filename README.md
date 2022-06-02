
После развертывания базы данных в Яндекс.Облаке с помощью terraform можно начать выполнять операции над ней. В проекте реализованы методы для чтения, записи, удаления и обновления данных. Для записи и чтения данных используется API совместимое с Amazon DynamoDB для документальных таблиц (https://cloud.yandex.ru/docs/ydb/operations/crud). Все методы представлены в src -> app -> crud.ts

1. Метод для записи данных в базу. Необходимо передать в качестве аргумента -- объект Movie заданного интерфейса. 
<img width="744" alt="image" src="https://user-images.githubusercontent.com/62829571/170873804-d58c75c8-66ae-4d1a-a0b4-deca833b7000.png">

2. Метод для удаления из БД по id.
<img width="658" alt="image" src="https://user-images.githubusercontent.com/62829571/170873929-79271e68-9d2f-4c0a-9dbc-dbd06858eeb3.png">

3. Обновление записи в БД по id. 
<img width="758" alt="image" src="https://user-images.githubusercontent.com/62829571/170873950-7c2b49b9-ee13-41e6-b20e-a918ed284ea6.png">

4. Чтение данных из таблицы по id.
<img width="888" alt="image" src="https://user-images.githubusercontent.com/62829571/170873965-53686c98-e94e-4c87-84dc-23d79e9a873b.png">


В качестве прослойки для выполненения всех запросов к базе данных выступает метод callWithToken, который добавляет в заголовок запроса iam токен,
который надо сгенерировать для аккаунта
<img width="942" alt="image" src="https://user-images.githubusercontent.com/62829571/170874023-74391914-8bf3-4030-a549-3c2dfd848fd4.png">

Пример записи данных через интерфейс:

<img width="1114" alt="image" src="https://user-images.githubusercontent.com/62829571/170874074-f7aee761-5d27-4971-9f5f-f6b8fa4c68f4.png">

Результат:

<img width="573" alt="image" src="https://user-images.githubusercontent.com/62829571/170874184-c02d4641-7811-42dd-aaa9-3b70f73b5285.png">

