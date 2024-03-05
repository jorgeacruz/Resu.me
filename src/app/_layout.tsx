import { Slot} from 'expo-router';

import {
    useFonts,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium
} from '@expo-google-fonts/poppins'

export default function Layout(){
    //carrega as fonts
    const [fonstLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    })

    if(!fonstLoaded){
        return
    }
    return fonstLoaded ? <Slot/> : null
}