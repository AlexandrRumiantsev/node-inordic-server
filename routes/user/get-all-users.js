const WorkerTableUser = require('../../services/worker-tables/users')

/**
     * Маршрут для добавления оного пользователя:
     * Автор: Румянцев Александр
     * Описание: Возвращает JSON с пользователями
     * Версия: v1
     * Метод: POST
     * Пример работы с запросом:
     * Ввести в адресную строку - http://localhost:3000/users/get
 */
module.exports = (app) => {
    app.get('/users/get', function(req, res){
        //Создадим экземпляр вспомогательного класса WorkerTableUser
        const workerTableUser = new WorkerTableUser(res, req)
        workerTableUser.getAll();
    })
}