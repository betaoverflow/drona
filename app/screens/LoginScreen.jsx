import React, { useState } from 'react'
import { TextInput   } from 'react-native-gesture-handler'
import { Button} from "react-native";
import { View } from '../components/Themed';


export default function LoginScreen()
{   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   

    return (
        <>
            <TextInput
                placeholder="Enter your email"
                value = {email}
                onChange={e=>setEmail(e.target.value)}
            />
            <TextInput
                placeholder="Enter your password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
            />
            <Button
                title="Login"
                onPress={() => console.log("hi")}
                color = "green"
            >
            </Button>
            <View style={{height:30}} />
            <Button
                title="Register"
                onPress={() => console.log("hi")}
                color="blue"
            ></Button>
        </>
    )
}