import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

type ImageViewerProps = {
  placeHolderImageSource: ImageSourcePropType;
};

export default function ImageViewer({
  placeHolderImageSource,
}: ImageViewerProps) {
  return <Image source={placeHolderImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
