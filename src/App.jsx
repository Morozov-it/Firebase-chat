import { useState } from 'react';
import './App.css';
import { Layout } from 'antd';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';



const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Layout style={{height: '100%'}}>
      <Navbar {...{isAuth, setIsAuth}} />
      <Layout.Content style={{flex:'1 1 auto'}}>
        <AppRouter isAuth={isAuth} />
      </Layout.Content>
      <Layout.Footer style={{textAlign: 'center'}}>@footer. The most important information</Layout.Footer>
    </Layout>
  );
}

export default App;
