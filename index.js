const axios = require('axios');

// URL do webhook do seu fluxo no n8n
const webhookUrl = 'https://seu-fluxo-n8n.render.com/webhook/teste'; // Troque pela sua URL real

async function executarFluxo() {
  try {
    const response = await axios.post(webhookUrl, {
      mensagem: 'Olá do Render!'
    });

    console.log('Resposta do fluxo:', response.data);
  } catch (error) {
    console.error('Erro ao executar o fluxo:', error.message);
  }
}

executarFluxo();
