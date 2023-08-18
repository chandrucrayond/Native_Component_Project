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
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {CardExpandedProps} from './props';
import {
  CardExpandedContainer,
  CardExpandedCard,
  CardText,
  ModalFlexAligned_View,
} from './styles';
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
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <TouchableWithoutFeedback>
              <View style={styles.modalView}>
                <View>
                  <Text style={styles.modalText}>{item?.title}</Text>
                </View>
                <View>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
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
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation !== undefined &&
                  navigation.navigate('PropsChecking');
              }}
              style={{
                width: 300,
                height: 100,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 18}}>
                Click PropsChecking page
              </Text>
            </TouchableOpacity>
          </View>
        </CardExpandedCard>
      </CardExpandedContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalView: {
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '98%',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    borderRadius: 8,
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
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
  },
});

export default CardExpanded;
