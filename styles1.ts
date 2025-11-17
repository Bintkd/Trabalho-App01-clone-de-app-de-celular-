import { StyleSheet } from 'react-native';

// PALETA DE CORES:
// - Fundo Principal: #08101C (Azul Marinho Escuro)
// - Texto Principal: #FFFFFF (Branco)
// - Botão "Seguinte" Fundo: #292929 (Cinza Escuro)
// - Links (Azul PlayStation): #0072CE
// - Borda Secundária: #C0C0C0 (Cinza Claro)

export const styles = StyleSheet.create({
  // --- CONTAINER PRINCIPAL (View) ---
  container: {
    // Fundo escuro
    flex: 1,
    backgroundColor: '#08101C',
    alignItems: 'center', // Centraliza itens horizontalmente
    paddingTop: 50, // Espaço no topo para o cabeçalho
  },



  // --- LOGO SONY (Text) ---
  sonyText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 10,
  },

  // --- ÍCONE PLAYSTATION (Image) ---
  image: {
    // Ajuste width e height conforme o tamanho real do seu ícone 'PlayStation.png'
    width: '100%',
    height: 150,
    marginBottom: 10,
  },

  // --- TÍTULO PRINCIPAL (Text) ---
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    marginBottom: 20,
    textAlign: 'center',
    alignSelf:'flex-start',
    marginLeft:22,

  },

  // --- CAMPO DE INPUT (TextInput) ---
input: {
    width: '100%',
    height: 45,
    paddingHorizontal: 10, // Garante que não há padding vertical indesejado
    paddingTop: 0, 
    paddingBottom: 0,
    backgroundColor: 'transparent',
    fontSize: 16,
    color: '#fefefeff',
    textAlignVertical: 'center', // Centraliza o texto verticalmente dentro do campo
},

  // --- BOTÃO PRIMÁRIO (TouchableOpacity - Seguinte) ---
  buttonPrimary: {
    width: '100%',
    padding: 9,
    marginBottom: 15,
    borderRadius: 20,
    backgroundColor: '#908989ff', // Cinza Escuro
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonPrimaryText: {
    color: '#121111ff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // --- LINKS (Text dentro de TouchableOpacity) ---
  linkText: {
    color: '#0072CE', // Azul PlayStation
    fontSize: 14,
    marginBottom: 15, // Espaçamento entre os links
  },

  // --- BOTÃO SECUNDÁRIO (TouchableOpacity - Criar uma conta) ---
  buttonSecondary: {
    width: '100%',
    padding: 9,
    marginTop: 30, // Espaço para separar dos links
    borderRadius: 30,
    backgroundColor: 'transparent', // Fundo transparente
    borderWidth: 1,
    borderColor: '#FFFFFF', // Borda Cinza Claro
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonSecondaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },


caixa1: {
    width: '100%',
    padding: 2,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: 'transparent', // 
    borderWidth: 1,
    borderColor: '#FFFFFF', // Borda Cinza Claro
    alignItems: 'center',
    justifyContent: 'center',
  },

contentWrapper: {
    width: '100%',
    paddingHorizontal: 30, // Aplicamos o padding lateral aqui!
    alignItems: 'center', // Para manter o alinhamento central
},


});


