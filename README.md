# Настройки проекта

- Склонировать проект к себе и перейти в папку
	```git
	git clone https://github.com/vladioluss/testing_vue3.git
	cd testing_vue3
	```
- Проверить установлен ли node js командой ```node -v```<br>
	Если установлен, то перейти к "Установка зависимостей", если же node js не стоит - установить по ссылке https://nodejs.org/en/download

# Установка зависимостей
Если используете PowerShell, то запустите с параметром «_Запуск от имени администратора_».

Далее выполним команды

```git clone https://github.com/vladioluss/testing_vue3.git```

## Backend
```cd testing_vue3```

```cd backend```

```npm install```

```npm install -g json-server```

Если не получилось через ```json-server --watch db.json --port 3010```

запускаем так ```npx json-server --watch db.json --port 3010```

## Frontend 

В новой консоли

```cd frontend```

```npm install```

```npm run dev```