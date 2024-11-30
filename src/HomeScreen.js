import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importando o ícone da seta

export default function HomeScreen({ navigation }) {
  const [selectedType, setSelectedType] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} // Navega de volta
      >
        <Ionicons name="arrow-back" size={24} color="purple" />
      </TouchableOpacity>

      <Text style={styles.title}>Agora é hora de dar mais detalhes</Text>
      
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedType}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Tipo de imóvel" value="" />
          <Picker.Item label="Casa" value="casa" />
          <Picker.Item label="Apartamento" value="apartamento" />
          <Picker.Item label="Kitnet" value="kitnet" />
        </Picker>
      </View>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('DetailScreen')}
      >
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  backButton: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 20,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  continueButton: {
    backgroundColor: '#8A2BE2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
