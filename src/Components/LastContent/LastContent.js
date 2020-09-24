import React from "react";
import Pokemon from "../LastPokemons/Pokemon";
import styles from "./LastContet.module.css";
import Button from "../../Components/Button/Button";
import pikachu from "../../Assets/pikachu.png";
import pokerbola from "../../Assets/pokerbola.png";

const LastContent = () => {
  return (
    <section className={`container ${styles.containerLastContent}`}>
      <div className={styles.containerPokemons}>
        <Pokemon type={2} name={"pikachu"} />
        <Pokemon type={2} name={"ivysaur"} />
        <Pokemon type={2} name={"bulbasaur"} />
        <Pokemon type={2} name={"charizard"} />
      </div>

      <aside className={styles.aside}>
        <div
          className={styles.yellowCard}
          style={{ backgroundColor: "#ffd029" }}
        >
          <h4 className="formatedSubTitle" style={{ color: "#ff6b18" }}>
            Teste FrontEnd
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, a
            lacus, aliquam mattis est enim, molestie diam. Consequat blandit
            nec, venenatis dignissim suspendisse in facilisi molestie duis.
            Tempor sed quis phasellus arcu, posuere. Elementum ut tellus nisi,
            nunc ac etiam ut lectus porta. Et morbi enim vestibulum sodales sed
            ullamcorper dapibus accumsan. Faucibus pharetra, et at orci, vel
            blandit odio. Volutpat urna fusce quisque libero pellentesque in.
            Augue tempor vitae ullamcorper bibendum. Quis facilisi nulla id est
            natoque sed ut consectetur. Id eleifend eros ullamcorper et. Diam,
            ultrices pellentesque urna, integer a lectus. Sit sollicitudin ac
            egestas amet netus. Elit vitae dolor cursus cursus.{" "}
          </p>
          <Button />
        </div>

        <div className={styles.pikachu}>
          <img src={pikachu} alt="pikachu" />
        </div>

        <div className={styles.pokerbola}>
          <img src={pokerbola} alt="pikachu" />
        </div>
      </aside>
    </section>
  );
};

export default LastContent;
