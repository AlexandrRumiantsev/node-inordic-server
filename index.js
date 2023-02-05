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


//cors, для разблокировки запросов к АПИ
const cors = require('cors')
app.use(cors())

app.get(
    '/',
    function(request, response){

        response.send(
            `
                <h1>
                    Корневой маршрут / Разводная страница
                </h1>
                <h2>Товары</h2>
                <ul> 
                    <li>
                        <a href='/goods/get'>
                            1 - Маршрут для получения всех товаров
                        </a>
                    </li>
                    <li>
                        <a href='/goods/get/1'>
                            2 - Маршрут для получения оного товара
                        </a>
                    </li>
                    <li>
                        <a href='/goods/del/1'>
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
                </ul>
                <h2>Пользователи</h2>
                <ul> 
                    <li>
                        <a href='/users/get'>
                            1 - Маршрут для получения всех пользователей
                        </a>
                    </li>
                    <li>
                        <a href='/users/get/2'>
                            2 - Маршрут для получения одного пользователя
                        </a>
                    </li>
                    <li>
                        <a href='/users/del/1'>
                            3 - Маршрут для удаления пользователя
                        </a>
                    </li>
                    <li>
                        <a href='/form_add_user'>
                            4 - Маршрут для добавления пользователя
                        </a>
                    </li>
                    <li>
                        <a href='/form_edit_user'>
                            5 - Маршрут для редактирования товара
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
    if(folderName !== '.DS_Store'){
        const folderFromInRoutes = fs.readdirSync(`./${NAME_FOLDER_ROUTES}/${folderName}`);
        folderFromInRoutes.map(fileName => {
            //импортируем все роуты из всех папок
            require(`./${NAME_FOLDER_ROUTES}/${folderName}/${fileName}`)(app)
        })
    }
})
//Начинаем прослушивать определенный порт
app.listen(3000);