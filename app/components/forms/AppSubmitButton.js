import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';
import colors from '../../config/colors';

function AppSubmitButton({ title, icon, ...otherProps }) {
  const { values, handleSubmit } = useFormikContext()

  // set icon and button color when form is empty
  const isEmpty = Object.values(values).every(value => {
    if (!value) {
      return true;
    }
    return false;
  });

  const iconComponent = icon ? <Ionicons size={20} color={isEmpty ? colors.darkGray : colors.white} name={icon} /> : null

  return (
    <AppButton 
      disable={isEmpty} 
      style={{alignSelf: 'flex-end', marginTop: 10}} 
      title={title} 
      onPress={handleSubmit} 
      IconComponent={iconComponent}
      {...otherProps} 
      />
  );
}

export default AppSubmitButton;