// MT options copied straight from the MT
// TODO: format?

export const materialOptions = [
  {
    id: 'puu',
    displayValue: 'puu',
    order: 10,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'maa_ainekset',
    displayValue: 'maa-ainekset',
    order: 20,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'betoni',
    displayValue: 'betoni',
    order: 30,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'tiilet_ja_keramiikka',
    displayValue: 'tiilet ja keramiikka',
    order: 40,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'paperi',
    displayValue: 'paperi',
    order: 50,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'kartonki',
    displayValue: 'kartonki',
    order: 60,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'muovi',
    displayValue: 'muovi',
    order: 70,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'kumi',
    displayValue: 'kumi',
    order: 80,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'metalli',
    displayValue: 'metalli',
    order: 90,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'lasi',
    displayValue: 'lasi',
    order: 100,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'tekstiili',
    displayValue: 'tekstiili',
    order: 150,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'elintarvikesivuvirta',
    displayValue: 'elintarvikesivuvirta',
    order: 170,
    isWaste: false,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'lanta',
    displayValue: 'lanta',
    order: 180,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'elainperainen_orgaaninen_materiaali_ei_lanta',
    displayValue: 'eläinperäinen orgaaninen materiaali, ei lanta',
    order: 190,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'kasviperainen_orgaaninen_materiaali',
    displayValue: 'kasviperäinen orgaaninen materiaali',
    order: 200,
    isWaste: true,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'tuhka',
    displayValue: 'tuhka',
    order: 220,
    isWaste: true,
    isMaterial: true,
  },
  {
    id: 'kuona',
    displayValue: 'kuona',
    order: 230,
    isWaste: true,
    isMaterial: true,
  },
  {
    id: 'kayttokelpoiset_huonekalut',
    displayValue: 'käyttökelpoiset huonekalut',
    order: 390,
    isWaste: false,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
  {
    id: 'rakennusosat',
    displayValue: 'rakennusosat',
    order: 400,
    isWaste: false,
    isMaterial: true,
    configurationType: 'MaterialType',
    subMaterialTypes: [],
  },
];

export const unitOptions = [
  {
    id: 'kg',
    displayValue: 'kg',
    order: 10,
    configurationType: 'UnitType',
  },
  {
    id: 't',
    displayValue: 't',
    order: 20,
    configurationType: 'UnitType',
  },
  {
    id: 'm',
    displayValue: 'm',
    order: 30,
    configurationType: 'UnitType',
  },
  {
    id: 'm2',
    displayValue: 'm2',
    order: 40,
    configurationType: 'UnitType',
  },
  {
    id: 'm3',
    displayValue: 'm3',
    order: 50,
    configurationType: 'UnitType',
  },
  {
    id: 'kpl',
    displayValue: 'kpl',
    order: 60,
    configurationType: 'UnitType',
  },
];

export const industryOptions = [
  {
    id: 'rakentaminen_ja_purkaminen',
    dispayValue: 'Rakentaminen ja purkaminen',
    order: 10,
    configurationType: 'IndustryType',
  },
  {
    id: 'jate_vesi_ja_jatevesihuolto',
    dispayValue: 'jäte-, vesi- ja jätevesihuolto',
    order: 20,
    configurationType: 'IndustryType',
  },
  {
    id: 'kaivannaisteollisuus',
    dispayValue: 'kaivannaisteollisuus',
    order: 30,
    configurationType: 'IndustryType',
  },
  {
    id: 'elintarviketeollisuus',
    dispayValue: 'elintarviketeollisuus',
    order: 35,
    configurationType: 'IndustryType',
  },
  {
    id: 'maa_metsa_ja_kalatalous',
    dispayValue: 'maa-, metsä, ja kalatalous',
    order: 40,
    configurationType: 'IndustryType',
  },
  {
    id: 'puu_paperi_ja_kartonkiteollisuus',
    dispayValue: 'puu-, paperi- ja kartonkiteollisuus',
    order: 50,
    configurationType: 'IndustryType',
  },
  {
    id: 'nahka_turkis_ja_tekstiiliteollisuus',
    dispayValue: 'nahka-, turkis- ja teksitiiliteollisuus',
    order: 60,
    configurationType: 'IndustryType',
  },
  {
    id: 'petrokemianteollisuus',
    dispayValue: 'petrokemianteollisuus',
    order: 70,
    configurationType: 'IndustryType',
  },
  {
    id: 'kemianteollisuus',
    dispayValue: 'kemianteollisuus',
    order: 80,
    configurationType: 'IndustryType',
  },
  {
    id: 'valokuvateollisuus',
    dispayValue: 'valokuvateollisuus',
    order: 85,
    configurationType: 'IndustryType',
  },
  {
    id: 'metalliteollisuus',
    dispayValue: 'metalliteollisuus',
    order: 90,
    configurationType: 'IndustryType',
  },
  {
    id: 'energiantuotanto',
    dispayValue: 'energiantuotanto',
    order: 100,
    configurationType: 'IndustryType',
  },
  {
    id: 'muu_teollisuus',
    dispayValue: 'muu teollisuus',
    order: 110,
    configurationType: 'IndustryType',
  },
  {
    id: 'tukku_ja_vahittaiskauppa',
    dispayValue: 'tukku- ja vähittäiskauppa',
    order: 120,
    configurationType: 'IndustryType',
  },
  {
    id: 'ravitsemus_ja_majoituspalvelut',
    dispayValue: 'ravitsemus- ja majoituspalvelut',
    order: 130,
    configurationType: 'IndustryType',
  },
  {
    id: 'terveydenhuolto',
    dispayValue: 'terveydenhuolto',
    order: 140,
    configurationType: 'IndustryType',
  },
  {
    id: 'kotitaloudet_toimistot_koulut_paivakodit_ja_vastaavat',
    dispayValue: 'kotitaloudet toimistot koulut paivakodit ja vastaavat',
    order: 150,
    configurationType: 'IndustryType',
  },
  {
    id: 'muu_toimiala',
    dispayValue: 'muu toimiala',
    order: 160,
    configurationType: 'IndustryType',
  },
];

export const municipalityOptions = [
  {
    regionId: 'R_5',
    regionNameFi: 'Pirkanmaa',
    regionNameSv: 'Birkaland',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [23.70185, 61.71671],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 23.70185,
        lat: 61.71671,
      },
      {
        type: 'EUREF_FIN',
        lon: 325703.0624726041,
        lat: 6847041.461558179,
      },
    ],
    municipalities: [
      {
        id: 'M_7',
        nameFi: 'Akaa',
        nameSv: 'Akaa',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.86734, 61.16774],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.86734,
            lat: 61.16774,
          },
          {
            type: 'EUREF_FIN',
            lon: 331506.5678911173,
            lat: 6785507.903433684,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_42',
        nameFi: 'Hämeenkyrö',
        nameSv: 'Tavastkyro',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.19672, 61.63852],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.19672,
            lat: 61.63852,
          },
          {
            type: 'EUREF_FIN',
            lon: 298519.62185031903,
            lat: 6839799.567569034,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_48',
        nameFi: 'Ikaalinen',
        nameSv: 'Ikalis',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.06435, 61.7702],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.06435,
            lat: 61.7702,
          },
          {
            type: 'EUREF_FIN',
            lon: 292400.6648662917,
            lat: 6854866.1565034175,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_63',
        nameFi: 'Juupajoki',
        nameSv: 'Juupajoki',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.3697, 61.7975],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.3697,
            lat: 61.7975,
          },
          {
            type: 'EUREF_FIN',
            lon: 361345.4575359357,
            lat: 6854427.295359763,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_73',
        nameFi: 'Kangasala',
        nameSv: 'Kangasala',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.07302, 61.46361],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.07302,
            lat: 61.46361,
          },
          {
            type: 'EUREF_FIN',
            lon: 344041.19669264567,
            lat: 6817928.887098871,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_93',
        nameFi: 'Kihniö',
        nameSv: 'Kihniö',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.1791, 62.2103],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.1791,
            lat: 62.2103,
          },
          {
            type: 'EUREF_FIN',
            lon: 301335.7395218435,
            lat: 6903471.4464669805,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_137',
        nameFi: 'Lempäälä',
        nameSv: 'Lempäälä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.75254, 61.31415],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.75254,
            lat: 61.31415,
          },
          {
            type: 'EUREF_FIN',
            lon: 326145.8999144733,
            lat: 6802103.534943226,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_171',
        nameFi: 'Mänttä-Vilppula',
        nameSv: 'Mänttä-Vilppula',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.62364, 62.02992],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.62364,
            lat: 62.02992,
          },
          {
            type: 'EUREF_FIN',
            lon: 375674.75192056206,
            lat: 6879790.803249657,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_175',
        nameFi: 'Nokia',
        nameSv: 'Nokia',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.51101, 61.47826],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.51101,
            lat: 61.47826,
          },
          {
            type: 'EUREF_FIN',
            lon: 314201.36030769686,
            lat: 6821032.740043406,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_182',
        nameFi: 'Orivesi',
        nameSv: 'Orivesi',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.3573, 61.6774],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.3573,
            lat: 61.6774,
          },
          {
            type: 'EUREF_FIN',
            lon: 360148.47376801574,
            lat: 6841082.91678723,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_189',
        nameFi: 'Parkano',
        nameSv: 'Parkano',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.0254, 62.0103],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.0254,
            lat: 62.0103,
          },
          {
            type: 'EUREF_FIN',
            lon: 291984.9431389234,
            lat: 6881702.331430729,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_199',
        nameFi: 'Pirkkala',
        nameSv: 'Birkala',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.63461, 61.46177],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.63461,
            lat: 61.46177,
          },
          {
            type: 'EUREF_FIN',
            lon: 320684.40278818976,
            lat: 6818851.48386624,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_207',
        nameFi: 'Punkalaidun',
        nameSv: 'Punkalaidun',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.10434, 61.11223],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.10434,
            lat: 61.11223,
          },
          {
            type: 'EUREF_FIN',
            lon: 290130.05624433927,
            lat: 6781538.63420444,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_215',
        nameFi: 'Pälkäne',
        nameSv: 'Pälkäne',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.26924, 61.33959],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.26924,
            lat: 61.33959,
          },
          {
            type: 'EUREF_FIN',
            lon: 353913.7882938734,
            lat: 6803668.982542808,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_231',
        nameFi: 'Ruovesi',
        nameSv: 'Ruovesi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.0718, 61.9852],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.0718,
            lat: 61.9852,
          },
          {
            type: 'EUREF_FIN',
            lon: 346591.7600518381,
            lat: 6875993.26709555,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_264',
        nameFi: 'Sastamala',
        nameSv: 'Sastamala',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.91388, 61.33962],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.91388,
            lat: 61.33962,
          },
          {
            type: 'EUREF_FIN',
            lon: 281462.3534304345,
            lat: 6807458.837630083,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_270',
        nameFi: 'Tampere',
        nameSv: 'Tammerfors',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.75725, 61.49748],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.75725,
            lat: 61.49748,
          },
          {
            type: 'EUREF_FIN',
            lon: 327412.9218793077,
            lat: 6822494.628287048,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_284',
        nameFi: 'Urjala',
        nameSv: 'Urjala',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.5486, 61.0803],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.5486,
            lat: 61.0803,
          },
          {
            type: 'EUREF_FIN',
            lon: 313859.5119564022,
            lat: 6776641.030617914,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_291',
        nameFi: 'Valkeakoski',
        nameSv: 'Valkeakoski',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.03187, 61.26442],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.03187,
            lat: 61.26442,
          },
          {
            type: 'EUREF_FIN',
            lon: 340840.66260356794,
            lat: 6795856.23422874,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_296',
        nameFi: 'Vesilahti',
        nameSv: 'Vesilahti',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.6157, 61.3095],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.6157,
            lat: 61.3095,
          },
          {
            type: 'EUREF_FIN',
            lon: 318797.7753081886,
            lat: 6801958.177374511,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_303',
        nameFi: 'Virrat',
        nameSv: 'Virdois',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.7701, 62.2409],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.7701,
            lat: 62.2409,
          },
          {
            type: 'EUREF_FIN',
            lon: 332214.20277117816,
            lat: 6905203.682958984,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_308',
        nameFi: 'Ylöjärvi',
        nameSv: 'Ylöjärvi',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.59603, 61.55591],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.59603,
            lat: 61.55591,
          },
          {
            type: 'EUREF_FIN',
            lon: 319177.75760714646,
            lat: 6829434.662468344,
          },
        ],
        regionId: 'R_5',
        regionNameFi: 'Pirkanmaa',
        regionNameSv: 'Birkaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.70185,
            lat: 61.71671,
          },
          {
            type: 'EUREF_FIN',
            lon: 325703.0624726041,
            lat: 6847041.461558179,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.70185, 61.71671],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_13',
    regionNameFi: 'Etelä-Pohjanmaa',
    regionNameSv: 'Södra Österbotten',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [23.04816, 62.73915],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 23.04816,
        lat: 62.73915,
      },
      {
        type: 'EUREF_FIN',
        lon: 298138.2109362448,
        lat: 6962718.3630645955,
      },
    ],
    municipalities: [
      {
        id: 'M_1',
        nameFi: 'Alajärvi',
        nameSv: 'Alajärvi',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.8159, 63.0],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.8159,
            lat: 63.0,
          },
          {
            type: 'EUREF_FIN',
            lon: 338765.9992598127,
            lat: 6989582.494257704,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_3',
        nameFi: 'Alavus',
        nameSv: 'Alavus',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.6186, 62.5864],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.6186,
            lat: 62.5864,
          },
          {
            type: 'EUREF_FIN',
            lon: 326362.90143384825,
            lat: 6944058.728348892,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_15',
        nameFi: 'Evijärvi',
        nameSv: 'Evijärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.4747, 63.3667],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.4747,
            lat: 63.3667,
          },
          {
            type: 'EUREF_FIN',
            lon: 323744.634706789,
            lat: 7031296.053769741,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_49',
        nameFi: 'Ilmajoki',
        nameSv: 'Ilmajoki',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.5796, 62.7313],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.5796,
            lat: 62.7313,
          },
          {
            type: 'EUREF_FIN',
            lon: 274170.1094954711,
            lat: 6963400.811125813,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_53',
        nameFi: 'Isojoki',
        nameSv: 'Storå',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.9576, 62.114],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.9576,
            lat: 62.114,
          },
          {
            type: 'EUREF_FIN',
            lon: 237071.36984782235,
            lat: 6897115.713556496,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_78',
        nameFi: 'Karijoki',
        nameSv: 'Bötom',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.7066, 62.3078],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.7066,
            lat: 62.3078,
          },
          {
            type: 'EUREF_FIN',
            lon: 225769.2331627183,
            lat: 6919698.309990639,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_83',
        nameFi: 'Kauhajoki',
        nameSv: 'Kauhajoki',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.1758, 62.4235],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.1758,
            lat: 62.4235,
          },
          {
            type: 'EUREF_FIN',
            lon: 251004.17910494763,
            lat: 6930659.400548966,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_84',
        nameFi: 'Kauhava',
        nameSv: 'Kauhava',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.065, 63.1011],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.065,
            lat: 63.1011,
          },
          {
            type: 'EUREF_FIN',
            lon: 301464.0666235851,
            lat: 7002936.910799693,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_115',
        nameFi: 'Kuortane',
        nameSv: 'Kuortane',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.5068, 62.8069],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.5068,
            lat: 62.8069,
          },
          {
            type: 'EUREF_FIN',
            lon: 321957.04732840246,
            lat: 6968904.55768514,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_116',
        nameFi: 'Kurikka',
        nameSv: 'Kurikka',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.39857, 62.61715],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.39857,
            lat: 62.61715,
          },
          {
            type: 'EUREF_FIN',
            lon: 264025.32115535263,
            lat: 6951354.671753299,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_130',
        nameFi: 'Lappajärvi',
        nameSv: 'Lappajärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.6323, 63.2184],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.6323,
            lat: 63.2184,
          },
          {
            type: 'EUREF_FIN',
            lon: 330750.9254364619,
            lat: 7014365.337740425,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_133',
        nameFi: 'Lapua',
        nameSv: 'Lappo',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.00706, 62.96901],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.00706,
            lat: 62.96901,
          },
          {
            type: 'EUREF_FIN',
            lon: 297629.24152885575,
            lat: 6988421.29947951,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_243',
        nameFi: 'Seinäjoki',
        nameSv: 'Seinäjoki',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.84074, 62.78935],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.84074,
            lat: 62.78935,
          },
          {
            type: 'EUREF_FIN',
            lon: 287914.7299299283,
            lat: 6968969.844122938,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_252',
        nameFi: 'Soini',
        nameSv: 'Soini',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.20715, 62.87363],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.20715,
            lat: 62.87363,
          },
          {
            type: 'EUREF_FIN',
            lon: 357956.7215610359,
            lat: 6974591.541293519,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_273',
        nameFi: 'Teuva',
        nameSv: 'Östermark',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.7391, 62.4795],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.7391,
            lat: 62.4795,
          },
          {
            type: 'EUREF_FIN',
            lon: 229007.28948735754,
            lat: 6938643.36984222,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_301',
        nameFi: 'Vimpeli',
        nameSv: 'Vimpeli',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.82198, 63.16114],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.82198,
            lat: 63.16114,
          },
          {
            type: 'EUREF_FIN',
            lon: 339961.73679181066,
            lat: 7007504.907359089,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_310',
        nameFi: 'Ähtäri',
        nameSv: 'Etseri',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.06946, 62.55019],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.06946,
            lat: 62.55019,
          },
          {
            type: 'EUREF_FIN',
            lon: 349319.16135191935,
            lat: 6938895.013406862,
          },
        ],
        regionId: 'R_13',
        regionNameFi: 'Etelä-Pohjanmaa',
        regionNameSv: 'Södra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.04816,
            lat: 62.73915,
          },
          {
            type: 'EUREF_FIN',
            lon: 298138.2109362448,
            lat: 6962718.3630645955,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.04816, 62.73915],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_16',
    regionNameFi: 'Pohjois-Pohjanmaa',
    regionNameSv: 'Norra Österbotten',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [26.76917, 64.95752],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 26.76917,
        lat: 64.95752,
      },
      {
        type: 'EUREF_FIN',
        lon: 489097.5636285604,
        lat: 7203740.180697648,
      },
    ],
    municipalities: [
      {
        id: 'M_2',
        nameFi: 'Alavieska',
        nameSv: 'Alavieska',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.3077, 64.1653],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.3077,
            lat: 64.1653,
          },
          {
            type: 'EUREF_FIN',
            lon: 369122.1395941578,
            lat: 7118202.528907884,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_20',
        nameFi: 'Haapajärvi',
        nameSv: 'Haapajärvi',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.3181, 63.74864],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.3181,
            lat: 63.74864,
          },
          {
            type: 'EUREF_FIN',
            lon: 417003.6790633469,
            lat: 7070097.551867777,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_21',
        nameFi: 'Haapavesi',
        nameSv: 'Haapavesi',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.3668, 64.13723],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.3668,
            lat: 64.13723,
          },
          {
            type: 'EUREF_FIN',
            lon: 420515.3206903661,
            lat: 7113325.700307524,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_22',
        nameFi: 'Hailuoto',
        nameSv: 'Karlö',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.71498, 65.00947],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.71498,
            lat: 65.00947,
          },
          {
            type: 'EUREF_FIN',
            lon: 392302.59496499033,
            lat: 7211456.833831512,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_45',
        nameFi: 'Ii',
        nameSv: 'Ii',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.36817, 65.32275],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.36817,
            lat: 65.32275,
          },
          {
            type: 'EUREF_FIN',
            lon: 423984.7412879398,
            lat: 7245408.927711273,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_72',
        nameFi: 'Kalajoki',
        nameSv: 'Kalajoki',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.94842, 64.25712],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.94842,
            lat: 64.25712,
          },
          {
            type: 'EUREF_FIN',
            lon: 352157.2119901326,
            lat: 7129213.736148375,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_90',
        nameFi: 'Kempele',
        nameSv: 'Kempele',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.50424, 64.91345],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.50424,
            lat: 64.91345,
          },
          {
            type: 'EUREF_FIN',
            lon: 429241.96109688276,
            lat: 7199645.354634497,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_118',
        nameFi: 'Kuusamo',
        nameSv: 'Kuusamo',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [29.1888, 65.9645],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 29.1888,
            lat: 65.9645,
          },
          {
            type: 'EUREF_FIN',
            lon: 599464.0259978417,
            lat: 7317688.525182734,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_122',
        nameFi: 'Kärsämäki',
        nameSv: 'Kärsämäki',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.75968, 63.97893],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.75968,
            lat: 63.97893,
          },
          {
            type: 'EUREF_FIN',
            lon: 439290.49584310374,
            lat: 7095256.810109639,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_142',
        nameFi: 'Liminka',
        nameSv: 'Limingo',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.41513, 64.80975],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.41513,
            lat: 64.80975,
          },
          {
            type: 'EUREF_FIN',
            lon: 424737.81211762887,
            lat: 7188193.880807151,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_148',
        nameFi: 'Lumijoki',
        nameSv: 'Lumijoki',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.18638, 64.83726],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.18638,
            lat: 64.83726,
          },
          {
            type: 'EUREF_FIN',
            lon: 413964.9446492351,
            lat: 7191550.316517609,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_158',
        nameFi: 'Merijärvi',
        nameSv: 'Merijärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.44649, 64.29717],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.44649,
            lat: 64.29717,
          },
          {
            type: 'EUREF_FIN',
            lon: 376455.95794036315,
            lat: 7132610.490123254,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_162',
        nameFi: 'Muhos',
        nameSv: 'Muhos',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.99423, 64.80796],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.99423,
            lat: 64.80796,
          },
          {
            type: 'EUREF_FIN',
            lon: 452232.58123663184,
            lat: 7187431.774010397,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_174',
        nameFi: 'Nivala',
        nameSv: 'Nivala',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.9606, 63.9299],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.9606,
            lat: 63.9299,
          },
          {
            type: 'EUREF_FIN',
            lon: 400011.65244447277,
            lat: 7090801.451680905,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_183',
        nameFi: 'Oulainen',
        nameSv: 'Oulainen',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.8159, 64.2676],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.8159,
            lat: 64.2676,
          },
          {
            type: 'EUREF_FIN',
            lon: 394209.73811127304,
            lat: 7128650.813743715,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_184',
        nameFi: 'Oulu',
        nameSv: 'Uleåborg',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.47139, 65.01265],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.47139,
            lat: 65.01265,
          },
          {
            type: 'EUREF_FIN',
            lon: 427955.44305349496,
            lat: 7210735.565697321,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_205',
        nameFi: 'Pudasjärvi',
        nameSv: 'Pudasjärvi',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.9935, 65.3596],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.9935,
            lat: 65.3596,
          },
          {
            type: 'EUREF_FIN',
            lon: 499697.60838840186,
            lat: 7248532.272384,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_211',
        nameFi: 'Pyhäjoki',
        nameSv: 'Pyhäjoki',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.25916, 64.46552],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.25916,
            lat: 64.46552,
          },
          {
            type: 'EUREF_FIN',
            lon: 368205.9765794238,
            lat: 7151735.149663966,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_212',
        nameFi: 'Pyhäjärvi',
        nameSv: 'Pyhäjärvi',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.98481, 63.68144],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.98481,
            lat: 63.68144,
          },
          {
            type: 'EUREF_FIN',
            lon: 449781.9179605799,
            lat: 7061915.722672649,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_213',
        nameFi: 'Pyhäntä',
        nameSv: 'Pyhäntä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.3304, 64.097],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.3304,
            lat: 64.097,
          },
          {
            type: 'EUREF_FIN',
            lon: 467362.4553965828,
            lat: 7107994.76806084,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_218',
        nameFi: 'Raahe',
        nameSv: 'Brahestad',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.47914, 64.68413],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.47914,
            lat: 64.68413,
          },
          {
            type: 'EUREF_FIN',
            lon: 379747.3869232406,
            lat: 7175644.120661361,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_226',
        nameFi: 'Reisjärvi',
        nameSv: 'Reisjärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.9388, 63.6045],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.9388,
            lat: 63.6045,
          },
          {
            type: 'EUREF_FIN',
            lon: 397773.01216782915,
            lat: 7054591.065018538,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_244',
        nameFi: 'Sievi',
        nameSv: 'Sievi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.5135, 63.90565],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.5135,
            lat: 63.90565,
          },
          {
            type: 'EUREF_FIN',
            lon: 377993.4479212499,
            lat: 7088878.619450633,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_246',
        nameFi: 'Siikajoki',
        nameSv: 'Siikajoki',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.75979, 64.81409],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.75979,
            lat: 64.81409,
          },
          {
            type: 'EUREF_FIN',
            lon: 393642.82274438237,
            lat: 7189617.431642267,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_265',
        nameFi: 'Siikalatva',
        nameSv: 'Siikalatva',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.27649, 64.35103],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.27649,
            lat: 64.35103,
          },
          {
            type: 'EUREF_FIN',
            lon: 465056.763554612,
            lat: 7136330.241202724,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_267',
        nameFi: 'Taivalkoski',
        nameSv: 'Taivalkoski',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.2434, 65.575],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.2434,
            lat: 65.575,
          },
          {
            type: 'EUREF_FIN',
            lon: 557368.2652382923,
            lat: 7273106.468761701,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_282',
        nameFi: 'Tyrnävä',
        nameSv: 'Tyrnävä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.65294, 64.7645],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.65294,
            lat: 64.7645,
          },
          {
            type: 'EUREF_FIN',
            lon: 435922.2047509813,
            lat: 7182890.401830523,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_285',
        nameFi: 'Utajärvi',
        nameSv: 'Utajärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.4205, 64.7623],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.4205,
            lat: 64.7623,
          },
          {
            type: 'EUREF_FIN',
            lon: 472430.42038227356,
            lat: 7182089.929868699,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_263',
        nameFi: 'Vaala',
        nameSv: 'Vaala',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.84043, 64.55989],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.84043,
            lat: 64.55989,
          },
          {
            type: 'EUREF_FIN',
            lon: 492351.6395757786,
            lat: 7159416.277310895,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_307',
        nameFi: 'Ylivieska',
        nameSv: 'Ylivieska',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.5335, 64.0723],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.5335,
            lat: 64.0723,
          },
          {
            type: 'EUREF_FIN',
            lon: 379692.9087479965,
            lat: 7107400.167074243,
          },
        ],
        regionId: 'R_16',
        regionNameFi: 'Pohjois-Pohjanmaa',
        regionNameSv: 'Norra Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 26.76917,
            lat: 64.95752,
          },
          {
            type: 'EUREF_FIN',
            lon: 489097.5636285604,
            lat: 7203740.180697648,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [26.76917, 64.95752],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_6',
    regionNameFi: 'Päijät-Häme',
    regionNameSv: 'Päijänne-Tavastland',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [25.68079, 61.23716],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 25.68079,
        lat: 61.23716,
      },
      {
        type: 'EUREF_FIN',
        lon: 429185.358697011,
        lat: 6789918.473527115,
      },
    ],
    municipalities: [
      {
        id: 'M_4',
        nameFi: 'Asikkala',
        nameSv: 'Asikkala',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.54703, 61.17204],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.54703,
            lat: 61.17204,
          },
          {
            type: 'EUREF_FIN',
            lon: 421844.7602553712,
            lat: 6782818.423961507,
          },
        ],
        regionId: 'R_6',
        regionNameFi: 'Päijät-Häme',
        regionNameSv: 'Päijänne-Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.68079,
            lat: 61.23716,
          },
          {
            type: 'EUREF_FIN',
            lon: 429185.358697011,
            lat: 6789918.473527115,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.68079, 61.23716],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_29',
        nameFi: 'Hartola',
        nameSv: 'Hartola',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.02021, 61.57982],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.02021,
            lat: 61.57982,
          },
          {
            type: 'EUREF_FIN',
            lon: 447977.294737057,
            lat: 6827764.333143695,
          },
        ],
        regionId: 'R_6',
        regionNameFi: 'Päijät-Häme',
        regionNameSv: 'Päijänne-Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.68079,
            lat: 61.23716,
          },
          {
            type: 'EUREF_FIN',
            lon: 429185.358697011,
            lat: 6789918.473527115,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.68079, 61.23716],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_44',
        nameFi: 'Heinola',
        nameSv: 'Heinola',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.03387, 61.20291],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.03387,
            lat: 61.20291,
          },
          {
            type: 'EUREF_FIN',
            lon: 448081.0206922912,
            lat: 6785772.340923617,
          },
        ],
        regionId: 'R_6',
        regionNameFi: 'Päijät-Häme',
        regionNameSv: 'Päijänne-Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.68079,
            lat: 61.23716,
          },
          {
            type: 'EUREF_FIN',
            lon: 429185.358697011,
            lat: 6789918.473527115,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.68079, 61.23716],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_36',
        nameFi: 'Hollola',
        nameSv: 'Hollola',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.51643, 60.98873],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.51643,
            lat: 60.98873,
          },
          {
            type: 'EUREF_FIN',
            lon: 419736.19803006994,
            lat: 6762440.877515158,
          },
        ],
        regionId: 'R_6',
        regionNameFi: 'Päijät-Häme',
        regionNameSv: 'Päijänne-Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.68079,
            lat: 61.23716,
          },
          {
            type: 'EUREF_FIN',
            lon: 429185.358697011,
            lat: 6789918.473527115,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.68079, 61.23716],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_121',
        nameFi: 'Kärkölä',
        nameSv: 'Kärkölä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.27838, 60.86869],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.27838,
            lat: 60.86869,
          },
          {
            type: 'EUREF_FIN',
            lon: 406508.01359779114,
            lat: 6749388.671159106,
          },
        ],
        regionId: 'R_6',
        regionNameFi: 'Päijät-Häme',
        regionNameSv: 'Päijänne-Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.68079,
            lat: 61.23716,
          },
          {
            type: 'EUREF_FIN',
            lon: 429185.358697011,
            lat: 6789918.473527115,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.68079, 61.23716],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_126',
        nameFi: 'Lahti',
        nameSv: 'Lahtis',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.66164, 60.98257],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.66164,
            lat: 60.98257,
          },
          {
            type: 'EUREF_FIN',
            lon: 427577.50621751335,
            lat: 6761585.642560989,
          },
        ],
        regionId: 'R_6',
        regionNameFi: 'Päijät-Häme',
        regionNameSv: 'Päijänne-Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.68079,
            lat: 61.23716,
          },
          {
            type: 'EUREF_FIN',
            lon: 429185.358697011,
            lat: 6789918.473527115,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.68079, 61.23716],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_180',
        nameFi: 'Orimattila',
        nameSv: 'Orimattila',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.7335, 60.8035],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.7335,
            lat: 60.8035,
          },
          {
            type: 'EUREF_FIN',
            lon: 431080.4936636082,
            lat: 6741565.593793109,
          },
        ],
        regionId: 'R_6',
        regionNameFi: 'Päijät-Häme',
        regionNameSv: 'Päijänne-Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.68079,
            lat: 61.23716,
          },
          {
            type: 'EUREF_FIN',
            lon: 429185.358697011,
            lat: 6789918.473527115,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.68079, 61.23716],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_185',
        nameFi: 'Padasjoki',
        nameSv: 'Padasjoki',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.27682, 61.35494],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.27682,
            lat: 61.35494,
          },
          {
            type: 'EUREF_FIN',
            lon: 407849.6182634774,
            lat: 6803539.4731709035,
          },
        ],
        regionId: 'R_6',
        regionNameFi: 'Päijät-Häme',
        regionNameSv: 'Päijänne-Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.68079,
            lat: 61.23716,
          },
          {
            type: 'EUREF_FIN',
            lon: 429185.358697011,
            lat: 6789918.473527115,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.68079, 61.23716],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_261',
        nameFi: 'Sysmä',
        nameSv: 'Sysmä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.683, 61.5037],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.683,
            lat: 61.5037,
          },
          {
            type: 'EUREF_FIN',
            lon: 429903.0145712343,
            lat: 6819601.911781604,
          },
        ],
        regionId: 'R_6',
        regionNameFi: 'Päijät-Häme',
        regionNameSv: 'Päijänne-Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.68079,
            lat: 61.23716,
          },
          {
            type: 'EUREF_FIN',
            lon: 429185.358697011,
            lat: 6789918.473527115,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.68079, 61.23716],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_1',
    regionNameFi: 'Uusimaa',
    regionNameSv: 'Nyland',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [24.74495, 60.28761],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 24.74495,
        lat: 60.28761,
      },
      {
        type: 'EUREF_FIN',
        lon: 375328.2692726671,
        lat: 6685573.626630756,
      },
    ],
    municipalities: [
      {
        id: 'M_5',
        nameFi: 'Askola',
        nameSv: 'Askola',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.59785, 60.5304],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.59785,
            lat: 60.5304,
          },
          {
            type: 'EUREF_FIN',
            lon: 423050.5501043039,
            lat: 6711302.809192621,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_12',
        nameFi: 'Espoo',
        nameSv: 'Esbo',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.65408, 60.20524],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.65408,
            lat: 60.20524,
          },
          {
            type: 'EUREF_FIN',
            lon: 369979.7348998089,
            lat: 6676579.060942554,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_27',
        nameFi: 'Hanko',
        nameSv: 'Hangö',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.96929, 59.8231],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.96929,
            lat: 59.8231,
          },
          {
            type: 'EUREF_FIN',
            lon: 274069.4189278061,
            lat: 6638584.796820429,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_33',
        nameFi: 'Helsinki',
        nameSv: 'Helsingfors',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.93813, 60.16981],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.93813,
            lat: 60.16981,
          },
          {
            type: 'EUREF_FIN',
            lon: 385596.02595120465,
            lat: 6672108.828002105,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_41',
        nameFi: 'Hyvinkää',
        nameSv: 'Hyvinge',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.86022, 60.63302],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.86022,
            lat: 60.63302,
          },
          {
            type: 'EUREF_FIN',
            lon: 382949.5858159631,
            lat: 6723817.729195627,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_52',
        nameFi: 'Inkoo',
        nameSv: 'Ingå',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.00459, 60.04588],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.00459,
            lat: 60.04588,
          },
          {
            type: 'EUREF_FIN',
            lon: 333192.4682483707,
            lat: 6660299.952395522,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_68',
        nameFi: 'Järvenpää',
        nameSv: 'Träskända',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.08839, 60.47263],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.08839,
            lat: 60.47263,
          },
          {
            type: 'EUREF_FIN',
            lon: 394909.3621788129,
            lat: 6705574.441252701,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_79',
        nameFi: 'Karkkila',
        nameSv: 'Högfors',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.2106, 60.53414],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.2106,
            lat: 60.53414,
          },
          {
            type: 'EUREF_FIN',
            lon: 346959.78161997895,
            lat: 6714143.960298879,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_85',
        nameFi: 'Kauniainen',
        nameSv: 'Grankulla',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.72758, 60.20993],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.72758,
            lat: 60.20993,
          },
          {
            type: 'EUREF_FIN',
            lon: 374070.2804266419,
            lat: 6676958.668669536,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_91',
        nameFi: 'Kerava',
        nameSv: 'Kervo',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.1048, 60.40322],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.1048,
            lat: 60.40322,
          },
          {
            type: 'EUREF_FIN',
            lon: 395588.89266819565,
            lat: 6697819.981138934,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_95',
        nameFi: 'Kirkkonummi',
        nameSv: 'Kyrkslätt',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.43823, 60.12426],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.43823,
            lat: 60.12426,
          },
          {
            type: 'EUREF_FIN',
            lon: 357670.4784041741,
            lat: 6668009.588331912,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_132',
        nameFi: 'Lapinjärvi',
        nameSv: 'Lappträsk',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.1984, 60.625],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.1984,
            lat: 60.625,
          },
          {
            type: 'EUREF_FIN',
            lon: 456135.375990295,
            lat: 6721286.7211749805,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_152',
        nameFi: 'Lohja',
        nameSv: 'Lojo',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.06555, 60.2496],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.06555,
            lat: 60.2496,
          },
          {
            type: 'EUREF_FIN',
            lon: 337593.71959221805,
            lat: 6682821.007329098,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_146',
        nameFi: 'Loviisa',
        nameSv: 'Lovisa',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.2255, 60.45699],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.2255,
            lat: 60.45699,
          },
          {
            type: 'EUREF_FIN',
            lon: 457398.031007605,
            lat: 6702557.401764115,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_168',
        nameFi: 'Myrskylä',
        nameSv: 'Mörskom',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.8535, 60.6696],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.8535,
            lat: 60.6696,
          },
          {
            type: 'EUREF_FIN',
            lon: 437349.7381648572,
            lat: 6726533.305323053,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_169',
        nameFi: 'Mäntsälä',
        nameSv: 'Mäntsälä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.32035, 60.63568],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.32035,
            lat: 60.63568,
          },
          {
            type: 'EUREF_FIN',
            lon: 408122.96861620987,
            lat: 6723382.647974237,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_178',
        nameFi: 'Nurmijärvi',
        nameSv: 'Nurmijärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.80759, 60.46381],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.80759,
            lat: 60.46381,
          },
          {
            type: 'EUREF_FIN',
            lon: 379443.3170119131,
            lat: 6705073.62984501,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_203',
        nameFi: 'Pornainen',
        nameSv: 'Borgnäs',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.37518, 60.47603],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.37518,
            lat: 60.47603,
          },
          {
            type: 'EUREF_FIN',
            lon: 410682.6042549012,
            lat: 6705529.598552363,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_217',
        nameFi: 'Porvoo',
        nameSv: 'Borgå',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.66481, 60.39369],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.66481,
            lat: 60.39369,
          },
          {
            type: 'EUREF_FIN',
            lon: 426416.219006511,
            lat: 6696002.351965187,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_206',
        nameFi: 'Pukkila',
        nameSv: 'Pukkila',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.5831, 60.6458],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.5831,
            lat: 60.6458,
          },
          {
            type: 'EUREF_FIN',
            lon: 422518.0548936548,
            lat: 6724171.095954239,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_234',
        nameFi: 'Raasepori',
        nameSv: 'Raseborg',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.4358, 59.97428],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.4358,
            lat: 59.97428,
          },
          {
            type: 'EUREF_FIN',
            lon: 301106.96287884517,
            lat: 6653905.496219818,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_249',
        nameFi: 'Sipoo',
        nameSv: 'Sibbo',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.26882, 60.37718],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.26882,
            lat: 60.37718,
          },
          {
            type: 'EUREF_FIN',
            lon: 404547.4820095397,
            lat: 6694671.777348379,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_250',
        nameFi: 'Siuntio',
        nameSv: 'Sjundeå',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.22709, 60.13857],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.22709,
            lat: 60.13857,
          },
          {
            type: 'EUREF_FIN',
            lon: 346011.0765721968,
            lat: 6670076.0526190195,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_281',
        nameFi: 'Tuusula',
        nameSv: 'Tusby',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.02628, 60.40337],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.02628,
            lat: 60.40337,
          },
          {
            type: 'EUREF_FIN',
            lon: 391264.39702217514,
            lat: 6697963.701353093,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_34',
        nameFi: 'Vantaa',
        nameSv: 'Vanda',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.04007, 60.29441],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.04007,
            lat: 60.29441,
          },
          {
            type: 'EUREF_FIN',
            lon: 391663.1697646645,
            lat: 6685809.37337067,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_299',
        nameFi: 'Vihti',
        nameSv: 'Vichtis',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.32045, 60.41704],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.32045,
            lat: 60.41704,
          },
          {
            type: 'EUREF_FIN',
            lon: 352453.5530113843,
            lat: 6700858.66847948,
          },
        ],
        regionId: 'R_1',
        regionNameFi: 'Uusimaa',
        regionNameSv: 'Nyland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.74495,
            lat: 60.28761,
          },
          {
            type: 'EUREF_FIN',
            lon: 375328.2692726671,
            lat: 6685573.626630756,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.74495, 60.28761],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_2',
    regionNameFi: 'Varsinais-Suomi',
    regionNameSv: 'Egentliga Finland',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [22.33364, 60.39228],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 22.33364,
        lat: 60.39228,
      },
      {
        type: 'EUREF_FIN',
        lon: 242954.41072403453,
        lat: 6704207.920270735,
      },
    ],
    municipalities: [
      {
        id: 'M_6',
        nameFi: 'Aura',
        nameSv: 'Aura',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.5868, 60.6493],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.5868,
            lat: 60.6493,
          },
          {
            type: 'EUREF_FIN',
            lon: 258805.4366878218,
            lat: 6731828.376136681,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_69',
        nameFi: 'Kaarina',
        nameSv: 'S:t Karins',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.36826, 60.40717],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.36826,
            lat: 60.40717,
          },
          {
            type: 'EUREF_FIN',
            lon: 244975.93070415978,
            lat: 6705728.826932029,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_125',
        nameFi: 'Kemiönsaari',
        nameSv: 'Kimitoön',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.72753, 60.16484],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.72753,
            lat: 60.16484,
          },
          {
            type: 'EUREF_FIN',
            lon: 262989.0780115548,
            lat: 6677440.1685662465,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_106',
        nameFi: 'Koski Tl',
        nameSv: 'Koski Åbo l',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.14062, 60.65419],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.14062,
            lat: 60.65419,
          },
          {
            type: 'EUREF_FIN',
            lon: 289079.7986605746,
            lat: 6730466.049259652,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_117',
        nameFi: 'Kustavi',
        nameSv: 'Gustavs',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.35918, 60.5459],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.35918,
            lat: 60.5459,
          },
          {
            type: 'EUREF_FIN',
            lon: 190824.56082567642,
            lat: 6725477.479630877,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_128',
        nameFi: 'Laitila',
        nameSv: 'Laitila',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.6939, 60.8798],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.6939,
            lat: 60.8798,
          },
          {
            type: 'EUREF_FIN',
            lon: 212148.36571631022,
            lat: 6761055.406481503,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_141',
        nameFi: 'Lieto',
        nameSv: 'Lundo',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.45092, 60.50723],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.45092,
            lat: 60.50723,
          },
          {
            type: 'EUREF_FIN',
            lon: 250292.38845488708,
            lat: 6716537.569717652,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_144',
        nameFi: 'Loimaa',
        nameSv: 'Loimaa',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.05921, 60.85015],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.05921,
            lat: 60.85015,
          },
          {
            type: 'EUREF_FIN',
            lon: 285944.51104729396,
            lat: 6752529.328999659,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_156',
        nameFi: 'Marttila',
        nameSv: 'Marttila',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.8999, 60.5853],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.8999,
            lat: 60.5853,
          },
          {
            type: 'EUREF_FIN',
            lon: 275456.84901214554,
            lat: 6723600.532394482,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_157',
        nameFi: 'Masku',
        nameSv: 'Masku',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.09885, 60.57057],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.09885,
            lat: 60.57057,
          },
          {
            type: 'EUREF_FIN',
            lon: 231515.8020379413,
            lat: 6724967.546049328,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_167',
        nameFi: 'Mynämäki',
        nameSv: 'Mynämäki',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.98942, 60.67877],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.98942,
            lat: 60.67877,
          },
          {
            type: 'EUREF_FIN',
            lon: 226447.98964280594,
            lat: 6737446.8531676205,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_172',
        nameFi: 'Naantali',
        nameSv: 'Nådendal',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.02423, 60.46742],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.02423,
            lat: 60.46742,
          },
          {
            type: 'EUREF_FIN',
            lon: 226564.4094612123,
            lat: 6713808.674781686,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_176',
        nameFi: 'Nousiainen',
        nameSv: 'Nousis',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.08239, 60.59892],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.08239,
            lat: 60.59892,
          },
          {
            type: 'EUREF_FIN',
            lon: 230851.4734103931,
            lat: 6728186.438687538,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_181',
        nameFi: 'Oripää',
        nameSv: 'Oripää',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.69736, 60.85598],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.69736,
            lat: 60.85598,
          },
          {
            type: 'EUREF_FIN',
            lon: 266350.8167815819,
            lat: 6754413.540307287,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_186',
        nameFi: 'Paimio',
        nameSv: 'Pemar',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.69153, 60.45504],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.69153,
            lat: 60.45504,
          },
          {
            type: 'EUREF_FIN',
            lon: 263106.18301049026,
            lat: 6709843.836827632,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_153',
        nameFi: 'Parainen',
        nameSv: 'Pargas',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.29927, 60.30188],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.29927,
            lat: 60.30188,
          },
          {
            type: 'EUREF_FIN',
            lon: 240345.0920968028,
            lat: 6694291.7773417765,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_214',
        nameFi: 'Pyhäranta',
        nameSv: 'Pyhäranta',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.4446, 60.9501],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.4446,
            lat: 60.9501,
          },
          {
            type: 'EUREF_FIN',
            lon: 199309.8560411989,
            lat: 6769987.589455129,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_216',
        nameFi: 'Pöytyä',
        nameSv: 'Pöytyä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.60171, 60.71744],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.60171,
            lat: 60.71744,
          },
          {
            type: 'EUREF_FIN',
            lon: 260127.67864917067,
            lat: 6739351.432529444,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_219',
        nameFi: 'Raisio',
        nameSv: 'Reso',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.16229, 60.48544],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.16229,
            lat: 60.48544,
          },
          {
            type: 'EUREF_FIN',
            lon: 234289.38169157802,
            lat: 6715245.981503758,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_232',
        nameFi: 'Rusko',
        nameSv: 'Rusko',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.22217, 60.5422],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.22217,
            lat: 60.5422,
          },
          {
            type: 'EUREF_FIN',
            lon: 238033.4454993309,
            lat: 6721315.915172279,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_237',
        nameFi: 'Salo',
        nameSv: 'Salo',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.1262, 60.38574],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.1262,
            lat: 60.38574,
          },
          {
            type: 'EUREF_FIN',
            lon: 286531.9799900785,
            lat: 6700648.691261872,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_239',
        nameFi: 'Sauvo',
        nameSv: 'Sagu',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.69641, 60.34305],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.69641,
            lat: 60.34305,
          },
          {
            type: 'EUREF_FIN',
            lon: 262559.3004116433,
            lat: 6697371.491772083,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_253',
        nameFi: 'Somero',
        nameSv: 'Somero',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.5145, 60.62849],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.5145,
            lat: 60.62849,
          },
          {
            type: 'EUREF_FIN',
            lon: 309347.20211893093,
            lat: 6726463.95814774,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_268',
        nameFi: 'Taivassalo',
        nameSv: 'Tövsala',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.6133, 60.5616],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.6133,
            lat: 60.5616,
          },
          {
            type: 'EUREF_FIN',
            lon: 204874.4387970089,
            lat: 6726053.17349813,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_278',
        nameFi: 'Turku',
        nameSv: 'Åbo',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.26883, 60.45146],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.26883,
            lat: 60.45146,
          },
          {
            type: 'EUREF_FIN',
            lon: 239862.08550474787,
            lat: 6711042.365839141,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_289',
        nameFi: 'Uusikaupunki',
        nameSv: 'Nystad',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.40893, 60.80031],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.40893,
            lat: 60.80031,
          },
          {
            type: 'EUREF_FIN',
            lon: 195959.2660915822,
            lat: 6753509.949474977,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_294',
        nameFi: 'Vehmaa',
        nameSv: 'Vehmaa',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.71102, 60.68337],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.71102,
            lat: 60.68337,
          },
          {
            type: 'EUREF_FIN',
            lon: 211311.99260256282,
            lat: 6739150.654987186,
          },
        ],
        regionId: 'R_2',
        regionNameFi: 'Varsinais-Suomi',
        regionNameSv: 'Egentliga Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.33364,
            lat: 60.39228,
          },
          {
            type: 'EUREF_FIN',
            lon: 242954.41072403453,
            lat: 6704207.920270735,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.33364, 60.39228],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_19',
    regionNameFi: 'Ahvenanmaa',
    regionNameSv: 'Åland',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [20.25698, 60.23314],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 20.25698,
        lat: 60.23314,
      },
      {
        type: 'EUREF_FIN',
        lon: 126977.66553686792,
        lat: 6696462.717771021,
      },
    ],
    municipalities: [
      {
        id: 'M_8',
        nameFi: 'Brändö',
        nameSv: 'Brändö',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.04561, 60.41162],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.04561,
            lat: 60.41162,
          },
          {
            type: 'EUREF_FIN',
            lon: 172315.37109579728,
            lat: 6712080.37497631,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_9',
        nameFi: 'Eckerö',
        nameSv: 'Eckerö',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [19.55961, 60.22313],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 19.55961,
            lat: 60.22313,
          },
          {
            type: 'EUREF_FIN',
            lon: 88379.11199840839,
            lat: 6699507.559064007,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_16',
        nameFi: 'Finström',
        nameSv: 'Finström',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [19.98102, 60.2347],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 19.98102,
            lat: 60.2347,
          },
          {
            type: 'EUREF_FIN',
            lon: 111768.36103293725,
            lat: 6698230.975137759,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_18',
        nameFi: 'Föglö',
        nameSv: 'Föglö',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [20.38883, 60.02946],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 20.38883,
            lat: 60.02946,
          },
          {
            type: 'EUREF_FIN',
            lon: 131982.6920394515,
            lat: 6673115.822258383,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_19',
        nameFi: 'Geta',
        nameSv: 'Geta',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [19.84449, 60.37454],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 19.84449,
            lat: 60.37454,
          },
          {
            type: 'EUREF_FIN',
            lon: 105928.20183196076,
            lat: 6714556.068535582,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_25',
        nameFi: 'Hammarland',
        nameSv: 'Hammarland',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [19.73017, 60.21679],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 19.73017,
            lat: 60.21679,
          },
          {
            type: 'EUREF_FIN',
            lon: 97710.86993181729,
            lat: 6697750.1211992,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_59',
        nameFi: 'Jomala',
        nameSv: 'Jomala',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [19.94864, 60.15222],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 19.94864,
            lat: 60.15222,
          },
          {
            type: 'EUREF_FIN',
            lon: 108999.84181857307,
            lat: 6689271.84274969,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_113',
        nameFi: 'Kumlinge',
        nameSv: 'Kumlinge',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [20.77896, 60.26012],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 20.77896,
            lat: 60.26012,
          },
          {
            type: 'EUREF_FIN',
            lon: 156076.6439630335,
            lat: 6696616.519139671,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_123',
        nameFi: 'Kökar',
        nameSv: 'Kökar',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [20.90927, 59.92056],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 20.90927,
            lat: 59.92056,
          },
          {
            type: 'EUREF_FIN',
            lon: 159778.84931423957,
            lat: 6658234.459733066,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_136',
        nameFi: 'Lemland',
        nameSv: 'Lemland',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [20.08644, 60.06885],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 20.08644,
            lat: 60.06885,
          },
          {
            type: 'EUREF_FIN',
            lon: 115649.3620509482,
            lat: 6679211.484815338,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_149',
        nameFi: 'Lumparland',
        nameSv: 'Lumparland',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [20.25751, 60.11701],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 20.25751,
            lat: 60.11701,
          },
          {
            type: 'EUREF_FIN',
            lon: 125685.03835167404,
            lat: 6683571.70783171,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_155',
        nameFi: 'Maarianhamina',
        nameSv: 'Mariehamn',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [19.93482, 60.09693],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 19.93482,
            lat: 60.09693,
          },
          {
            type: 'EUREF_FIN',
            lon: 107576.27966055908,
            lat: 6683220.003128297,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_238',
        nameFi: 'Saltvik',
        nameSv: 'Saltvik',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [20.062, 60.27553],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 20.062,
            lat: 60.27553,
          },
          {
            type: 'EUREF_FIN',
            lon: 116714.89375724684,
            lat: 6702286.54693726,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_256',
        nameFi: 'Sottunga',
        nameSv: 'Sottunga',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [20.6669, 60.13017],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 20.6669,
            lat: 60.13017,
          },
          {
            type: 'EUREF_FIN',
            lon: 148504.83565335535,
            lat: 6682779.233175207,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_258',
        nameFi: 'Sund',
        nameSv: 'Sund',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [5.09702, 60.25309],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 5.09702,
            lat: 60.25309,
          },
          {
            type: 'EUREF_FIN',
            lon: 0.0,
            lat: 0.0,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_304',
        nameFi: 'Vårdö',
        nameSv: 'Vårdö',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [20.37335, 60.24239],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 20.37335,
            lat: 60.24239,
          },
          {
            type: 'EUREF_FIN',
            lon: 133503.98440444586,
            lat: 6696835.939652481,
          },
        ],
        regionId: 'R_19',
        regionNameFi: 'Ahvenanmaa',
        regionNameSv: 'Åland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 20.25698,
            lat: 60.23314,
          },
          {
            type: 'EUREF_FIN',
            lon: 126977.66553686792,
            lat: 6696462.717771021,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [20.25698, 60.23314],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_9',
    regionNameFi: 'Etelä-Savo',
    regionNameSv: 'Södra Savolax',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [27.95704, 61.90355],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 27.95704,
        lat: 61.90355,
      },
      {
        type: 'EUREF_FIN',
        lon: 550284.2503341064,
        lat: 6863806.081535718,
      },
    ],
    municipalities: [
      {
        id: 'M_10',
        nameFi: 'Enonkoski',
        nameSv: 'Enonkoski',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.91498, 62.08948],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.91498,
            lat: 62.08948,
          },
          {
            type: 'EUREF_FIN',
            lon: 599996.7093112209,
            lat: 6885625.271818954,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_32',
        nameFi: 'Heinävesi',
        nameSv: 'Heinävesi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.6313, 62.4254],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.6313,
            lat: 62.4254,
          },
          {
            type: 'EUREF_FIN',
            lon: 584242.8552713399,
            lat: 6922634.738538435,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_35',
        nameFi: 'Hirvensalmi',
        nameSv: 'Hirvensalmi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.78185, 61.64049],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.78185,
            lat: 61.64049,
          },
          {
            type: 'EUREF_FIN',
            lon: 488439.5014486905,
            lat: 6834150.796938598,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_60',
        nameFi: 'Joroinen',
        nameSv: 'Jorois',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.82579, 62.17915],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.82579,
            lat: 62.17915,
          },
          {
            type: 'EUREF_FIN',
            lon: 542997.6120161158,
            lat: 6894411.94480123,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_64',
        nameFi: 'Juva',
        nameSv: 'Juva',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.85763, 61.89753],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.85763,
            lat: 61.89753,
          },
          {
            type: 'EUREF_FIN',
            lon: 545070.1914139808,
            lat: 6863062.529845551,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_74',
        nameFi: 'Kangasniemi',
        nameSv: 'Kangasniemi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.6419, 61.988],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.6419,
            lat: 61.988,
          },
          {
            type: 'EUREF_FIN',
            lon: 481236.38545574894,
            lat: 6872895.104511683,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_161',
        nameFi: 'Mikkeli',
        nameSv: 'S:t Michel',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.27217, 61.68852],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.27217,
            lat: 61.68852,
          },
          {
            type: 'EUREF_FIN',
            lon: 514400.81820138503,
            lat: 6839511.869421195,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_170',
        nameFi: 'Mäntyharju',
        nameSv: 'Mäntyharju',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.87862, 61.41765],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.87862,
            lat: 61.41765,
          },
          {
            type: 'EUREF_FIN',
            lon: 493521.43482843577,
            lat: 6809314.575398907,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_192',
        nameFi: 'Pertunmaa',
        nameSv: 'Pertunmaa',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.4795, 61.5028],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.4795,
            lat: 61.5028,
          },
          {
            type: 'EUREF_FIN',
            lon: 472294.60045138875,
            lat: 6818904.189532089,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_194',
        nameFi: 'Pieksämäki',
        nameSv: 'Pieksämäki',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.16023, 62.29992],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.16023,
            lat: 62.29992,
          },
          {
            type: 'EUREF_FIN',
            lon: 508309.79075989564,
            lat: 6907602.552265278,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_209',
        nameFi: 'Puumala',
        nameSv: 'Puumala',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.1777, 61.5238],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.1777,
            lat: 61.5238,
          },
          {
            type: 'EUREF_FIN',
            lon: 562642.929754075,
            lat: 6821698.788433714,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_220',
        nameFi: 'Rantasalmi',
        nameSv: 'Rantasalmi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.30375, 62.06455],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.30375,
            lat: 62.06455,
          },
          {
            type: 'EUREF_FIN',
            lon: 568139.070076847,
            lat: 6882056.06719574,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_241',
        nameFi: 'Savonlinna',
        nameSv: 'Nyslott',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.88626, 61.86835],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.88626,
            lat: 61.86835,
          },
          {
            type: 'EUREF_FIN',
            lon: 599213.2721735473,
            lat: 6860954.732021669,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_257',
        nameFi: 'Sulkava',
        nameSv: 'Sulkava',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.3705, 61.7861],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.3705,
            lat: 61.7861,
          },
          {
            type: 'EUREF_FIN',
            lon: 572282.0104197696,
            lat: 6851113.673369842,
          },
        ],
        regionId: 'R_9',
        regionNameFi: 'Etelä-Savo',
        regionNameSv: 'Södra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.95704,
            lat: 61.90355,
          },
          {
            type: 'EUREF_FIN',
            lon: 550284.2503341064,
            lat: 6863806.081535718,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.95704, 61.90355],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_18',
    regionNameFi: 'Lappi',
    regionNameSv: 'Lappland',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [25.2823, 67.73262],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 25.2823,
        lat: 67.73262,
      },
      {
        type: 'EUREF_FIN',
        lon: 427371.8183862089,
        lat: 7514061.8851661915,
      },
    ],
    municipalities: [
      {
        id: 'M_11',
        nameFi: 'Enontekiö',
        nameSv: 'Enontekis',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.6332, 68.3838],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.6332,
            lat: 68.3838,
          },
          {
            type: 'EUREF_FIN',
            lon: 361644.17260230787,
            lat: 7589436.098171463,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_51',
        nameFi: 'Inari',
        nameSv: 'Enare',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.03046, 68.90576],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.03046,
            lat: 68.90576,
          },
          {
            type: 'EUREF_FIN',
            lon: 501223.43781998986,
            lat: 7643854.318005466,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_88',
        nameFi: 'Kemi',
        nameSv: 'Kemi',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.56167, 65.73538],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.56167,
            lat: 65.73538,
          },
          {
            type: 'EUREF_FIN',
            lon: 388209.41550919553,
            lat: 7292584.285334203,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_124',
        nameFi: 'Kemijärvi',
        nameSv: 'Kemijärvi',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.42912, 66.7135],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.42912,
            lat: 66.7135,
          },
          {
            type: 'EUREF_FIN',
            lon: 518930.502887657,
            lat: 7399507.583267964,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_89',
        nameFi: 'Keminmaa',
        nameSv: 'Keminmaa',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.54502, 65.80127],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.54502,
            lat: 65.80127,
          },
          {
            type: 'EUREF_FIN',
            lon: 387733.3189037001,
            lat: 7299953.600606209,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_97',
        nameFi: 'Kittilä',
        nameSv: 'Kittilä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.9126, 67.6533],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.9126,
            lat: 67.6533,
          },
          {
            type: 'EUREF_FIN',
            lon: 411446.51894138264,
            lat: 7505703.317173499,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_102',
        nameFi: 'Kolari',
        nameSv: 'Kolari',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.7891, 67.3318],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.7891,
            lat: 67.3318,
          },
          {
            type: 'EUREF_FIN',
            lon: 361958.2049038158,
            lat: 7471939.420392767,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_164',
        nameFi: 'Muonio',
        nameSv: 'Muonio',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.6774, 67.9579],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.6774,
            lat: 67.9579,
          },
          {
            type: 'EUREF_FIN',
            lon: 360903.06413759536,
            lat: 7541910.226681946,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_190',
        nameFi: 'Pelkosenniemi',
        nameSv: 'Pelkosennm',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.5145, 67.1083],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.5145,
            lat: 67.1083,
          },
          {
            type: 'EUREF_FIN',
            lon: 522333.40743513696,
            lat: 7443545.545884609,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_279',
        nameFi: 'Pello',
        nameSv: 'Pello',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.96471, 66.77328],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.96471,
            lat: 66.77328,
          },
          {
            type: 'EUREF_FIN',
            lon: 366465.600107557,
            lat: 7409357.7283455655,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_204',
        nameFi: 'Posio',
        nameSv: 'Posio',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.1707, 66.11],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.1707,
            lat: 66.11,
          },
          {
            type: 'EUREF_FIN',
            lon: 552902.6189460454,
            lat: 7332665.231053252,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_221',
        nameFi: 'Ranua',
        nameSv: 'Ranua',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.51588, 65.92951],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.51588,
            lat: 65.92951,
          },
          {
            type: 'EUREF_FIN',
            lon: 477966.9984977334,
            lat: 7312138.055647714,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_229',
        nameFi: 'Rovaniemi',
        nameSv: 'Rovaniemi',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.72488, 66.49723],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.72488,
            lat: 66.49723,
          },
          {
            type: 'EUREF_FIN',
            lon: 443258.8707752063,
            lat: 7375913.546556025,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_236',
        nameFi: 'Salla',
        nameSv: 'Salla',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.6701, 66.8326],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.6701,
            lat: 66.8326,
          },
          {
            type: 'EUREF_FIN',
            lon: 573313.6483084394,
            lat: 7413701.445695162,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_242',
        nameFi: 'Savukoski',
        nameSv: 'Savukoski',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.15861, 67.29232],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.15861,
            lat: 67.29232,
          },
          {
            type: 'EUREF_FIN',
            lon: 549908.5845286145,
            lat: 7464433.243827242,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_248',
        nameFi: 'Simo',
        nameSv: 'Simo',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.0653, 65.6607],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.0653,
            lat: 65.6607,
          },
          {
            type: 'EUREF_FIN',
            lon: 411036.7057599501,
            lat: 7283460.230945193,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_251',
        nameFi: 'Sodankylä',
        nameSv: 'Sodankylä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.5931, 67.4151],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.5931,
            lat: 67.4151,
          },
          {
            type: 'EUREF_FIN',
            lon: 482561.2474697396,
            lat: 7477712.678774273,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_272',
        nameFi: 'Tervola',
        nameSv: 'Tervola',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.8113, 66.0871],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.8113,
            lat: 66.0871,
          },
          {
            type: 'EUREF_FIN',
            lon: 401017.49861966376,
            lat: 7331347.07815444,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_277',
        nameFi: 'Tornio',
        nameSv: 'Torneå',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.14679, 65.8481],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.14679,
            lat: 65.8481,
          },
          {
            type: 'EUREF_FIN',
            lon: 369768.62385287706,
            lat: 7305938.603731681,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_286',
        nameFi: 'Utsjoki',
        nameSv: 'Utsjoki',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.0284, 69.90907],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.0284,
            lat: 69.90907,
          },
          {
            type: 'EUREF_FIN',
            lon: 501088.7856943919,
            lat: 7755733.164002367,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_306',
        nameFi: 'Ylitornio',
        nameSv: 'Övertorneå',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.6709, 66.3192],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.6709,
            lat: 66.3192,
          },
          {
            type: 'EUREF_FIN',
            lon: 350851.3708988904,
            lat: 7359459.394988581,
          },
        ],
        regionId: 'R_18',
        regionNameFi: 'Lappi',
        regionNameSv: 'Lappland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.2823,
            lat: 67.73262,
          },
          {
            type: 'EUREF_FIN',
            lon: 427371.8183862089,
            lat: 7514061.8851661915,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.2823, 67.73262],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_3',
    regionNameFi: 'Satakunta',
    regionNameSv: 'Satakunta',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [22.0944, 61.59148],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 22.0944,
        lat: 61.59148,
      },
      {
        type: 'EUREF_FIN',
        lon: 239798.52659372473,
        lat: 6838478.377055628,
      },
    ],
    municipalities: [
      {
        id: 'M_13',
        nameFi: 'Eura',
        nameSv: 'Eura',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.13826, 61.13013],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.13826,
            lat: 61.13013,
          },
          {
            type: 'EUREF_FIN',
            lon: 238293.0084172203,
            lat: 6787013.954599444,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_14',
        nameFi: 'Eurajoki',
        nameSv: 'Euraåminne',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.73391, 61.20228],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.73391,
            lat: 61.20228,
          },
          {
            type: 'EUREF_FIN',
            lon: 217205.88700918586,
            lat: 6796718.956856876,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_28',
        nameFi: 'Harjavalta',
        nameSv: 'Harjavalta',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.1413, 61.3137],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.1413,
            lat: 61.3137,
          },
          {
            type: 'EUREF_FIN',
            lon: 239976.9515589917,
            lat: 6807409.8019474,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_37',
        nameFi: 'Honkajoki',
        nameSv: 'Honkajoki',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.2649, 61.99256],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.2649,
            lat: 61.99256,
          },
          {
            type: 'EUREF_FIN',
            lon: 252085.80821351177,
            lat: 6882403.224141508,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_38',
        nameFi: 'Huittinen',
        nameSv: 'Huittinen',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.6988, 61.17801],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.6988,
            lat: 61.17801,
          },
          {
            type: 'EUREF_FIN',
            lon: 268785.32424743095,
            lat: 6790223.975513936,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_66',
        nameFi: 'Jämijärvi',
        nameSv: 'Jämijärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.6915, 61.8198],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.6915,
            lat: 61.8198,
          },
          {
            type: 'EUREF_FIN',
            lon: 273119.3237047137,
            lat: 6861630.378778517,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_75',
        nameFi: 'Kankaanpää',
        nameSv: 'Kankaanpää',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.3952, 61.8028],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.3952,
            lat: 61.8028,
          },
          {
            type: 'EUREF_FIN',
            lon: 257400.36202901803,
            lat: 6860810.712747269,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_81',
        nameFi: 'Karvia',
        nameSv: 'Karvia',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.5609, 62.1368],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.5609,
            lat: 62.1368,
          },
          {
            type: 'EUREF_FIN',
            lon: 268665.6640042841,
            lat: 6897348.25102497,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_100',
        nameFi: 'Kokemäki',
        nameSv: 'Kumo',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.35722, 61.25644],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.35722,
            lat: 61.25644,
          },
          {
            type: 'EUREF_FIN',
            lon: 251064.88222477204,
            lat: 6800201.503045085,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_159',
        nameFi: 'Merikarvia',
        nameSv: 'Sastmola',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.50514, 61.85989],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.50514,
            lat: 61.85989,
          },
          {
            type: 'EUREF_FIN',
            lon: 211119.69151043543,
            lat: 6870800.392704961,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_173',
        nameFi: 'Nakkila',
        nameSv: 'Nakkila',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.0041, 61.3656],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.0041,
            lat: 61.3656,
          },
          {
            type: 'EUREF_FIN',
            lon: 233086.8849164846,
            lat: 6813733.619112899,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_201',
        nameFi: 'Pomarkku',
        nameSv: 'Påmark',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.00859, 61.69347],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.00859,
            lat: 61.69347,
          },
          {
            type: 'EUREF_FIN',
            lon: 236124.65307545848,
            lat: 6850162.012011351,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_202',
        nameFi: 'Pori',
        nameSv: 'Björneborg',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.79746, 61.48519],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.79746,
            lat: 61.48519,
          },
          {
            type: 'EUREF_FIN',
            lon: 223125.78719344968,
            lat: 6827888.477381758,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_222',
        nameFi: 'Rauma',
        nameSv: 'Raumo',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.51131, 61.12718],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.51131,
            lat: 61.12718,
          },
          {
            type: 'EUREF_FIN',
            lon: 204568.9120143152,
            lat: 6789358.819882202,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_245',
        nameFi: 'Siikainen',
        nameSv: 'Siikainen',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.82241, 61.87732],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.82241,
            lat: 61.87732,
          },
          {
            type: 'EUREF_FIN',
            lon: 227928.20074067108,
            lat: 6871365.988016922,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_262',
        nameFi: 'Säkylä',
        nameSv: 'Säkylä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.34483, 61.04523],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.34483,
            lat: 61.04523,
          },
          {
            type: 'EUREF_FIN',
            lon: 248726.391534952,
            lat: 6776764.322241272,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_283',
        nameFi: 'Ulvila',
        nameSv: 'Ulvsby',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.8724, 61.42907],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.8724,
            lat: 61.42907,
          },
          {
            type: 'EUREF_FIN',
            lon: 226616.46492002957,
            lat: 6821334.474901832,
          },
        ],
        regionId: 'R_3',
        regionNameFi: 'Satakunta',
        regionNameSv: 'Satakunta',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.0944,
            lat: 61.59148,
          },
          {
            type: 'EUREF_FIN',
            lon: 239798.52659372473,
            lat: 6838478.377055628,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.0944, 61.59148],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_4',
    regionNameFi: 'Kanta-Häme',
    regionNameSv: 'Egentliga Tavastland',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [24.20239, 60.93876],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 24.20239,
        lat: 60.93876,
      },
      {
        type: 'EUREF_FIN',
        lon: 348429.51955209114,
        lat: 6759201.6669599395,
      },
    ],
    municipalities: [
      {
        id: 'M_17',
        nameFi: 'Forssa',
        nameSv: 'Forssa',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.62163, 60.81278],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.62163,
            lat: 60.81278,
          },
          {
            type: 'EUREF_FIN',
            lon: 316259.45043357776,
            lat: 6746665.471434764,
          },
        ],
        regionId: 'R_4',
        regionNameFi: 'Kanta-Häme',
        regionNameSv: 'Egentliga Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.20239,
            lat: 60.93876,
          },
          {
            type: 'EUREF_FIN',
            lon: 348429.51955209114,
            lat: 6759201.6669599395,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.20239, 60.93876],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_30',
        nameFi: 'Hattula',
        nameSv: 'Hattula',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.37101, 61.05552],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.37101,
            lat: 61.05552,
          },
          {
            type: 'EUREF_FIN',
            lon: 358083.5936934657,
            lat: 6771821.369118992,
          },
        ],
        regionId: 'R_4',
        regionNameFi: 'Kanta-Häme',
        regionNameSv: 'Egentliga Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.20239,
            lat: 60.93876,
          },
          {
            type: 'EUREF_FIN',
            lon: 348429.51955209114,
            lat: 6759201.6669599395,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.20239, 60.93876],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_31',
        nameFi: 'Hausjärvi',
        nameSv: 'Hausjärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.02602, 60.78615],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.02602,
            lat: 60.78615,
          },
          {
            type: 'EUREF_FIN',
            lon: 392529.77568995446,
            lat: 6740584.211637133,
          },
        ],
        regionId: 'R_4',
        regionNameFi: 'Kanta-Häme',
        regionNameSv: 'Egentliga Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.20239,
            lat: 60.93876,
          },
          {
            type: 'EUREF_FIN',
            lon: 348429.51955209114,
            lat: 6759201.6669599395,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.20239, 60.93876],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_39',
        nameFi: 'Humppila',
        nameSv: 'Humppila',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.371, 60.92407],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.371,
            lat: 60.92407,
          },
          {
            type: 'EUREF_FIN',
            lon: 303323.5932090841,
            lat: 6759776.256901976,
          },
        ],
        regionId: 'R_4',
        regionNameFi: 'Kanta-Häme',
        regionNameSv: 'Egentliga Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.20239,
            lat: 60.93876,
          },
          {
            type: 'EUREF_FIN',
            lon: 348429.51955209114,
            lat: 6759201.6669599395,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.20239, 60.93876],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_43',
        nameFi: 'Hämeenlinna',
        nameSv: 'Tavastehus',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.46423, 60.99601],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.46423,
            lat: 60.99601,
          },
          {
            type: 'EUREF_FIN',
            lon: 362857.2765905472,
            lat: 6764997.756935351,
          },
        ],
        regionId: 'R_4',
        regionNameFi: 'Kanta-Häme',
        regionNameSv: 'Egentliga Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.20239,
            lat: 60.93876,
          },
          {
            type: 'EUREF_FIN',
            lon: 348429.51955209114,
            lat: 6759201.6669599395,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.20239, 60.93876],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_56',
        nameFi: 'Janakkala',
        nameSv: 'Janakkala',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.64871, 60.91881],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.64871,
            lat: 60.91881,
          },
          {
            type: 'EUREF_FIN',
            lon: 372522.9310746793,
            lat: 6756030.498882656,
          },
        ],
        regionId: 'R_4',
        regionNameFi: 'Kanta-Häme',
        regionNameSv: 'Egentliga Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.20239,
            lat: 60.93876,
          },
          {
            type: 'EUREF_FIN',
            lon: 348429.51955209114,
            lat: 6759201.6669599395,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.20239, 60.93876],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_58',
        nameFi: 'Jokioinen',
        nameSv: 'Jockis',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.48607, 60.80377],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.48607,
            lat: 60.80377,
          },
          {
            type: 'EUREF_FIN',
            lon: 308837.7178464759,
            lat: 6746050.275765608,
          },
        ],
        regionId: 'R_4',
        regionNameFi: 'Kanta-Häme',
        regionNameSv: 'Egentliga Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.20239,
            lat: 60.93876,
          },
          {
            type: 'EUREF_FIN',
            lon: 348429.51955209114,
            lat: 6759201.6669599395,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.20239, 60.93876],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_145',
        nameFi: 'Loppi',
        nameSv: 'Loppi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.4417, 60.7177],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.4417,
            lat: 60.7177,
          },
          {
            type: 'EUREF_FIN',
            lon: 360430.1410440601,
            lat: 6734062.623248532,
          },
        ],
        regionId: 'R_4',
        regionNameFi: 'Kanta-Häme',
        regionNameSv: 'Egentliga Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.20239,
            lat: 60.93876,
          },
          {
            type: 'EUREF_FIN',
            lon: 348429.51955209114,
            lat: 6759201.6669599395,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.20239, 60.93876],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_227',
        nameFi: 'Riihimäki',
        nameSv: 'Riihimäki',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.7729, 60.73849],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.7729,
            lat: 60.73849,
          },
          {
            type: 'EUREF_FIN',
            lon: 378572.41324583604,
            lat: 6735718.956262307,
          },
        ],
        regionId: 'R_4',
        regionNameFi: 'Kanta-Häme',
        regionNameSv: 'Egentliga Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.20239,
            lat: 60.93876,
          },
          {
            type: 'EUREF_FIN',
            lon: 348429.51955209114,
            lat: 6759201.6669599395,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.20239, 60.93876],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_269',
        nameFi: 'Tammela',
        nameSv: 'Tammela',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.76045, 60.80882],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.76045,
            lat: 60.80882,
          },
          {
            type: 'EUREF_FIN',
            lon: 323783.4100437669,
            lat: 6745843.894664795,
          },
        ],
        regionId: 'R_4',
        regionNameFi: 'Kanta-Häme',
        regionNameSv: 'Egentliga Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.20239,
            lat: 60.93876,
          },
          {
            type: 'EUREF_FIN',
            lon: 348429.51955209114,
            lat: 6759201.6669599395,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.20239, 60.93876],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_309',
        nameFi: 'Ypäjä',
        nameSv: 'Ypäjä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.2819, 60.8037],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.2819,
            lat: 60.8037,
          },
          {
            type: 'EUREF_FIN',
            lon: 297738.1254860657,
            lat: 6746654.791272681,
          },
        ],
        regionId: 'R_4',
        regionNameFi: 'Kanta-Häme',
        regionNameSv: 'Egentliga Tavastland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 24.20239,
            lat: 60.93876,
          },
          {
            type: 'EUREF_FIN',
            lon: 348429.51955209114,
            lat: 6759201.6669599395,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [24.20239, 60.93876],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_15',
    regionNameFi: 'Keski-Pohjanmaa',
    regionNameSv: 'Mellersta Österbotten',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [23.89548, 63.61662],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 23.89548,
        lat: 63.61662,
      },
      {
        type: 'EUREF_FIN',
        lon: 346119.7020838647,
        lat: 7058030.190726642,
      },
    ],
    municipalities: [
      {
        id: 'M_23',
        nameFi: 'Halsua',
        nameSv: 'Halsua',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.16733, 63.46346],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.16733,
            lat: 63.46346,
          },
          {
            type: 'EUREF_FIN',
            lon: 358831.9925111696,
            lat: 7040351.160344609,
          },
        ],
        regionId: 'R_15',
        regionNameFi: 'Keski-Pohjanmaa',
        regionNameSv: 'Mellersta Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.89548,
            lat: 63.61662,
          },
          {
            type: 'EUREF_FIN',
            lon: 346119.7020838647,
            lat: 7058030.190726642,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.89548, 63.61662],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_77',
        nameFi: 'Kannus',
        nameSv: 'Kannus',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.9167, 63.9004],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.9167,
            lat: 63.9004,
          },
          {
            type: 'EUREF_FIN',
            lon: 348697.2995481748,
            lat: 7089572.719169929,
          },
        ],
        regionId: 'R_15',
        regionNameFi: 'Keski-Pohjanmaa',
        regionNameSv: 'Mellersta Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.89548,
            lat: 63.61662,
          },
          {
            type: 'EUREF_FIN',
            lon: 346119.7020838647,
            lat: 7058030.190726642,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.89548, 63.61662],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_86',
        nameFi: 'Kaustinen',
        nameSv: 'Kaustby',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.69557, 63.54864],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.69557,
            lat: 63.54864,
          },
          {
            type: 'EUREF_FIN',
            lon: 335826.0252821266,
            lat: 7050959.707512599,
          },
        ],
        regionId: 'R_15',
        regionNameFi: 'Keski-Pohjanmaa',
        regionNameSv: 'Mellersta Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.89548,
            lat: 63.61662,
          },
          {
            type: 'EUREF_FIN',
            lon: 346119.7020838647,
            lat: 7058030.190726642,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.89548, 63.61662],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_101',
        nameFi: 'Kokkola',
        nameSv: 'Karleby',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.13058, 63.8385],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.13058,
            lat: 63.8385,
          },
          {
            type: 'EUREF_FIN',
            lon: 309735.1397552135,
            lat: 7084787.531088842,
          },
        ],
        regionId: 'R_15',
        regionNameFi: 'Keski-Pohjanmaa',
        regionNameSv: 'Mellersta Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.89548,
            lat: 63.61662,
          },
          {
            type: 'EUREF_FIN',
            lon: 346119.7020838647,
            lat: 7058030.190726642,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.89548, 63.61662],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_139',
        nameFi: 'Lestijärvi',
        nameSv: 'Lestijärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.66653, 63.52559],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.66653,
            lat: 63.52559,
          },
          {
            type: 'EUREF_FIN',
            lon: 383953.1299396162,
            lat: 7046266.802683659,
          },
        ],
        regionId: 'R_15',
        regionNameFi: 'Keski-Pohjanmaa',
        regionNameSv: 'Mellersta Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.89548,
            lat: 63.61662,
          },
          {
            type: 'EUREF_FIN',
            lon: 346119.7020838647,
            lat: 7058030.190726642,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.89548, 63.61662],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_191',
        nameFi: 'Perho',
        nameSv: 'Perho',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.41578, 63.2149],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.41578,
            lat: 63.2149,
          },
          {
            type: 'EUREF_FIN',
            lon: 370091.9679359185,
            lat: 7012149.024857636,
          },
        ],
        regionId: 'R_15',
        regionNameFi: 'Keski-Pohjanmaa',
        regionNameSv: 'Mellersta Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.89548,
            lat: 63.61662,
          },
          {
            type: 'EUREF_FIN',
            lon: 346119.7020838647,
            lat: 7058030.190726642,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.89548, 63.61662],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_275',
        nameFi: 'Toholampi',
        nameSv: 'Toholampi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.25122, 63.7737],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.25122,
            lat: 63.7737,
          },
          {
            type: 'EUREF_FIN',
            lon: 364496.5943667504,
            lat: 7074713.901100529,
          },
        ],
        regionId: 'R_15',
        regionNameFi: 'Keski-Pohjanmaa',
        regionNameSv: 'Mellersta Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.89548,
            lat: 63.61662,
          },
          {
            type: 'EUREF_FIN',
            lon: 346119.7020838647,
            lat: 7058030.190726642,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.89548, 63.61662],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_297',
        nameFi: 'Veteli',
        nameSv: 'Vetil',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.78833, 63.47413],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.78833,
            lat: 63.47413,
          },
          {
            type: 'EUREF_FIN',
            lon: 340015.09669099294,
            lat: 7042430.54733841,
          },
        ],
        regionId: 'R_15',
        regionNameFi: 'Keski-Pohjanmaa',
        regionNameSv: 'Mellersta Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 23.89548,
            lat: 63.61662,
          },
          {
            type: 'EUREF_FIN',
            lon: 346119.7020838647,
            lat: 7058030.190726642,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [23.89548, 63.61662],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_7',
    regionNameFi: 'Kymenlaakso',
    regionNameSv: 'Kymmenedalen',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [27.01551, 60.74633],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 27.01551,
        lat: 60.74633,
      },
      {
        type: 'EUREF_FIN',
        lon: 500845.5525766563,
        lat: 6734533.0702539375,
      },
    ],
    municipalities: [
      {
        id: 'M_24',
        nameFi: 'Hamina',
        nameSv: 'Fredrikshamn',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.1938, 60.5692],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.1938,
            lat: 60.5692,
          },
          {
            type: 'EUREF_FIN',
            lon: 510623.47777178895,
            lat: 6714820.087691687,
          },
        ],
        regionId: 'R_7',
        regionNameFi: 'Kymenlaakso',
        regionNameSv: 'Kymmenedalen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.01551,
            lat: 60.74633,
          },
          {
            type: 'EUREF_FIN',
            lon: 500845.5525766563,
            lat: 6734533.0702539375,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.01551, 60.74633],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_47',
        nameFi: 'Iitti',
        nameSv: 'Iitti',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.33817, 60.88922],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.33817,
            lat: 60.88922,
          },
          {
            type: 'EUREF_FIN',
            lon: 464080.1993466817,
            lat: 6750629.526953553,
          },
        ],
        regionId: 'R_7',
        regionNameFi: 'Kymenlaakso',
        regionNameSv: 'Kymmenedalen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.01551,
            lat: 60.74633,
          },
          {
            type: 'EUREF_FIN',
            lon: 500845.5525766563,
            lat: 6734533.0702539375,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.01551, 60.74633],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_107',
        nameFi: 'Kotka',
        nameSv: 'Kotka',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.94601, 60.46663],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.94601,
            lat: 60.46663,
          },
          {
            type: 'EUREF_FIN',
            lon: 497031.0724816696,
            lat: 6703381.771600212,
          },
        ],
        regionId: 'R_7',
        regionNameFi: 'Kymenlaakso',
        regionNameSv: 'Kymmenedalen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.01551,
            lat: 60.74633,
          },
          {
            type: 'EUREF_FIN',
            lon: 500845.5525766563,
            lat: 6734533.0702539375,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.01551, 60.74633],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_108',
        nameFi: 'Kouvola',
        nameSv: 'Kouvola',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.70405, 60.8679],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.70405,
            lat: 60.8679,
          },
          {
            type: 'EUREF_FIN',
            lon: 483926.905226072,
            lat: 6748109.857856992,
          },
        ],
        regionId: 'R_7',
        regionNameFi: 'Kymenlaakso',
        regionNameSv: 'Kymmenedalen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.01551,
            lat: 60.74633,
          },
          {
            type: 'EUREF_FIN',
            lon: 500845.5525766563,
            lat: 6734533.0702539375,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.01551, 60.74633],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_160',
        nameFi: 'Miehikkälä',
        nameSv: 'Miehikkälä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.7001, 60.6709],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.7001,
            lat: 60.6709,
          },
          {
            type: 'EUREF_FIN',
            lon: 538256.1134235973,
            lat: 6726335.373042872,
          },
        ],
        regionId: 'R_7',
        regionNameFi: 'Kymenlaakso',
        regionNameSv: 'Kymmenedalen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.01551,
            lat: 60.74633,
          },
          {
            type: 'EUREF_FIN',
            lon: 500845.5525766563,
            lat: 6734533.0702539375,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.01551, 60.74633],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_210',
        nameFi: 'Pyhtää',
        nameSv: 'Pyttis',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.73837, 60.49465],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.73837,
            lat: 60.49465,
          },
          {
            type: 'EUREF_FIN',
            lon: 485625.306959453,
            lat: 6706529.869112531,
          },
        ],
        regionId: 'R_7',
        regionNameFi: 'Kymenlaakso',
        regionNameSv: 'Kymmenedalen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.01551,
            lat: 60.74633,
          },
          {
            type: 'EUREF_FIN',
            lon: 500845.5525766563,
            lat: 6734533.0702539375,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.01551, 60.74633],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_302',
        nameFi: 'Virolahti',
        nameSv: 'Virolahti',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.70764, 60.58908],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.70764,
            lat: 60.58908,
          },
          {
            type: 'EUREF_FIN',
            lon: 538766.2028745394,
            lat: 6717227.16914292,
          },
        ],
        regionId: 'R_7',
        regionNameFi: 'Kymenlaakso',
        regionNameSv: 'Kymmenedalen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.01551,
            lat: 60.74633,
          },
          {
            type: 'EUREF_FIN',
            lon: 500845.5525766563,
            lat: 6734533.0702539375,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.01551, 60.74633],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_12',
    regionNameFi: 'Keski-Suomi',
    regionNameSv: 'Mellersta Finland',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [25.39292, 62.53162],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 25.39292,
        lat: 62.53162,
      },
      {
        type: 'EUREF_FIN',
        lon: 417302.08894835855,
        lat: 6934434.573016738,
      },
    ],
    municipalities: [
      {
        id: 'M_26',
        nameFi: 'Hankasalmi',
        nameSv: 'Hankasalmi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.4361, 62.3894],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.4361,
            lat: 62.3894,
          },
          {
            type: 'EUREF_FIN',
            lon: 470842.3693735219,
            lat: 6917688.07012248,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_61',
        nameFi: 'Joutsa',
        nameSv: 'Joutsa',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.11372, 61.74292],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.11372,
            lat: 61.74292,
          },
          {
            type: 'EUREF_FIN',
            lon: 453189.4161731816,
            lat: 6845860.628601193,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_65',
        nameFi: 'Jyväskylä',
        nameSv: 'Jyväskylä',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.7475, 62.24256],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.7475,
            lat: 62.24256,
          },
          {
            type: 'EUREF_FIN',
            lon: 434922.53032846533,
            lat: 6901831.5400958005,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_67',
        nameFi: 'Jämsä',
        nameSv: 'Jämsä',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.19003, 61.86414],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.19003,
            lat: 61.86414,
          },
          {
            type: 'EUREF_FIN',
            lon: 404785.5973916816,
            lat: 6860371.71291832,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_76',
        nameFi: 'Kannonkoski',
        nameSv: 'Kannonkoski',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.2612, 62.9757],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.2612,
            lat: 62.9757,
          },
          {
            type: 'EUREF_FIN',
            lon: 411860.0775492558,
            lat: 6984073.311673531,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_80',
        nameFi: 'Karstula',
        nameSv: 'Karstula',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.80093, 62.87776],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.80093,
            lat: 62.87776,
          },
          {
            type: 'EUREF_FIN',
            lon: 388162.0266415788,
            lat: 6973880.262614002,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_92',
        nameFi: 'Keuruu',
        nameSv: 'Keuruu',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.7078, 62.2591],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.7078,
            lat: 62.2591,
          },
          {
            type: 'EUREF_FIN',
            lon: 380979.5963197573,
            lat: 6905152.241178308,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_94',
        nameFi: 'Kinnula',
        nameSv: 'Kinnula',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.9676, 63.3664],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.9676,
            lat: 63.3664,
          },
          {
            type: 'EUREF_FIN',
            lon: 398358.873590366,
            lat: 7028025.158696654,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_99',
        nameFi: 'Kivijärvi',
        nameSv: 'Kivijärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.07633, 63.11961],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.07633,
            lat: 63.11961,
          },
          {
            type: 'EUREF_FIN',
            lon: 402970.85436818306,
            lat: 7000368.970741263,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_103',
        nameFi: 'Konnevesi',
        nameSv: 'Konnevesi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.28562, 62.62813],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.28562,
            lat: 62.62813,
          },
          {
            type: 'EUREF_FIN',
            lon: 463355.8633291378,
            lat: 6944360.521438906,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_112',
        nameFi: 'Kuhmoinen',
        nameSv: 'Kuhmoinen',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.1764, 61.5612],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.1764,
            lat: 61.5612,
          },
          {
            type: 'EUREF_FIN',
            lon: 403122.85258884664,
            lat: 6826654.781723854,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_120',
        nameFi: 'Kyyjärvi',
        nameSv: 'Kyyjärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.5649, 63.043],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.5649,
            lat: 63.043,
          },
          {
            type: 'EUREF_FIN',
            lon: 376859.2584283102,
            lat: 6992713.112238373,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_134',
        nameFi: 'Laukaa',
        nameSv: 'Laukaa',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.9581, 62.413],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.9581,
            lat: 62.413,
          },
          {
            type: 'EUREF_FIN',
            lon: 446169.9467706508,
            lat: 6920623.953059977,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_147',
        nameFi: 'Luhanka',
        nameSv: 'Luhanka',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.70348, 61.79681],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.70348,
            lat: 61.79681,
          },
          {
            type: 'EUREF_FIN',
            lon: 431643.20716245065,
            lat: 6852226.5442494685,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_163',
        nameFi: 'Multia',
        nameSv: 'Multia',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [24.7947, 62.4082],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 24.7947,
            lat: 62.4082,
          },
          {
            type: 'EUREF_FIN',
            lon: 386056.7966003894,
            lat: 6921599.161524768,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_166',
        nameFi: 'Muurame',
        nameSv: 'Muurame',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.6758, 62.1291],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.6758,
            lat: 62.1291,
          },
          {
            type: 'EUREF_FIN',
            lon: 430939.1176735663,
            lat: 6889267.68061433,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_193',
        nameFi: 'Petäjävesi',
        nameSv: 'Petäjävesi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.18835, 62.25709],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.18835,
            lat: 62.25709,
          },
          {
            type: 'EUREF_FIN',
            lon: 405920.1143029779,
            lat: 6904137.311975759,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_198',
        nameFi: 'Pihtipudas',
        nameSv: 'Pihtipudas',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.57568, 63.37074],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.57568,
            lat: 63.37074,
          },
          {
            type: 'EUREF_FIN',
            lon: 428775.394305374,
            lat: 7027688.508566851,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_235',
        nameFi: 'Saarijärvi',
        nameSv: 'Saarijärvi',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.25741, 62.70647],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.25741,
            lat: 62.70647,
          },
          {
            type: 'EUREF_FIN',
            lon: 410856.25216740405,
            lat: 6954090.4644129025,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_276',
        nameFi: 'Toivakka',
        nameSv: 'Toivakka',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.08519, 62.09936],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.08519,
            lat: 62.09936,
          },
          {
            type: 'EUREF_FIN',
            lon: 452241.99088938045,
            lat: 6885585.98634921,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_287',
        nameFi: 'Uurainen',
        nameSv: 'Uurainen',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.4418, 62.49688],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.4418,
            lat: 62.49688,
          },
          {
            type: 'EUREF_FIN',
            lon: 419723.6385970991,
            lat: 6930503.382455561,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_300',
        nameFi: 'Viitasaari',
        nameSv: 'Viitasaari',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.8597, 63.0734],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.8597,
            lat: 63.0734,
          },
          {
            type: 'EUREF_FIN',
            lon: 442388.2013348949,
            lat: 6994278.437209016,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_311',
        nameFi: 'Äänekoski',
        nameSv: 'Äänekoski',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [25.72484, 62.60437],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 25.72484,
            lat: 62.60437,
          },
          {
            type: 'EUREF_FIN',
            lon: 434540.4662660942,
            lat: 6942157.295901591,
          },
        ],
        regionId: 'R_12',
        regionNameFi: 'Keski-Suomi',
        regionNameSv: 'Mellersta Finland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 25.39292,
            lat: 62.53162,
          },
          {
            type: 'EUREF_FIN',
            lon: 417302.08894835855,
            lat: 6934434.573016738,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [25.39292, 62.53162],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_17',
    regionNameFi: 'Kainuu',
    regionNameSv: 'Kajanaland',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [28.65091, 64.59484],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 28.65091,
        lat: 64.59484,
      },
      {
        type: 'EUREF_FIN',
        lon: 579021.6755561884,
        lat: 7164330.006835787,
      },
    ],
    municipalities: [
      {
        id: 'M_40',
        nameFi: 'Hyrynsalmi',
        nameSv: 'Hyrynsalmi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.4957, 64.6759],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.4957,
            lat: 64.6759,
          },
          {
            type: 'EUREF_FIN',
            lon: 571380.5001531114,
            lat: 7173177.295600048,
          },
        ],
        regionId: 'R_17',
        regionNameFi: 'Kainuu',
        regionNameSv: 'Kajanaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.65091,
            lat: 64.59484,
          },
          {
            type: 'EUREF_FIN',
            lon: 579021.6755561884,
            lat: 7164330.006835787,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.65091, 64.59484],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_71',
        nameFi: 'Kajaani',
        nameSv: 'Kajana',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.72713, 64.22647],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.72713,
            lat: 64.22647,
          },
          {
            type: 'EUREF_FIN',
            lon: 535276.781042432,
            lat: 7122452.31518448,
          },
        ],
        regionId: 'R_17',
        regionNameFi: 'Kainuu',
        regionNameSv: 'Kajanaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.65091,
            lat: 64.59484,
          },
          {
            type: 'EUREF_FIN',
            lon: 579021.6755561884,
            lat: 7164330.006835787,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.65091, 64.59484],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_111',
        nameFi: 'Kuhmo',
        nameSv: 'Kuhmo',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [29.52145, 64.12478],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 29.52145,
            lat: 64.12478,
          },
          {
            type: 'EUREF_FIN',
            lon: 622754.7813181925,
            lat: 7113349.684534551,
          },
        ],
        regionId: 'R_17',
        regionNameFi: 'Kainuu',
        regionNameSv: 'Kajanaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.65091,
            lat: 64.59484,
          },
          {
            type: 'EUREF_FIN',
            lon: 579021.6755561884,
            lat: 7164330.006835787,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.65091, 64.59484],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_187',
        nameFi: 'Paltamo',
        nameSv: 'Paltamo',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.83891, 64.40422],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.83891,
            lat: 64.40422,
          },
          {
            type: 'EUREF_FIN',
            lon: 540438.2046342378,
            lat: 7142325.766565985,
          },
        ],
        regionId: 'R_17',
        regionNameFi: 'Kainuu',
        regionNameSv: 'Kajanaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.65091,
            lat: 64.59484,
          },
          {
            type: 'EUREF_FIN',
            lon: 579021.6755561884,
            lat: 7164330.006835787,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.65091, 64.59484],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_208',
        nameFi: 'Puolanka',
        nameSv: 'Puolanka',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.6751, 64.8674],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.6751,
            lat: 64.8674,
          },
          {
            type: 'EUREF_FIN',
            lon: 531992.7128867133,
            lat: 7193847.346746992,
          },
        ],
        regionId: 'R_17',
        regionNameFi: 'Kainuu',
        regionNameSv: 'Kajanaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.65091,
            lat: 64.59484,
          },
          {
            type: 'EUREF_FIN',
            lon: 579021.6755561884,
            lat: 7164330.006835787,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.65091, 64.59484],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_228',
        nameFi: 'Ristijärvi',
        nameSv: 'Ristijärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.20742, 64.50674],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.20742,
            lat: 64.50674,
          },
          {
            type: 'EUREF_FIN',
            lon: 557982.967498257,
            lat: 7154035.0674308725,
          },
        ],
        regionId: 'R_17',
        regionNameFi: 'Kainuu',
        regionNameSv: 'Kajanaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.65091,
            lat: 64.59484,
          },
          {
            type: 'EUREF_FIN',
            lon: 579021.6755561884,
            lat: 7164330.006835787,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.65091, 64.59484],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_255',
        nameFi: 'Sotkamo',
        nameSv: 'Sotkamo',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.39051, 64.13061],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.39051,
            lat: 64.13061,
          },
          {
            type: 'EUREF_FIN',
            lon: 567691.0986706711,
            lat: 7112307.661967034,
          },
        ],
        regionId: 'R_17',
        regionNameFi: 'Kainuu',
        regionNameSv: 'Kajanaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.65091,
            lat: 64.59484,
          },
          {
            type: 'EUREF_FIN',
            lon: 579021.6755561884,
            lat: 7164330.006835787,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.65091, 64.59484],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_259',
        nameFi: 'Suomussalmi',
        nameSv: 'Suomussalmi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.9116, 64.8841],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.9116,
            lat: 64.8841,
          },
          {
            type: 'EUREF_FIN',
            lon: 590524.3192599546,
            lat: 7196905.364846037,
          },
        ],
        regionId: 'R_17',
        regionNameFi: 'Kainuu',
        regionNameSv: 'Kajanaland',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.65091,
            lat: 64.59484,
          },
          {
            type: 'EUREF_FIN',
            lon: 579021.6755561884,
            lat: 7164330.006835787,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.65091, 64.59484],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_10',
    regionNameFi: 'Pohjois-Savo',
    regionNameSv: 'Norra Savolax',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [27.56899, 63.0891],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 27.56899,
        lat: 63.0891,
      },
      {
        type: 'EUREF_FIN',
        lon: 528732.6432265217,
        lat: 6995643.759814294,
      },
    ],
    municipalities: [
      {
        id: 'M_46',
        nameFi: 'Iisalmi',
        nameSv: 'Idensalmi',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.19298, 63.55916],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.19298,
            lat: 63.55916,
          },
          {
            type: 'EUREF_FIN',
            lon: 509587.4856186936,
            lat: 7047906.114257313,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_70',
        nameFi: 'Kaavi',
        nameSv: 'Kaavi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.4804, 62.9748],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.4804,
            lat: 62.9748,
          },
          {
            type: 'EUREF_FIN',
            lon: 575045.7725557248,
            lat: 6983645.224683879,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_87',
        nameFi: 'Keitele',
        nameSv: 'Keitele',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.35138, 63.17838],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.35138,
            lat: 63.17838,
          },
          {
            type: 'EUREF_FIN',
            lon: 467346.7830138067,
            lat: 7005628.989338921,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_98',
        nameFi: 'Kiuruvesi',
        nameSv: 'Kiuruvesi',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.61348, 63.65251],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.61348,
            lat: 63.65251,
          },
          {
            type: 'EUREF_FIN',
            lon: 480860.12874490436,
            lat: 7058351.185393329,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_114',
        nameFi: 'Kuopio',
        nameSv: 'Kuopio',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.67943, 62.89332],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.67943,
            lat: 62.89332,
          },
          {
            type: 'EUREF_FIN',
            lon: 534539.9166040659,
            lat: 6973885.632863222,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_129',
        nameFi: 'Lapinlahti',
        nameSv: 'Lapinlahti',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.39833, 63.36678],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.39833,
            lat: 63.36678,
          },
          {
            type: 'EUREF_FIN',
            lon: 519922.7797584854,
            lat: 7026517.739883897,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_138',
        nameFi: 'Leppävirta',
        nameSv: 'Leppävirta',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.78805, 62.49157],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.78805,
            lat: 62.49157,
          },
          {
            type: 'EUREF_FIN',
            lon: 540608.6249684342,
            lat: 6929191.192988166,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_195',
        nameFi: 'Pielavesi',
        nameSv: 'Pielavesi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.7556, 63.2324],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.7556,
            lat: 63.2324,
          },
          {
            type: 'EUREF_FIN',
            lon: 487719.0525974348,
            lat: 7011506.3570632925,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_223',
        nameFi: 'Rautalampi',
        nameSv: 'Rautalampi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.8356, 62.6213],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.8356,
            lat: 62.6213,
          },
          {
            type: 'EUREF_FIN',
            lon: 491565.0403932312,
            lat: 6943407.457442253,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_224',
        nameFi: 'Rautavaara',
        nameSv: 'Rautavaara',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.29853, 63.49472],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.29853,
            lat: 63.49472,
          },
          {
            type: 'EUREF_FIN',
            lon: 564654.9917459087,
            lat: 7041367.095469132,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_247',
        nameFi: 'Siilinjärvi',
        nameSv: 'Siilinjärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.65975, 63.07502],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.65975,
            lat: 63.07502,
          },
          {
            type: 'EUREF_FIN',
            lon: 533331.8033439012,
            lat: 6994118.873547604,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_254',
        nameFi: 'Sonkajärvi',
        nameSv: 'Sonkajärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.52215, 63.67162],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.52215,
            lat: 63.67162,
          },
          {
            type: 'EUREF_FIN',
            lon: 525838.5694554009,
            lat: 7060528.236213052,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_260',
        nameFi: 'Suonenjoki',
        nameSv: 'Suonenjoki',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.121, 62.626],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.121,
            lat: 62.626,
          },
          {
            type: 'EUREF_FIN',
            lon: 506207.2326299143,
            lat: 6943926.164099585,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_271',
        nameFi: 'Tervo',
        nameSv: 'Tervo',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.75516, 62.95479],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.75516,
            lat: 62.95479,
          },
          {
            type: 'EUREF_FIN',
            lon: 487579.0755012399,
            lat: 6980575.7023144895,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_280',
        nameFi: 'Tuusniemi',
        nameSv: 'Tuusniemi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.49107, 62.81044],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.49107,
            lat: 62.81044,
          },
          {
            type: 'EUREF_FIN',
            lon: 576010.8170508264,
            lat: 6965349.115648222,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_293',
        nameFi: 'Varkaus',
        nameSv: 'Varkaus',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.8924, 62.3142],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.8924,
            lat: 62.3142,
          },
          {
            type: 'EUREF_FIN',
            lon: 546258.3604230098,
            lat: 6909502.150669998,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_295',
        nameFi: 'Vesanto',
        nameSv: 'Vesanto',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [26.4092, 62.9303],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 26.4092,
            lat: 62.9303,
          },
          {
            type: 'EUREF_FIN',
            lon: 470003.4560716206,
            lat: 6977961.196906614,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_298',
        nameFi: 'Vieremä',
        nameSv: 'Vieremä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.00141, 63.743],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.00141,
            lat: 63.743,
          },
          {
            type: 'EUREF_FIN',
            lon: 500069.5988880033,
            lat: 7068376.45800211,
          },
        ],
        regionId: 'R_10',
        regionNameFi: 'Pohjois-Savo',
        regionNameSv: 'Norra Savolax',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 27.56899,
            lat: 63.0891,
          },
          {
            type: 'EUREF_FIN',
            lon: 528732.6432265217,
            lat: 6995643.759814294,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [27.56899, 63.0891],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_11',
    regionNameFi: 'Pohjois-Karjala',
    regionNameSv: 'Norra Karelen',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [29.97325, 62.80267],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 29.97325,
        lat: 62.80267,
      },
      {
        type: 'EUREF_FIN',
        lon: 651578.7467894064,
        lat: 6967102.811815317,
      },
    ],
    municipalities: [
      {
        id: 'M_50',
        nameFi: 'Ilomantsi',
        nameSv: 'Ilomants',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [30.9327, 62.67148],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 30.9327,
            lat: 62.67148,
          },
          {
            type: 'EUREF_FIN',
            lon: 701344.9669853218,
            lat: 6955129.549821291,
          },
        ],
        regionId: 'R_11',
        regionNameFi: 'Pohjois-Karjala',
        regionNameSv: 'Norra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 29.97325,
            lat: 62.80267,
          },
          {
            type: 'EUREF_FIN',
            lon: 651578.7467894064,
            lat: 6967102.811815317,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [29.97325, 62.80267],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_57',
        nameFi: 'Joensuu',
        nameSv: 'Joensuu',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [29.76353, 62.60099],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 29.76353,
            lat: 62.60099,
          },
          {
            type: 'EUREF_FIN',
            lon: 641855.2328374654,
            lat: 6944172.0670653805,
          },
        ],
        regionId: 'R_11',
        regionNameFi: 'Pohjois-Karjala',
        regionNameSv: 'Norra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 29.97325,
            lat: 62.80267,
          },
          {
            type: 'EUREF_FIN',
            lon: 651578.7467894064,
            lat: 6967102.811815317,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [29.97325, 62.80267],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_62',
        nameFi: 'Juuka',
        nameSv: 'Juuka',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [29.2517, 63.2405],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 29.2517,
            lat: 63.2405,
          },
          {
            type: 'EUREF_FIN',
            lon: 613097.746100521,
            lat: 7014370.182313717,
          },
        ],
        regionId: 'R_11',
        regionNameFi: 'Pohjois-Karjala',
        regionNameSv: 'Norra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 29.97325,
            lat: 62.80267,
          },
          {
            type: 'EUREF_FIN',
            lon: 651578.7467894064,
            lat: 6967102.811815317,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [29.97325, 62.80267],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_96',
        nameFi: 'Kitee',
        nameSv: 'Kitee',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [30.13625, 62.10088],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 30.13625,
            lat: 62.10088,
          },
          {
            type: 'EUREF_FIN',
            lon: 663678.8992750659,
            lat: 6889378.840667235,
          },
        ],
        regionId: 'R_11',
        regionNameFi: 'Pohjois-Karjala',
        regionNameSv: 'Norra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 29.97325,
            lat: 62.80267,
          },
          {
            type: 'EUREF_FIN',
            lon: 651578.7467894064,
            lat: 6967102.811815317,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [29.97325, 62.80267],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_104',
        nameFi: 'Kontiolahti',
        nameSv: 'Kontiolahti',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [29.8474, 62.7643],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 29.8474,
            lat: 62.7643,
          },
          {
            type: 'EUREF_FIN',
            lon: 645354.9030295181,
            lat: 6962540.970586792,
          },
        ],
        regionId: 'R_11',
        regionNameFi: 'Pohjois-Karjala',
        regionNameSv: 'Norra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 29.97325,
            lat: 62.80267,
          },
          {
            type: 'EUREF_FIN',
            lon: 651578.7467894064,
            lat: 6967102.811815317,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [29.97325, 62.80267],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_140',
        nameFi: 'Lieksa',
        nameSv: 'Lieksa',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [30.02652, 63.31853],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 30.02652,
            lat: 63.31853,
          },
          {
            type: 'EUREF_FIN',
            lon: 651586.1598210272,
            lat: 7024658.149846576,
          },
        ],
        regionId: 'R_11',
        regionNameFi: 'Pohjois-Karjala',
        regionNameSv: 'Norra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 29.97325,
            lat: 62.80267,
          },
          {
            type: 'EUREF_FIN',
            lon: 651578.7467894064,
            lat: 6967102.811815317,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [29.97325, 62.80267],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_143',
        nameFi: 'Liperi',
        nameSv: 'Liperi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [29.38601, 62.53016],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 29.38601,
            lat: 62.53016,
          },
          {
            type: 'EUREF_FIN',
            lon: 622775.3451611302,
            lat: 6935511.430888997,
          },
        ],
        regionId: 'R_11',
        regionNameFi: 'Pohjois-Karjala',
        regionNameSv: 'Norra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 29.97325,
            lat: 62.80267,
          },
          {
            type: 'EUREF_FIN',
            lon: 651578.7467894064,
            lat: 6967102.811815317,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [29.97325, 62.80267],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_177',
        nameFi: 'Nurmes',
        nameSv: 'Nurmes',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [29.13968, 63.54197],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 29.13968,
            lat: 63.54197,
          },
          {
            type: 'EUREF_FIN',
            lon: 606351.2140649694,
            lat: 7047754.359624779,
          },
        ],
        regionId: 'R_11',
        regionNameFi: 'Pohjois-Karjala',
        regionNameSv: 'Norra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 29.97325,
            lat: 62.80267,
          },
          {
            type: 'EUREF_FIN',
            lon: 651578.7467894064,
            lat: 6967102.811815317,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [29.97325, 62.80267],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_119',
        nameFi: 'Outokumpu',
        nameSv: 'Outokumpu',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [29.01625, 62.72656],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 29.01625,
            lat: 62.72656,
          },
          {
            type: 'EUREF_FIN',
            lon: 603069.9417593953,
            lat: 6956736.077915225,
          },
        ],
        regionId: 'R_11',
        regionNameFi: 'Pohjois-Karjala',
        regionNameSv: 'Norra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 29.97325,
            lat: 62.80267,
          },
          {
            type: 'EUREF_FIN',
            lon: 651578.7467894064,
            lat: 6967102.811815317,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [29.97325, 62.80267],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_200',
        nameFi: 'Polvijärvi',
        nameSv: 'Polvijärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [29.3704, 62.8552],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 29.3704,
            lat: 62.8552,
          },
          {
            type: 'EUREF_FIN',
            lon: 620641.0425758029,
            lat: 6971677.308624496,
          },
        ],
        regionId: 'R_11',
        regionNameFi: 'Pohjois-Karjala',
        regionNameSv: 'Norra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 29.97325,
            lat: 62.80267,
          },
          {
            type: 'EUREF_FIN',
            lon: 651578.7467894064,
            lat: 6967102.811815317,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [29.97325, 62.80267],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_233',
        nameFi: 'Rääkkylä',
        nameSv: 'Rääkkylä',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [29.62431, 62.3139],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 29.62431,
            lat: 62.3139,
          },
          {
            type: 'EUREF_FIN',
            lon: 636010.9348152333,
            lat: 6911908.626074499,
          },
        ],
        regionId: 'R_11',
        regionNameFi: 'Pohjois-Karjala',
        regionNameSv: 'Norra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 29.97325,
            lat: 62.80267,
          },
          {
            type: 'EUREF_FIN',
            lon: 651578.7467894064,
            lat: 6967102.811815317,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [29.97325, 62.80267],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_274',
        nameFi: 'Tohmajärvi',
        nameSv: 'Tohmajärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [30.33527, 62.22509],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 30.33527,
            lat: 62.22509,
          },
          {
            type: 'EUREF_FIN',
            lon: 673346.8129873909,
            lat: 6903721.701659876,
          },
        ],
        regionId: 'R_11',
        regionNameFi: 'Pohjois-Karjala',
        regionNameSv: 'Norra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 29.97325,
            lat: 62.80267,
          },
          {
            type: 'EUREF_FIN',
            lon: 651578.7467894064,
            lat: 6967102.811815317,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [29.97325, 62.80267],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_292',
        nameFi: 'Valtimo',
        nameSv: 'Valtimo',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.8155, 63.6784],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.8155,
            lat: 63.6784,
          },
          {
            type: 'EUREF_FIN',
            lon: 589810.1170385751,
            lat: 7062453.697222704,
          },
        ],
        regionId: 'R_11',
        regionNameFi: 'Pohjois-Karjala',
        regionNameSv: 'Norra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 29.97325,
            lat: 62.80267,
          },
          {
            type: 'EUREF_FIN',
            lon: 651578.7467894064,
            lat: 6967102.811815317,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [29.97325, 62.80267],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_8',
    regionNameFi: 'Etelä-Karjala',
    regionNameSv: 'Södra Karelen',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [28.6323, 61.26549],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 28.6323,
        lat: 61.26549,
      },
      {
        type: 'EUREF_FIN',
        lon: 587540.1512865119,
        lat: 6793452.935372745,
      },
    ],
    municipalities: [
      {
        id: 'M_55',
        nameFi: 'Imatra',
        nameSv: 'Imatra',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.7666, 61.17131],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.7666,
            lat: 61.17131,
          },
          {
            type: 'EUREF_FIN',
            lon: 595024.9848811309,
            lat: 6783152.422040298,
          },
        ],
        regionId: 'R_8',
        regionNameFi: 'Etelä-Karjala',
        regionNameSv: 'Södra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.6323,
            lat: 61.26549,
          },
          {
            type: 'EUREF_FIN',
            lon: 587540.1512865119,
            lat: 6793452.935372745,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.6323, 61.26549],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_131',
        nameFi: 'Lappeenranta',
        nameSv: 'Villmanstrand',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.18699, 61.05845],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.18699,
            lat: 61.05845,
          },
          {
            type: 'EUREF_FIN',
            lon: 564078.9111647857,
            lat: 6769878.698711244,
          },
        ],
        regionId: 'R_8',
        regionNameFi: 'Etelä-Karjala',
        regionNameSv: 'Södra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.6323,
            lat: 61.26549,
          },
          {
            type: 'EUREF_FIN',
            lon: 587540.1512865119,
            lat: 6793452.935372745,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.6323, 61.26549],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_135',
        nameFi: 'Lemi',
        nameSv: 'Lemi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.8051, 61.06135],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.8051,
            lat: 61.06135,
          },
          {
            type: 'EUREF_FIN',
            lon: 543459.7386908561,
            lat: 6769888.04425779,
          },
        ],
        regionId: 'R_8',
        regionNameFi: 'Etelä-Karjala',
        regionNameSv: 'Södra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.6323,
            lat: 61.26549,
          },
          {
            type: 'EUREF_FIN',
            lon: 587540.1512865119,
            lat: 6793452.935372745,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.6323, 61.26549],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_151',
        nameFi: 'Luumäki',
        nameSv: 'Luumäki',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.56143, 60.92149],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.56143,
            lat: 60.92149,
          },
          {
            type: 'EUREF_FIN',
            lon: 530440.0696117465,
            lat: 6754172.942602544,
          },
        ],
        regionId: 'R_8',
        regionNameFi: 'Etelä-Karjala',
        regionNameSv: 'Södra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.6323,
            lat: 61.26549,
          },
          {
            type: 'EUREF_FIN',
            lon: 587540.1512865119,
            lat: 6793452.935372745,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.6323, 61.26549],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_188',
        nameFi: 'Parikkala',
        nameSv: 'Parikkala',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [29.5023, 61.5501],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 29.5023,
            lat: 61.5501,
          },
          {
            type: 'EUREF_FIN',
            lon: 632969.147615916,
            lat: 6826616.032178963,
          },
        ],
        regionId: 'R_8',
        regionNameFi: 'Etelä-Karjala',
        regionNameSv: 'Södra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.6323,
            lat: 61.26549,
          },
          {
            type: 'EUREF_FIN',
            lon: 587540.1512865119,
            lat: 6793452.935372745,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.6323, 61.26549],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_225',
        nameFi: 'Rautjärvi',
        nameSv: 'Rautjärvi',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [29.35329, 61.43273],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 29.35329,
            lat: 61.43273,
          },
          {
            type: 'EUREF_FIN',
            lon: 625525.3755135968,
            lat: 6813252.794882871,
          },
        ],
        regionId: 'R_8',
        regionNameFi: 'Etelä-Karjala',
        regionNameSv: 'Södra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.6323,
            lat: 61.26549,
          },
          {
            type: 'EUREF_FIN',
            lon: 587540.1512865119,
            lat: 6793452.935372745,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.6323, 61.26549],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_230',
        nameFi: 'Ruokolahti',
        nameSv: 'Ruokolahti',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.8174, 61.2916],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.8174,
            lat: 61.2916,
          },
          {
            type: 'EUREF_FIN',
            lon: 597384.446868141,
            lat: 6796622.595841663,
          },
        ],
        regionId: 'R_8',
        regionNameFi: 'Etelä-Karjala',
        regionNameSv: 'Södra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.6323,
            lat: 61.26549,
          },
          {
            type: 'EUREF_FIN',
            lon: 587540.1512865119,
            lat: 6793452.935372745,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.6323, 61.26549],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_240',
        nameFi: 'Savitaipale',
        nameSv: 'Savitaipale',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [27.6825, 61.1989],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 27.6825,
            lat: 61.1989,
          },
          {
            type: 'EUREF_FIN',
            lon: 536682.0806749987,
            lat: 6785133.516723783,
          },
        ],
        regionId: 'R_8',
        regionNameFi: 'Etelä-Karjala',
        regionNameSv: 'Södra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.6323,
            lat: 61.26549,
          },
          {
            type: 'EUREF_FIN',
            lon: 587540.1512865119,
            lat: 6793452.935372745,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.6323, 61.26549],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_266',
        nameFi: 'Taipalsaari',
        nameSv: 'Taipalsaari',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [28.0585, 61.1605],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 28.0585,
            lat: 61.1605,
          },
          {
            type: 'EUREF_FIN',
            lon: 556959.0378744957,
            lat: 6781125.686371809,
          },
        ],
        regionId: 'R_8',
        regionNameFi: 'Etelä-Karjala',
        regionNameSv: 'Södra Karelen',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 28.6323,
            lat: 61.26549,
          },
          {
            type: 'EUREF_FIN',
            lon: 587540.1512865119,
            lat: 6793452.935372745,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [28.6323, 61.26549],
        },
        configurationType: 'Municipality',
      },
    ],
  },
  {
    regionId: 'R_14',
    regionNameFi: 'Pohjanmaa',
    regionNameSv: 'Österbotten',
    coordinatesPoint: {
      type: 'Point',
      coordinates: [22.16092, 62.94054],
    },
    coordinates: [
      {
        type: 'WGS84',
        lon: 22.16092,
        lat: 62.94054,
      },
      {
        type: 'EUREF_FIN',
        lon: 254561.1077872123,
        lat: 6988202.2175315665,
      },
    ],
    municipalities: [
      {
        id: 'M_54',
        nameFi: 'Isokyrö',
        nameSv: 'Storkyro',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.3244, 62.9999],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.3244,
            lat: 62.9999,
          },
          {
            type: 'EUREF_FIN',
            lon: 263322.71632327576,
            lat: 6994189.2545182975,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_82',
        nameFi: 'Kaskinen',
        nameSv: 'Kaskö',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.2235, 62.38434],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.2235,
            lat: 62.38434,
          },
          {
            type: 'EUREF_FIN',
            lon: 201549.87107511464,
            lat: 6930344.163115914,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_105',
        nameFi: 'Korsnäs',
        nameSv: 'Korsnäs',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.1852, 62.7847],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.1852,
            lat: 62.7847,
          },
          {
            type: 'EUREF_FIN',
            lon: 203595.17198716349,
            lat: 6974993.400202242,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_109',
        nameFi: 'Kristiinankaupunki',
        nameSv: 'Kristinestad',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.37719, 62.27412],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.37719,
            lat: 62.27412,
          },
          {
            type: 'EUREF_FIN',
            lon: 208407.93767471908,
            lat: 6917397.73512846,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_110',
        nameFi: 'Kruunupyy',
        nameSv: 'Kronoby',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [23.0337, 63.7279],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 23.0337,
            lat: 63.7279,
          },
          {
            type: 'EUREF_FIN',
            lon: 304210.53733762784,
            lat: 7072774.004997273,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_127',
        nameFi: 'Laihia',
        nameSv: 'Laihela',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.01142, 62.97608],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.01142,
            lat: 62.97608,
          },
          {
            type: 'EUREF_FIN',
            lon: 247296.70360730262,
            lat: 6992732.83502784,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_150',
        nameFi: 'Luoto',
        nameSv: 'Larsmo',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.74613, 63.75247],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.74613,
            lat: 63.75247,
          },
          {
            type: 'EUREF_FIN',
            lon: 290212.8174297585,
            lat: 7076420.9055757625,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_154',
        nameFi: 'Maalahti',
        nameSv: 'Malax',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.5477, 62.9452],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.5477,
            lat: 62.9452,
          },
          {
            type: 'EUREF_FIN',
            lon: 223554.60381337145,
            lat: 6991210.116230242,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_165',
        nameFi: 'Mustasaari',
        nameSv: 'Korsholm',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.67739, 63.11256],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.67739,
            lat: 63.11256,
          },
          {
            type: 'EUREF_FIN',
            lon: 231663.2997566702,
            lat: 7009258.174725785,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_179',
        nameFi: 'Närpiö',
        nameSv: 'Närpes',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.36228, 62.48332],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.36228,
            lat: 62.48332,
          },
          {
            type: 'EUREF_FIN',
            lon: 209669.00106398785,
            lat: 6940706.9705088185,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_197',
        nameFi: 'Pedersören kunta',
        nameSv: 'Pedersöre',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.7888, 63.5974],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.7888,
            lat: 63.5974,
          },
          {
            type: 'EUREF_FIN',
            lon: 291176.3638174709,
            lat: 7059030.633744785,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_196',
        nameFi: 'Pietarsaari',
        nameSv: 'Jakobstad',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.70383, 63.67308],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.70383,
            lat: 63.67308,
          },
          {
            type: 'EUREF_FIN',
            lon: 287534.27313286293,
            lat: 7067729.446209703,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_288',
        nameFi: 'Uusikaarlepyy',
        nameSv: 'Nykarleby',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.53069, 63.52163],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.53069,
            lat: 63.52163,
          },
          {
            type: 'EUREF_FIN',
            lon: 277802.7642536216,
            lat: 7051472.462231829,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_290',
        nameFi: 'Vaasa',
        nameSv: 'Vasa',
        type: 'Kaupunki',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [21.61714, 63.09557],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 21.61714,
            lat: 63.09557,
          },
          {
            type: 'EUREF_FIN',
            lon: 228472.43555429886,
            lat: 7007623.508247668,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
      {
        id: 'M_305',
        nameFi: 'Vöyri',
        nameSv: 'Vörå',
        type: 'Kunta',
        coordinatesPoint: {
          type: 'Point',
          coordinates: [22.25286, 63.13197],
        },
        coordinates: [
          {
            type: 'WGS84',
            lon: 22.25286,
            lat: 63.13197,
          },
          {
            type: 'EUREF_FIN',
            lon: 260793.45739667726,
            lat: 7009139.98438807,
          },
        ],
        regionId: 'R_14',
        regionNameFi: 'Pohjanmaa',
        regionNameSv: 'Österbotten',
        regionCoordinates: [
          {
            type: 'WGS84',
            lon: 22.16092,
            lat: 62.94054,
          },
          {
            type: 'EUREF_FIN',
            lon: 254561.1077872123,
            lat: 6988202.2175315665,
          },
        ],
        regionCoordinatesPoint: {
          type: 'Point',
          coordinates: [22.16092, 62.94054],
        },
        configurationType: 'Municipality',
      },
    ],
  },
];
