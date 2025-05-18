const axios = require('axios');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// URL do webhook do seu fluxo no n8n (substitua pela sua real)
const webhookUrl = 'https://seu-fluxo-n8n.render.com/webhook/teste';

// Função que executa o fluxo
async function executarFluxo() {
  try {
    const response = await axios.post(webhookUrl, {
      mensagem: 'Olá do Render!',
    });
    console.log('Resposta do fluxo:', response.data);
  } catch (error) {
    console.error('Erro ao executar o fluxo:', error.message);
  }
}

// Executa o fluxo ao iniciar
executarFluxo();

// Mantém o app vivo no Render
app.get('/', (req, res) => {
  res.send('Bot do Telegram está rodando.');
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
