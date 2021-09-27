import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export function useOrientation(){
  const [orientation, setOrientation] = useState("PORTRAIT");
 
  useEffect(() => {
    let isMounted = true;
    Dimensions.addEventListener('change', ({window:{width,height}})=>{
      if (width<height && isMounted) {
        setOrientation("PORTRAIT")
        Dimensions.removeEventListener('change', ({window:{width,height}}))
      } else if (isMounted){
        setOrientation("LANDSCAPE")
        Dimensions.removeEventListener('change', ({window:{width,height}}))
      }
    })
    return () => { isMounted = false };
  }, []);

  return orientation;
}