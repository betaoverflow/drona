import React from 'react'
import { TextInput   } from 'react-native-gesture-handler'
import { Button} from "react-native";

export default function LoginScreen()
{
    return (
        <>
            <TextInput placeholder="Enter your email" />
            <TextInput placeholder="Enter your password" />
            <Button
                title="Submit"
                onPress={()=>console.log("hi")}
            >
            </Button>
        </>
    )
}