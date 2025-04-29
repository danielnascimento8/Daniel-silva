import { Text, View } from "react-native";

const usuarios = [
 { 
  id: 1,
  nome: "Andre",
  cargo: "Professor"
 },
 {
  id: 2,
  nome: "Cicinho cabeça",
  cargo: "aluno"
 } 
]

export default function Index() {
  return (
    <View
      style={style.container}
     >
      {
        usuarios.map( item => (
         <View style={StylePropertyMap.itemLista}> 
          <Text Style={{ fontSize: 20 }}>{item.nome}</Text>
         </View> 
        ))
      } 
    </View>
  );
}
