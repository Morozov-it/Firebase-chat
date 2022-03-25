import './App.css';
import { Layout } from 'antd';
import AppRouter from 'components/AppRouter';
import Navbar from 'components/Navbar';



const App = () => {
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
