import { Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../styles';
import { OutlinedTextField } from 'rn-material-ui-textfield';
import Colors from '../../../common/colors';
import Icons from '../../../commonComponents/icon';
import { bookInputs } from '../../../common/constants';

const AddBooks = ({ modalVisible, setModalVisible, setBookDetails }) => {

          const { mainContainer, mainModalContainer, modalView, modalTitle,
                    saveBookName, addTxt, closeIcon, modalHeader, inputSpace } = styles;
          const [bookInput, setbookInput] = useState([]);
          const [refresh, setRefresh] = useState(false);

          useEffect(() => {
                    setbookInput(bookInputs);
          },[]);

          const addBooks = (clicktype, index, value) => {
                    if (clicktype == "txtChange" && value) {
                              bookInput[index].value = value;
                              bookInput[index].isError = false;
                              setbookInput(bookInput);
                              setRefresh(!refresh);
                    } else if (clicktype == "addAuth") {
                              let isError = false;
                              let details = { name: "", price: "" }
                              bookInput?.forEach((input, index) => {
                                        if (!input.value) {
                                                  isError = true;
                                                  bookInput[index].isError = false;
                                        } else if (index == 0) {
                                                  details.name = bookInput[index].value
                                        } else {
                                                  details.price = bookInput[index].value
                                        }
                              })
                              if (!isError) {
                                        setBookDetails(details);
                                        bookInput?.forEach((input, index) => {
                                                  bookInput[index].value = "";
                                                  bookInput[index].isError= false;
                                        });
                                        setbookInput(bookInput);
                                        setRefresh(!refresh);
                                        setModalVisible(!modalVisible);

                              }
                    } else {
                              bookInput[index].value = value;
                              bookInput[index].isError = true;
                              setbookInput(bookInput);
                              setRefresh(!refresh);
                    }
          }

          const closeModal = () => {
                    setModalVisible(!modalVisible);
                    setbookInput(bookInputs);
                    setRefresh(!refresh);
          }

          return (
                    <SafeAreaView style={mainContainer}>
                              <Modal
                                        transparent={true}
                                        style={mainContainer}
                                        visible={modalVisible}
                              >
                                        <View style={mainModalContainer}>

                                                  <View style={modalView}>
                                                            <View style={modalHeader}>
                                                                      <Text style={modalTitle}>{"Add Book"}</Text>
                                                                      <TouchableOpacity onPress={() => { closeModal() }} style={closeIcon}>
                                                                                <Icons
                                                                                          name="close"
                                                                                          type={'AntDesign'}
                                                                                          color={Colors.backgroundColor}
                                                                                          size={20}
                                                                                />
                                                                      </TouchableOpacity>
                                                            </View>
                                                            {bookInput && bookInput.map((type, index) => <>
                                                                      <OutlinedTextField
                                                                                label={type.type}
                                                                                value={type.value}
                                                                                textColor={Colors.backgroundColor}
                                                                                fontSize={14}
                                                                                labelFontSize={14}
                                                                                tintColor={Colors.backgroundColor}
                                                                                baseColor={Colors.backgroundColor}
                                                                                lineWidth={0.8}
                                                                                activeLineWidth={0.8}
                                                                                contentInset={{ input: 5 }}
                                                                                labelOffset={{ y1: -5, y0: -8 }}
                                                                                onChangeText={text => {
                                                                                          addBooks("txtChange", index, text);
                                                                                }}
                                                                                error={(type.isError && type.error || '')}
                                                                                errorColor={Colors.backgroundColor}
                                                                      />
                                                                      <View style={inputSpace} />
                                                            </>)}

                                                            <TouchableOpacity style={saveBookName} onPress={() => { addBooks("addAuth") }}>
                                                                      <Text style={addTxt}>Add</Text>
                                                            </TouchableOpacity>
                                                  </View>
                                        </View>
                              </Modal>
                    </SafeAreaView>
          )
}

export default AddBooks;
