import axios from 'axios';
import { useEffect } from 'react';
import useStore from '../createStore';

const Map = () => {
    const { map, setMap } = useStore();

    useEffect(() => {
        axios.get('https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js')
            .then((response) => {
                setMap(response.data);
            });
    }, []);

    return (
        <div>
            {map ? <div><map /></div> : <div>bruh</div>}

        </div>
    );
}

export default Map;
