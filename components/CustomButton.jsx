import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title ,handlePress, containerStyles,textStyles,isLoading}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    className={`bg-secondary rounded-xl ${containerStyles} ${isLoading ? 'opacity-50' : ''} min-h-[62px] justify-center items-center`}>
        <Text className={`${textStyles} text-primary font-psemibold text-lg `}>
        {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton