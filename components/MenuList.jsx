import styles from "../styles/MenuList.module.css";
import MenuItemCard from "./MenuItemCard";

export default function MenuList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Movie Night Menu in Town!</h1>
      <p className={styles.desc}>
        Are you ever enjoying family night, but missing your favorite movie
        theater snacks? How about when you're binging your new favorite one
        Netflix series (or let's face it, The Office) and wishing you could be
        binging on some great food too? We got you. Cinematic Snacks is here to
        match the vibe of whatever you're in the mood for, whether it's Cory's
        obsession with tacos, Chucky's favorite Swedish meatballs, or all the
        chocolate Willy Wonka has you craving. We have an eclectic but creative
        and complete menu to help your next movie night complete the mood with
        the perfect menu. Check it out below.
      </p>
      <div className={styles.wrapper}>
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
      </div>
    </div>
  );
}
