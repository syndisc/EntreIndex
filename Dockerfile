FROM node:18

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
RUN ls

# CMD ["npm","run","dev"]