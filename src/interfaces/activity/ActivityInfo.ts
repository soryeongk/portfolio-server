export interface ActivityInfo {
  date: {
    from?: Date;
    to: Date;
  };
  title: string;
  description: string;
  category?: string;
  url?: string;
}
