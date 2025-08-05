import styles from './MeetTheTeamSection.module.css';
import Link from 'next/link';
import PersonCard from '../PersonCard/PersonCard';

interface Member {
  id: string;
  profilePicUrl: string;
  name: string;
  joinDate: string;
  country: string;
  githubUrl?: string;
  youtubeUrl?: string;
  xUrl?: string;
  linkedinUrl?: string;
}

const coreMembers: Member[] = [
  { id: 'core-1', profilePicUrl: '/placeholder-avatar.svg', name: 'John Doe 1', joinDate: '2025', country: 'USA', xUrl: '#', githubUrl: '#' },
  { id: 'core-2', profilePicUrl: '/placeholder-avatar.svg', name: 'John Doe 2', joinDate: '2025', country: 'Canada', youtubeUrl: '#', linkedinUrl: '#' },
  { id: 'core-3', profilePicUrl: '/placeholder-avatar.svg', name: 'John Doe 3', joinDate: '2025', country: 'UK', githubUrl: '#', youtubeUrl: '#' },
  { id: 'core-4', profilePicUrl: '/placeholder-avatar.svg', name: 'John Doe 4', joinDate: '2025', country: 'Australia', xUrl: '#', linkedinUrl: '#' },
  { id: 'core-5', profilePicUrl: '/placeholder-avatar.svg', name: 'John Doe 5', joinDate: '2025', country: 'Germany', githubUrl: '#', xUrl: '#' },
];

const maintainerMembers: Member[] = [
  { id: 'maintainer-1', profilePicUrl: '/placeholder-avatar.svg', name: 'Jane Doe 1', joinDate: '2024', country: 'France', githubUrl: '#' },
  { id: 'maintainer-2', profilePicUrl: '/placeholder-avatar.svg', name: 'Jane Doe 2', joinDate: '2024', country: 'Spain', youtubeUrl: '#' },
  { id: 'maintainer-3', profilePicUrl: '/placeholder-avatar.svg', name: 'Jane Doe 3', joinDate: '2024', country: 'Italy', linkedinUrl: '#' },
];

const moderatorMembers: Member[] = [
  { id: 'moderator-1', profilePicUrl: '/placeholder-avatar.svg', name: 'Mike Smith 1', joinDate: '2023', country: 'Japan', xUrl: '#' },
  { id: 'moderator-2', profilePicUrl: '/placeholder-avatar.svg', name: 'Mike Smith 2', joinDate: '2023', country: 'China', githubUrl: '#' },
];

const alumniMembers: Member[] = [
  { id: 'alumni-1', profilePicUrl: '/placeholder-avatar.svg', name: 'Alice Brown 1', joinDate: '2022', country: 'India', linkedinUrl: '#' },
  { id: 'alumni-2', profilePicUrl: '/placeholder-avatar.svg', name: 'Alice Brown 2', joinDate: '2022', country: 'Mexico', youtubeUrl: '#' },
];


export default function MeetTheTeamSection() {  
    return (
        <section className={styles.meetTheTeamSection}>
            <div className={styles.intro}>
                <h1 className={styles.title}>Meet the Team</h1>
                <p className={styles.description}>Christonia is run by a group of dedicated volunteers from around the world.</p>
                <ul className={styles.teamRoles}>
                    <li><Link href="#core" className={styles.link}>Core</Link></li>
                    <li><Link href="#maintainers" className={styles.link}>Maintainers</Link></li>
                    <li><Link href="#moderators" className={styles.link}>Moderators</Link></li>
                    <li><Link href="#alumni" className={styles.link}>Alumni</Link></li>
                </ul>
            </div>

            <div className={styles.teamRolesSection} id='core'>
                <h2 className={styles.roleTitle}>Core</h2>
                <p className={styles.roleDescription}>
                    The Core team are long-serving members who have made significant contributions 
                    to Christonia. They serve as the leadership, responsible for shaping and guiding the direction of the platform.
                </p>
                <div className={styles.roleMembers}>
                    {coreMembers.map(member => (
                        <PersonCard 
                            key={member.id} // Important for React list rendering
                            profilePicUrl={member.profilePicUrl}
                            name={member.name}
                            joinDate={member.joinDate}
                            country={member.country}
                            githubUrl={member.githubUrl}
                            youtubeUrl={member.youtubeUrl}
                            xUrl={member.xUrl}
                            linkedinUrl={member.linkedinUrl}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.teamRolesSection} id='maintainers'>
                <h2 className={styles.roleTitle}>Maintainers</h2>
                <p className={styles.roleDescription}>
                    Maintainers look after Christonia. Some ensure any issues with the code are fixed, 
                    while others oversee the curriculum and its material.
                </p>
                <div className={styles.roleMembers}>
                    {maintainerMembers.map(member => (
                        <PersonCard 
                            key={member.id}
                            profilePicUrl={member.profilePicUrl}
                            name={member.name}
                            joinDate={member.joinDate}
                            country={member.country}
                            githubUrl={member.githubUrl}
                            youtubeUrl={member.youtubeUrl}
                            xUrl={member.xUrl}
                            linkedinUrl={member.linkedinUrl}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.teamRolesSection} id='moderators'>
                <h2 className={styles.roleTitle}>Moderators</h2>
                <p className={styles.roleDescription}>
                    Moderators are responsible for looking after the Christonia community by monitoring 
                    any violations to its guidelines in the blogs and the Discord.
                </p>
                <div className={styles.roleMembers}>
                    {moderatorMembers.map(member => (
                        <PersonCard 
                            key={member.id}
                            profilePicUrl={member.profilePicUrl}
                            name={member.name}
                            joinDate={member.joinDate}
                            country={member.country}
                            githubUrl={member.githubUrl}
                            youtubeUrl={member.youtubeUrl}
                            xUrl={member.xUrl}
                            linkedinUrl={member.linkedinUrl}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.teamRolesSection} id='alumni'>
                <h2 className={styles.roleTitle}>Alumni</h2>
                <p className={styles.roleDescription}>
                    We extend our gratitude to all our former team members. Their dedication and 
                    contributions have played an invaluable role in the growth of Christonia.
                </p>
                <div className={styles.roleMembers}>
                    {alumniMembers.map(member => (
                        <PersonCard 
                            key={member.id}
                            profilePicUrl={member.profilePicUrl}
                            name={member.name}
                            joinDate={member.joinDate}
                            country={member.country}
                            githubUrl={member.githubUrl}
                            youtubeUrl={member.youtubeUrl}
                            xUrl={member.xUrl}
                            linkedinUrl={member.linkedinUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
