interface ActivityDate {
  from?: Date;
  to: Date;
}

export interface ActivityCreateDto {
  date: ActivityDate;
  title: string;
  description: string;
  category?: string;
  url?: string;
}
