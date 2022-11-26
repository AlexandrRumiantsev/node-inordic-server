//Документация NODE
//https://nodejs.org/dist/latest-v16.x/docs/api/synopsis.html#example
//Импортируем плагины
const express = require("express");
//Модуль для работы с файловой системой
const fs = require("fs");
//Инициализируем приложение express
const app = express();
//1 - Корневой маршрут
//Первый базовый маршрут приложения
app.get(
    '/',
    function(request, response){

        response.send(
            `
                <h1>
                    Корневой маршрут / Разводная страница
                </h1>
                <ul> 
                    <li>
                        <a href='/get_all_good'>
                            2 - Маршрут для получения всех товаров
                        </a>
                    </li>
                    <li>
                        <a href='/get_item?id=1'>
                            3 - Маршрут для получения всех товаров
                        </a>
                    </li>
                    <li>
                        <a href='/del_item?id=1'>
                            3 - Маршрут для удаления товара
                        </a>
                    </li>
                    <li>
                        <a href='/form_add_item'>
                            4 - Маршрут для добавления товара
                        </a>
                    </li>
                    <li>
                        <a href='/form_edit_item'>
                            5 - Маршрут для редактирования товара
                        </a>
                    </li>
                    <li>
                        <a href='/form_add_user'>
                            6 - Маршрут для добавления пользователя
                        </a>
                    </li>
                </ul>
            `
        )
    }
)
//Распределяем роутеры по файлам
const NAME_FOLDER_ROUTES = 'routes'
//Получаем массив с названиями папок внутри папки routes
const folderFromRoutes = fs.readdirSync(`./${NAME_FOLDER_ROUTES}`);
folderFromRoutes.map(folderName => {
    //получаем папки, внутри папок в папке routes
    const folderFromInRoutes = fs.readdirSync(`./${NAME_FOLDER_ROUTES}/${folderName}`);
    folderFromInRoutes.map(fileName => {
        //импортируем все роуты из всех папок
        require(`./${NAME_FOLDER_ROUTES}/${folderName}/${fileName}`)(app)
    })
})
//Начинаем прослушивать определенный порт
app.listen(3000);