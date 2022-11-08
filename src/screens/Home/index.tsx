import React, { useState } from 'react';
import { Alert, FlatList, Image, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../../assets/Logo.png'
import { COLORS } from '../../global/colors';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { ListFilter } from '../../components/ListFilter';
import { Task } from '../../components/Task';

export function Home() {
  const [ taskDescription, setTaskDescription ] = useState('');

  const [ tasks, setTasks ] = useState<string[]>([])

  const [ tasksFinisheds, setTasksFinisheds ] = useState<string[]>([])
  
  function handleAddTask() {
    if(tasks.includes(taskDescription)) {
      return Alert.alert('Task já existe', 'Já existe uma task na lista com essa descrição')
    }
    setTasks(prevState => [...prevState, taskDescription])
  }

  function handleFinishTask(item: string) {
    console.log('aq')

    // const filteredTasks = tasksFinisheds.filter(prevState => prevState !== item)

    if(tasksFinisheds.includes(item)) {
      return setTasksFinisheds(tasksFinisheds.filter(prevState => prevState !== item))
    }

    setTasksFinisheds(prevState => [...prevState, item])
  }
  console.log(tasksFinisheds)

  function handleDeleteTask(item: string) {
    Alert.alert('Remover task', `Tem certeza que deseja remover a task?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(participant => participant !== item))
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Image 
        source={Logo}
      />
      <View style={styles.inputAndButton}>
        <TextInput 
          value={taskDescription}
          placeholder={'Adicione uma nova tarefa'}
          placeholderTextColor={COLORS.gray300}
          onChangeText={setTaskDescription}
          style={[
            styles.input, 
            {borderColor: taskDescription ? COLORS.purpleDark : COLORS.gray700}
          ]}
        />

        <TouchableOpacity 
          onPress={handleAddTask}
          style={styles.button}
        >
          <Ionicons name="add-circle" size={24} color={COLORS.gray100} />
        </TouchableOpacity>
      </View>
      

      {/* TODO talvez exibir detalhes qunado a tarefa for muito grande
          atualizar array de concluidos quando excluo uma task
          quando adiciono uma task, eu limpo o input para o usuário n precisar apagar
          talvez separar em abas os concluido, deletados e tals, scrollando para o lado que quero
      */}
      <View style={styles.listContainer}>
        <View style={styles.listFilterContainer}>
          <ListFilter title='Criadas' count={tasks.length}/>
          <ListFilter 
            title='Concluídas' 
            count={tasksFinisheds.length} 
            style={{color: COLORS.purple, fontWeight: 'bold'}}
          />
        </View>

        <FlatList 
          data={tasks}
          contentContainerStyle={{
            marginHorizontal: 24
          }}
          ListEmptyComponent={() => (
            <View style={styles.separator} />

          )}
          renderItem={({item, index}) => (
            <Task 
              key={index}
              text={item}
              isComplet={tasksFinisheds.includes(item)}
              onCheck={() => handleFinishTask(item)}
              onDelete={() => handleDeleteTask(item)}
            />
          )}
        />
      </View>
    </View>
  );
}