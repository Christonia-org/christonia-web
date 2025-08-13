interface FoundationsCourseCardProps {
  id: string;
  name: string;
  imageLink?: string;
  description: string;
  link: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}
