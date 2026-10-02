FROM node:24-alpine AS base
WORKDIR /app
COPY package*.json ./

# Développement avec rechargement automatique
FROM base AS development
RUN npm ci
COPY tsconfig.json ./
COPY src ./src
EXPOSE 3001
CMD ["npm", "run", "dev"]

# Compilation TypeScript
FROM base AS build
RUN npm ci
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# Image finale de production
FROM node:24-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build --chown=node:node /app/dist ./dist
USER node
EXPOSE 3001
CMD ["node", "dist/index.js"]
