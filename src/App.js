import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import ContactUs from './pages/ContactUS/ContactUs';
import Signup from './pages/SignUp/Signup';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Home from './pages/Home/Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import Admin from './Admin/Admin/Admin';
import CustomerDashboard from './CustomerDashboard/CustomerDashboard';
import AdminPrivateRoute from './AdminPrivateRoute/AdminPrivateRoute';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import Blogs from './pages/Blogs/Blogs';



function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/customerDashboard">
              <CustomerDashboard></CustomerDashboard>
            </PrivateRoute>

            <AdminPrivateRoute exact path="/admin">
              <Admin></Admin>

            </AdminPrivateRoute>
            <Route exact path="/blogs">
              <Blogs></Blogs>
            </Route>
            <PrivateRoute path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
