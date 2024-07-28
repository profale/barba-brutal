// import {View, Text} from "react-native";
// import {Somar} from '@barba/core'

// export default function App(){
//     return (
//         <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
//             <Text>App {Somar(50,30)}</Text>
//         </View>
//     )
// }
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import {View, Text} from "react-native"
import { ProvedorUsuario } from './data/contexts/ContextoUsuario'
import { ProvedorAgendamento } from './data/contexts/ContextoAgendamento'
import Cadastro from './screens/Cadastro'
import { NavigationContainer } from '@react-navigation/native'
import Principal from './screens/Principal'
import Sumario from './screens/Sumario'

const Stack = createNativeStackNavigator()

export default function App(){
    return (
        <ProvedorUsuario>
            <ProvedorAgendamento>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen 
                            name="Cadastro"
                            component={Cadastro}  
                            options={{
                                headerShown: false,
                            }} />
                        <Stack.Screen 
                            name="Principal" 
                            component={Principal} />
                        <Stack.Screen 
                            name="Sumario" 
                            component={Sumario}
                            options={{
                                headerShown: false,
                            }} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ProvedorAgendamento>
        </ProvedorUsuario>
    )
}