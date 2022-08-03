import React, { useState } from 'react';
import Footer from './components/pages/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/pages/Header';
import Homes from "./components/pages/Homes"

import Upcoming from "./components/pages/Upcoming"
import Uptrending from './components/pages/Uptrending';
import Singlepage from './components/pages/Singlepage';
import { upcome, uptrending } from './Data';

const App = () => {
  const [items,setItems]=useState(upcome);
  const [trenditems ,setTrend]=useState(uptrending);
  return (

<>


<BrowserRouter>
  <Header />
   <Switch>
   <Route exact path='/' component={Homes} />
   <Route path='/singlepage/:id' component={Singlepage} exact />
  </Switch>
   
 
   </BrowserRouter>
<Upcoming items={items}  Title="Upcoming videos" />
<Uptrending items={trenditems} title="Trending Videos" />
<Footer />

</>

  )
}

export default App
