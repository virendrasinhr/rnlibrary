import { StyleSheet, Platform, PixelRatio, Dimensions } from "react-native";
import AuthorDetails from ".";
import Colors from "../../common/colors";

const styles = StyleSheet.create({
          mainContainer: {
                    flex: 1,
                    paddingHorizontal: 20,
                    backgroundColor: Colors.backgroundColor
          },
          bookContainer: {
                    width: "100%",
                    marginVertical: 5,
                    padding: 20,
                    borderRadius: 10,
                    backgroundColor: Colors.appColor,
                    flexDirection:'row',
                    justifyContent: 'space-between'
          },
          bookName: {
                    color: "#ffffff",
                    fontSize: 20,
                    fontWeight: '400'
          },
          bookNotFound: {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
          },
          addBook: {
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    opacity: 0.5,
                    bottom: 20,
                    right: 20,
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Colors.greyColor,
          },
          mainModalContainer: {
                    flex: 1,
                    backgroundColor: Colors.modalBackground,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 10
          },
          modalView: {
                    width: "100%",
                    paddingHorizontal: 30,
                    borderRadius: 10,
                    backgroundColor: Colors.appColor
          },
          modalTitle: {
                    alignSelf: 'center',
                    color: Colors.backgroundColor,
                    fontSize: 20,
                    fontWeight: "500"
          },
          saveBookName: {
                    marginVertical: 20,
                    borderRadius: 10,
                    width: "100%",
                    alignItems: 'center',
                    backgroundColor: Colors.backgroundColor,
                    padding: 10,
          },
          addTxt: {
                    color: Colors.appColor,
                    fontSize: 15,
                    fontWeight: '500'
          },
          modalHeader: {
                    flexDirection: 'row',
                    marginVertical: 20,
                    marginBottom: 50,
                    alignItems: 'center',
                    justifyContent: 'space-between'
          },
          inputSpace:{
                    marginVertical:5
          }

});

export default styles;