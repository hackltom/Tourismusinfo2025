ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31256").setExtent([-146990.740429, 204781.583354, 110393.898137, 340076.284030]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sterreichUnitedKingdomIrland_1 = new ol.format.GeoJSON();
var features_sterreichUnitedKingdomIrland_1 = format_sterreichUnitedKingdomIrland_1.readFeatures(json_sterreichUnitedKingdomIrland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_sterreichUnitedKingdomIrland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sterreichUnitedKingdomIrland_1.addFeatures(features_sterreichUnitedKingdomIrland_1);
var lyr_sterreichUnitedKingdomIrland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sterreichUnitedKingdomIrland_1, 
                style: style_sterreichUnitedKingdomIrland_1,
                popuplayertitle: 'Österreich, United Kingdom, Irland',
                interactive: true,
                title: 'Österreich, United Kingdom, Irland'
            });
var format_sterreichUnitedKingdomIrland_2 = new ol.format.GeoJSON();
var features_sterreichUnitedKingdomIrland_2 = format_sterreichUnitedKingdomIrland_2.readFeatures(json_sterreichUnitedKingdomIrland_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_sterreichUnitedKingdomIrland_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sterreichUnitedKingdomIrland_2.addFeatures(features_sterreichUnitedKingdomIrland_2);
var lyr_sterreichUnitedKingdomIrland_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sterreichUnitedKingdomIrland_2, 
                style: style_sterreichUnitedKingdomIrland_2,
                popuplayertitle: 'Österreich, United Kingdom, Irland',
                interactive: true,
                title: 'Österreich, United Kingdom, Irland'
            });
var format_sterreichUnitedKingdomIrland_3 = new ol.format.GeoJSON();
var features_sterreichUnitedKingdomIrland_3 = format_sterreichUnitedKingdomIrland_3.readFeatures(json_sterreichUnitedKingdomIrland_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_sterreichUnitedKingdomIrland_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sterreichUnitedKingdomIrland_3.addFeatures(features_sterreichUnitedKingdomIrland_3);
var lyr_sterreichUnitedKingdomIrland_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sterreichUnitedKingdomIrland_3, 
                style: style_sterreichUnitedKingdomIrland_3,
                popuplayertitle: 'Österreich, United Kingdom, Irland',
                interactive: true,
                title: 'Österreich, United Kingdom, Irland'
            });
var format_sterreichUnitedKingdomIrland_4 = new ol.format.GeoJSON();
var features_sterreichUnitedKingdomIrland_4 = format_sterreichUnitedKingdomIrland_4.readFeatures(json_sterreichUnitedKingdomIrland_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_sterreichUnitedKingdomIrland_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sterreichUnitedKingdomIrland_4.addFeatures(features_sterreichUnitedKingdomIrland_4);
var lyr_sterreichUnitedKingdomIrland_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sterreichUnitedKingdomIrland_4, 
                style: style_sterreichUnitedKingdomIrland_4,
                popuplayertitle: 'Österreich, United Kingdom, Irland',
                interactive: true,
                title: 'Österreich, United Kingdom, Irland'
            });
var format_NaturbelasseneTeilflchen_5 = new ol.format.GeoJSON();
var features_NaturbelasseneTeilflchen_5 = format_NaturbelasseneTeilflchen_5.readFeatures(json_NaturbelasseneTeilflchen_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_NaturbelasseneTeilflchen_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturbelasseneTeilflchen_5.addFeatures(features_NaturbelasseneTeilflchen_5);
var lyr_NaturbelasseneTeilflchen_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturbelasseneTeilflchen_5, 
                style: style_NaturbelasseneTeilflchen_5,
                popuplayertitle: 'Naturbelassene Teilflächen',
                interactive: true,
                title: '<img src="styles/legend/NaturbelasseneTeilflchen_5.png" /> Naturbelassene Teilflächen'
            });
var format_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6 = new ol.format.GeoJSON();
var features_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6 = format_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6.readFeatures(json_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6.addFeatures(features_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6);
var lyr_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6, 
                style: style_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6,
                popuplayertitle: 'NATURBELASSENE GEBIETE ÖSTERREICH (1) — Schigebiete',
                interactive: true,
                title: '<img src="styles/legend/NATURBELASSENEGEBIETESTERREICH1Schigebiete_6.png" /> NATURBELASSENE GEBIETE ÖSTERREICH (1) — Schigebiete'
            });
var format_Nationalparks_7 = new ol.format.GeoJSON();
var features_Nationalparks_7 = format_Nationalparks_7.readFeatures(json_Nationalparks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_Nationalparks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nationalparks_7.addFeatures(features_Nationalparks_7);
var lyr_Nationalparks_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nationalparks_7, 
                style: style_Nationalparks_7,
                popuplayertitle: 'Nationalparks',
                interactive: true,
                title: '<img src="styles/legend/Nationalparks_7.png" /> Nationalparks'
            });
