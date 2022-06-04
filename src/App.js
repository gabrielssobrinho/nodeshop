import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className = 'App'>
      <Header />
      <Nav />
      <Main />
      <Section />
      <Footer />
    </div>
  );
}