import logo from './logo.svg';
import './App.css';
import Category from './components/views/category';
import Product from './components/views/product';
import Header from './components/layouts/header';
import BreadCumbs from './components/layouts/breadcumbs';
import Hero from './components/layouts/hero';
import Sidebar from './components/layouts/sidebar';
import Footer from './components/layouts/footer';
function App() {
  return (
    <div>
    <Header/>
    <Hero/>
    <BreadCumbs/>
    <Sidebar/>
    <Footer/>
    </div>
  );
}

export default App;