var format_IUCN4Naturschutzgebiete_8 = new ol.format.GeoJSON();
var features_IUCN4Naturschutzgebiete_8 = format_IUCN4Naturschutzgebiete_8.readFeatures(json_IUCN4Naturschutzgebiete_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_IUCN4Naturschutzgebiete_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUCN4Naturschutzgebiete_8.addFeatures(features_IUCN4Naturschutzgebiete_8);
var lyr_IUCN4Naturschutzgebiete_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUCN4Naturschutzgebiete_8, 
                style: style_IUCN4Naturschutzgebiete_8,
                popuplayertitle: 'IUCN 4 Naturschutzgebiete',
                interactive: true,
                title: '<img src="styles/legend/IUCN4Naturschutzgebiete_8.png" /> IUCN 4 Naturschutzgebiete'
            });
var format_NaturdenkmaleIUCNIII_9 = new ol.format.GeoJSON();
var features_NaturdenkmaleIUCNIII_9 = format_NaturdenkmaleIUCNIII_9.readFeatures(json_NaturdenkmaleIUCNIII_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_NaturdenkmaleIUCNIII_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturdenkmaleIUCNIII_9.addFeatures(features_NaturdenkmaleIUCNIII_9);
var lyr_NaturdenkmaleIUCNIII_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturdenkmaleIUCNIII_9, 
                style: style_NaturdenkmaleIUCNIII_9,
                popuplayertitle: 'Naturdenkmale + IUCN III',
                interactive: true,
                title: '<img src="styles/legend/NaturdenkmaleIUCNIII_9.png" /> Naturdenkmale + IUCN III'
            });
var format_NaturrumlicheBesonderheiten_10 = new ol.format.GeoJSON();
var features_NaturrumlicheBesonderheiten_10 = format_NaturrumlicheBesonderheiten_10.readFeatures(json_NaturrumlicheBesonderheiten_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_NaturrumlicheBesonderheiten_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturrumlicheBesonderheiten_10.addFeatures(features_NaturrumlicheBesonderheiten_10);
var lyr_NaturrumlicheBesonderheiten_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturrumlicheBesonderheiten_10, 
                style: style_NaturrumlicheBesonderheiten_10,
                popuplayertitle: 'Naturräumliche Besonderheiten',
                interactive: true,
                title: '<img src="styles/legend/NaturrumlicheBesonderheiten_10.png" /> Naturräumliche Besonderheiten'
            });
var format_IUCN1bWildnisgebiete_11 = new ol.format.GeoJSON();
var features_IUCN1bWildnisgebiete_11 = format_IUCN1bWildnisgebiete_11.readFeatures(json_IUCN1bWildnisgebiete_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_IUCN1bWildnisgebiete_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUCN1bWildnisgebiete_11.addFeatures(features_IUCN1bWildnisgebiete_11);
var lyr_IUCN1bWildnisgebiete_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUCN1bWildnisgebiete_11, 
                style: style_IUCN1bWildnisgebiete_11,
                popuplayertitle: 'IUCN 1b Wildnisgebiete',
                interactive: true,
                title: '<img src="styles/legend/IUCN1bWildnisgebiete_11.png" /> IUCN 1b Wildnisgebiete'
            });
var format_IUCN1ainklNaturwaldreservate_12 = new ol.format.GeoJSON();
var features_IUCN1ainklNaturwaldreservate_12 = format_IUCN1ainklNaturwaldreservate_12.readFeatures(json_IUCN1ainklNaturwaldreservate_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_IUCN1ainklNaturwaldreservate_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUCN1ainklNaturwaldreservate_12.addFeatures(features_IUCN1ainklNaturwaldreservate_12);
var lyr_IUCN1ainklNaturwaldreservate_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUCN1ainklNaturwaldreservate_12, 
                style: style_IUCN1ainklNaturwaldreservate_12,
                popuplayertitle: 'IUCN 1a inkl Naturwaldreservate',
                interactive: true,
                title: '<img src="styles/legend/IUCN1ainklNaturwaldreservate_12.png" /> IUCN 1a inkl Naturwaldreservate'
            });
