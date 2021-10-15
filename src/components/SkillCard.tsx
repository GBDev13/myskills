import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface SkillProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillProps) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      {...rest}
    >
      <Text style={styles.skill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  },
  skill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});