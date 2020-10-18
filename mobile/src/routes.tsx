import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Header from './components/Header';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanagesMap from './pages/OrphanagesMap';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    
    return (
        
        <NavigationContainer>

            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>

                <Screen name = "OrphanagesMap" component = {OrphanagesMap} />
                
                <Screen name = "OrphanageDetails" component = {OrphanageDetails} options = {{

                    headerShown: true,
                    header: () => <Header showCancel = {false} title = "Orfanato" />

                }} />
                
                <Screen name = "OrphanageData" component = {OrphanageData} options = {{

                    headerShown: true,
                    header: () => <Header title = "Informe os dados"/>

                }} />
                
                <Screen name = "SelectMapPosition" component = {SelectMapPosition} options = {{

                    headerShown: true,
                    header: () => <Header title = "Selecione no mapa"/>

                }} />

            </Navigator>

        </NavigationContainer>

    );

};