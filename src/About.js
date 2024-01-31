import styles from "./Css/About.module.css"
import React from 'react';

const About = () => {
  return (
    <div className={styles["about-container"]}>
      <header>
        <h1>About Food Junction</h1>
        <p>Welcome to Food Junction, where your culinary journey begins! 🍔🍕🍣</p>
      </header>

      <section>
        <h2>Our Mission</h2>
        <p>
          At Food Junction, we are on a mission to bring delicious and diverse cuisines to your table. Whether you're a foodie exploring new tastes or someone looking for a comforting meal, we've got you covered.
        </p>
      </section>

      <section>
        <h2>Technology Stack</h2>
        <p>
          Food Junction is built using cutting-edge technologies to provide a seamless and enjoyable experience for our users. Our tech stack includes React, React Router for smooth navigation, Firebase for secure data storage, and useReducer for efficient state management.
        </p>
      </section>

      <section>
        <h2>Explore and Enjoy</h2>
        <p>
          Navigate through our user-friendly interface, discover a variety of dishes, and create your own food adventure. Whether you're a chef in the making or someone who loves a quick and tasty bite, Food Junction is the place for you.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Have questions, suggestions, or just want to say hello? Feel free to reach out to us at <a href="" onClick={(e) => e.preventDefault()}>abprogresss@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}

export default About;
