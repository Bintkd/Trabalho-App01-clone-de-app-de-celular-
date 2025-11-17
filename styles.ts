
import { StyleSheet } from "react-native";
//Epic Games :..

export const styles = StyleSheet.create({
    // Container Principal da Tela
    conteine: {
        flex: 1,
        backgroundColor: "#1A1A1A", // Fundo principal do "cartão" de login
        paddingHorizontal: 20,
        paddingTop: 50,
        width: "100%",
        maxWidth: 400, // Limita a largura, simulando o celular
        alignSelf: 'center', // Centraliza o container na web (opcional, mas bom para simulação)
    },

    // ⭐️ NOVO ESTILO: Texto padrão para cor branca e centralização.
    textoBrancoCentralizado: {
        color: "#f0f0f0", // Branco
        textAlign: "center",
        marginBottom: 25,
        marginTop: 15, 
        
      },
      textoBrancoCentralizado2: {
        color: "#144eb1ff", // azul
        textAlign: "center",
        marginBottom: 25,
        marginTop: 15,
        
      },
      textoBrancoCentralizado1: {
        color: "#144eb1ff", // azul
        textAlign: "center",
        
      },

      textoBrancoCentralizado3: {
        color: "#f0f0f0", // Branco
        marginBottom: 5,
        marginTop: 5, 
      },

    // Título Principal
    tituloPrincipal: { 
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 25,
        marginTop: 15, 
    },

    // Título de Seção (Ex: "Somente no console...")
    tituloSecundario: { 
        fontSize: 14,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    
    // Containers para os Grupos de Botões (Consoles, E-mail, Outras Contas)
    conteine1: { // Consoles
        marginBottom: 10,
        borderWidth:1,
        borderColor: "#292929",
        borderRadius:10,
        padding :15,
    },
    container2: { // Login por E-mail
        marginBottom: 10,
        borderWidth:1,
        borderColor: "#292929",
        borderRadius:10,
        padding :15,
    },
    container4: { // Outras Maneiras de Entrar
        marginBottom: 10,
        marginTop: 15, // Adiciona um espaço da seção de Continuar
        borderWidth:1,
        borderColor: "#292929",
        borderRadius:10,
        padding :15,
    },
    conteine5: { // Consoles
        marginBottom: 10,
        borderWidth:1,
        borderColor: "#292929",
        borderRadius:10,
        padding :10,
        flexDirection:"row",
        justifyContent: 'center'
        
    },

    // Estilo dos Botões de Login Social/Plataforma 
    botaoConsole: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        paddingVertical: 1,
        paddingHorizontal: 5,
        marginBottom: 10,
        borderRadius: 24,
        backgroundColor: "#242424", // Cor de fundo para os botões sociais
        borderWidth: 1,
        borderColor: "#242424", // Borda do botão
    },


    // ⭐️ MODIFICADO: Ícone dentro dos Botões (Circular)
    image: {
      
        width: 50,
        height: 50,
        borderRadius: 24, // Metade do tamanho (24/2) para ser circular
    },

    // Input de E-mail
    input: {
        width: "100%",
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderRadius: 4,
        backgroundColor: "#333",
        color: "#f0f0f0", // Cor do texto do input
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#444",
    },

    // Botão Continuar (Azul da Epic Games)
    botaoContinuar: {
        width: "100%",
        padding: 15,
        borderRadius: 4,
        backgroundColor: "#0078f2", // Azul Epic
        alignItems: "center",
        marginTop: 5,
    },

    // ⭐️ NOVO ESTILO: Texto para os botões (para ser branco)
    textoBotao: {
        color: "#f0f0f0", // Branco
        flex: 1, // Permite que o texto se estenda para alinhar
        fontSize: 20,
         textAlign: "center",
         marginBottom:5,
        
    },
    textoBotao1: {
        color: "#f0f0f0", // Branco
        flex: 1, // Permite que o texto se estenda para alinhar
        fontSize: 27,
         textAlign: "center",

    },

    // Links de Rodapé (Criar Conta e Problemas)
    container3: { // "Sua primeira vez aqui?" e "Criar uma conta"
        flexDirection: "row",
        marginTop:5,
        marginBottom: 10,
    },

    // Link "Problema para entrar na sua conta?"
    linkProblema: {
        alignItems: "center",
        paddingVertical: 10,
        marginTop: 10,
    },

    // Estilo para o componente ScrollView em si (Fundo Preto)
    scrollContainer: {
        flex: 1, 
        backgroundColor: "#2d2c2cff", // Fundo ESCURO
    },

    // Estilo para o CONTEÚDO dentro do ScrollView
    scrollContent: {
        paddingTop: 30, // Espaçamento no topo
        paddingBottom: 30, // Espaço no final para rolar até o fim
        alignItems: 'center', // Centraliza o loginCardContent
    },
    
    // O Container interno (antigo loginCard)
    loginCardContent: {
        width: '90%', 
        maxWidth: 400, // Limita o tamanho em telas grandes
        paddingHorizontal: 20, 
        paddingVertical: 30,
        backgroundColor: "#000000ff", // Fundo PRETO
        borderRadius: 8,
    },
});