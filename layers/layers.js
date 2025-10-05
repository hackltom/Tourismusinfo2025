ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31256").setExtent([-392685.916857, 160188.450011, 122083.360276, 430777.851363]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NaturerlebnisseErgnzung1_1 = new ol.format.GeoJSON();
var features_NaturerlebnisseErgnzung1_1 = format_NaturerlebnisseErgnzung1_1.readFeatures(json_NaturerlebnisseErgnzung1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_NaturerlebnisseErgnzung1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturerlebnisseErgnzung1_1.addFeatures(features_NaturerlebnisseErgnzung1_1);
var lyr_NaturerlebnisseErgnzung1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturerlebnisseErgnzung1_1, 
                style: style_NaturerlebnisseErgnzung1_1,
                popuplayertitle: 'Naturerlebnisse Ergänzung1',
                interactive: true,
                title: '<img src="styles/legend/NaturerlebnisseErgnzung1_1.png" /> Naturerlebnisse Ergänzung1'
            });
var group_EUROPAallgemein = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EUROPA allgemein'});
var group_STERREICH = new ol.layer.Group({
                                layers: [lyr_NaturerlebnisseErgnzung1_1,],
                                fold: 'open',
                                title: 'ÖSTERREICH'});
var group_REGIONSEBENE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'REGIONSEBENE'});
var group_BADEPLTZE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'BADEPLÄTZE'});
var group_NATURBELASSENEGEBIETEsterreich = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'NATURBELASSENE GEBIETE - Österreich'});
var group_sterreichUnitedKingdomIrland1 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Österreich, United Kingdom, Irland1'});
var group_sterreichUnitedKingdomIrland = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Österreich, United Kingdom, Irland'});
var group_TSCHECHIEN = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'TSCHECHIEN'});
var group_AUSSERHALBEUROPAS = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'AUSSERHALB EUROPAS'});
var group_NATIONSEBENE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'NATIONSEBENE'});
var group_GRENZENundREGIONEN = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'GRENZEN und REGIONEN'});
var group_ProvinzgrenzenEuropa = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Provinzgrenzen Europa'});
var group_Alpen = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Alpen'});
var group_austria_100_tourism_spots = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'austria_100_tourism_spots'});
var group_Kroatienneu = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Kroatien neu'});

lyr_OpenStreetMap_0.setVisible(true);lyr_NaturerlebnisseErgnzung1_1.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,group_STERREICH];
lyr_NaturerlebnisseErgnzung1_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Bild': 'Bild', 'Kategorie': 'Kategorie', 'feeling': 'feeling', 'BewGoog': 'BewGoog', 'Beschreibu': 'Beschreibu', 'Bedeutung': 'Bedeutung', 'gesehen_j_': 'gesehen_j_', });
lyr_NaturerlebnisseErgnzung1_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Bild': 'TextEdit', 'Kategorie': 'TextEdit', 'feeling': 'TextEdit', 'BewGoog': 'TextEdit', 'Beschreibu': 'TextEdit', 'Bedeutung': 'TextEdit', 'gesehen_j_': 'TextEdit', });
lyr_NaturerlebnisseErgnzung1_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'Bild': 'no label', 'Kategorie': 'no label', 'feeling': 'no label', 'BewGoog': 'no label', 'Beschreibu': 'no label', 'Bedeutung': 'no label', 'gesehen_j_': 'no label', });
lyr_NaturerlebnisseErgnzung1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});