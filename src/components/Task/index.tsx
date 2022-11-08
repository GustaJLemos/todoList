import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Entypo, Ionicons   } from '@expo/vector-icons';

import { styles } from './styles';
import { COLORS } from '../../global/colors';

type Props = {
  text: string,
  isComplet: boolean;
  onCheck: () => void;
  onDelete: () => void;
}

export function Task({ text, isComplet, onCheck, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={onCheck}
        style={styles.checkButton}
      >
        {
          isComplet ? 
            <AntDesign name="checkcircle" size={24} color={COLORS.purpleDark} /> 
          : <Entypo name="circle" size={24} color={COLORS.blue} />
        }
      </TouchableOpacity>

      <Text
        numberOfLines={2}
        
        style={[styles.text, {
          color: isComplet ? COLORS.gray300 : COLORS.gray100,
          textDecorationLine: isComplet ? 'line-through' : 'none', 
          // textDecorationStyle: isComplet ? 'solid' : ''
        }]}
      >  
        {text}
      </Text>

      <TouchableOpacity 
        onPress={onDelete}
        style={styles.deleteButton}
      >
        <Ionicons name="trash-outline" size={24} color={COLORS.gray300} />
      </TouchableOpacity>
    </View>
  );
}