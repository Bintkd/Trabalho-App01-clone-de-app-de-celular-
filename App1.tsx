import { View ,Text,Image,TextInput,TouchableOpacity } from "react-native"
import {styles} from './styles';
import React from "react";
import icon from './assets/PlayStation.png';

function App() {
  return (
   <View style={styles.container}>

    <Text style={styles.sonyText}> SONY   </Text>

      <Image source={icon} style={styles.image} />

      <View style={styles.contentWrapper}>

<Text style={styles.mainTitle}>
   Iniciar sessão no PlayStation 
   </Text>

<Text style={{color:'#FFFFFF', alignSelf:'flex-start', marginBottom:5, marginLeft:30}}>
      ID de inicio de sassão (endereço de email)
       </Text>

    

<TouchableOpacity activeOpacity={0.7} style={styles.caixa1}>
     <TextInput
      style={styles.input}
      keyboardType="email-address"
      placeholderTextColor="#AAAAAA"
     /> </TouchableOpacity>
     

    <TouchableOpacity activeOpacity={0.7} style={styles.buttonPrimary}>
      <Text style= {styles.buttonPrimaryText}>
                   Seguinte
      </Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
      <Text style={styles.linkText}>
        Sobra a conta da Sony
      </Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
      <Text style={styles.linkText}>
        Problemas ao iniciar um sessão?
      </Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} style={styles.buttonSecondary}>
        <Text style={styles.buttonSecondaryText}>
          Criar uma conta
        </Text>
        </TouchableOpacity>
      </View>
    </View>
    );
};
export default App;


