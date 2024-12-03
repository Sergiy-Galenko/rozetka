# Этап 1: Сборка приложения
FROM node:18-alpine AS builder

WORKDIR /app

# Копируем корневые package.json и yarn.lock
COPY package.json yarn.lock ./

# Копируем файлы фронтенда непосредственно в рабочую директорию
COPY apps/frontend/package.json ./
COPY apps/frontend/next.config.js ./
COPY apps/frontend/tsconfig.json ./
COPY apps/frontend/public ./public
COPY apps/frontend/pages ./pages
COPY apps/frontend/components ./components

# Устанавливаем зависимости с учетом workspaces
RUN yarn install --frozen-lockfile

# Собираем приложение фронтенда
RUN yarn build

# Этап 2: Создание финального образа
FROM node:18-alpine

WORKDIR /app

# Копируем собранное приложение
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./

EXPOSE 3000

CMD ["yarn", "start"]
