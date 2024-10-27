import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductScreen from './src/screens/ProductScreen';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Nunito': require('./assets/fonts/Nunito-VariableFont_wght.ttf'),
    'Gloock': require('./assets/fonts/Gloock-Regular.ttf')
  });

  const [category, setCategory] = useState("");
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <>
      <Header />
      {
        productId
        ?
        <ProductScreen productId={productId} setProductId={setProductId}/>
        :
        category
        ?
        <ProductsScreen category={category} setCategory={setCategory} setProductId={setProductId}/>
        : <CategoriesScreen setCategory={setCategory} />
      }
      <StatusBar style="auto" />
    </>
  );
}

