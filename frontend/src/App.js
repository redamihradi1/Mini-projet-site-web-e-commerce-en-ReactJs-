import {Container} from 'react-bootstrap'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import login from './screens/login'
import {Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header />
       
        <main className="py-3">
            <Container>
              <Route path='/' component={HomeScreen} exact/>
              <Route path='/product/:id' component={ProductScreen} exact />
              <Route path='/login/' component={login} exact />
            </Container>
        </main>
        
        <Footer />
        </Router>
    </div>
  );
}

export default App;
