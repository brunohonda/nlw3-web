import Leaflet from 'leaflet';

import mapMarker from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [ 42, 52 ],
    iconAnchor: [ 21, 52 ],
    popupAnchor: [ 170, 10 ]
});

export default mapIcon;