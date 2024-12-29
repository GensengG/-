// import { useState } from 'react'
// import Stars from '../components/Stars.tsx'
// import { Star } from '../components/Star.tsx'

import Listing from '../components/Listing.tsx';
import etsy from './etsy.json'
import './App.css'

function App() {
  let items:any = etsy;

  return (
      <div>
      <Listing data={items}/>
      {/* {console.log(items)} */}
      </div>
  );
}

export default App