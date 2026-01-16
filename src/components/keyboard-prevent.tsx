import { KeyboardAvoidingView, Platform } from 'react-native';
import { IProps } from '../interfaces/props.interface';


const KeyboardPrevent = ({ children }:IProps)=>{
  return <KeyboardAvoidingView 
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={{ flex: 1 }}
>
    { children }
</KeyboardAvoidingView>
}

export default KeyboardPrevent;