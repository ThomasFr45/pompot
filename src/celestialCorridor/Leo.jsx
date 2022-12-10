import CcBossHeader from "./CcBossHeader";
import bossImg from "../img/cc/leoBoss.png";
import "./ccBoss.css";
import leoInfo1 from "../img/cc/leoInfo1.png";
import leoInfo2 from "../img/cc/leoInfo2.png";

const Leo = () => {
  let teamComp = {
    healer: "Adjudicator / Totem Master / Paladin",
    debuffer: "Berserker",
    dps1: "Asura",
    dps2: "Executionner",
    dps3: "Assassin",
  };
  return (
    <div className="ccBossContainer">
      <CcBossHeader
        name="Leo"
        solo={false}
        dmg="Holy, Dark"
        comp={teamComp}
        img={bossImg}
      />
      <div className="ccBossConcent">
      <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
          <li>
            1. Leo à deux clones autours de lui, un à droite et un à gauche. Ils
            utiliseront les mêmes attaques que Leo. Tant qu'ils sont dans leur
            cage, vous pouvez les ignorer.
          </li>
          <li>
            2. Vers 80% HP, Leo utilisera "Pack Leader". Quand cette compétence
            est active, un compte à rebours de 20 secondes sera lancé, après
            quoi, les clones seront libérés. Ils faut les ramener dans leurs
            cages respectives. <br /> Si vous ne les ramenez pas dans leurs
            cages en moins de 15 secondes, le groupe sera WIPE. <br /> NOTEZ que
            les clones ne peuvent pas être mis dans la même prison. Il faudra
            donc que deux personne différentes prennent l'aggro pour les séparer
            et les enmener dans leur PROPRE CAGE.
          </li>
          <li>
            3. Vers 50% HP, Leo utilisera "Pack Boy". Cette compétence restera
            active 5 secondes, pendant lesquelles il "stackera" à chaque fois
            qu'il sera attaqué. Une stack lui donnera : DMG DEALT + 3% et DMG
            TAKEN - 2%. Cet effet peut être stacké 50 fois, il est donc
            conseillé d'arrêter de taper quand il utilise sa compétence.
          </li>
          <li>
            <img src={leoInfo1} alt="" />
            <br />
            <img src={leoInfo2} alt="" />
          </li>
          <li>
          <h3>{localStorage.getItem('language') === 'EN' ? "Notes :" : "Notez que :"}</h3>
          </li>
          <li>
            Leo est immunisé aux dégâts SLASH. <br /> Les clones sont immunisés
            à tout types de dégats. Vous pouvez les tuer avec un assassin ou un
            Time Totem, mais ils vont respawn directement.
            <br/> Il est conseillé d'avoir un maximum de résistance au slash.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leo;