var format_RuhigeGebieteinsterreich_13 = new ol.format.GeoJSON();
var features_RuhigeGebieteinsterreich_13 = format_RuhigeGebieteinsterreich_13.readFeatures(json_RuhigeGebieteinsterreich_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_RuhigeGebieteinsterreich_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuhigeGebieteinsterreich_13.addFeatures(features_RuhigeGebieteinsterreich_13);
cluster_RuhigeGebieteinsterreich_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RuhigeGebieteinsterreich_13
});
var lyr_RuhigeGebieteinsterreich_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RuhigeGebieteinsterreich_13, 
                style: style_RuhigeGebieteinsterreich_13,
                popuplayertitle: 'Ruhige Gebiete in Österreich',
                interactive: true,
                title: '<img src="styles/legend/RuhigeGebieteinsterreich_13.png" /> Ruhige Gebiete in Österreich'
            });
var format_SehenswrdigkeitensterreichNatur_14 = new ol.format.GeoJSON();
var features_SehenswrdigkeitensterreichNatur_14 = format_SehenswrdigkeitensterreichNatur_14.readFeatures(json_SehenswrdigkeitensterreichNatur_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_SehenswrdigkeitensterreichNatur_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SehenswrdigkeitensterreichNatur_14.addFeatures(features_SehenswrdigkeitensterreichNatur_14);
cluster_SehenswrdigkeitensterreichNatur_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_SehenswrdigkeitensterreichNatur_14
});
var lyr_SehenswrdigkeitensterreichNatur_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SehenswrdigkeitensterreichNatur_14, 
                style: style_SehenswrdigkeitensterreichNatur_14,
                popuplayertitle: 'Sehenswürdigkeiten Österreich Natur',
                interactive: true,
    title: 'Sehenswürdigkeiten Österreich Natur<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_14_0.png" /> Berge<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_14_1.png" /> Kulturlandschaft<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_14_2.png" /> Landschaftsenergie und Ausblicke<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_14_3.png" /> Naturerlebnisse<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_14_4.png" /> Unberührte Natur und Wandern<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_14_5.png" /> Wasser - imposant und kühlend<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_14_6.png" /> Wasser - Naturidylle<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_14_7.png" /> Wasser und Erholung<br />' });
var format_NaturerlebnisseErgnzung1_15 = new ol.format.GeoJSON();
var features_NaturerlebnisseErgnzung1_15 = format_NaturerlebnisseErgnzung1_15.readFeatures(json_NaturerlebnisseErgnzung1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_NaturerlebnisseErgnzung1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturerlebnisseErgnzung1_15.addFeatures(features_NaturerlebnisseErgnzung1_15);
var lyr_NaturerlebnisseErgnzung1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturerlebnisseErgnzung1_15, 
                style: style_NaturerlebnisseErgnzung1_15,
                popuplayertitle: 'Naturerlebnisse Ergänzung1',
                interactive: true,
                title: '<img src="styles/legend/NaturerlebnisseErgnzung1_15.png" /> Naturerlebnisse Ergänzung1'
            });
var format_NaturerlebnisseBilder_16 = new ol.format.GeoJSON();
var features_NaturerlebnisseBilder_16 = format_NaturerlebnisseBilder_16.readFeatures(json_NaturerlebnisseBilder_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31256'});
var jsonSource_NaturerlebnisseBilder_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturerlebnisseBilder_16.addFeatures(features_NaturerlebnisseBilder_16);
cluster_NaturerlebnisseBilder_16 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_NaturerlebnisseBilder_16
});
var lyr_NaturerlebnisseBilder_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_NaturerlebnisseBilder_16, 
                style: style_NaturerlebnisseBilder_16,
                popuplayertitle: 'Naturerlebnisse Bilder',
                interactive: true,
                title: '<img src="styles/legend/NaturerlebnisseBilder_16.png" /> Naturerlebnisse Bilder'
            });
var group_EUROPAallgemein = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EUROPA allgemein'});
var group_STERREICH = new ol.layer.Group({
                                layers: [lyr_RuhigeGebieteinsterreich_13,lyr_SehenswrdigkeitensterreichNatur_14,lyr_NaturerlebnisseErgnzung1_15,lyr_NaturerlebnisseBilder_16,],
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
                                layers: [lyr_NaturbelasseneTeilflchen_5,lyr_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6,lyr_Nationalparks_7,lyr_IUCN4Naturschutzgebiete_8,lyr_NaturdenkmaleIUCNIII_9,lyr_NaturrumlicheBesonderheiten_10,lyr_IUCN1bWildnisgebiete_11,lyr_IUCN1ainklNaturwaldreservate_12,],
                                fold: 'open',
                                title: 'NATURBELASSENE GEBIETE - Österreich'});
