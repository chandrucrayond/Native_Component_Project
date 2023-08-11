import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Button,
  Alert,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import {CardExpandedProps} from './props';
import {CardExpandedContainer, CardExpandedCard, CardText} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const CardExpanded: React.FC<CardExpandedProps> = ({route, navigation}) => {
  const item = route?.params?.item;
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{item?.title}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <StatusBar
        animated={true}
        backgroundColor="#383535"
        barStyle="light-content"
        networkActivityIndicatorVisible={false}
      />
      <CardExpandedContainer>
        <CardExpandedCard>
          <CardText>{item?.description}</CardText>
          {item?.title && (
            <Button
              title={item?.title}
              color="black"
              onPress={() => setModalVisible(true)}
            />
          )}
        </CardExpandedCard>
      </CardExpandedContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
});

export default CardExpanded;
