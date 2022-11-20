const Buoy = {
  name: "Buoy 1",
  data: [
    {
      id: 1,
      name: "Air Temp.",
      value: 19.00,
    },
    {
      id: 2,
      name: "Air Pressure",
      value: 1858.32,
    },
    {
      id: 3,
      name: "Humidity",
      value: 91.15,
    },
    {
      id: 4,
      name: "Illuminance",
      value: 2.00,
    },
    {
      id: 5,
      name: "Battery",
      value: 2.64,
    },
    {
      id: 6,
      name: "Rainfall",
      value: 0.00,
    },
  ],
  CO2: {
    data: [500, 480, 450, 490, 440],
    categories: [
      "08/09 7.00 am",
      "08/09 8.00am",
      "08/09 9.00am",
      "08/09 10.00am",
      "08/09 11.00am",
      "08/09 12.00pm",
      "08/09 1.00pm",
      "08/09 2.00pm",
      "08/09 3.00pm",
      "08/09 4.00pm",
      "08/09 5.00pm",
      "08/09 6.00pm",
      "08/09 7.00pm",
      "08/09 8.00pm",
    ],
  },
  Tide: {
    data: [2, 2.8, 3.5, 3, 2.4, 1.5, 2.4, 2.8, 3.5, 3],
    categories: [
      "Sep 17",
      "Sep 18",
      "Sep 19",
      "Sep 20",
      "Sep 21",
      "Sep 22",
      "Sep 23",
      "Sep 24",
      "Sep 25",
      "Sep 26",
    ],
  },
  wind: 70,
  date: new Date().toLocaleDateString(),
  time: new Date().toLocaleTimeString(),
};
const Buoys = [
  {
    id: 1,
    lat: 51.12347581438194,
    lng: 1.319102412632948,
    name: "Buoy 1",
    data: [
      {
        id: 1,
        name: "Air Temp.",
        value: 19.0,
      },
      {
        id: 2,
        name: "Air Pressure",
        value: 1858.32,
      },
      {
        id: 3,
        name: "Humidity",
        value: 91.15,
      },
      {
        id: 4,
        name: "Illuminance",
        value: 2.0,
      },
      {
        id: 5,
        name: "Battery",
        value: 2.64,
      },
      {
        id: 6,
        name: "Rainfall",
        value: 0.0,
      },
    ],
    CO2: {
      data: [500, 480, 450, 490, 440, 470],
      categories: [
        "08/09 7.00 am",
        "08/09 8.00am",
        "08/09 9.00am",
        "08/09 10.00am",
        "08/09 11.00am",
        "08/09 12.00pm",
        "08/09 1.00pm",
        "08/09 2.00pm",
        "08/09 3.00pm",
        "08/09 4.00pm",
        "08/09 5.00pm",
        "08/09 6.00pm",
        "08/09 7.00pm",
        "08/09 8.00pm",
      ],
    },
    Tide: {
      data: [2, 2.8, 3.5, 3, 2.4, 1.5, 2.4, 2.8, 3.5, 3],
      categories: [
        "Sep 17",
        "Sep 18",
        "Sep 19",
        "Sep 20",
        "Sep 21",
        "Sep 22",
        "Sep 23",
        "Sep 24",
        "Sep 25",
        "Sep 26",
      ],
    },
    wind: 70,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 2,
    lat: 51.11367638812492,
    lng: 1.3122141188530694,
    name: "Buoy 2",
    data: [
      {
        id: 11,
        name: "Air Temp.",
        value: 22.0,
      },
      {
        id: 22,
        name: "Air Pressure",
        value: 2858.32,
      },
      {
        id: 33,
        name: "Humidity",
        value: 101.76,
      },
      {
        id: 44,
        name: "Illuminance",
        value: 6,
      },
      {
        id: 55,
        name: "Battery",
        value: 5.6,
      },
      {
        id: 66,
        name: "Rainfall",
        value: 2,
      },
    ],
    CO2: {
      data: [450, 500, 450, 500, 440, 470],
      categories: [
        "08/09 7.00 am",
        "08/09 8.00am",
        "08/09 9.00am",
        "08/09 10.00am",
        "08/09 11.00am",
        "08/09 12.00pm",
        "08/09 1.00pm",
        "08/09 2.00pm",
        "08/09 3.00pm",
        "08/09 4.00pm",
        "08/09 5.00pm",
        "08/09 6.00pm",
        "08/09 7.00pm",
        "08/09 8.00pm",
      ],
    },
    Tide: {
      data: [2.5, 3.4, 3.1, 2.5, 2.8, 2.5, 3.4, 2.8, 3.5, 3],
      categories: [
        "Sep 17",
        "Sep 18",
        "Sep 19",
        "Sep 20",
        "Sep 21",
        "Sep 22",
        "Sep 23",
        "Sep 24",
        "Sep 25",
        "Sep 26",
      ],
    },
    wind: 85,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 3,
    lat: 51.099390734857465,
    lng: 1.260894015063303,
    name: "Buoy 3",
    data: [
      {
        id: 111,
        name: "Air Temp.",
        value: 32.0,
      },
      {
        id: 222,
        name: "Air Pressure",
        value: 2858.32,
      },
      {
        id: 333,
        name: "Humidity",
        value: 95.76,
      },
      {
        id: 444,
        name: "Illuminance",
        value: 5,
      },
      {
        id: 555,
        name: "Battery",
        value: 3.6,
      },
      {
        id: 666,
        name: "Rainfall",
        value: 3,
      },
    ],
    CO2: {
      data: [490, 520, 480, 500, 440, 470],
      categories: [
        "08/09 7.00 am",
        "08/09 8.00am",
        "08/09 9.00am",
        "08/09 10.00am",
        "08/09 11.00am",
        "08/09 12.00pm",
        "08/09 1.00pm",
        "08/09 2.00pm",
        "08/09 3.00pm",
        "08/09 4.00pm",
        "08/09 5.00pm",
        "08/09 6.00pm",
        "08/09 7.00pm",
        "08/09 8.00pm",
      ],
    },
    Tide: {
      data: [3.4, 2.5, 3.1, 2.5, 2.8, 3.4, 2.5, 2.8, 3.5, 3],
      categories: [
        "Sep 17",
        "Sep 18",
        "Sep 19",
        "Sep 20",
        "Sep 21",
        "Sep 22",
        "Sep 23",
        "Sep 24",
        "Sep 25",
        "Sep 26",
      ],
    },
    wind: 80,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 4,
    lat: 51.125936727261596,
    lng: 1.3418610013335945,
    name: "Buoy 4",
    data: [
      {
        id: 1111,
        name: "Air Temp.",
        value: 32.0,
      },
      {
        id: 2222,
        name: "Air Pressure",
        value: 2558.32,
      },
      {
        id: 3333,
        name: "Humidity",
        value: 93.76,
      },
      {
        id: 4444,
        name: "Illuminance",
        value: 6,
      },
      {
        id: 5555,
        name: "Battery",
        value: 4.6,
      },
      {
        id: 6666,
        name: "Rainfall",
        value: 4,
      },
    ],
    CO2: {
      data: [520, 480, 490, 500, 440, 470],
      categories: [
        "08/09 7.00 am",
        "08/09 8.00am",
        "08/09 9.00am",
        "08/09 10.00am",
        "08/09 11.00am",
        "08/09 12.00pm",
        "08/09 1.00pm",
        "08/09 2.00pm",
        "08/09 3.00pm",
        "08/09 4.00pm",
        "08/09 5.00pm",
        "08/09 6.00pm",
        "08/09 7.00pm",
        "08/09 8.00pm",
      ],
    },
    Tide: {
      data: [2.5, 2.8, 3.5, 3, 3.4, 2.5, 3.1, 2.5, 2.8, 3.4],
      categories: [
        "Sep 17",
        "Sep 18",
        "Sep 19",
        "Sep 20",
        "Sep 21",
        "Sep 22",
        "Sep 23",
        "Sep 24",
        "Sep 25",
        "Sep 26",
      ],
    },
    wind: 90,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 5,
    lat: 51.13687861933575,
    lng: 1.3684761686820504,
    name: "Buoy 5",
    data: [
      {
        id: 11111,
        name: "Air Temp.",
        value: 26.0,
      },
      {
        id: 22222,
        name: "Air Pressure",
        value: 2358.32,
      },
      {
        id: 33333,
        name: "Humidity",
        value: 90.76,
      },
      {
        id: 44444,
        name: "Illuminance",
        value: 3,
      },
      {
        id: 55555,
        name: "Battery",
        value: 1.6,
      },
      {
        id: 66666,
        name: "Rainfall",
        value: 1,
      },
    ],
    CO2: {
      data: [440, 470, 490, 520, 480, 500],
      categories: [
        "08/09 7.00 am",
        "08/09 8.00am",
        "08/09 9.00am",
        "08/09 10.00am",
        "08/09 11.00am",
        "08/09 12.00pm",
        "08/09 1.00pm",
        "08/09 2.00pm",
        "08/09 3.00pm",
        "08/09 4.00pm",
        "08/09 5.00pm",
        "08/09 6.00pm",
        "08/09 7.00pm",
        "08/09 8.00pm",
      ],
    },
    Tide: {
      data: [2.8, 3.4, 2.5, 2.8, 3.5, 3, 3.4, 2.5, 3.1, 2.5],
      categories: [
        "Sep 17",
        "Sep 18",
        "Sep 19",
        "Sep 20",
        "Sep 21",
        "Sep 22",
        "Sep 23",
        "Sep 24",
        "Sep 25",
        "Sep 26",
      ],
    },
    wind: 75,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  },
];

exports.db = { Buoy, Buoys };