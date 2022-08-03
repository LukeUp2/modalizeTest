import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { Modalize } from 'react-native-modalize';

const App = () => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text>Welcome to my dinamic modal test</Text>
      </View>
      <TouchableOpacity onPress={onOpen} style={{ backgroundColor: '#cacaca', padding: 10, borderRadius: 10, margin: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Open the modal</Text>
      </TouchableOpacity>

      <Modalize 
        ref={modalizeRef}
        snapPoint={180}
        modalHeight={180}
      >
        <View style={{ flex: 1, height: 180, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 8,
        padding: 15, backgroundColor: '#29ae19' }}>
            <Text>EDITAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 8,
        padding: 15, backgroundColor: '#ff0000' }}>
            <Text>EXCLUIR</Text>
          </TouchableOpacity>

        </View>
      </Modalize>
    </View>
  );
};

export default gestureHandlerRootHOC(App);