import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Icons from './components/Icons';
import Index from './components/Index';
import Form from './components/Form';
import VerPizza from './components/VerPizza';

function App() {
  return (
    <BrowserRouter>
      <section className="d-flex flex-column">
        <Header/>
        <div className="agrandador">
            <main role="main" className="pb-3">
            <Switch>
              <Route path="/" exact component={Index}/>
              
              <Route path="/EditarPizza/:id" exact >
                <Form isPizza={true} />
              </Route>
              <Route path="/AgregarPizza" exact >
                <Form isPizza={true} />
              </Route>
              <Route path="/AgregarIngrediente" exact >
                <Form isPizza={false} />
              </Route>
              <Route path="/:id" exact component={VerPizza}/>
            </Switch>
            </main>
        </div>
        <Icons/>
        <Footer/>
      </section>
    </BrowserRouter>
  );
}

export default App;