var group_sterreichUnitedKingdomIrland1 = new ol.layer.Group({
                                layers: [lyr_sterreichUnitedKingdomIrland_4,],
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

lyr_OpenStreetMap_0.setVisible(true);lyr_sterreichUnitedKingdomIrland_1.setVisible(true);lyr_sterreichUnitedKingdomIrland_2.setVisible(true);lyr_sterreichUnitedKingdomIrland_3.setVisible(true);lyr_sterreichUnitedKingdomIrland_4.setVisible(true);lyr_NaturbelasseneTeilflchen_5.setVisible(false);lyr_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6.setVisible(false);lyr_Nationalparks_7.setVisible(false);lyr_IUCN4Naturschutzgebiete_8.setVisible(false);lyr_NaturdenkmaleIUCNIII_9.setVisible(false);lyr_NaturrumlicheBesonderheiten_10.setVisible(false);lyr_IUCN1bWildnisgebiete_11.setVisible(false);lyr_IUCN1ainklNaturwaldreservate_12.setVisible(false);lyr_RuhigeGebieteinsterreich_13.setVisible(false);lyr_SehenswrdigkeitensterreichNatur_14.setVisible(false);lyr_NaturerlebnisseErgnzung1_15.setVisible(false);lyr_NaturerlebnisseBilder_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_sterreichUnitedKingdomIrland_1,lyr_sterreichUnitedKingdomIrland_2,lyr_sterreichUnitedKingdomIrland_3,group_sterreichUnitedKingdomIrland1,group_NATURBELASSENEGEBIETEsterreich,group_STERREICH];
lyr_sterreichUnitedKingdomIrland_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Typ': 'Typ', 'Belastung': 'Belastung', 'Saisonale_Spitze': 'Saisonale_Spitze', 'Anmerkung___Ursache': 'Anmerkung___Ursache', 'Ort': 'Ort', 'Land': 'Land', 'BewAnzahl': 'BewAnzahl', 'GoogleBew': 'GoogleBew', 'Beschreibung': 'Beschreibung', 'Adresse': 'Adresse', 'Kategorie': 'Kategorie', 'Saison': 'Saison', 'Ursachen___Hinweise': 'Ursachen___Hinweise', });
lyr_sterreichUnitedKingdomIrland_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Typ': 'Typ', 'Belastung': 'Belastung', 'Saisonale_Spitze': 'Saisonale_Spitze', 'Anmerkung___Ursache': 'Anmerkung___Ursache', 'Ort': 'Ort', 'Land': 'Land', 'BewAnzahl': 'BewAnzahl', 'GoogleBew': 'GoogleBew', 'Beschreibung': 'Beschreibung', 'Adresse': 'Adresse', 'Kategorie': 'Kategorie', 'Saison': 'Saison', 'Ursachen___Hinweise': 'Ursachen___Hinweise', });
lyr_sterreichUnitedKingdomIrland_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Typ': 'Typ', 'Belastung': 'Belastung', 'Saisonale_Spitze': 'Saisonale_Spitze', 'Anmerkung___Ursache': 'Anmerkung___Ursache', 'Ort': 'Ort', 'Land': 'Land', 'BewAnzahl': 'BewAnzahl', 'GoogleBew': 'GoogleBew', 'Beschreibung': 'Beschreibung', 'Adresse': 'Adresse', 'Kategorie': 'Kategorie', 'Saison': 'Saison', 'Ursachen___Hinweise': 'Ursachen___Hinweise', });
lyr_sterreichUnitedKingdomIrland_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Typ': 'Typ', 'Belastung': 'Belastung', 'Saisonale_Spitze': 'Saisonale_Spitze', 'Anmerkung___Ursache': 'Anmerkung___Ursache', 'Ort': 'Ort', 'Land': 'Land', 'BewAnzahl': 'BewAnzahl', 'GoogleBew': 'GoogleBew', 'Beschreibung': 'Beschreibung', 'Adresse': 'Adresse', 'Kategorie': 'Kategorie', 'Saison': 'Saison', 'Ursachen___Hinweise': 'Ursachen___Hinweise', });
lyr_NaturbelasseneTeilflchen_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Beschreibu': 'Beschreibu', 'link': 'link', 'Naturnaehe': 'Naturnaehe', 'Landschaft': 'Landschaft', 'Zersiedelu': 'Zersiedelu', 'Freizform': 'Freizform', 'NNaeheZ': 'NNaeheZ', 'LBZahl': 'LBZahl', 'ZersZahl': 'ZersZahl', 'GogglBew': 'GogglBew', });
lyr_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Beschreibung': 'Beschreibung', 'Tipp': 'Tipp', 'Preis': 'Preis', 'SchutzKat': 'SchutzKat', 'AbfahrtAnz': 'AbfahrtAnz', 'PanorRicht': 'PanorRicht', 'PanorAnz': 'PanorAnz', 'PLber': 'PLber', 'PLrotber': 'PLrotber', 'PLschwber': 'PLschwber', 'Hdiff_Ber': 'Hdiff_Ber', 'HochpBer': 'HochpBer', 'Liftges': 'Liftges', 'SeilbSess': 'SeilbSess', 'BewBergfex': 'BewBergfex', 'BewAnzBerg': 'BewAnzBerg', 'GoogleBEW': 'GoogleBEW', 'ANZBewgoog': 'ANZBewgoog', 'Schiverbun': 'Schiverbun', 'link': 'link', });
lyr_Nationalparks_7.set('fieldAliases', {'HIGHLIGHT': 'HIGHLIGHT', 'KAT': 'KAT', 'KAT_SUB': 'KAT_SUB', 'SG_NAME': 'SG_NAME', 'ZONEN': 'ZONEN', 'IUCN': 'IUCN', 'BEZIRK': 'BEZIRK', 'GEMEINDE': 'GEMEINDE', 'GESETZ_JAH': 'GESETZ_JAH', 'VO_aktuell': 'VO_aktuell', 'INSPIRE_ID': 'INSPIRE_ID', });
lyr_IUCN4Naturschutzgebiete_8.set('fieldAliases', {'HIGHLIGHT': 'HIGHLIGHT', 'KAT': 'KAT', 'KAT_SUB': 'KAT_SUB', 'SG_NAME': 'SG_NAME', 'ZONEN': 'ZONEN', 'IUCN': 'IUCN', 'BEZIRK': 'BEZIRK', 'GEMEINDE': 'GEMEINDE', 'GESETZ_JAH': 'GESETZ_JAH', 'VO_aktuell': 'VO_aktuell', 'INSPIRE_ID': 'INSPIRE_ID', });
lyr_NaturdenkmaleIUCNIII_9.set('fieldAliases', {'KAT': 'KAT', 'SG_NAME': 'SG_NAME', 'IUCN': 'IUCN', 'GESETZ_JAH': 'GESETZ_JAH', });
lyr_NaturrumlicheBesonderheiten_10.set('fieldAliases', {'Name': 'Name', 'Beschreibu': 'Beschreibu', });
lyr_IUCN1bWildnisgebiete_11.set('fieldAliases', {'Name': 'Name', 'Beschreibu': 'Beschreibu', 'fid': 'fid', 'KAT': 'KAT', 'KAT_SUB': 'KAT_SUB', 'SG_NAME': 'SG_NAME', 'ZONEN': 'ZONEN', 'IUCN': 'IUCN', 'BEZIRK': 'BEZIRK', 'GEMEINDE': 'GEMEINDE', 'GESETZ_JAH': 'GESETZ_JAH', 'VO_aktuell': 'VO_aktuell', 'INSPIRE_ID': 'INSPIRE_ID', 'Flache_ha': 'Flache_ha', });
lyr_IUCN1ainklNaturwaldreservate_12.set('fieldAliases', {'UBA_ID': 'UBA_ID', 'KAT': 'KAT', 'KAT_SUB': 'KAT_SUB', 'SG_NAME': 'SG_NAME', 'ZONEN': 'ZONEN', 'IUCN': 'IUCN', 'BEZIRK': 'BEZIRK', 'GEMEINDE': 'GEMEINDE', 'GESETZ_JAH': 'GESETZ_JAH', 'VO_aktuell': 'VO_aktuell', 'INSPIRE_ID': 'INSPIRE_ID', 'Flache_ha': 'Flache_ha', });
lyr_RuhigeGebieteinsterreich_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Kategorie': 'Kategorie', });
lyr_SehenswrdigkeitensterreichNatur_14.set('fieldAliases', {'Name': 'Name', 'Bild': 'Bild', 'feeling': 'feeling', 'Beschreibu': 'Beschreibu', 'Kategorie': 'Kategorie', 'Kurzbeschr': 'Kurzbeschr', 'Belebtheit': 'Belebtheit', 'Tageszeit': 'Tageszeit', 'Jahreszeit': 'Jahreszeit', 'Tipps_und_': 'Tipps_und_', 'link': 'link', 'gesehen__j': 'gesehen__j', 'Attraktiv': 'Attraktiv', });
lyr_NaturerlebnisseErgnzung1_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Bild': 'Bild', 'Kategorie': 'Kategorie', 'feeling': 'feeling', 'BewGoog': 'BewGoog', 'Beschreibu': 'Beschreibu', 'Bedeutung': 'Bedeutung', 'gesehen_j_': 'gesehen_j_', });
lyr_NaturerlebnisseBilder_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Bild': 'Bild', 'Kategorie': 'Kategorie', 'feeling': 'feeling', 'BewGoog': 'BewGoog', 'Beschreibu': 'Beschreibu', 'Bedeutung': 'Bedeutung', 'gesehen_j_': 'gesehen_j_', });
lyr_sterreichUnitedKingdomIrland_1.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Typ': '', 'Belastung': '', 'Saisonale_Spitze': '', 'Anmerkung___Ursache': '', 'Ort': '', 'Land': '', 'BewAnzahl': '', 'GoogleBew': '', 'Beschreibung': '', 'Adresse': '', 'Kategorie': '', 'Saison': '', 'Ursachen___Hinweise': '', });
lyr_sterreichUnitedKingdomIrland_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Typ': '', 'Belastung': '', 'Saisonale_Spitze': '', 'Anmerkung___Ursache': '', 'Ort': '', 'Land': '', 'BewAnzahl': '', 'GoogleBew': '', 'Beschreibung': '', 'Adresse': '', 'Kategorie': '', 'Saison': '', 'Ursachen___Hinweise': '', });
lyr_sterreichUnitedKingdomIrland_3.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Typ': '', 'Belastung': '', 'Saisonale_Spitze': '', 'Anmerkung___Ursache': '', 'Ort': '', 'Land': '', 'BewAnzahl': '', 'GoogleBew': '', 'Beschreibung': '', 'Adresse': '', 'Kategorie': '', 'Saison': '', 'Ursachen___Hinweise': '', });
lyr_sterreichUnitedKingdomIrland_4.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Typ': '', 'Belastung': '', 'Saisonale_Spitze': '', 'Anmerkung___Ursache': '', 'Ort': '', 'Land': '', 'BewAnzahl': '', 'GoogleBew': '', 'Beschreibung': '', 'Adresse': '', 'Kategorie': '', 'Saison': '', 'Ursachen___Hinweise': '', });
lyr_NaturbelasseneTeilflchen_5.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Beschreibu': '', 'link': '', 'Naturnaehe': '', 'Landschaft': '', 'Zersiedelu': '', 'Freizform': '', 'NNaeheZ': '', 'LBZahl': '', 'ZersZahl': '', 'GogglBew': '', });
lyr_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Beschreibung': 'TextEdit', 'Tipp': 'TextEdit', 'Preis': 'TextEdit', 'SchutzKat': 'TextEdit', 'AbfahrtAnz': 'TextEdit', 'PanorRicht': 'TextEdit', 'PanorAnz': 'TextEdit', 'PLber': 'TextEdit', 'PLrotber': 'TextEdit', 'PLschwber': 'TextEdit', 'Hdiff_Ber': 'TextEdit', 'HochpBer': 'TextEdit', 'Liftges': 'TextEdit', 'SeilbSess': 'TextEdit', 'BewBergfex': 'TextEdit', 'BewAnzBerg': 'TextEdit', 'GoogleBEW': 'TextEdit', 'ANZBewgoog': 'TextEdit', 'Schiverbun': 'TextEdit', 'link': 'TextEdit', });
lyr_Nationalparks_7.set('fieldImages', {'HIGHLIGHT': 'TextEdit', 'KAT': 'TextEdit', 'KAT_SUB': 'TextEdit', 'SG_NAME': 'TextEdit', 'ZONEN': 'TextEdit', 'IUCN': 'TextEdit', 'BEZIRK': 'TextEdit', 'GEMEINDE': 'TextEdit', 'GESETZ_JAH': 'TextEdit', 'VO_aktuell': 'TextEdit', 'INSPIRE_ID': 'TextEdit', });
lyr_IUCN4Naturschutzgebiete_8.set('fieldImages', {'HIGHLIGHT': 'TextEdit', 'KAT': 'TextEdit', 'KAT_SUB': 'TextEdit', 'SG_NAME': 'TextEdit', 'ZONEN': 'TextEdit', 'IUCN': 'TextEdit', 'BEZIRK': 'TextEdit', 'GEMEINDE': 'TextEdit', 'GESETZ_JAH': 'TextEdit', 'VO_aktuell': 'TextEdit', 'INSPIRE_ID': 'TextEdit', });
lyr_NaturdenkmaleIUCNIII_9.set('fieldImages', {'KAT': 'TextEdit', 'SG_NAME': 'TextEdit', 'IUCN': 'TextEdit', 'GESETZ_JAH': 'TextEdit', });
lyr_NaturrumlicheBesonderheiten_10.set('fieldImages', {'Name': 'TextEdit', 'Beschreibu': 'TextEdit', });
lyr_IUCN1bWildnisgebiete_11.set('fieldImages', {'Name': 'TextEdit', 'Beschreibu': 'TextEdit', 'fid': 'TextEdit', 'KAT': 'TextEdit', 'KAT_SUB': 'TextEdit', 'SG_NAME': 'TextEdit', 'ZONEN': 'TextEdit', 'IUCN': 'TextEdit', 'BEZIRK': 'TextEdit', 'GEMEINDE': 'TextEdit', 'GESETZ_JAH': 'TextEdit', 'VO_aktuell': 'TextEdit', 'INSPIRE_ID': 'TextEdit', 'Flache_ha': 'TextEdit', });
lyr_IUCN1ainklNaturwaldreservate_12.set('fieldImages', {'UBA_ID': 'TextEdit', 'KAT': 'TextEdit', 'KAT_SUB': 'TextEdit', 'SG_NAME': 'TextEdit', 'ZONEN': 'TextEdit', 'IUCN': 'TextEdit', 'BEZIRK': 'TextEdit', 'GEMEINDE': 'TextEdit', 'GESETZ_JAH': 'TextEdit', 'VO_aktuell': 'TextEdit', 'INSPIRE_ID': 'TextEdit', 'Flache_ha': 'TextEdit', });
lyr_RuhigeGebieteinsterreich_13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Kategorie': 'TextEdit', });
lyr_SehenswrdigkeitensterreichNatur_14.set('fieldImages', {'Name': 'TextEdit', 'Bild': 'TextEdit', 'feeling': 'TextEdit', 'Beschreibu': 'TextEdit', 'Kategorie': 'TextEdit', 'Kurzbeschr': 'TextEdit', 'Belebtheit': 'TextEdit', 'Tageszeit': 'TextEdit', 'Jahreszeit': 'TextEdit', 'Tipps_und_': 'TextEdit', 'link': 'TextEdit', 'gesehen__j': 'TextEdit', 'Attraktiv': 'TextEdit', });
lyr_NaturerlebnisseErgnzung1_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Bild': 'TextEdit', 'Kategorie': 'TextEdit', 'feeling': 'TextEdit', 'BewGoog': 'TextEdit', 'Beschreibu': 'TextEdit', 'Bedeutung': 'TextEdit', 'gesehen_j_': 'TextEdit', });
lyr_NaturerlebnisseBilder_16.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Bild': 'TextEdit', 'Kategorie': 'TextEdit', 'feeling': 'TextEdit', 'BewGoog': 'TextEdit', 'Beschreibu': 'TextEdit', 'Bedeutung': 'TextEdit', 'gesehen_j_': 'TextEdit', });
lyr_sterreichUnitedKingdomIrland_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Typ': 'no label', 'Belastung': 'no label', 'Saisonale_Spitze': 'no label', 'Anmerkung___Ursache': 'no label', 'Ort': 'no label', 'Land': 'no label', 'BewAnzahl': 'no label', 'GoogleBew': 'no label', 'Beschreibung': 'no label', 'Adresse': 'no label', 'Kategorie': 'no label', 'Saison': 'no label', 'Ursachen___Hinweise': 'no label', });
lyr_sterreichUnitedKingdomIrland_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Typ': 'no label', 'Belastung': 'no label', 'Saisonale_Spitze': 'no label', 'Anmerkung___Ursache': 'no label', 'Ort': 'no label', 'Land': 'no label', 'BewAnzahl': 'no label', 'GoogleBew': 'no label', 'Beschreibung': 'no label', 'Adresse': 'no label', 'Kategorie': 'no label', 'Saison': 'no label', 'Ursachen___Hinweise': 'no label', });
lyr_sterreichUnitedKingdomIrland_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Typ': 'no label', 'Belastung': 'no label', 'Saisonale_Spitze': 'no label', 'Anmerkung___Ursache': 'no label', 'Ort': 'no label', 'Land': 'no label', 'BewAnzahl': 'no label', 'GoogleBew': 'no label', 'Beschreibung': 'no label', 'Adresse': 'no label', 'Kategorie': 'no label', 'Saison': 'no label', 'Ursachen___Hinweise': 'no label', });
lyr_sterreichUnitedKingdomIrland_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Typ': 'no label', 'Belastung': 'no label', 'Saisonale_Spitze': 'no label', 'Anmerkung___Ursache': 'no label', 'Ort': 'no label', 'Land': 'no label', 'BewAnzahl': 'no label', 'GoogleBew': 'no label', 'Beschreibung': 'no label', 'Adresse': 'no label', 'Kategorie': 'no label', 'Saison': 'no label', 'Ursachen___Hinweise': 'no label', });
lyr_NaturbelasseneTeilflchen_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Beschreibu': 'no label', 'link': 'no label', 'Naturnaehe': 'no label', 'Landschaft': 'no label', 'Zersiedelu': 'no label', 'Freizform': 'no label', 'NNaeheZ': 'no label', 'LBZahl': 'no label', 'ZersZahl': 'no label', 'GogglBew': 'no label', });
lyr_NATURBELASSENEGEBIETESTERREICH1Schigebiete_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'inline label - always visible', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Beschreibung': 'no label', 'Tipp': 'no label', 'Preis': 'no label', 'SchutzKat': 'no label', 'AbfahrtAnz': 'no label', 'PanorRicht': 'no label', 'PanorAnz': 'no label', 'PLber': 'no label', 'PLrotber': 'no label', 'PLschwber': 'no label', 'Hdiff_Ber': 'no label', 'HochpBer': 'no label', 'Liftges': 'no label', 'SeilbSess': 'no label', 'BewBergfex': 'no label', 'BewAnzBerg': 'no label', 'GoogleBEW': 'no label', 'ANZBewgoog': 'no label', 'Schiverbun': 'no label', 'link': 'no label', });
lyr_Nationalparks_7.set('fieldLabels', {'HIGHLIGHT': 'no label', 'KAT': 'no label', 'KAT_SUB': 'no label', 'SG_NAME': 'no label', 'ZONEN': 'no label', 'IUCN': 'no label', 'BEZIRK': 'no label', 'GEMEINDE': 'no label', 'GESETZ_JAH': 'no label', 'VO_aktuell': 'no label', 'INSPIRE_ID': 'no label', });
lyr_IUCN4Naturschutzgebiete_8.set('fieldLabels', {'HIGHLIGHT': 'no label', 'KAT': 'no label', 'KAT_SUB': 'no label', 'SG_NAME': 'no label', 'ZONEN': 'no label', 'IUCN': 'no label', 'BEZIRK': 'no label', 'GEMEINDE': 'no label', 'GESETZ_JAH': 'no label', 'VO_aktuell': 'no label', 'INSPIRE_ID': 'no label', });
lyr_NaturdenkmaleIUCNIII_9.set('fieldLabels', {'KAT': 'no label', 'SG_NAME': 'no label', 'IUCN': 'no label', 'GESETZ_JAH': 'no label', });
lyr_NaturrumlicheBesonderheiten_10.set('fieldLabels', {'Name': 'no label', 'Beschreibu': 'no label', });
lyr_IUCN1bWildnisgebiete_11.set('fieldLabels', {'Name': 'no label', 'Beschreibu': 'no label', 'fid': 'no label', 'KAT': 'no label', 'KAT_SUB': 'no label', 'SG_NAME': 'no label', 'ZONEN': 'no label', 'IUCN': 'no label', 'BEZIRK': 'no label', 'GEMEINDE': 'no label', 'GESETZ_JAH': 'no label', 'VO_aktuell': 'no label', 'INSPIRE_ID': 'no label', 'Flache_ha': 'no label', });
lyr_IUCN1ainklNaturwaldreservate_12.set('fieldLabels', {'UBA_ID': 'no label', 'KAT': 'no label', 'KAT_SUB': 'no label', 'SG_NAME': 'no label', 'ZONEN': 'no label', 'IUCN': 'no label', 'BEZIRK': 'no label', 'GEMEINDE': 'no label', 'GESETZ_JAH': 'no label', 'VO_aktuell': 'no label', 'INSPIRE_ID': 'no label', 'Flache_ha': 'no label', });
lyr_RuhigeGebieteinsterreich_13.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'no label', 'Kategorie': 'no label', });
lyr_SehenswrdigkeitensterreichNatur_14.set('fieldLabels', {'Name': 'no label', 'Bild': 'no label', 'feeling': 'no label', 'Beschreibu': 'no label', 'Kategorie': 'no label', 'Kurzbeschr': 'no label', 'Belebtheit': 'no label', 'Tageszeit': 'no label', 'Jahreszeit': 'no label', 'Tipps_und_': 'no label', 'link': 'no label', 'gesehen__j': 'no label', 'Attraktiv': 'no label', });
lyr_NaturerlebnisseErgnzung1_15.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'Bild': 'no label', 'Kategorie': 'no label', 'feeling': 'no label', 'BewGoog': 'no label', 'Beschreibu': 'no label', 'Bedeutung': 'no label', 'gesehen_j_': 'no label', });
lyr_NaturerlebnisseBilder_16.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'no label', 'Bild': 'no label', 'Kategorie': 'no label', 'feeling': 'no label', 'BewGoog': 'no label', 'Beschreibu': 'no label', 'Bedeutung': 'no label', 'gesehen_j_': 'no label', });
lyr_NaturerlebnisseBilder_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});