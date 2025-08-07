import styles from './page.module.css'
import BookmarkedBlogsSection from './components/BookmarkedBlogsSection/BookmarkedBlogsSection';

export default function BlogsPage() {
    return (
        <div className={styles.blogsPage}>
            <BookmarkedBlogsSection />
        </div>
    );
}