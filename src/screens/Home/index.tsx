import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log("Voce clicou no botao de adicionar!");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento </Text>

      <Text style={styles.EventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
