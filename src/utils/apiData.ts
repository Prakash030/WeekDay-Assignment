export const fetchSampleJdJSON = async (limit: number) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const body = JSON.stringify({
      limit: limit,
      offset: 0
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };
  
    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.text();
      return JSON.parse(result);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch sample JD JSON.");
    }
  };
  