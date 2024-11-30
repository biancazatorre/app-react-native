import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AmenitiesScreen({ navigation }) {
  // Estados para cada comodidade e permissão
  const [internet, setInternet] = useState(false);
  const [arCondicionado, setArCondicionado] = useState(false);
  const [televisao, setTelevisao] = useState(false);
  const [tvCabo, setTvCabo] = useState(false);

  const [casais, setCasais] = useState(false);
  const [criancas, setCriancas] = useState(false);
  const [fumantes, setFumantes] = useState(false);
  const [pets, setPets] = useState(false);

  return (
    <View style={styles.container}>
      {/* Ícone de voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#8E44AD" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Defina as comodidades e permissões do seu Poundsflats</Text>

      {/* Seção: Comodidades */}
      <Text style={styles.sectionTitle}>Comodidades</Text>
      <View style={styles.option}>
        <Text style={styles.optionText}>Internet</Text>
        <Switch
          value={internet}
          onValueChange={(value) => setInternet(value)}
          thumbColor={internet ? '#8E44AD' : '#ccc'}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Ar-condicionado</Text>
        <Switch
          value={arCondicionado}
          onValueChange={(value) => setArCondicionado(value)}
          thumbColor={arCondicionado ? '#8E44AD' : '#ccc'}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Televisão</Text>
        <Switch
          value={televisao}
          onValueChange={(value) => setTelevisao(value)}
          thumbColor={televisao ? '#8E44AD' : '#ccc'}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>TV a cabo</Text>
        <Switch
          value={tvCabo}
          onValueChange={(value) => setTvCabo(value)}
          thumbColor={tvCabo ? '#8E44AD' : '#ccc'}
        />
      </View>

      {/* Seção: Permissões */}
      <Text style={styles.sectionTitle}>Permissões</Text>
      <View style={styles.option}>
        <Text style={styles.optionText}>Casais</Text>
        <Switch
          value={casais}
          onValueChange={(value) => setCasais(value)}
          thumbColor={casais ? '#8E44AD' : '#ccc'}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Crianças</Text>
        <Switch
          value={criancas}
          onValueChange={(value) => setCriancas(value)}
          thumbColor={criancas ? '#8E44AD' : '#ccc'}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Fumantes</Text>
        <Switch
          value={fumantes}
          onValueChange={(value) => setFumantes(value)}
          thumbColor={fumantes ? '#8E44AD' : '#ccc'}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.optionText}>Pets</Text>
        <Switch
          value={pets}
          onValueChange={(value) => setPets(value)}
          thumbColor={pets ? '#8E44AD' : '#ccc'}
        />
      </View>

      {/* Botão de Continuar */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('Detail')}
      >
        <Text style={styles.continueText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    marginTop: 80,
    fontSize: 18,
    color: '#4A4A4A',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8E44AD',
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#4A4A4A',
  },
  continueButton: {
    backgroundColor: '#8E44AD',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
