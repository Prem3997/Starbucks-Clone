import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import Header from './components/header/Header';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import { Footer } from './components/footer/Footer';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import "./App.css"
import useAuthListener from './hooks/use-AuthListener';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import * as ROUTES from './constants/routes'
import SignUpScreen from './pages/SignUpScreen/SignUpScreen';
import MenuScreen from './pages/MenuScreen/MenuScreen';
import FeaturedScreen from './pages/FeaturedScreen/FeaturedScreen';
import MenuHeader from './components/menu/MenuHeader';
import TodaysSplScreen from './pages/TodaysSplScreen/TodaysSplScreen';
import RewardsScreen from './pages/RewardsScreen/RewardsScreen';
import GiftCardsScreen from './pages/GiftCardsScreen/GiftCardsScreen';
import StoreLocatorScreen from './pages/StoreLocatorScreen/StoreLocatorScreen';
function App() {
  const user = useAuthListener()

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            exact
            path={ROUTES.HOME_PAGE}
          >
            <Header />
            <HomeScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route
            exact
            path={ROUTES.REWARDS_PAGE}
          >
            <Header fixHeader />
            <MenuHeader rewardsPage />
            <RewardsScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route
            exact
            path={ROUTES.GIFT_CARDS_PAGE}
          >
            <Header />
            <GiftCardsScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route
            exact
            path={ROUTES.FIND_STORE}
          >
            <Header />
            <StoreLocatorScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.MENU_PAGE}
            path={ROUTES.SIGN_IN}
            exact
          >
            <LoginScreen />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.MENU_PAGE}
            path={ROUTES.SIGN_UP}
            exact
          >
            <SignUpScreen />
          </IsUserRedirect>
          <ProtectedRoute
            user={user}
            path={ROUTES.MENU_PAGE}
            exact
          >
            <>
              <Header fixHeader />
              <MenuHeader />
              <MenuScreen />
              <Fade>
                <Footer />
              </Fade>
            </>
          </ProtectedRoute>
          <ProtectedRoute
            user={user}
            path={ROUTES.MENU_FEATURED_PAGE}
            exact
          >
            <Header fixHeader />
            <MenuHeader />
            <FeaturedScreen />
            <Fade>
              <Footer />
            </Fade>
          </ProtectedRoute>
          <ProtectedRoute
            user={user}
            path={ROUTES.MENU_TODAYSPL_PAGE}
            exact
          >
            <Header fixHeader />
            <MenuHeader />
            <TodaysSplScreen />
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
