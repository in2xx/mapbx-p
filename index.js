import { Tile3DLayer } from '../node_modules/@deck.gl/geo-layers/src/index';
import { Tiles3DLoader } from '../node_modules/@loaders.gl/3d-tiles';
import {MapboxLayer} from '../node_modules/@mapbox';
import {Deck} from '../node_modules/@deck.gl/core';

/*
const tile3dLayer = new Tile3DLayer({
    id: 'tile3dlayer',
    pointSize: 1,
    data: 'https://s3-ap-northeast-1.amazonaws.com/3dimension.jp/13000_tokyo-egm96/13101_chiyoda-ku_notexture/tileset.json', // PLATEAU千代田区
    loader: Tiles3DLoader,
    onTilesetLoad: (tileset) => {
        const { cartographicCenter } = tileset;
        const [longitude, latitude] = cartographicCenter;
        console.log(longitude, latitude); // 3dtilesの中心座標を取れるぞ
    },
});
*/

mapboxgl.accessToken = 'pk.eyJ1IjoiaW4ydHdhbiIsImEiOiJja3l6bjJ0ZWIwY2d0Mm5yemZ3NWFmOWhjIn0._B39LsH99PmOk74938_tUg';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/in2twan/ckyzn794b000t14s81978v83n', // style URL
    center: [139.766, 35.682], // starting position [lng, lat]
    zoom: 16 // starting zoom
});