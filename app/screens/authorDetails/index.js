import { SafeAreaView, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../common/colors';
import styles from './styles';
import { Header } from '../../commonComponents/header';
import Icons from '../../commonComponents/icon';
import AddAuthors from './component/addAuthors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthorDetails = ({ navigation }) => {
          const [authors, setAuthors] = useState([]);
          const [modalVisible, setModalVisible] = useState(false);
          const [refresh, setRefesh] = useState(false);

          useEffect(() => {
                    init();
          }, []);

          const init = async () => {
                    let authorsData = await AsyncStorage.getItem('authorsData');
                    if (authorsData) {
                              authorsData = JSON.parse(authorsData);
                              setAuthors(authorsData);
                    }
          }

          const setAuthorName = async (name) => {
                    let authorsData = authors;
                    if (authorsData?.some(authors => authors.name === name)) {
                              console.log("already exist");
                    } else {
                              let data = {
                                        name: name,
                                        books: []
                              }
                              authorsData.push(data);
                              setAuthors(authorsData);
                              authorsData = JSON.stringify(authorsData)
                              await AsyncStorage.setItem('authorsData', authorsData);
                              setRefesh(!refresh);
                    }
          }

          const { authorContainer, mainContainer, authorsName, authorsNotFound, addAuthor } = styles;

          return (
                    <SafeAreaView style={mainContainer}>
                              <StatusBar backgroundColor={Colors.backgroundColor} barStyle={'dark-content'} />
                              <Header titleText={'Authors'} />
                              {authors?.length == 0 &&
                                        <View style={authorsNotFound}>
                                                  <Text>{"Not found"}</Text>
                                        </View>
                                        ||
                                        authors.map((authorData, index) =>
                                                  <TouchableOpacity style={authorContainer} onPress={() => { navigation.navigate("BookDetails", { authorData: authorData, authors: authors, index }) }}>
                                                            <Text style={authorsName}>{authorData.name}</Text>
                                                  </TouchableOpacity>
                                        )}

                              {modalVisible && <AddAuthors
                                        modalVisible={modalVisible}
                                        setModalVisible={(modal) => { setModalVisible(modal) }}
                                        setAuthorName={(name) => { setAuthorName(name) }}
                              />}
                              <TouchableOpacity style={addAuthor} onPress={() => { setModalVisible(true) }}>
                                        <Icons
                                                  type={'antdesign'}
                                                  name={'plus'}
                                                  size={20}
                                                  color={Colors.appColor}
                                        />
                              </TouchableOpacity>

                    </SafeAreaView>
          )
}

export default AuthorDetails;