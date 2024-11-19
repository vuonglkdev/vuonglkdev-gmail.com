FROM node:18-alpine

WORKDIR /vuonglkdev-gmail.com

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
