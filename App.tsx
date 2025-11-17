import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput,ScrollView } from "react-native";
import { styles } from "./styles";
import icon from "./assets/imagem.png";
import icon1 from "./assets/imagem1.png";
import icon2 from "./assets/imagem2.png";
import icon3 from "./assets/imagem3.png";
import icon4 from "./assets/imagem4.png";
import icon5 from "./assets/imagem5.png";
import icon6 from "./assets/imagem6.png";
import icon7 from "./assets/imagem7.png";
import icon8 from "./assets/imagem8.png";
import icon9 from "./assets/imagem9.png";


function App() {
  return (
    <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
    >


    <View style={styles.conteine}>

      <View style={styles.tituloPrincipal}>
      <Text style={styles.textoBotao1}>Entre na Epic Games</Text>
      </View>


      <View style={styles.conteine1}>
        <Text style={styles.textoBotao}>
          Somente no console? Entre para acessar seu progresso e suas compras.
        </Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.botaoConsole}>
          <Image source={icon} style={styles.image} /> 
          <Text style={styles.textoBotao}>PlayStation Network</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.botaoConsole}>
          <Image source={icon1} style={styles.image} />
          <Text style={styles.textoBotao}>Rede Xbox</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.botaoConsole}>
          <Image source={icon2} style={styles.image} />
          <Text style={styles.textoBotao}>Conta Nintendo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        
        <Text style={styles.textoBotao}>Joga no PC ou dispositivo móvel?</Text>
        <Text style={styles.textoBrancoCentralizado3}> Entre com seu e-mail.</Text>
        <TextInput style={styles.input} placeholder="Seu e-mail" />
        <TouchableOpacity activeOpacity={0.7} style={styles.botaoContinuar}>
          <Text>Continuar</Text>
        </TouchableOpacity>
      </View>





      <View style ={styles.conteine5}>
        <Text style={styles.textoBrancoCentralizado}> Sua primeira vez aqui? </Text>
      
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.textoBrancoCentralizado2} >Criar uma conta</Text>
        </TouchableOpacity>

      </View>
 







      <View style={styles.container4}>

      <View style ={styles.textoBrancoCentralizado}>
        <Text style={styles.textoBotao}> Outras maneiras de entrar </Text>
      </View>
        
        <TouchableOpacity activeOpacity={0.7} style={styles.botaoConsole}>
          <Image source={icon3} style={styles.image} /> 
          <Text style={styles.textoBotao}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.botaoConsole}>
          <Image source={icon4} style={styles.image} />
           <Text style={styles.textoBotao}>Steam</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.botaoConsole}>
          <Image source={icon5} style={styles.image} />{" "}
          <Text style={styles.textoBotao}>Conta MyDisney</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.botaoConsole}>
          <Image source={icon6} style={styles.image} />{" "}
          <Text style={styles.textoBotao}>Entrar com a Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.botaoConsole}>
          <Image source={icon7} style={styles.image} /> 
          <Text style={styles.textoBotao} >Fecabook</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.botaoConsole}>
          <Image source={icon8} style={styles.image} /> 
          <Text style={styles.textoBotao}>Conta LEGO</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.botaoConsole}>
          <Image source={icon9} style={styles.image} /> 
          <Text style={styles.textoBotao}> Autodesk</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity activeOpacity={0.7} style={styles.linkProblema}>
        <Text style={styles.textoBrancoCentralizado1}>Problema para entrar na sua conta?</Text>
      </TouchableOpacity>
         </View>
    </ScrollView>
  );
}

export default App;

