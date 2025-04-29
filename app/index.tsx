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
];

export default function Index() {
  return (
    <View
      style={style.container}
    >
      {
        usuarios.map( item => (
         <View style={style.itemLista}> 
          <Text style={style.textoLista}>{item.nome}</Text>
         </View> 
        ))
      } 
    </View>
  );
}


const style= StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "Center",
  },

  itemLista: {
    width: '100%',
    padding: 10,
  }
})