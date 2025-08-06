import styles from './GlossaryTerm.module.css';
import Link from 'next/link';

export default function GlossaryTerm({ name, description, id, similarTerms, onSimilarTermClick }: GlossaryTermProps) {
  return (
    <div id={id} className={styles.glossaryTermCard}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      
      {similarTerms && similarTerms.length > 0 && (
        <div className={styles.similarTerms}>
          <p className={styles.seeAlso}>See also:</p>
          <div className={styles.similarTermsList}>
            {similarTerms.map((term, index) => (
              <span key={term.id}> 
                <Link href={`/glossary#${term.id}`} 
                      className={styles.similarTermLink} 
                      onClick={onSimilarTermClick}>
                  {term.name}
                </Link>
                {index < similarTerms.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
