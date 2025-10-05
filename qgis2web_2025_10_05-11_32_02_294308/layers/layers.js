ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3150").setExtent([5895214.157336, 5092857.362738, 6494297.287625, 5415216.518744]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tourismusregionen0625Aussicht_1 = new ol.format.GeoJSON();
var features_Tourismusregionen0625Aussicht_1 = format_Tourismusregionen0625Aussicht_1.readFeatures(json_Tourismusregionen0625Aussicht_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3150'});
var jsonSource_Tourismusregionen0625Aussicht_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tourismusregionen0625Aussicht_1.addFeatures(features_Tourismusregionen0625Aussicht_1);
var lyr_Tourismusregionen0625Aussicht_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tourismusregionen0625Aussicht_1, 
                style: style_Tourismusregionen0625Aussicht_1,
                popuplayertitle: 'Tourismusregionen 0625-Aussicht',
                interactive: true,
                title: '<img src="styles/legend/Tourismusregionen0625Aussicht_1.png" /> Tourismusregionen 0625-Aussicht'
            });
var format_RuhigeGebieteinsterreich_2 = new ol.format.GeoJSON();
var features_RuhigeGebieteinsterreich_2 = format_RuhigeGebieteinsterreich_2.readFeatures(json_RuhigeGebieteinsterreich_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3150'});
var jsonSource_RuhigeGebieteinsterreich_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuhigeGebieteinsterreich_2.addFeatures(features_RuhigeGebieteinsterreich_2);
var lyr_RuhigeGebieteinsterreich_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuhigeGebieteinsterreich_2, 
                style: style_RuhigeGebieteinsterreich_2,
                popuplayertitle: 'Ruhige Gebiete in Österreich',
                interactive: true,
                title: '<img src="styles/legend/RuhigeGebieteinsterreich_2.png" /> Ruhige Gebiete in Österreich'
            });
var format_SehenswrdigkeitensterreichNatur_3 = new ol.format.GeoJSON();
var features_SehenswrdigkeitensterreichNatur_3 = format_SehenswrdigkeitensterreichNatur_3.readFeatures(json_SehenswrdigkeitensterreichNatur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3150'});
var jsonSource_SehenswrdigkeitensterreichNatur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SehenswrdigkeitensterreichNatur_3.addFeatures(features_SehenswrdigkeitensterreichNatur_3);
var lyr_SehenswrdigkeitensterreichNatur_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SehenswrdigkeitensterreichNatur_3, 
                style: style_SehenswrdigkeitensterreichNatur_3,
                popuplayertitle: 'Sehenswürdigkeiten Österreich Natur',
                interactive: true,
    title: 'Sehenswürdigkeiten Österreich Natur<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_3_0.png" /> Berge<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_3_1.png" /> Kulturlandschaft<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_3_2.png" /> Landschaftsenergie und Ausblicke<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_3_3.png" /> Naturerlebnisse<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_3_4.png" /> Unberührte Natur und Wandern<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_3_5.png" /> Wasser - imposant und kühlend<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_3_6.png" /> Wasser - Naturidylle<br />\
    <img src="styles/legend/SehenswrdigkeitensterreichNatur_3_7.png" /> Wasser und Erholung<br />' });
