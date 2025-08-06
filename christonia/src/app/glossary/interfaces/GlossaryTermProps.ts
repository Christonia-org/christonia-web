interface GlossaryTermProps {
  name: string;
  description: string;
  id: string;
  similarTerms?: SimilarTerm[];
  onSimilarTermClick?: () => void;
}