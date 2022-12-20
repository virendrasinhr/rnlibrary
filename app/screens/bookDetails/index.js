import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles';
import AddBooks from './component/addBooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '../../commonComponents/header';
import Colors from '../../common/colors';

const BookDetails = ({ navigation, ...props }) => {

  const [authorData, setAuthorData] = useState({
    name: "virendrasinh",
    books: [{ price: 200, name: "horror" }]
  });
  const [authors, setAuthors] = useState([]);
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setAuthorData(props.route.params.authorData);
    setAuthors(props.route.params.authors);
    setIndex(props.route.params.index);
  }, []);

  const setBookDetails = async (setBookDetails) => {
    if (authorData?.books.some(books => books.name === setBookDetails.name)) {
      console.log("already exist");
    } else {
      authors[index].books.push(setBookDetails);
      setAuthorData(authorData);
      await AsyncStorage.setItem('authorsData', JSON.stringify(authors));
    }
  }

  const { mainContainer, bookContainer, bookName } = styles;
  return (
    <SafeAreaView style={mainContainer}>
      <StatusBar backgroundColor={Colors.backgroundColor} barStyle={'dark-content'} />
      <Header titleText={'Books'} />
      {authorData?.books?.map((book) =>
        <View style={bookContainer} onPress={() => { navigation.navigate("BookDetails", { authorData: authorData }) }}>
          <Text style={bookName}> {book.name}</Text>
          <Text style={bookName}>{book.price + "/-"}</Text>
        </View>
      )}
      {modalVisible && <AddBooks
        modalVisible={modalVisible}
        setModalVisible={(modal) => { setModalVisible(modal) }}
        setBookDetails={(bookDetails) => { setBookDetails(bookDetails) }}
      />}
    </SafeAreaView>
  )
}

export default BookDetails;