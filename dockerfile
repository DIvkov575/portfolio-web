FROM node:alpine
WORKDIR /usr/programming/portfolio-web5
COPY package.json .
COPY package-lock.json .
RUN npm install
  # && npm install typescript -g
COPY . .
# RUN tsc
CMD ["node", "./index.js"]
