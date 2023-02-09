import Plotpeek from './Plotpeek';

export default interface PlotpeekIndividual extends Plotpeek {
  content: string;
  createdBy: {
    id: number;
    username: string;
  };
}
