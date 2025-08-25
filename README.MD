# 🤖 Bot DiscordJS — Painel de Configuração Completo

Bem-vindo ao **Bot DiscordJS**!  
Este projeto é um bot para Discord feito com [discord.js](https://discord.js.org/) que oferece um painel de configuração moderno, sistema de tickets, logs automáticos e comandos administrativos para facilitar a gestão do seu servidor. 🚀

---

## ✨ Funcionalidades Principais

- 🎛️ **Painel de Configuração**: Configure o bot facilmente através de menus interativos, botões e modais.
- 🎟️ **Sistema de Tickets**: Crie e gerencie tickets de suporte de forma prática e organizada.
- 📥 **Logs de Entrada/Saída**: Registre automaticamente quem entra e sai do servidor.
- 📝 **Logs de Convites**: Monitore convites usados e quem convidou quem.
- 🛠️ **Comandos Administrativos**: Ferramentas para moderação e administração do servidor.
- 💾 **Banco de Dados em JSON**: Armazene configurações e dados de forma simples usando [wio.db](https://www.npmjs.com/package/wio.db).
- 🧩 **Arquitetura Modular**: Fácil de expandir, com comandos e eventos separados por pastas.
- 🏷️ **Suporte a Partials**: Para lidar com mensagens, reações e membros parciais.


## 🚀 Como Rodar o Bot

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/seu-repo.git
   cd seu-repo
   ```

2. **Instale as dependências:**
```js
npm install
```
3. **Configure o arquivo** ```.env```:
```js
TOKEN=SEU_TOKEN_DO_DISCORD
```
4. **Inicie o bot:**
```js
node .
```

# 🧑‍💻 Como Funciona?
O arquivo principal main.js inicializa o bot com todas as permissões necessárias, carrega automaticamente todos os eventos e comandos, e conecta o bot ao Discord usando o token fornecido no .env.

Adicione comandos em Commands/ seguindo o padrão dos exemplos.
Adicione eventos em Services/ para personalizar reações do bot.
Personalize funções em Functions/ para criar novos painéis ou utilidades.
# 💡 Dicas
Use o painel de configuração para ativar/desativar sistemas sem editar código!
O bot é modular: basta adicionar arquivos nas pastas certas para expandir funcionalidades.
Ideal para servidores que precisam de automação, suporte e logs detalhados.
# 👨‍💻 Autor
- Desenvolvido com 💙 por João.

# 📬 Contribua!
- Achou um bug ou quer sugerir uma melhoria? Abra uma issue ou envie um pull request!