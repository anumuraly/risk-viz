import Papa from 'papaparse';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const staticFolder = publicRuntimeConfig.staticFolder;



export type DataItem = {
  'Asset Name': string;
  Lat: string;
  Long: string;
  'Business Category': string;
  'Risk Rating': string;
  'Risk Factors': string;
  Year: string;
};

export async function loadData(): Promise<DataItem[]> {
  const csvFilePath = `${staticFolder}/data.csv`;

  const response = await fetch(csvFilePath);
  const text = await response.text();

  const { data } = Papa.parse<DataItem>(text, { header: true });
  return data;
}

export default loadData;
