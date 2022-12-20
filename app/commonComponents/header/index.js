import React from 'react';
import { TouchableOpacity, View, Image, Text, TextInput } from 'react-native';
import Icons from '../icon';
import styles from './styles';

const Header = ({
          titleText,
          leftIcon,
          rightIcons,
          onRightIconClick,
          onLeftIconClick,
          placeholderText,
          searchContainerVisibility,
          searchText,
          onChangeSearchText,
          textHeaderStyle,
          ...props
}) => {

          const {
                    rowContainer,
                    center,
                    titleStyle,
                    leftImgContainer,
                    rightImgContainer,
                    headerView,
                    rightIconView,
                    emptyRightIconView,
                    titleParentStyle,
                    searchTxt,
                    searchParentView,
          } = styles;

          return (
                    <View style={[rowContainer, headerView]}>
                              <TouchableOpacity
                                        style={leftImgContainer}
                                        onPress={() => {
                                                  onLeftIconClick(leftIcon);
                                        }}>
                                        <Icons
                                                  type={leftIcon?.type}
                                                  name={leftIcon?.name}
                                                  size={20}
                                                  color={leftIcon?.color}
                                        />
                              </TouchableOpacity>
                              {(searchContainerVisibility && (
                                        <View style={searchParentView}>
                                                  <TextInput
                                                            style={searchTxt}
                                                            onChangeText={text => {
                                                                      onChangeSearchText(text);
                                                            }}
                                                            value={searchText}
                                                            placeholder={placeholderText}
                                                            placeholderTextColor={currentTheme.color.secondary}
                                                            cursorColor={currentTheme.color.secondary}
                                                            underlineColorAndroid={currentTheme.color.secondary}
                                                  />
                                        </View>
                              )) || (
                                                  <>
                                                            <View style={[center, titleParentStyle]}>
                                                                      <Text style={[titleStyle, textHeaderStyle]}>{titleText}</Text>
                                                            </View>
                                                            <View
                                                                      style={[
                                                                                rightIconView,
                                                                                !rightIcons && leftIcon && emptyRightIconView,
                                                                      ]}>
                                                                      {rightIcons &&
                                                                                rightIcons.map((icon, index) => (
                                                                                          <TouchableOpacity
                                                                                                    style={rightImgContainer}
                                                                                                    onPress={() => {
                                                                                                              onRightIconClick(icon, index);
                                                                                                    }}>
                                                                                                    <Icons
                                                                                                              type={icon?.type}
                                                                                                              name={icon?.name}
                                                                                                              size={icon?.size}
                                                                                                              color={icon?.color}
                                                                                                    />
                                                                                          </TouchableOpacity>
                                                                                ))}
                                                            </View>
                                                  </>
                                        )}
                    </View>
          );
};

export { Header };
