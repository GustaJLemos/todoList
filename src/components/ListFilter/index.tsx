import React from 'react';
import { Text, TextProps, View } from 'react-native';

import { styles } from './styles';

type Props = TextProps & { 
  title: string,
  count: number
}

export function ListFilter({ title, count, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} {...rest}>
        {title}
      </Text>

      <View style={styles.countContainer}>
        <Text style={styles.count}>
          {count}
        </Text>
      </View>
    </View>
  );
}