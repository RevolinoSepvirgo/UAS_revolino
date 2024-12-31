ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11174047.598833, -106562.660947, 11174151.627628, -106482.870599]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_tanah_1 = new ol.format.GeoJSON();
var features_tanah_1 = format_tanah_1.readFeatures(json_tanah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tanah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tanah_1.addFeatures(features_tanah_1);
var lyr_tanah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tanah_1, 
                style: style_tanah_1,
                popuplayertitle: 'tanah',
                interactive: true,
                title: '<img src="styles/legend/tanah_1.png" /> tanah'
            });
var format_perum_2 = new ol.format.GeoJSON();
var features_perum_2 = format_perum_2.readFeatures(json_perum_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perum_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perum_2.addFeatures(features_perum_2);
var lyr_perum_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perum_2, 
                style: style_perum_2,
                popuplayertitle: 'perum',
                interactive: true,
                title: '<img src="styles/legend/perum_2.png" /> perum'
            });
var format_jalan_3 = new ol.format.GeoJSON();
var features_jalan_3 = format_jalan_3.readFeatures(json_jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_3.addFeatures(features_jalan_3);
var lyr_jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_3, 
                style: style_jalan_3,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_3.png" /> jalan'
            });
var format_perumahan1_4 = new ol.format.GeoJSON();
var features_perumahan1_4 = format_perumahan1_4.readFeatures(json_perumahan1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perumahan1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perumahan1_4.addFeatures(features_perumahan1_4);
var lyr_perumahan1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perumahan1_4, 
                style: style_perumahan1_4,
                popuplayertitle: 'perumahan 1',
                interactive: true,
                title: '<img src="styles/legend/perumahan1_4.png" /> perumahan 1'
            });
var format_musholla_5 = new ol.format.GeoJSON();
var features_musholla_5 = format_musholla_5.readFeatures(json_musholla_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_musholla_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_musholla_5.addFeatures(features_musholla_5);
var lyr_musholla_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_musholla_5, 
                style: style_musholla_5,
                popuplayertitle: 'musholla',
                interactive: true,
                title: '<img src="styles/legend/musholla_5.png" /> musholla'
            });
var format_taman_6 = new ol.format.GeoJSON();
var features_taman_6 = format_taman_6.readFeatures(json_taman_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_taman_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_taman_6.addFeatures(features_taman_6);
var lyr_taman_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_taman_6, 
                style: style_taman_6,
                popuplayertitle: 'taman',
                interactive: true,
                title: '<img src="styles/legend/taman_6.png" /> taman'
            });
var format_Lapangan_7 = new ol.format.GeoJSON();
var features_Lapangan_7 = format_Lapangan_7.readFeatures(json_Lapangan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_7.addFeatures(features_Lapangan_7);
var lyr_Lapangan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_7, 
                style: style_Lapangan_7,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_7.png" /> Lapangan'
            });
var format_possatpam_8 = new ol.format.GeoJSON();
var features_possatpam_8 = format_possatpam_8.readFeatures(json_possatpam_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_possatpam_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_possatpam_8.addFeatures(features_possatpam_8);
var lyr_possatpam_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_possatpam_8, 
                style: style_possatpam_8,
                popuplayertitle: 'pos satpam',
                interactive: true,
                title: '<img src="styles/legend/possatpam_8.png" /> pos satpam'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_tanah_1.setVisible(true);lyr_perum_2.setVisible(true);lyr_jalan_3.setVisible(true);lyr_perumahan1_4.setVisible(true);lyr_musholla_5.setVisible(true);lyr_taman_6.setVisible(true);lyr_Lapangan_7.setVisible(true);lyr_possatpam_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_tanah_1,lyr_perum_2,lyr_jalan_3,lyr_perumahan1_4,lyr_musholla_5,lyr_taman_6,lyr_Lapangan_7,lyr_possatpam_8];
lyr_tanah_1.set('fieldAliases', {'id': 'id', });
lyr_perum_2.set('fieldAliases', {'id': 'id', });
lyr_jalan_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjang': 'panjang', });
lyr_perumahan1_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'kode': 'kode', 'luas': 'luas', 'tipe': 'tipe', 'Status': 'Status', });
lyr_musholla_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_taman_6.set('fieldAliases', {'id': 'id', });
lyr_Lapangan_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_possatpam_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_tanah_1.set('fieldImages', {'id': 'TextEdit', });
lyr_perum_2.set('fieldImages', {'id': '', });
lyr_jalan_3.set('fieldImages', {'id': 'TextEdit', 'nama': '', 'panjang': '', });
lyr_perumahan1_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'kode': 'TextEdit', 'luas': 'TextEdit', 'tipe': 'TextEdit', 'Status': 'TextEdit', });
lyr_musholla_5.set('fieldImages', {'id': '', 'nama': '', });
lyr_taman_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Lapangan_7.set('fieldImages', {'id': '', 'nama': '', });
lyr_possatpam_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_tanah_1.set('fieldLabels', {'id': 'no label', });
lyr_perum_2.set('fieldLabels', {'id': 'no label', });
lyr_jalan_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'panjang': 'no label', });
lyr_perumahan1_4.set('fieldLabels', {'id': 'hidden field', 'nama': 'hidden field', 'kode': 'inline label - always visible', 'luas': 'hidden field', 'tipe': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_musholla_5.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_taman_6.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Lapangan_7.set('fieldLabels', {'id': 'no label', 'nama': 'header label - visible with data', });
lyr_possatpam_8.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_possatpam_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});