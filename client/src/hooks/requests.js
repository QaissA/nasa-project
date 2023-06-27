const apiUrl = 'http://localhost:8000/v1';

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  const response = await fetch(`${apiUrl}/planets`);
  return await response.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.

  const response = await fetch(`${apiUrl}/launches`);
  const fetchedLaunches =  await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  })
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
try {
  return await fetch(`${apiUrl}/launches`, {
    method : 'POST',
    headers :  {
      "content-Type" : "application/json",
    },
    body : JSON.stringify(launch),
  })

}catch(error)
{
  return {
    ok : false,
  }
}
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try{
    return await fetch(`${apiUrl}/launches/${id}`,{
      method : 'DELETE',
      headers : {},
  
    })  
  }catch(err){
    return {
      ok : false,
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};