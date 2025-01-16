export interface FetchPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  user: {
    username: string;
    iconUrl: string | null;
  };
}
