var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_basins_rivers_0 = new ol.format.GeoJSON();
var features_basins_rivers_0 = format_basins_rivers_0.readFeatures(json_basins_rivers_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basins_rivers_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_basins_rivers_0.addFeatures(features_basins_rivers_0);var lyr_basins_rivers_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_basins_rivers_0, 
                style: style_basins_rivers_0,
                title: '<img src="styles/legend/basins_rivers_0.png" /> basins_rivers'
            });var format_basins_lakes_1 = new ol.format.GeoJSON();
var features_basins_lakes_1 = format_basins_lakes_1.readFeatures(json_basins_lakes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basins_lakes_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_basins_lakes_1.addFeatures(features_basins_lakes_1);var lyr_basins_lakes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_basins_lakes_1, 
                style: style_basins_lakes_1,
                title: '<img src="styles/legend/basins_lakes_1.png" /> basins_lakes'
            });var format_hydro_lines_2 = new ol.format.GeoJSON();
var features_hydro_lines_2 = format_hydro_lines_2.readFeatures(json_hydro_lines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hydro_lines_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_hydro_lines_2.addFeatures(features_hydro_lines_2);var lyr_hydro_lines_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hydro_lines_2, 
                style: style_hydro_lines_2,
                title: '<img src="styles/legend/hydro_lines_2.png" /> hydro_lines'
            });var format_hydro_polygons_3 = new ol.format.GeoJSON();
var features_hydro_polygons_3 = format_hydro_polygons_3.readFeatures(json_hydro_polygons_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hydro_polygons_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_hydro_polygons_3.addFeatures(features_hydro_polygons_3);var lyr_hydro_polygons_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hydro_polygons_3, 
                style: style_hydro_polygons_3,
                title: '<img src="styles/legend/hydro_polygons_3.png" /> hydro_polygons'
            });

lyr_basins_rivers_0.setVisible(true);lyr_basins_lakes_1.setVisible(true);lyr_hydro_lines_2.setVisible(true);lyr_hydro_polygons_3.setVisible(true);
var layersList = [baseLayer,lyr_basins_rivers_0,lyr_basins_lakes_1,lyr_hydro_lines_2,lyr_hydro_polygons_3];
lyr_basins_rivers_0.set('fieldAliases', {'NAME': 'NAME', 'area_sqkm': 'area_sqkm', });
lyr_basins_lakes_1.set('fieldAliases', {'NAME': 'NAME', 'area_sqkm': 'area_sqkm', });
lyr_hydro_lines_2.set('fieldAliases', {'NAME': 'NAME', });
lyr_hydro_polygons_3.set('fieldAliases', {'NAME': 'NAME', });
lyr_basins_rivers_0.set('fieldImages', {'NAME': 'TextEdit', 'area_sqkm': 'TextEdit', });
lyr_basins_lakes_1.set('fieldImages', {'NAME': 'TextEdit', 'area_sqkm': 'TextEdit', });
lyr_hydro_lines_2.set('fieldImages', {'NAME': 'TextEdit', });
lyr_hydro_polygons_3.set('fieldImages', {'NAME': 'TextEdit', });
lyr_basins_rivers_0.set('fieldLabels', {'NAME': 'inline label', 'area_sqkm': 'inline label', });
lyr_basins_lakes_1.set('fieldLabels', {'NAME': 'inline label', 'area_sqkm': 'inline label', });
lyr_hydro_lines_2.set('fieldLabels', {'NAME': 'no label', });
lyr_hydro_polygons_3.set('fieldLabels', {'NAME': 'no label', });
lyr_hydro_polygons_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});