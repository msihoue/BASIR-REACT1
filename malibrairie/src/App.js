import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/homeScreen/HomeScreen';
import ProductScreen from './screens/productScreen/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/cartScreen/CartScreen';
import SigninScreen from './screens/signin/SigninScreen';
import ShippingAddressScreen from './screens/shippingAddress/ShippingAddressScreen';
import SignupScreen from './screens/signup/SignupScreen';
import PaymentMethodScreen from './screens/paymentMethod/PaymentMethodScreen';
import PlaceOrderScreen from './screens/placeOrder/PlaceOrderScreen';
import OrderScreen from './screens/orderScreen/OrderScreen';
import OrderHistoryScreen from './screens/orderHistory/OrderHistoryScreen';

import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;

    const signoutHandler = () => {
        ctxDispatch({ type: 'USER_SIGNOUT' });
        localStorage.removeItem('userInfo');
        localStorage.removeItem('shippingAddress');
        localStorage.removeItem('paymentMethod');
    };

    return (
        <BrowserRouter>
            <div className="d-flex flex-column site_container">
                <ToastContainer position="bottom-center" limit={1} />
                <header>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Container>
                            <LinkContainer to="/">
                                <Navbar.Brand>MALIBRAIRIE</Navbar.Brand>
                            </LinkContainer>
                            <Nav className="me-auto">
                                <Link to="/cart" className="nav-link">
                                    Cart
                                    {cart.cartItems.length > 0 && (
                                        <Badge pill bg="danger">
                                            {cart.cartItems.reduce(
                                                (a, c) => a + c.quantity,
                                                0,
                                            )}
                                        </Badge>
                                    )}
                                </Link>
                                {userInfo ? (
                                    <NavDropdown
                                        title={userInfo.name}
                                        id="basic-nav-dropdown">
                                        <LinkContainer to="/profile">
                                            <NavDropdown.Item>
                                                User Profile
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/orderhistory">
                                            <NavDropdown.Item>
                                                Order History
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Divider />
                                        <Link
                                            className="dropdown-item"
                                            to="#signout"
                                            onClick={signoutHandler}>
                                            Sign Out
                                        </Link>
                                    </NavDropdown>
                                ) : (
                                    <Link className="nav-link" to="/signin">
                                        Sign In
                                    </Link>
                                )}
                            </Nav>
                        </Container>
                    </Navbar>
                </header>
                <main>
                    <Container className="mt-3">
                        <Routes>
                            <Route
                                path="/product/:slug"
                                element={<ProductScreen />}
                            />
                            <Route path="/cart" element={<CartScreen />} />
                            <Route path="/signin" element={<SigninScreen />} />
                            <Route path="/signup" element={<SignupScreen />} />
                            <Route path="/" element={<HomeScreen />} />
                            <Route
                                path="/shipping"
                                element={<ShippingAddressScreen />}></Route>
                            <Route
                                path="/payment"
                                element={<PaymentMethodScreen />}></Route>
                            <Route
                                path="/placeorder"
                                element={<PlaceOrderScreen />}
                            />
                            <Route
                                path="/order/:id"
                                element={<OrderScreen />}></Route>
                            <Route
                                path="/orderhistory"
                                element={<OrderHistoryScreen />}></Route>
                        </Routes>
                    </Container>
                </main>
                <footer className="text-center">all rights reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
