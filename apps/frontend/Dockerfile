# Базовий образ з Node.js
FROM node:18-alpine AS build

# Робоча директорія
WORKDIR /app

# Копіюємо package.json і package-lock.json
COPY package.json package-lock.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь проект
COPY . .

# Збираємо Next.js проект
RUN npm run build

# Використовуємо lightweight Node.js образ для запуску
FROM node:18-alpine

# Робоча директорія
WORKDIR /app

# Копіюємо файли з попереднього етапу
COPY --from=build /app ./

# Відкриваємо порт для додатку
EXPOSE 3000

# Запускаємо Next.js додаток
CMD ["npm", "run", "start"]
