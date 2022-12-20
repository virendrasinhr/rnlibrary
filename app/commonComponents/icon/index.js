
import React from 'react';
import Icon from 'react-native-easy-icon';


const Icons = ({ type, name, size, color, backgroundColor, iconContainer, borderRadius, tintColor, style }) => {

    return (
        <Icon
            type={type}
            name={name}
            color={color}
            size={size && size || 18}
            backgroundColor={backgroundColor && backgroundColor}
            borderRadius={borderRadius && borderRadius}
            style={[iconContainer && iconContainer, style]}
            tintColor={tintColor}
        />
    )
}


export default Icons;
