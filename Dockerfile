FROM node:20.10-alpine AS builder

# Create app directory
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY tsconfig.json tsup.config.ts ./

# Install app dependencies
RUN npm install -g pnpm
RUN pnpm i

COPY . .

RUN npm run build

FROM node:20.10-alpine AS runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist

ENV PORT=3000
ENV NODE_ENV=production
EXPOSE 3000


CMD [  "npm", "run", "start" ]