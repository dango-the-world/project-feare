export interface FetchPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  tags: string;
  user: {
    username: string;
    iconUrl: string | null;
  };
}
