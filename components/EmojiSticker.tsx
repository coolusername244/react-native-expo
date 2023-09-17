import { View, Image, ImageProps } from 'react-native';

type EmojiStickerProps = {
  imageSize: number;
  stickerSource: ImageProps;
};

export default function EmojiSticker({
  imageSize,
  stickerSource,
}: EmojiStickerProps) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ height: imageSize, width: imageSize }}
      />
    </View>
  );
}
