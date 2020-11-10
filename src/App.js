import { GlobalStyle } from "./globalStyles";
import LandingPage from "./pages/landing.component";
import CVPage from "./pages/cv.component";
import { Route, Switch, Redirect } from "react-router-dom";
import Contact from "./pages/contact.component";
import NotFound from "./pages/notFound.component";
import Portfolio from "./pages/portfolio.component";
import Footer from "./components/footer.component";
import styled from "styled-components";
import { Wrapper } from "./styles";

function App() {
  return (
    <AppDiv>
      <GlobalStyle />

      <Wrapper>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/cv" exact component={CVPage} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </Wrapper>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  overflow: auto;
`;

export default App;
