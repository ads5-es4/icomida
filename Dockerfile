# Usar a imagem oficial do Bun
FROM oven/bun:latest

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos de configuração e dependências
COPY package.json ./
# COPY bun.lockb ./
COPY tsconfig.json ./
COPY src ./src
# COPY .env ./

# Instalar dependências
RUN bun install

# Compilar TypeScript
RUN bun run tsc

# Expor a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["bun", "run", "src/index.ts"]