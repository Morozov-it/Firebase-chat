import './App.css';
import { Layout } from 'antd';
import AppRouter from 'components/AppRouter';
import Navbar from 'components/Navbar';
import { useEffect } from 'react';
import { useData } from 'Context';
import { onAuthStateChanged } from "firebase/auth";



const App = () => {
  const { auth, changeUser } = useData()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        changeUser(user)
      } else {
        console.log('not authorized')
      }
    })
  }, [])

  return (
    <Layout style={{height: '100%'}}>
      <Navbar />
      <Layout.Content style={{flex:'1 1 auto'}}>
        <AppRouter />
      </Layout.Content>
      <Layout.Footer style={{textAlign: 'center'}}>@footer. The most important information</Layout.Footer>
    </Layout>
  );
}

export default App;
