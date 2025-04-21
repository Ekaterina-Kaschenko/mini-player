import { Station } from '../types/stations';

const URL = 'https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json';

export const fetchStations = async (): Promise<Station[]> => {
  const res = await fetch(URL);
  if (!res.ok) throw new Error('Failed to fetch stations');

  const json = await res.json();

  return json.data;
};
