FROM node:18.2.0

#Create app directory
WORKDIR /user/src/app

#Intall app dependencies
#A wildcard is used to ensure both package.json and package-lock.json are copied
#where available (npm@5+)
COPY package.json ./
COPY package-lock.json ./

RUN npm install
#if you are building you code for production
#RUN npm install --only=production

#Bundle app source
COPY . .

EXPOSE 3000
CMD ["npm", "run", "start:dev"]