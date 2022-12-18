const fs = require('fs')
const path = require('path')
const constPost = 40 // порция подгрузки
let locationUser = '/'

/* eslint-disable no-console */
// импорт стандартных библиотек Node.js
const { readFileSync } = require('fs');
const { createServer } = require('http');

// файл для базы данных
const DB_FILE = process.env.DB_FILE || './db.json';
// номер порта, на котором будет запущен сервер
const PORT = process.env.PORT || 3000;
// префикс URI для всех методов приложения
const URI_PREFIX = '/api/clients';

/**
 * Класс ошибки, используется для отправки ответа с определённым кодом и описанием ошибки
 */
class ApiError extends Error {
  constructor(statusCode, data) {
    super();
    this.statusCode = statusCode;
    this.data = data;
  }
}

const getClientList = (params = {}) => {
  const clients = JSON.parse(readFileSync(DB_FILE));

  let clientsDef = clients.filter(item => !(item.folder))
  let clientImportant = clients.filter(item => item.folder === 'Важное')
  let clientSent = clients.filter(item => item.folder === 'Отправленные')
  let clientDrafts = clients.filter(item => item.folder === 'Черновики')
  let clientArchive = clients.filter(item => item.folder === 'Архив')
  let clientSpam = clients.filter(item => item.folder === 'Спам')
  let clientTrash = clients.filter(item => item.folder === 'Корзина')

  return {
    clientImportant,
    clientSent,
    clientDrafts,
    clientArchive,
    clientSpam,
    clientTrash,
    clientsDef
  };
}

module.exports = createServer(async (req, res) => {

  let pageIndex = path.join(__dirname, 'index.html')
  let pageItem = path.join(__dirname, 'item.html')
  let pageMain = path.join(__dirname, 'main.js')
  let styleHeader = path.join(__dirname, 'style', 'header.css')
  let styleNav = path.join(__dirname, 'style', 'navbar.css')
  let styleItem = path.join(__dirname, 'style', 'infoItem.css')
  let styleItemLetters = path.join(__dirname, 'style', 'itemLetters.css')
  let styleMainPanel = path.join(__dirname, 'style', 'mainPanel.css')
  let styleUI = path.join(__dirname, 'style', 'UI.css')
  let styleIndex = path.join(__dirname, 'style', 'index.css')

  if (req.url === '/inbox') {
    locationUser = getClientList({})?.clientsDef
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/main.js') {
    fs.readFile(pageMain, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/javascript'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/style/header.css') {
    fs.readFile(styleHeader, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/style/navbar.css') {
    fs.readFile(styleNav, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/style/infoItem.css') {
    fs.readFile(styleItem, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/style/itemLetters.css') {
    fs.readFile(styleItemLetters, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/style/mainPanel.css') {
    fs.readFile(styleMainPanel, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/style/UI.css') {
    fs.readFile(styleUI, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/style/index.css') {
    fs.readFile(styleIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  if (req.url === `/item`) {
    fs.readFile(pageItem, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/important') {
    locationUser = getClientList({})?.clientImportant
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/sent') {
    locationUser = getClientList({})?.clientSent
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/drafts') {
    locationUser = getClientList({})?.clientDrafts
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/archive') {
    locationUser = getClientList({})?.clientArchive
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/spam') {
    locationUser = getClientList({})?.clientSpam
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/trash') {
    locationUser = getClientList({})?.clientTrash
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/api/clients') {
    res.setHeader('Content-Type', 'application/json');

    // CORS заголовки ответа для поддержки кросс-доменных запросов из браузера
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // запрос с методом OPTIONS может отправлять браузер автоматически для проверки CORS заголовков
    // в этом случае достаточно ответить с пустым телом и этими заголовками
    if (req.method === 'OPTIONS') {
      // end = закончить формировать ответ и отправить его клиенту
      res.end();
      return;
    }

    // если URI не начинается с нужного префикса - можем сразу отдать 404
    if (!req.url || !req.url.startsWith(URI_PREFIX)) {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: 'Not Found' }));
      return;
    }

    // убираем из запроса префикс URI, разбиваем его на путь и параметры
    const [uri, query] = req.url.substr(URI_PREFIX.length).split('?');
    const queryParams = {};

    // параметры могут отсутствовать вообще или иметь вид a=b&b=c
    // во втором случае наполняем объект queryParams { a: 'b', b: 'c' }
    if (query) {
      for (const piece of query.split('&')) {
        const [key, value] = piece.split('=');
        queryParams[key] = value ? decodeURIComponent(value) : '';
      }
    }

    try {
      // обрабатываем запрос и формируем тело ответа
      const body = await (async () => {
        if (uri === '' || uri === '/') {
          // /api/clients
          if (req.method === 'GET') {
            const r = locationUser.splice(0, constPost)
            return r
          }
        }
        return null
      })();
      res.end(JSON.stringify(body));
    } catch (err) {
      // обрабатываем сгенерированную нами же ошибку
      if (err instanceof ApiError) {
        res.writeHead(err.statusCode);
        res.end(JSON.stringify(err.data));
      } else {
        // если что-то пошло не так - пишем об этом в консоль и возвращаем 500 ошибку сервера
        res.statusCode = 500;
        res.end(JSON.stringify({ message: 'Server Error' }));
        console.error(err);
      }
    }
  }

}).on('listening', () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`Сервер CRM запущен. Вы можете использовать его по адресу http://localhost:${PORT}/inbox`);
    console.log('Нажмите CTRL+C, чтобы остановить сервер');
  }
}).listen(PORT)
