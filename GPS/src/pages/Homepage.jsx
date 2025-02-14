import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav/>

      <section>
      <h1>
  You travel the world.
  <br />
  <p style={{color:"orange"}}>
    TravelNotes keeps track of your adventures.
    </p>
</h1>
<h2>
  A world map that tracks your footsteps into every city you can think of. Preserve your cherished memories and share your global adventures with friends.
</h2>

        <Link to='/login' className='cta'>Start Tracking Now</Link>
      </section>
    </main>
  );
}
