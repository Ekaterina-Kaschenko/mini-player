export interface Station {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  streamUrl: string;
  popularity: number;
  reliability: number;
  tags: string[];
}
