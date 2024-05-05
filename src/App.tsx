import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import { useState, useEffect } from 'react';
import { fetchSampleJdJSON } from './utils/apiData';
function App() {

  const [sampleJdJSON, setSampleJdJSON] = useState<string | null>(null);
  useEffect(() => {
      fetchSampleJdJSON().then((data) => {
          setSampleJdJSON(data);
      });
  }, []);
  if (!sampleJdJSON) {
      return <div>Loading...</div>;
  }
  console.log(sampleJdJSON);
  return (
    <>
      <Header />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        padding: '20px'
      
      }}>
      <Card />
      <Card />
      <Card />

      </div>
    </>
  )
}

export default App