var format_NaturerlebnissesterreichJuni2025_4 = new ol.format.GeoJSON();
var features_NaturerlebnissesterreichJuni2025_4 = format_NaturerlebnissesterreichJuni2025_4.readFeatures(json_NaturerlebnissesterreichJuni2025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3150'});
var jsonSource_NaturerlebnissesterreichJuni2025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturerlebnissesterreichJuni2025_4.addFeatures(features_NaturerlebnissesterreichJuni2025_4);
var lyr_NaturerlebnissesterreichJuni2025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturerlebnissesterreichJuni2025_4, 
                style: style_NaturerlebnissesterreichJuni2025_4,
                popuplayertitle: 'Naturerlebnisse Österreich Juni 2025',
                interactive: true,
    title: 'Naturerlebnisse Österreich Juni 2025<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_0.png" /> Besondere Ausblicke<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_1.png" /> Besondere Ausblicke
<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_2.png" /> Naturerlebnis<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_3.png" /> Naturerlebnis, Besondere Ausblicke<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_4.png" /> Naturerlebnisse<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_5.png" /> Naturerlebnisse
<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_6.png" /> UW<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_7.png" /> Wasser - imposant und kühlend<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_8.png" /> Wasser - imposant und kühlend
<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_9.png" /> Wasser - Naturidylle<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_10.png" /> Wasser - Naturidylle
<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_11.png" /> Wasser und Erholung<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_12.png" /> Wasser und Erholung
<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_13.png" /> Wasser-Naturidylle<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_14.png" /> Wasser-Naturidylle
<br />\
    <img src="styles/legend/NaturerlebnissesterreichJuni2025_4_15.png" /> <br />' });
var format_Schigebiete_5 = new ol.format.GeoJSON();
var features_Schigebiete_5 = format_Schigebiete_5.readFeatures(json_Schigebiete_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3150'});
var jsonSource_Schigebiete_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schigebiete_5.addFeatures(features_Schigebiete_5);
var lyr_Schigebiete_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schigebiete_5, 
                style: style_Schigebiete_5,
                popuplayertitle: 'Schigebiete',
                interactive: true,
                title: '<img src="styles/legend/Schigebiete_5.png" /> Schigebiete'
            });
var group_UNTERKNFTE = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'UNTERKÜNFTE'});
var group_STERREICH = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'ÖSTERREICH'});
var group_TOURISMUSINFOEUROPAOVERTOURISMUSundGEHEIMTIPPS = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'TOURISMUSINFO EUROPA - OVERTOURISMUS und GEHEIMTIPPS'});
var group_SPOTSKROATIENITALIENBOSNIENSLOWENIENSERBIENBULGARIEN = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'SPOTS - KROATIEN ITALIEN BOSNIEN SLOWENIEN SERBIEN BULGARIEN'});
var group_EUROPAallgemein = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EUROPA allgemein'});
var group_REGIONSEBENE = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'REGIONSEBENE'});
var group_BADEPLTZE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'BADEPLÄTZE'});
var group_NATURBELASSENEGEBIETEsterreich = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'NATURBELASSENE GEBIETE - Österreich'});
var group_TSCHECHIEN = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'TSCHECHIEN'});
var group_AUSSERHALBEUROPAS = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'AUSSERHALB EUROPAS'});
var group_NATIONSEBENE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'NATIONSEBENE'});
var group_Baudenkmler = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Baudenkmäler'});
var group_BauepochenberwiegendsterreichundwenigerDeutschland = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Bauepochen (überwiegend Österreich und weniger Deutschland)'});
var group_Stdte = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Städte'});
var group_Besonderheiten = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Besonderheiten'});
var group_YAUSSERHALBEUROPAS = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Y-AUSSERHALB EUROPAS'});
var group_RADFAHRENMOUNTAINBIKEWANDERNberwiegendsterreich = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'RADFAHREN- MOUNTAINBIKE-WANDERN (überwiegend Österreich'});
var group_REKORDE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'REKORDE'});
var group_GRENZENundREGIONEN = new ol.layer.Group({
                                layers: [lyr_Tourismusregionen0625Aussicht_1,],
                                fold: 'close',
                                title: 'GRENZEN und REGIONEN'});
