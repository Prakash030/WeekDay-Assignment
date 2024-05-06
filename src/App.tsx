import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { useState, useEffect, useRef } from 'react';
import { fetchSampleJdJSON } from './utils/apiData';
import './App.css';
import { InfinitySpin } from 'react-loader-spinner'
import noData from './assets/noData.png'

function App() {
  const [sampleJdJSON, setSampleJdJSON] = useState<string[] | null>(null);
  const [limit, setLimit] = useState<number>(9);
  const [loading, setLoading] = useState<boolean>(false);
  const bottomCardRef = useRef<HTMLDivElement>(null);
  const [minExp, setMinExp] = useState<number>(1);
  const [minPay, setMinPay] = useState<number | null>(null);
  const [companyName, setCompanyName] = useState<string>('');
  const [remote, setRemote] = useState<string>('');
  const [locationArray, setLocationArray] = useState<string[]>([]);
  const [location, setLocation] = useState<string>('');
  const [roles, setRoles] = useState<string[]>([]);


  useEffect(() => {
    setLoading(true);
    fetchSampleJdJSON(limit).then((data) => {
      setSampleJdJSON((prevData) => {
        if (prevData) {
          return [...prevData, ...data.jdList];
        } else {
          return data.jdList;
        }
      });
      const uniqueLocations: string[] = Array.from(new Set(data.jdList.map((job) => job.location)));
      setLocationArray(uniqueLocations);
      setLoading(false);
    });
  }, [limit]);

  useEffect(() => {
    function handleScroll() {
      if (loading || sampleJdJSON === null || bottomCardRef.current === null) return;
      const bottomCardRect = bottomCardRef.current.getBoundingClientRect();
      if (bottomCardRect.top <= window.innerHeight) {
        setLimit((prevLimit) => prevLimit + 9);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, sampleJdJSON]);

  if (!sampleJdJSON) {
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    
    }}><InfinitySpin
      width="200"
      color="#4943da"
    />;
    </ div>
  }
  console.log("sampleJdJSON", locationArray);
  // Inside the filter function
  const filteredData = sampleJdJSON.filter((job) => {
    const experienceValid = parseInt(job?.minExp) >= minExp;
    const payValid = parseInt(job?.minJdSalary) >= minPay;
    const companyValid = job?.companyName.toLowerCase().startsWith(companyName.toLowerCase());
    const remoteValid = job?.location.toLowerCase().startsWith(remote.toLowerCase());
    const remoteValidOnsite = !job?.location.toLowerCase().startsWith('remote');
    const locationValid = job?.location.toLowerCase().startsWith(location.toLowerCase());
    const rolesValid = roles.length === 0 || roles.includes(job?.jobRole.toLowerCase());


    if (remote === 'remote') {
      return experienceValid && payValid && companyValid && remoteValid && rolesValid;
    } else if (remote === 'onsite') {
      return experienceValid && payValid && companyValid && remoteValidOnsite && locationValid && rolesValid;
    }
    else {
      return experienceValid && payValid && companyValid && locationValid && rolesValid;
    }
  });

  console.log("minExp", filteredData)

  return (
    <>
      <Header minExp={minExp}
        setMinExp={setMinExp}
        minPay={minPay}
        setMinPay={setMinPay}
        companyName={companyName}
        setCompanyName={setCompanyName}
        setRemote={setRemote}
        remote={remote}
        locationArray={locationArray}
        setLocation={setLocation}
        location={location}
        roles={roles}
        setRoles={setRoles}
      />
      {filteredData.length>0 ? (<div className="cardContainer">
        {filteredData.map((cardObject, index) => (
          <Card key={index} cardObject={cardObject} />
        ))}
        <div ref={bottomCardRef} style={{ height: '10px' }}></div>
      </div>):(
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5rem',
          padding: '20px',
          gap: '20px'
        }}>
          <img src={noData} alt="" height={100} />
          <p>No Jobs available for this category at the moment</p>
        </div>
      )}
    </>
  );
}

export default App;
