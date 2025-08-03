import styles from './FaqSection.module.css';
import Link from 'next/link';

export default function FaqSection() {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      
      <details className={styles.faqItem}>
        <summary className={styles.question}>
          <span>Who is Christonia for?</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className={styles.answer}>
          Christonia is for anyone who'd like to dive into the world of Christian apologetics. 
          Whether you're passionate about defending Christianity, or you have recurring doubts 
          and need answers, Christonia is the platform for you. 
        </p>
        <p className={styles.answer}>
          At Christonia, you get a complete curriculum that answers your questions and teaches you 
          how to answer other people's questions.
        </p>
      </details>
      
      <details className={styles.faqItem}>
        <summary className={styles.question}>
          <span>What is the goal of Christonia?</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className={styles.answer}>
          The goal of Christonia is to make it easier to get into Christian apologetics and to help
          Christians defend their faith and answer criticisms.
        </p>
      </details>
      
      <details className={styles.faqItem}>
        <summary className={styles.question}>
          <span>How long does it take to complete the curriculum?</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className={styles.answer}>
          The curriculum is self-paced, so it depends entirely on you! We don't have a set timeline 
          for you to follow. What matters is that you take the time to understand each topic thoroughly 
          before moving on so that you don't blunder in your discussions with others.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary className={styles.question}>
          <span>What can I expect to learn from Christonia?</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className={styles.answer}>
          You will learn how to defend your Christian faith against common objections, how to engage 
          in respectful dialogue with people of different beliefs, and how to articulate your own faith more 
          clearly.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary className={styles.question}>
          <span>Is Christonia a replacement to Bible study?</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className={styles.answer}>
          Absolutely not! Christonia is designed to complement your Bible study, not replace it.
          While Bible study focuses on understanding Scripture, Christonia teaches you how to leverage
          this understanding when addressing criticism.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary className={styles.question}>
          <span>How is Christonia different from other Christian websites?</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className={styles.answer}>
          While other Christian sites offer theology and apologetics resources, most of them share a
          single perspective. Christonia gives you the luxury of selecting which perspective you'd like to
          learn from, whether it's the Orthodox, Catholic, or the Protestant track, offered in a structured, 
          user-friendly curriculum.
        </p>
        <p className={styles.answer}>
          Moreover, with Christonia you can write blogs to share your own insights on different apologetics
          and polemics topics with the community. You can benefit from feedback from others, as well as 
          improve your writing with the built-in AI assistant.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary className={styles.question}>
          <span>What does Christonia mean?</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className={styles.answer}>
          Christonia comes from the armenian word Քրիստոնյա, pronounced Kristonya, which means 
          "Christian". It also refers to the word "utopia", which is an ideal world, just as a 
          Christonia would be an ideal Christian world.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary className={styles.question}>
          <span>Do I have to sign up?</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className={styles.answer}>
          Nope. You can browse the curriculum as freely as you want. However, if you want access to 
          blogs, progress tracking, or our elements of gamification, we highly recommend you to sign up.
          It's completely free, and we collect no personal information from you.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary className={styles.question}>
          <span>Is Christonia free?</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className={styles.answer}>
          Yes, in every sense of the word. You can access the entire curriculum, blogs, and all 
          other features completely free. There is no catch, no hidden fees, no collecting and selling
          of your data. It just matters to us that every Christian in the world has the right tools
          to defend their faith in the face of criticism.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary className={styles.question}>
          <span>Don't tracks lead to further separation among Christians?</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className={styles.answer}>
          Not at all. The tracks are there to offer you a more personalized learning experience. In 
          fact, we think it is very important to offer apologetics from different perspectives,
          because it allows you to understand the different views within Christianity, and how to
          defend your own view against the others. This is a great way to harbor understanding within
          the Christian community, which leads to more unity by exposing divisions caused by
          misunderstandings.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary className={styles.question}>
          <span>Do you have a code of conduct?</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className={styles.answer}>
          Yes we do. We want to ensure that Christonia is a safe and respectful space for everyone.
          You can read our code of conduct by following this 
          <Link href="/code-of-conduct" className={styles.link}>link</Link>.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary className={styles.question}>
          <span>Can I use this curriculum to teach?</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className={styles.answer}>
          Absolutely! In fact, we encourage it. The curriculum is designed to be used as a teaching tool,
          and we believe that the more people who learn from it, the better. 
          <br />
          You can't, however, misrepresent our curriculum or its content to make us say something
          we didn't. Violation of this policy will result in legal action.
        </p>
      </details>

      <details className={styles.faqItem}>
        <summary className={styles.question}>
          <span>How can I get in touch?</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className={styles.answer}>
          You can reach out to us via <Link href="mailto:michaelkolanjian.christonia@gmail.com" className={styles.link}>email</Link> or through our <Link href="#" className={styles.link}>Discord</Link>.
        </p>
      </details>
    </section>
  );
}
