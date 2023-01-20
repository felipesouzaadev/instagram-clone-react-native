import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from './src/Header';
import List from './src/List';

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1', 
      nome: 'Lucas Silva', 
      descricao: 'Mais um dia de muitos bugs :)', 
      imgperfil: 'https://blog.sebraees.com.br/wp-content/uploads/2018/10/Homem-sorrindo-em-frente-ao-computador.jpeg', 
      imgPublicacao: 'https://blog.sebraees.com.br/wp-content/uploads/2018/10/Homem-sorrindo-em-frente-ao-computador.jpeg',  
      likeada: true, 
      likers: 1
     },
    {
      id: '2', 
      nome: 'Matheus', 
      descricao: 'Isso sim é ser raiz!!!!!', 
      imgperfil: 'https://blog.lg.com.br/wp-content/uploads/2021/04/Design-sem-nome-9.jpg', 
      imgPublicacao: 'https://blog.lg.com.br/wp-content/uploads/2021/04/Design-sem-nome-9.jpg', 
      likeada: false, 
      likers: 0
    },
    {
      id: '3', 
      nome: 'Jose Augusto', 
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend', 
      imgperfil: 'https://www.chiefofdesign.com.br/wp-content/uploads/2020/06/interacao-.jpg', 
      imgPublicacao: 'https://www.chiefofdesign.com.br/wp-content/uploads/2020/06/interacao-.jpg',  
      likeada: false, 
      likers: 3
    },
    {
      id: '4', 
      nome: 'Gustavo Henrique', 
      descricao: 'Isso sim que é TI!', 
      imgperfil: 'https://www.hardware.com.br/static/c/m/76f83d71205d54a44bec22b0e2f4f7cb', 
      imgPublicacao: 'https://www.hardware.com.br/static/c/m/76f83d71205d54a44bec22b0e2f4f7cb', 
      likeada: false, 
      likers: 1
    },
    {
      id: '5', 
      nome: 'Guilherme', 
      descricao: 'Boa tarde galera do insta...', 
      imgperfil: 'https://cdn.create.vista.com/api/media/medium/176444940/stock-photo-smiling-businessman-working-computer-office?token=', 
      imgPublicacao: 'https://cdn.create.vista.com/api/media/medium/176444940/stock-photo-smiling-businessman-working-computer-office?token=',
      likeada: true, 
      likers: 32
    }
  ])


  return (
    <View style={styles.container}>
      <Header/>

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => item.id }
        data={feed}
        renderItem={ ({ item }) => <List data={item} /> }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})