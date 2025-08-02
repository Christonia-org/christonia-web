import styles from './OverviewSection.module.css';
import Link from 'next/link';

export default function OverviewSection() {
    return (
      <section className={styles.overviewSection}>
          <h1 className={styles.title}>Overview of Christonia</h1>
          
          <div className={styles.overviewGrid}>
              <div className={styles.statCard}>
                  <h3>30,000</h3>
                  <p>Learners</p>
              </div>
              <div className={styles.statCard}>
                  <h3>200+</h3>
                  <p>Contributors</p>
              </div>
              <div className={styles.statCard}>
                  <h3>2025</h3>
                  <p>Founded</p>
              </div>
  
              <div className={styles.originBlock}>
                  <h2>Origin of Christonia</h2>
                  <p>
                    Christonia is the Armenian word "Kristonya" for Christian. It is also a reference 
                    to an ideal world, a utopia, which is under Christ's rule.
                  </p>
                  <p>
                    Christonia was founded in 2025 by Michael Kolanjian. Inspired by apologists by the 
                    likes of David Wood, Sam Shamoun, and Godlogic. Michael grew eager to get into 
                    apologetics. However, the resources were scattered, varied, and difficult to 
                    understand.
                  </p>
                  <p>
                    Michael made it his mission to make apologetics as accessible as possible to the 
                    biggest number of people, so he built a website to host a completely free 
                    Christian theology curriculum prepared by the greatest Christian theologians and 
                    apologists.
                  </p>
                  <p>
                    His mission would be fulfilled by a joint effort with eager contributors who would 
                    provide the learning material and fund the maintenance of the project.
                  </p>
              </div>
              <div className={styles.openSourceBlock}>
                  <h3><img src="/github-logo.svg" alt="Open Source Icon" className={styles.openSourceIcon}/>Collaborative Work</h3>
                  <p>
                    This website and the curriculum it hosts are a team effort. 
                    That means anyone who wants to contribute to the code can do so by submitting a request. 
                    This also extends to the curriculum itself. Anyone can work on new lessons, 
                    add new resources and improve existing lessons, so long as they join the team.
                  </p>
                  <p>
                    Christonia would not be possible without the hard work of contributors from all 
                    across the world. If you're interested in helping us make Christonia better, 
                    please <Link href="/contribute" className={styles.contributeLink}>find out how to contribute</Link>.
                  </p>
              </div>
          </div>
      </section>
    );
}
