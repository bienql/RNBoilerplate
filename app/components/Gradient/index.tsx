import React from 'react';
import { View } from 'react-native';
import { Props } from './props';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const Gradient: React.FC<Props> = ({ type = 'primary', width, height, children }) => {
  return (
    <MaskedView maskElement={children}>
      {type === 'primary' ? (
        <LinearGradient
          colors={['#E7498E', '#F27141']}
          // start={{x: 0.25, y: 0.5}}
          // end={{x: 0.75, y: 0.5}}
          useAngle
          angle={136.29}
          style={{ width, height }}
          locations={[0.0198, 0.7587]}>
          <View style={{ width, height, opacity: 0 }}>
            {(width === undefined || height === undefined) && children}
          </View>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['#A90069', '#EC008C']}
          // start={{x: 0.25, y: 0.5}}
          // end={{x: 0.75, y: 0.5}}
          useAngle
          angle={136.29}
          locations={[0, 1]}
          style={{ width, height }}>
          <View style={{ width, height, opacity: 0 }}>
            {(width === undefined || height === undefined) && children}
          </View>
        </LinearGradient>
      )}
    </MaskedView>
  );
};

export default Gradient;