var group_Provinzgrenzen = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Provinzgrenzen'});
var group_TEXTEunsortiert = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'TEXTE + unsortiert'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Tourismusregionen0625Aussicht_1.setVisible(true);lyr_RuhigeGebieteinsterreich_2.setVisible(true);lyr_SehenswrdigkeitensterreichNatur_3.setVisible(true);lyr_NaturerlebnissesterreichJuni2025_4.setVisible(true);lyr_Schigebiete_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_GRENZENundREGIONEN,lyr_RuhigeGebieteinsterreich_2,lyr_SehenswrdigkeitensterreichNatur_3,lyr_NaturerlebnissesterreichJuni2025_4,lyr_Schigebiete_5];
lyr_Tourismusregionen0625Aussicht_1.set('fieldAliases', {'PG': 'PG', 'PB': 'PB', 'BL': 'BL', 'FL_KM': 'FL_KM', 'Region': 'Region', '1 Link zur': '1 Link zur', '2b BewGoog': '2b BewGoog', '2d AbwDurc': '2d AbwDurc', '3 Highligh': '3 Highligh', '4 Tourcard': '4 Tourcard', '5Hoteldich': '5Hoteldich', '61Wasser': '61Wasser', '62Bergspor': '62Bergspor', '63Pilgern': '63Pilgern', '64Kraftpla': '64Kraftpla', '65Klettern': '65Klettern', '66RadEbene': '66RadEbene', '67Mountain': '67Mountain', '68Ebiken': '68Ebiken', '69Wintersp': '69Wintersp', '610SonstTe': '610SonstTe', '71Landchar': '71Landchar', '72Höhemax': '72Höhemax', '73Lichtver': '73Lichtver', '74 NatUn': '74 NatUn', '75 NatImos': '75 NatImos', '751 Text': '751 Text', '76 NatAusb': '76 NatAusb', '77 Geomman': '77 Geomman', '81 Thermen': '81 Thermen', '82 Chillen': '82 Chillen', '83 BW ruhi': '83 BW ruhi', '84 Gesheit': '84 Gesheit', '85 Hotels': '85 Hotels', '9 Massen': '9 Massen', '10Ausfl': '10Ausfl', '101 Text': '101 Text', '11 Action': '11 Action', '111 ActTex': '111 ActTex', '12 ArchSta': '12 ArchSta', '121 Text': '121 Text', '13 Kultur': '13 Kultur', '131 Text': '131 Text', '14 TageAuf': '14 TageAuf', 'Grossregio': 'Grossregio', 'NATURBELAS': 'NATURBELAS', 'Klreg Anz': 'Klreg Anz', 'Reg Kopie': 'Reg Kopie', 'DACHMARKE': 'DACHMARKE', 'REGneu': 'REGneu', 'DACHMneu': 'DACHMneu', 'DMLand': 'DMLand', 'Fokus Somm': 'Fokus Somm', 'Fokus Wint': 'Fokus Wint', '4u5 H Anz': '4u5 H Anz', 'H geschl A': 'H geschl A', 'FLKM2': 'FLKM2', 'Hoteldicht': 'Hoteldicht', 'Cluster': 'Cluster', 'ProzAuss': 'ProzAuss', 'ProzRuhe': 'ProzRuhe', 'ProzWellne': 'ProzWellne', 'Naturkm2': 'Naturkm2', 'Kulturkm2': 'Kulturkm2', 'AnzAuss': 'AnzAuss', 'AnzRuhe': 'AnzRuhe', 'AnzWelln': 'AnzWelln', 'NatAnz': 'NatAnz', 'KultAnz': 'KultAnz', 'Winterqual': 'Winterqual', 'SKI-MW': 'SKI-MW', 'layer': 'layer', 'Ausssumme': 'Ausssumme', 'Ruhesumme': 'Ruhesumme', 'WellnBew': 'WellnBew', 'SaunSeeAnz': 'SaunSeeAnz', 'Lage1Abges': 'Lage1Abges', 'Berghotels': 'Berghotels', 'FLUSS': 'FLUSS', 'LANDLAGEN': 'LANDLAGEN', 'PARKLANDSC': 'PARKLANDSC', 'SEE': 'SEE', 'ThermKur': 'ThermKur', 'ZentrTour': 'ZentrTour', 'Tourismuso': 'Tourismuso', 'TOUROAnt': 'TOUROAnt', });
lyr_RuhigeGebieteinsterreich_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Kategorie': 'Kategorie', });
lyr_SehenswrdigkeitensterreichNatur_3.set('fieldAliases', {'Name': 'Name', 'Bild': 'Bild', 'feeling': 'feeling', 'Beschreibu': 'Beschreibu', 'Kategorie': 'Kategorie', 'Kurzbeschr': 'Kurzbeschr', 'Belebtheit': 'Belebtheit', 'Tageszeit': 'Tageszeit', 'Jahreszeit': 'Jahreszeit', 'Tipps_und_': 'Tipps_und_', 'link': 'link', 'gesehen__j': 'gesehen__j', 'Attraktiv': 'Attraktiv', });
lyr_NaturerlebnissesterreichJuni2025_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Bild': 'Bild', 'Kategorie': 'Kategorie', 'feeling': 'feeling', 'BewGoog': 'BewGoog', 'Beschreibu': 'Beschreibu', 'Bedeutung': 'Bedeutung', 'gesehen_j_': 'gesehen_j_', });
lyr_Schigebiete_5.set('fieldAliases', {'Name': 'Name', 'Tipp': 'Tipp', 'Preis': 'Preis', 'SchutzKat': 'SchutzKat', 'AbfahrtAnz': 'AbfahrtAnz', 'PanorRicht': 'PanorRicht', 'PanorAnz': 'PanorAnz', 'PLber': 'PLber', 'PLrotber': 'PLrotber', 'PLschwber': 'PLschwber', 'Hdiff_Ber': 'Hdiff_Ber', 'HochpBer': 'HochpBer', 'Liftges': 'Liftges', 'SeilbSess': 'SeilbSess', 'BewBergfex': 'BewBergfex', 'BewAnzBerg': 'BewAnzBerg', 'GoogleBEW': 'GoogleBEW', 'ANZBewgoog': 'ANZBewgoog', 'Schiverbun': 'Schiverbun', 'link': 'link', });
lyr_Tourismusregionen0625Aussicht_1.set('fieldImages', {'PG': 'TextEdit', 'PB': 'TextEdit', 'BL': 'TextEdit', 'FL_KM': 'TextEdit', 'Region': 'TextEdit', '1 Link zur': 'TextEdit', '2b BewGoog': 'TextEdit', '2d AbwDurc': 'TextEdit', '3 Highligh': 'TextEdit', '4 Tourcard': 'TextEdit', '5Hoteldich': 'TextEdit', '61Wasser': 'TextEdit', '62Bergspor': 'TextEdit', '63Pilgern': 'TextEdit', '64Kraftpla': 'TextEdit', '65Klettern': 'TextEdit', '66RadEbene': 'TextEdit', '67Mountain': 'TextEdit', '68Ebiken': 'TextEdit', '69Wintersp': 'TextEdit', '610SonstTe': 'TextEdit', '71Landchar': 'TextEdit', '72Höhemax': 'TextEdit', '73Lichtver': 'TextEdit', '74 NatUn': 'TextEdit', '75 NatImos': 'TextEdit', '751 Text': 'TextEdit', '76 NatAusb': 'TextEdit', '77 Geomman': 'TextEdit', '81 Thermen': 'TextEdit', '82 Chillen': 'TextEdit', '83 BW ruhi': 'TextEdit', '84 Gesheit': 'TextEdit', '85 Hotels': 'TextEdit', '9 Massen': 'TextEdit', '10Ausfl': 'TextEdit', '101 Text': 'TextEdit', '11 Action': 'TextEdit', '111 ActTex': 'TextEdit', '12 ArchSta': 'TextEdit', '121 Text': 'TextEdit', '13 Kultur': 'TextEdit', '131 Text': 'TextEdit', '14 TageAuf': 'TextEdit', 'Grossregio': 'TextEdit', 'NATURBELAS': 'TextEdit', 'Klreg Anz': 'Range', 'Reg Kopie': 'TextEdit', 'DACHMARKE': 'TextEdit', 'REGneu': 'TextEdit', 'DACHMneu': 'TextEdit', 'DMLand': 'TextEdit', 'Fokus Somm': 'TextEdit', 'Fokus Wint': 'TextEdit', '4u5 H Anz': 'Range', 'H geschl A': 'Range', 'FLKM2': 'Range', 'Hoteldicht': 'Range', 'Cluster': 'TextEdit', 'ProzAuss': 'Range', 'ProzRuhe': 'Range', 'ProzWellne': 'Range', 'Naturkm2': 'Range', 'Kulturkm2': 'Range', 'AnzAuss': 'Range', 'AnzRuhe': 'Range', 'AnzWelln': 'Range', 'NatAnz': 'Range', 'KultAnz': 'Range', 'Winterqual': 'Range', 'SKI-MW': 'TextEdit', 'layer': 'TextEdit', 'Ausssumme': 'TextEdit', 'Ruhesumme': 'TextEdit', 'WellnBew': 'TextEdit', 'SaunSeeAnz': 'TextEdit', 'Lage1Abges': 'TextEdit', 'Berghotels': 'TextEdit', 'FLUSS': 'TextEdit', 'LANDLAGEN': 'TextEdit', 'PARKLANDSC': 'TextEdit', 'SEE': 'TextEdit', 'ThermKur': 'TextEdit', 'ZentrTour': 'TextEdit', 'Tourismuso': 'TextEdit', 'TOUROAnt': 'TextEdit', });
lyr_RuhigeGebieteinsterreich_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Kategorie': 'TextEdit', });
lyr_SehenswrdigkeitensterreichNatur_3.set('fieldImages', {'Name': 'TextEdit', 'Bild': 'TextEdit', 'feeling': 'TextEdit', 'Beschreibu': 'TextEdit', 'Kategorie': 'TextEdit', 'Kurzbeschr': 'TextEdit', 'Belebtheit': 'TextEdit', 'Tageszeit': 'TextEdit', 'Jahreszeit': 'TextEdit', 'Tipps_und_': 'TextEdit', 'link': 'TextEdit', 'gesehen__j': 'TextEdit', 'Attraktiv': 'TextEdit', });
lyr_NaturerlebnissesterreichJuni2025_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Bild': 'TextEdit', 'Kategorie': 'TextEdit', 'feeling': 'TextEdit', 'BewGoog': 'TextEdit', 'Beschreibu': 'TextEdit', 'Bedeutung': 'TextEdit', 'gesehen_j_': 'TextEdit', });
lyr_Schigebiete_5.set('fieldImages', {'Name': 'TextEdit', 'Tipp': 'TextEdit', 'Preis': 'TextEdit', 'SchutzKat': 'TextEdit', 'AbfahrtAnz': 'TextEdit', 'PanorRicht': 'TextEdit', 'PanorAnz': 'TextEdit', 'PLber': 'TextEdit', 'PLrotber': 'TextEdit', 'PLschwber': 'TextEdit', 'Hdiff_Ber': 'TextEdit', 'HochpBer': 'TextEdit', 'Liftges': 'TextEdit', 'SeilbSess': 'TextEdit', 'BewBergfex': 'TextEdit', 'BewAnzBerg': 'TextEdit', 'GoogleBEW': 'TextEdit', 'ANZBewgoog': 'TextEdit', 'Schiverbun': 'TextEdit', 'link': 'TextEdit', });
lyr_Tourismusregionen0625Aussicht_1.set('fieldLabels', {'PG': 'no label', 'PB': 'no label', 'BL': 'no label', 'FL_KM': 'no label', 'Region': 'no label', '1 Link zur': 'no label', '2b BewGoog': 'no label', '2d AbwDurc': 'no label', '3 Highligh': 'no label', '4 Tourcard': 'no label', '5Hoteldich': 'no label', '61Wasser': 'no label', '62Bergspor': 'no label', '63Pilgern': 'no label', '64Kraftpla': 'no label', '65Klettern': 'no label', '66RadEbene': 'no label', '67Mountain': 'no label', '68Ebiken': 'no label', '69Wintersp': 'no label', '610SonstTe': 'no label', '71Landchar': 'no label', '72Höhemax': 'no label', '73Lichtver': 'no label', '74 NatUn': 'no label', '75 NatImos': 'no label', '751 Text': 'no label', '76 NatAusb': 'no label', '77 Geomman': 'no label', '81 Thermen': 'no label', '82 Chillen': 'no label', '83 BW ruhi': 'no label', '84 Gesheit': 'no label', '85 Hotels': 'no label', '9 Massen': 'no label', '10Ausfl': 'no label', '101 Text': 'no label', '11 Action': 'no label', '111 ActTex': 'no label', '12 ArchSta': 'no label', '121 Text': 'no label', '13 Kultur': 'no label', '131 Text': 'no label', '14 TageAuf': 'no label', 'Grossregio': 'no label', 'NATURBELAS': 'no label', 'Klreg Anz': 'no label', 'Reg Kopie': 'no label', 'DACHMARKE': 'no label', 'REGneu': 'no label', 'DACHMneu': 'no label', 'DMLand': 'no label', 'Fokus Somm': 'no label', 'Fokus Wint': 'no label', '4u5 H Anz': 'no label', 'H geschl A': 'no label', 'FLKM2': 'no label', 'Hoteldicht': 'no label', 'Cluster': 'no label', 'ProzAuss': 'no label', 'ProzRuhe': 'no label', 'ProzWellne': 'no label', 'Naturkm2': 'no label', 'Kulturkm2': 'no label', 'AnzAuss': 'no label', 'AnzRuhe': 'no label', 'AnzWelln': 'no label', 'NatAnz': 'no label', 'KultAnz': 'no label', 'Winterqual': 'no label', 'SKI-MW': 'no label', 'layer': 'no label', 'Ausssumme': 'no label', 'Ruhesumme': 'no label', 'WellnBew': 'no label', 'SaunSeeAnz': 'no label', 'Lage1Abges': 'no label', 'Berghotels': 'no label', 'FLUSS': 'no label', 'LANDLAGEN': 'no label', 'PARKLANDSC': 'no label', 'SEE': 'no label', 'ThermKur': 'no label', 'ZentrTour': 'no label', 'Tourismuso': 'no label', 'TOUROAnt': 'no label', });
lyr_RuhigeGebieteinsterreich_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'Kategorie': 'no label', });
lyr_SehenswrdigkeitensterreichNatur_3.set('fieldLabels', {'Name': 'no label', 'Bild': 'no label', 'feeling': 'no label', 'Beschreibu': 'no label', 'Kategorie': 'no label', 'Kurzbeschr': 'no label', 'Belebtheit': 'no label', 'Tageszeit': 'no label', 'Jahreszeit': 'no label', 'Tipps_und_': 'no label', 'link': 'no label', 'gesehen__j': 'no label', 'Attraktiv': 'no label', });
lyr_NaturerlebnissesterreichJuni2025_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'Bild': 'no label', 'Kategorie': 'no label', 'feeling': 'no label', 'BewGoog': 'no label', 'Beschreibu': 'no label', 'Bedeutung': 'no label', 'gesehen_j_': 'no label', });
lyr_Schigebiete_5.set('fieldLabels', {'Name': 'no label', 'Tipp': 'no label', 'Preis': 'no label', 'SchutzKat': 'no label', 'AbfahrtAnz': 'no label', 'PanorRicht': 'no label', 'PanorAnz': 'no label', 'PLber': 'no label', 'PLrotber': 'no label', 'PLschwber': 'no label', 'Hdiff_Ber': 'no label', 'HochpBer': 'no label', 'Liftges': 'no label', 'SeilbSess': 'no label', 'BewBergfex': 'no label', 'BewAnzBerg': 'no label', 'GoogleBEW': 'no label', 'ANZBewgoog': 'no label', 'Schiverbun': 'no label', 'link': 'no label', });
lyr_Schigebiete_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});