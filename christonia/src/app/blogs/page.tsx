import styles from './page.module.css'
import BookmarkedBlogsSection from './components/BookmarkedBlogsSection/BookmarkedBlogsSection';
import BlogsSection from './components/BlogsSection/BlogsSection';
import SupportUsSection from '@/components/SupportUsSection/SupportUsSection';

export default function BlogsPage() {
    return (
        <>
            <div className={styles.blogsPage}>
                <BookmarkedBlogsSection />
                <hr />
                <BlogsSection />
            </div>
            <SupportUsSection />
        </>
    );
}