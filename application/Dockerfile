FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev

FROM node:20-alpine
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY src/ ./src/
COPY package.json ./

ARG IMAGE_TAG=dev
ENV IMAGE_TAG=$IMAGE_TAG
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

USER node

CMD ["node", "src/index.js"]
