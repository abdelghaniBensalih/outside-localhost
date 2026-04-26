export interface Activity {
  id: string;
  title: string;
  description: string;
  type:
    | "hackathon"
    | "workshop"
    | "event"
    | "training"
    | "conference"
    | "competition"
    | "organization";
  date?: string;
  location?: string;
  role: string;
  topics?: string[];
  tags?: string[];
  logo?: string;
  image?: string;
  link?: string;
}

export interface Organization {
  id: string;
  name: string;
  role: string;
  description: string;
  logo?: string;
  link?: string;
}
