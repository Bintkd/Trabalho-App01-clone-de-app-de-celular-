📱 Epic Games / PlayStation Login Clone (React Native)

Este projeto é uma simulação de uma tela de login moderna, inspirada na interface de usuário da Epic Games e com elementos de cor
e destaque que remetem ao design da PlayStation. O objetivo principal foi praticar a aplicação correta de estilos em React Native,
garantindo um design coeso, responsivo e funcional.

✨ Características de Design e Estilo

A tela foi desenvolvida com foco em uma experiência de usuário limpa e de alto contraste:

Tema Base Escuro: Fundo e layout predominantemente em preto e tons 
de cinza escuro (#131111ff) para imitar o tema de consoles e launchers.

Destaque PlayStation: Utilização da cor azul (#144eb1ff) em links e 
elementos clicáveis para dar ênfase, inspirada na marca PlayStation.

Contraste e Legibilidade: Textos principais em branco (#f0f0f0) para 
garantir máxima legibilidade contra o fundo escuro.

Separação Visual: Os blocos de login (Consoles, E-mail, Outros) são 
delimitados por uma borda branca sutil (#979292ff) para organizar 
visualmente a interface.

Componentes Alinhados:

Botões de Login Social: Ícones de 50x50 pixels com borda arredondada 
(borderRadius: 24). O texto é alinhado ao centro e utiliza uma fonte 
maior (fontSize: 20) para destaque.

Botão "Continuar" (Epic Blue): Mantém o azul vibrante da Epic Games 
(#0078f2) para o botão de ação principal.

Links de Rodapé: Frase ("Sua primeira vez aqui?") e botão de ação 
("Criar uma conta") alinhados lado a lado e centralizados horizontalmente no contêiner.

🛠️ Estrutura do Código

O projeto é composto por dois arquivos principais, seguindo a 
arquitetura de Componente e Estilos em React Native:

1. App.jsx (Componente Principal)
Responsável pela estrutura visual (JSX) e pela lógica.

ScrollView: Usado para garantir que o conteúdo seja rolável em dispositivos menores.
Componentes Estruturais: Usa os contêineres (conteine1, container2, container4, conteine5) para agrupar elementos relacionados.
Estilização: Aplica os estilos importados de ./styles.js a cada elemento (<View>, <Text>, <TouchableOpacity>, etc.).

Importações:
Assets: Embora o projeto utilize referências a imagens (./assets/imagem.png), em um ambiente real essas imagens precisariam ser fornecidas para serem renderizadas.

2. styles.js (Folha de Estilos)

Define todos os estilos da aplicação usando StyleSheet.
create do React Native, com uma organização lógica para facilitar a manutenção:

Estilos Gerais da Tela e ScrollView
Estilos de Layout (Contêineres com Bordas)
Estilos de Texto e Títulos: Inclui os estilos de cor azul para links (textoLinkProblema, textoLinkConta).
Estilos de Botões e Inputs
Mídia e Links

💡 Como Executar (Ambiente React Native)

Garanta que você tenha um ambiente React Native configurado (Node.js, Watchman, React Native CLI)
Instale as dependências.
Rode o aplicativo em um emulador iOS/Android ou dispositivo físico:

npx react-native run-android
# ou
npx react-native run-ios

Epic game 
https://www.epicgames.com/id/login?redirect_uri=https%3A%2F%2Fwww.epicgames.com%2Faccount%2Fpersonal
![Imagem do WhatsApp de 2025-11-14 à(s) 14 25 55_006afd21](https://github.com/user-attachments/assets/25a81089-4aa6-40ef-a024-c08a962f8ce6)
![Imagem do WhatsApp de 2025-11-14 à(s) 14 25 56_b6620fb8](https://github.com/user-attachments/assets/c6739bbc-cad5-4350-8703-30c7c93cd799)


Playstation 
![Imagem do WhatsApp de 2025-11-15 à(s) 21 17 43_d4ae4d8d](https://github.com/user-attachments/assets/921cd1f5-e31c-47cd-98c9-7e1dda0a2937)
https://tm.ibxk.com.br/2024/03/01/01164940753273.jpg?ims=fit-in/800x500/filters:quality(70)


🎯 Contribuições

Sinta-se à vontade para sugerir melhorias, como otimizações de performance, refatoração de estilos ou adição de novos recursos como validação de formulário.
![PlayStation](https://github.com/user-attachments/assets/a310bb27-c2cc-4348-90ed-e039b9aecd39)
![Epic game (parte 2)](https://github.com/user-attachments/assets/ab75e5f3-b135-4989-b711-133bf5462f1d)
![Epic game (parte 1)](https://github.com/user-attachments/assets/55fae2e6-a3f7-43cb-8f51-f45fa0c22400)
