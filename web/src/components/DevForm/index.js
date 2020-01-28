import React, {useState, useEffect} from 'react';

function DevForm({onSubmit}) {
  const [github_username, setGithubUsername] = useState ('');
  const [techs, setTechs] = useState (''); 
  const [latitude, setLatitude] = useState ('');
  const [longitude, setLongitude] = useState (''); 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(  
    (position) => {
      const { latitude, longitude } = position.coords;

      setLatitude(latitude);
      setLongitude(longitude);
    },
    (err) => {
      console.log(err)
    },
    {
     timeout: 30000, 
    }
    )
  }, []);

  async function handleSubmit(e){
      e.preventDefault();

      await onSubmit({
        github_username,
        techs,
        latitude,
        longitude,
      });
      setGithubUsername('')
      setTechs('')
  }
    return (
        <form onSubmit={handleSubmit} >
            <div className="input-block" >
                <label htmlFor="github_username">Usuário do Github</label>
                <input
                    nome="github_username"
                    id="github_username"
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)}
                    required
                ></input>
            </div>

            <div className="input-block" >
                <label htmlFor="techs">Tecnologias</label>
                <input
                    nome="techs"
                    id="techs"
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                    required
                ></input>
            </div>

            <div className="input-group">
                <div className="input-block" >
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        type="number"
                        nome="latitude"
                        id="latitude"
                        required
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                    ></input>
                </div>



                <div className="input-block" >
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="number"
                        nome="longitude"
                        id="longitude"
                        required
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    ></input>
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    )
}
export default DevForm;