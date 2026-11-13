import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function App() {
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const handleAdicionarTarefa = () => {
    if (tarefaAtual.trim() === '') {
      return;
    }
    setListaTarefas([...listaTarefas, tarefaAtual]);
    setTarefaAtual('');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Minhas tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o reparo necessário"
          value={tarefaAtual}
          onChangeText={setTarefaAtual}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdicionarTarefa}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.listaBox}>
          {listaTarefas.map((tarefa, index) => (
            <View key={index} style={styles.cardTarefa}>
              <Text style={styles.textoTarefa}>{tarefa}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  scrollArea: {
    flex: 1,
  },
  container: {
    paddingBottom: 50,
  },
  buttonAdd: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 22,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  listaBox: {
    marginTop: 10,
    width: '100%',
  },
  cardTarefa: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#007bff',
  },
  textoTarefa: {
    fontSize: 16,
  },
});