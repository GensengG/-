import Listing from '../components/Listing.tsx';
import etsy from './etsy.json'
import './App.css'

function App() {
  let items:any = etsy;

  return (
      <div>
      <Listing data={items}/>
      </div>
  );
}

export default App
