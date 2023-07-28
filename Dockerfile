FROM node:18

# Ccreate app directory
WORKDIR /usr/src/api-sandbox

# Install deps
COPY package*.json ./

RUN npm install


# Bundle app source
COPY . .

EXPOSE 4000

CMD [ "node", "app.js" ]

