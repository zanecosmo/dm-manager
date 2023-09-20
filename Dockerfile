FROM node:19-alpine

WORKDIR /app

ENV DATABASE_URL="postgresql://db:5432"

COPY package*.json ./

COPY .env ./

COPY tsconfig.json ./

COPY . .

RUN npm install

RUN npx prisma generate

EXPOSE 5656

CMD npx ts-node index.ts
