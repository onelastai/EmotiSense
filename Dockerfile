FROM node:18-alpine

WORKDIR /app
COPY package.json tsconfig.json ./
RUN npm install -g pnpm && pnpm install

COPY . .

CMD [ "pnpm", "dev" ]
