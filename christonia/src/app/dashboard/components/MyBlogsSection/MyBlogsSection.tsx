import styles from './MyBlogsSection.module.css'
import MyBlogCard from '../MyBlogCard/MyBlogCard';

export default function MyBlogsSection() {
    return (
        <section className={styles.myBlogsSection}>
            <h1 className={styles.title}>My Blogs</h1>
            <div className={styles.blogsContainer}>
                <MyBlogCard
                    title="Blog 1"
                    author="John Doe"
                    datePublished="2023-06-01"
                    dateEdited="2023-06-05"
                    likes={10}
                    description="This is a sample blog post."
                 />
            </div>
        </section>
    );
}