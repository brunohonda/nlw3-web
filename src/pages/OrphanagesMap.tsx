import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';
import mapMarker from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,
  iconSize: [ 42, 52 ],
  iconAnchor: [ 21, 52 ],
  popupAnchor: [ 170, 10 ]
})

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
          <Marker
            icon={mapIcon}
            position={[ -21.7881989, -46.5637851 ]}
          >
            <Popup
              className="map-popup"
              closeButton={false}
              minWidth={240}
              maxWidth={240}
            >
              Lar das Meninas
              <Link to="">
                <FiArrowRight size={20} color="#ffffff" />
              </Link>
            </Popup>
          </Marker>
        </Map>

        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#ffffff" />
        </Link>
      </div>
    );
}