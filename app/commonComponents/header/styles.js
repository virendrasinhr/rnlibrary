import { StyleSheet } from 'react-native';
import Colors from '../../common/colors';

const styles = StyleSheet.create({
          imageContainer: {
                    height: 16,
                    width: 16,
                    resizeMode: 'contain',
          },
          titleStyle: {
                    fontSize: 20,
                    color: Colors.appColor,
                    fontWeight: "400",
                    letterSpacing: 0.04,
                    flexWrap: 'wrap',
          },
          headerView: {
                    marginHorizontal: 20,
                    marginVertical: 20,
                    alignItems: 'center',
          },
          leftImgContainer: {
                    justifyContent: 'center',
          },
          rightImgContainer: {
                    flex: 0,
                    justifyContent: 'center',
          },
          rightIconView: {
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                    marginLeft: 5,
          },
          titleParentStyle: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
          },
          searchContainer: {
                    paddingHorizontal: 30,
          },
          searchParentView: {
                    flex: 1,
                    marginHorizontal: 10,
                    marginRight: 35,
                    backgroundColor: Colors.greyColor
          },
          searchTxt: {
                    height: 40,
                    color: Colors.backgroundColor,
                    fontSize: 20,
                    fontWeight: "300",
                    letterSpacing: 0.04,
          },
          rowContainer: {
                    flexDirection: 'row',
                    alignItems: 'center',
          },
          center: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
          },
});


export default styles;
