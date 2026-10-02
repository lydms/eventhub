FROM node:24-alpine AS base
WORKDIR /app
COPY package*.json ./

# Développement avec rechargement automatique
FROM base AS development
RUN npm ci
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Construction du frontend
FROM base AS build
RUN npm ci
COPY . .
RUN npm run build

# Serveur frontend de production
FROM node:24-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY --from=build /app/dist ./dist
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
