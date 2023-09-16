import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageSourcePropType } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const placeHolderImage: ImageSourcePropType = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeHolderImageSource={placeHolderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a Photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
