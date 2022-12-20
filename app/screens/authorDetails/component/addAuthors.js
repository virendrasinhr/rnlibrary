import { Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles';
import { OutlinedTextField } from 'rn-material-ui-textfield';
import Colors from '../../../common/colors';
import Icons from '../../../commonComponents/icon';

const AddAuthors = ({ modalVisible, setModalVisible, setAuthorName }) => {

          const { mainContainer, mainModalContainer, modalView, modalTitle,
                    saveAuthorName, addTxt, closeIcon, modalHeader } = styles;
          const [author, setAuthor] = useState("");
          const [isError, setIsError] = useState(false);
          const [refresh, setRefresh] = useState(false);

          const addAuthors = (type, name) => {
                    if (type == "txtChange" && name) {
                              setAuthor(name);
                              setIsError(false);
                              setRefresh(!refresh);
                    } else if (type == "addAuth" && author) {
                              setAuthorName(author);
                              setIsError(false);
                              setRefresh(!refresh);
                              setModalVisible(!modalVisible);
                    } else {
                              setAuthor(name);
                              setIsError(true);
                              setRefresh(!refresh);
                    }
          }

          const closeModal = () => {
                    setModalVisible(!modalVisible);
                    setAuthor("");
                    setIsError(false);
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
                                                                      <Text style={modalTitle}>{"Add Authors"}</Text>
                                                                      <TouchableOpacity onPress={() => { closeModal() }} style={closeIcon}>
                                                                                <Icons
                                                                                          name="close"
                                                                                          type={'AntDesign'}
                                                                                          color={Colors.backgroundColor}
                                                                                          size={20}
                                                                                />
                                                                      </TouchableOpacity>
                                                            </View>
                                                            <OutlinedTextField
                                                                      label={'Author Name'}
                                                                      value={author}
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
                                                                                addAuthors("txtChange", text);
                                                                      }}
                                                                      error={(isError && 'Enter Author Name' || '')}
                                                                      errorColor={Colors.backgroundColor}
                                                            />
                                                            <TouchableOpacity style={saveAuthorName} onPress={() => { addAuthors("addAuth") }}>
                                                                      <Text style={addTxt}>Add</Text>
                                                            </TouchableOpacity>
                                                  </View>
                                        </View>
                              </Modal>
                    </SafeAreaView>
          )
}

export default AddAuthors;
