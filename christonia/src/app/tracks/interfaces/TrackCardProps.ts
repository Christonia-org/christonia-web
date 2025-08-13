interface TrackCardProps {
  id: string;
  name: string;
  imageLink?: string;
  description: string;
  link: string;
  courseCount: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
}
