import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles'
import {
    StyleSheet,
    Text,
    View,
    SectionList,
    SafeAreaView,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';


const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const SECTIONS = [
    {
      title: 'Nosso time',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Nickolas Souza Silva',
          cargo:'Idealizador e PO',
          uri: 'https://picsum.photos/id/1/200',
        },
        {
          key: '2',
          text: 'Robson Mesquita Gomes',
          cargo:'Designer UX/UI',
          uri: 'https://picsum.photos/id/10/200',
        },
  
        {
          key: '3',
          text: 'Francisco Gabriel Santos da Silva',
          cargo:'Produção de conteúdo teórico',
          uri: 'https://picsum.photos/id/1002/200',
        },
        {
          key: '4',
          text: 'Antônia Cristiane Ferreira Torres',
          cargo:'Produção de conteúdo teórico',
          uri: 'https://picsum.photos/id/1006/200',
        },
        {
          key: '5',
          text: 'Ana Rebeca de Souza Freitas',
          cargo:'Produção de conteúdo teórico',
          uri: 'https://picsum.photos/id/1008/200',
        },
        {
          key: '6',
          text: 'Erislândia Maria Campos Paiva',
          cargo:'Produção de conteúdo teórico',
          uri: 'https://picsum.photos/id/1008/200',
        },
        {
          key: '7',
          text: 'Maria Luísa Damasceno Silva',
          cargo:'Produção de conteúdo teórico',
          uri: 'https://picsum.photos/id/1008/200',
        },
        {
          key: '8',
          text: 'Raimundo Luan da Silva Moraes',
          cargo:'Programador mobile',
          uri: 'https://picsum.photos/id/1008/200',
        },
        {
          key: '9',
          text: 'Rafael Benvindo Holanda Mendes',
          cargo:'Programador mobile',
          uri: 'https://picsum.photos/id/1008/200',
        },
        {
          key: '10',
          text: 'Heli costa ribeiro',
          cargo:'Tech Lead',
          uri: 'https://picsum.photos/id/1008/200',
        },
        {
          key: '11',
          text: 'Alanna Maria Machado Alves Paiva',
          cargo:'Programadora mobile',
          uri: 'https://picsum.photos/id/1008/200',
        },

      ],
    },
];

const ListItem = ({ item }) => {
    return (
      
      <TouchableOpacity activeOpacity = {0.5} /*onPress={item.key}*/>
        <View style={styles.item}>
          <Image
            source={{
              uri: item.uri,
            }}
            style={styles.itemPhoto}
            resizeMode="cover"
          />
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
};



function About(){
    return(
        <View style={styles.container}>

        <TouchableOpacity
            activeOpacity={0.9}>
            <Image
            source={require('../../../img/chevron-left.png')}
            style={styles.buttonImageIconStyle}
        />
        </TouchableOpacity>


        <StatusBar style="light" />
        <SafeAreaView style={{ flex: 1 }}> 
        <ScrollView>
            <> 
            <Image
                source={require('../../../img/logo.png')}
                style={styles.logoStyle}
            />
            <Text style={styles.scontainer} style={styles.textAbout}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id risus nec erat fringilla venenatis at eget ante. Vestibulum vitae eros venenatis, pellentesque tortor quis, convallis quam. Sed vel <B>maximus</B> dolor. Sed a ultrices libero, vel suscipit. </Text>
            <Text style={styles.textVersion} > v1.0.0-pre-alpha</Text>
            <Text style={styles.textVersionSub} fontWeight= '600' color= '#A5A5A5' > versão </Text>
            </>

            <SectionList
            contentContainerStyle={{ paddingHorizontal: 40 }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({ section }) => (
                <>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                {section.horizontal ? (
                    <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                    />
                ) : null}
                </>
            )}
            renderItem={({ item, section }) => {
                if (section.horizontal) {
                return null;
                }
                return <ListItem item={item} />;
            }}
            />
        </ScrollView>
        </SafeAreaView>
        </View>
    );
}

 

export default About; 