import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export function useOrientation(){
  const [orientation, setOrientation] = useState("PORTRAIT");
 
  useEffect(() => {
    Dimensions.addEventListener('change', ({window:{width,height}})=>{
      if (width<height) {
        setOrientation("PORTRAIT")
        Dimensions.removeEventListener('change', ({window:{width,height}}))
      } else {
        setOrientation("LANDSCAPE")
        Dimensions.removeEventListener('change', ({window:{width,height}}))
      }
    })

  }, []);

  return orientation;
}