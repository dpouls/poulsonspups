import './App.css';
import Header from './Components/Header/Header';
import Container from 'react-bootstrap/Container';
import routes from './routes';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
        <Header />
        <main>
        <Container>
          {routes}
        </Container>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
