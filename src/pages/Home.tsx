import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Platform,
  FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillProps {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillProps[]>([]);

  const [gretting, setGrettings] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(old => [...old, data]);
    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    setMySkills(old => old.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGrettings("Good morning");
    } else if (currentHour >= 12 && currentHour < 10) {
      setGrettings("Good afternoon")
    } else {
      setGrettings("Good night")
    }
  }, [mySkills])

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Welcome, Gabriel</Text>

      <Text style={styles.grettings}>
        {gretting}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button
        onPress={handleAddNewSkill}
      >
        Add
      </Button>

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>


      <FlatList
        showsVerticalScrollIndicator={false}
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  grettings: {
    color: '#fff'
  }
})