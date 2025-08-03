import styles from './FaqSection.module.css';
import Link from 'next/link';

export default function FaqSection() {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div className={styles.faqItem}>
        <h3 className={styles.question}>How will my money be used?</h3>
        <p className={styles.answer}>
          Your money will be used to pay for the costs of running Christonia. This includes 
          paying for the servers that host the website, the domain name, and any other costs 
          associated with running the project. Your money does not go towards paying the maintainers.
        </p>
      </div>
      <div className={styles.faqItem}>
        <h3 className={styles.question}>How can I donate?</h3>
        <p className={styles.answer}>
          We have not decided on the donation methodologies yet. Stay tuned for any updates.
        </p>
      </div>
      <div className={styles.faqItem}>
        <h3 className={styles.question}>What form of payments can I use?</h3>
        <p className={styles.answer}>
          Once we decide what platform we'll use to accept donations, we'll update this page to 
          inform you what forms of payments you can use.
        </p>
      </div>
      <div className={styles.faqItem}>
        <h3 className={styles.question}>What happens if you receive more donations than needed?</h3>
        <p className={styles.answer}>
          Any extra money that we receive will be used to improve Christonia, or will be saved 
          for future needs. This includes paying for new features, paying for new servers, and 
          paying for any other costs associated with running the project.
        </p>
      </div>
      <div className={styles.faqItem}>
        <h3 className={styles.question}>What are the benefits of donating?</h3>
        <p className={styles.answer}>
          Your donation helps us continue to provide a comprehensive and completely free apologetics 
          curriculum for anyone and everyone eager to learn. We believe that this material should be 
          available for free to anyone that needs it, and donations from those that have the means to 
          contribute help keep it available for everyone!
        </p>
      </div>
      <div className={styles.faqItem}>
        <h3 className={styles.question}>Does becoming a donor mean I get priority support in the community?</h3>
        <p className={styles.answer}>
          No. We feel strongly that everyone should be treated equally in our community, regardless 
          of whether or not they are a donor.
        </p>
      </div>
      <div className={styles.faqItem}>
        <h3 className={styles.question}>I cannot afford to donate right now. What are some other ways I can help Christonia?</h3>
        <p className={styles.answer}>
          You can also help us by spreading the word about Christonia. Tell your friends, family, 
          and coworkers about us. Share our content on social media. The more people that know about 
          us, the more people we can help.
          <br />
          You can also help us by applying the information you're learning in your witness, so that 
          others who may have had questions can get answers too.
        </p>
      </div>
      <div className={styles.faqItem}>
        <h3 className={styles.question}>I still have questions. How can I contact you?</h3>
        <p className={styles.answer}>
          You can contact us through modmail on our discord server, or through email. 
          See our <Link href="/about#contact-us" className={styles.link}>contact us</Link> page for details.
        </p>
      </div>
    </section>
  );
}