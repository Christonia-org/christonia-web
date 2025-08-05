import styles from './MeetTheTeamSection.module.css';

export default function MeetTheTeamSection() {  
    return (
        <section className={styles.meetTheTeamSection}>
            <div className={styles.intro}>
                <h1 className={styles.title}>Meet the Team</h1>
                <p className={styles.description}>Christonia is run by a group of dedicated volunteers from around the world.</p>
                <ul className={styles.teamRoles}>
                    <li>Core</li>
                    <li>Maintainers</li>
                    <li>Moderators</li>
                    <li>Alumni</li>
                </ul>
            </div>

            <div className={styles.teamRolesSection}>
                <h2 className={styles.roleTitle}>Core</h2>
                <p className={styles.roleDescription}>
                    The Core team are long-serving members who have made significant contributions 
                    to Christonia. They serve as the leadership, responsible for shaping and guiding the direction of the platform.
                </p>
                <div className={styles.roleMembers}></div>
            </div>

            <div className={styles.teamRolesSection}>
                <h2 className={styles.roleTitle}>Maintainers</h2>
                <p className={styles.roleDescription}>
                    Maintainers look after Christonia. Some ensure any issues with the code are fixed, 
                    while others oversee the curriculum and its material.
                </p>
                <div className={styles.roleMembers}></div>
            </div>

            <div className={styles.teamRolesSection}>
                <h2 className={styles.roleTitle}>Moderators</h2>
                <p className={styles.roleDescription}>
                    Moderators are responsible for looking after the Christonia community by monitoring 
                    any violations to its guidelines in the blogs and the Discord.
                </p>
                <div className={styles.roleMembers}></div>
            </div>

            <div className={styles.teamRolesSection}>
                <h2 className={styles.roleTitle}>Alumni</h2>
                <p className={styles.roleDescription}>
                    We extend our gratitude to all our former team members. Their dedication and 
                    contributions have played an invaluable role in the growth of Christonia.
                </p>
                <div className={styles.roleMembers}></div>
            </div>
        </section>
    );
}