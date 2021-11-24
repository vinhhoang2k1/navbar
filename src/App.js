import {Switch,Routes, Route } from 'react-router-dom';
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import CTAPage from "./pages/CTAPage";
import LayOut from './components/LayOut';
import "./style/style.scss";

import Home from "./pages/Home";

function App() {
  return (
       <LayOut>
            <Routes>
                <Route path="/" element={<Home />}>
                    
                </Route>
                <Route path="/page-one" element={<Page1 />}>
                    
                </Route>
                <Route path="/page-two" element={<Page2 />}>
                    
                </Route>
                <Route path="/page-three" element={ <Page3 />}>
                   
                </Route>
                <Route path="/page-cta"  element={<CTAPage />}>
                    
                </Route>
            </Routes>
        </LayOut>
    
  );
}

export default App;
