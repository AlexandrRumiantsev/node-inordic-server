//Документация NODE
//https://nodejs.org/dist/latest-v16.x/docs/api/synopsis.html#example

//Импортируем плагины
const express = require("express");

const WorkerFiles = require("./services/worker-files/index")

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

//Роуты для товаров
require('./routes/good/get-all-good.js')(app)
require('./routes/good/get-item.js')(app)
require('./routes/good/del-item.js')(app)
require('./routes/good/add-item.js')(app)
require('./routes/good/edit-item.js')(app)

//Роуты для пользовтелей
require('./routes/user/add-user')(app)
require('./routes/user/get-all-users')(app)
require('./routes/user/get-user')(app)
require('./routes/user/edit-user')(app)

//Роуты для отправки писем
require('./routes/mail')(app)

//Начинаем прослушивать определенный порт
app.listen(3000);