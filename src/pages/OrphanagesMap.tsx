import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';
import mapMarker from '../images/map-marker.svg';

export default function OrphanagesMap() {
    return (
      <div id="page-orphanages-map">
        <aside>
          <header>
            <img src={mapMarker} alt="Happy" />

            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </header>

          <footer>
            <strong>Poços de Caldas</strong>
            <span>Minas Gerais</span>
          </footer>
        </aside>

        <Map
          center={[ -21.7881989, -46.5637851 ]}
          zoom={15}
          style={{ width: '100%', height: '100%' }}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
        </Map>

        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#ffffff" />
        </Link>
      </div>
    );
}