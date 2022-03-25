import './App.css';
import { Layout } from 'antd';
import AppRouter from 'components/AppRouter';
import Navbar from 'components/Navbar';
import { useEffect } from 'react';
import { useData } from 'Context';
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { routes } from 'routes';



const App = () => {
  const navigate = useNavigate()
  const { auth, changeUser } = useData()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        changeUser(user)
        navigate(routes.CHAT)
      } else {
        console.log('not authotized')
        // navigate(routes.LOGIN)
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
