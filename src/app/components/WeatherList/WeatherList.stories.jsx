import WeatherList from './WeatherList';

const defaultData = {
  weatherData:
  {
    icon: '01n',
    date: 1696012999,
    description: 'clear sky',
    temp: 15.82,
    alerts: [],
    minTemp: 13.58,
    maxTemp: 24.1
  },
  foreCastData: [
    {
      date: 1696068000,
      maxTemp: 24.55,
      minTemp: 13.3,
      description: 'clear sky',
      icon: '01d'
    },
    {
      date: 1696154400,
      maxTemp: 23.58,
      minTemp: 12.98,
      description: 'few clouds',
      icon: '02d'
    },
    {
      date: 1696240800,
      maxTemp: 23.28,
      minTemp: 12.3,
      description: 'few clouds',
      icon: '02d'
    },
    {
      date: 1696327200,
      maxTemp: 24.06,
      minTemp: 12.92,
      description: 'clear sky',
      icon: '01d'
    }
  ],
  alerts: [
    {
      sender: 'NWS Philadelphia - Mount Holly (New Jersey, Delaware, Southeastern Pennsylvania)',
      event: 'Small Craft Advisory',
      start: 1684952747,
      end: 1684988747,
      description: '...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...\n* WHAT...North winds 15 to 20 kt with gusts up to 25 kt and seas\n3 to 5 ft expected.\n* WHERE...Coastal waters from Little Egg Inlet to Great Egg\nInlet NJ out 20 nm, Coastal waters from Great Egg Inlet to\nCape May NJ out 20 nm and Coastal waters from Manasquan Inlet\nto Little Egg Inlet NJ out 20 nm.\n* WHEN...From 5 PM this afternoon to 3 AM EST Friday.\n* IMPACTS...Conditions will be hazardous to small craft.',
    },
    {
      sender: 'NWS Philadelphia - Mount Holly (New Jersey, Delaware, Southeastern Pennsylvania) 2',
      event: 'Small Craft Advisory',
      start: 1684952747,
      end: 1684988747,
      description: '...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...\n* WHAT...North winds 15 to 20 kt with gusts up to 25 kt and seas\n3 to 5 ft expected.\n* WHERE...Coastal waters from Little Egg Inlet to Great Egg\nInlet NJ out 20 nm, Coastal waters from Great Egg Inlet to\nCape May NJ out 20 nm and Coastal waters from Manasquan Inlet\nto Little Egg Inlet NJ out 20 nm.\n* WHEN...From 5 PM this afternoon to 3 AM EST Friday.\n* IMPACTS...Conditions will be hazardous to small craft.',
    },
  ],
}

const component = {
  component: WeatherList,
};

export const Primary = {
  args: {
    ...defaultData
  },
};

export default component;
