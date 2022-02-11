import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';

import SideNavBar from "./components/sidenavbar";

import Discover from "./pages/discover";

import './css/app.css';
import { theme } from "./colors";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <PageContainer>
                    <ThemeProvider theme={theme} >
                        <SideNavBar {...this.props} />
                        <ContentWrapper>
                            <Switch>
                                <Route path="/discover" component={Discover} {...this.props} />
                            </Switch>
                        </ContentWrapper>
                    </ThemeProvider>
                </PageContainer>
            </Router>
        );
    }
}


const ContentWrapper = styled.main`
  padding-left: 260px;
`

const PageContainer = styled.main`
  overflow-x: hidden;
`
