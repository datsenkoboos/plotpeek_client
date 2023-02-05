export default interface Plotpeek {
  id: number;
  name: string;
  author: string;
  description: string | null;
  volume: number;
  views: number;
  _count: {
    likes: number;
  };
}
