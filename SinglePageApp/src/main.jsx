import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
    {/* <Product name='Samsung' price = "500" imgpath="https://images.samsung.com/is/image/samsung/p6pim/in/sm-a376elvhins/gallery/in-galaxy-a-sm-a376elvhins-galaxy-a----g-----gb-memory--awesome-lavender-thumb-551670738?$Q90_330_330_F_PNG$"/>
    <Product name='iPhone' price = "999" imgpath="https://images.samsung.com/is/image/samsung/p6pim/in/sm-a376elvhins/gallery/in-galaxy-a-sm-a376elvhins-galaxy-a----g-----gb-memory--awesome-lavender-thumb-551670738?$Q90_330_330_F_PNG$"/>
    <Product name='Vivo' price= "300" imgpath="https://images.samsung.com/is/image/samsung/p6pim/in/sm-a376elvhins/gallery/in-galaxy-a-sm-a376elvhins-galaxy-a----g-----gb-memory--awesome-lavender-thumb-551670738?$Q90_330_330_F_PNG$"/>
     */}
  </StrictMode>,
)
