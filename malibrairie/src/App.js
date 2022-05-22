import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/Header';
import HomeScreen from './screens/homeScreen/HomeScreen';
import ProductScreen from './screens/productScreen/ProductScreen';

function App() {
    return (
        <BrowserRouter>
            <>
                <header>
                    <Link to="/">
                        <h1>Malibrairie</h1>
                    </Link>
                </header>
                <Routes>
                    <Route path="/:slug" element={<ProductScreen />} />
                    <Route path="/" element={<HomeScreen />} />
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default App;
