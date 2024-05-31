import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Next from '../../components/Next';

const Question2: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const options = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' },
    { id: 3, text: 'Option 3' },
    { id: 4, text: 'Option 4' },
  ];

  const handleOptionPress = (id: number) => {
    setSelectedOptions(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(optionId => optionId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.question}>Question2?</Text>
        {options.map(option => (
          <View key={option.id} style={styles.optionContainer}>
            <CheckBox
              checked={selectedOptions.includes(option.id)}
              onPress={() => handleOptionPress(option.id)}
            />
            <TouchableOpacity
              style={[
                styles.option,
                selectedOptions.includes(option.id) && styles.selectedOption,
              ]}
              onPress={() => handleOptionPress(option.id)}
            >
              <Text style={[styles.optionText,  selectedOptions.includes(option.id) && styles.optionTexts]}>{option.text}</Text>
            </TouchableOpacity>
          </View>
        ))}
        <Next nextScreen="Home1"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0, 0, 0)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '80%', // Adjust the width to your requirement
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff', // Ensure the text is visible on the black background
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  option: {
    width: '100%', 
    padding: 15,
    marginVertical: 5,
    borderColor: '#ddd',
  },
  selectedOption: {
    backgroundColor: '#cce5ff',
    borderColor: '#3399ff',
    borderRadius:15,
  },
  optionText: {
    fontSize: 16,
    color: 'white',
  },
  optionTexts: {
    fontSize: 16,
    color: 'black',
  },
});

export default Question2;
