import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
// import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

import mapMarker from '../../assets/Icons/placeholderG.png';
import Eye from '../../assets/Icons/visibility.png';
React.createRef();

const LocationOngs: React.FC = () => {
  const navigation = useNavigation();
  const mapRef = useRef(null);
  const [orphanages, setOrphanages] = useState([
    {
      id: 1,
      name: 'Seja Feliz',
      adress: 'Rua 1',
      phone: '(11) 93243-4321',
      latitude: -23.4172221,
      longitude: -46.0562827,
    },
    {
      id: 2,
      name: 'Meu Pet',
      adress: 'Rua 2',
      phone: '(11) 92341-3256',
      latitude: -23.4165526,
      longitude: -46.0557329,
    },
    {
      id: 3,
      name: 'AjudaAi',
      adress: 'Rua 3',
      phone: '(11) 98564-9875',
      latitude: -23.4158413,
      longitude: -46.0526302,
    },
  ]);

  useEffect(() => {
    if (mapRef) {
      console.log(mapRef);
    }
  });

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        ref={mapRef}
        initialRegion={{
          latitude: -23.4184976,
          longitude: -46.0549664,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}>
        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.9,
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}>
              <Callout tooltip>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{orphanage.name}</Text>
                  <Text style={styles.calloutText}>{orphanage.adress}</Text>
                  <Text style={styles.calloutText}>{orphanage.phone}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {orphanages.length} Organizações encontrados
        </Text>
        <RectButton style={styles.createOrphanageButton}>
          <Image source={Eye} />
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 180,
    height: 100,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#333',
    fontSize: 14,
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },

  footerText: {
    color: '#8fa7b3',
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#f45',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LocationOngs;
