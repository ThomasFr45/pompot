import CcBossHeader from "./CcBossHeader";
import bossImg from "../img/cc/LibraBoss.png";
import "./ccBoss.css";
import blessingsImg from "../img/cc/blessings.png";

const Libra = () => {
  let teamComp = {
    healer: "Adjudicator / Totem Master",
    debuffer: "Berserker",
    dps1: "Blade Master",
    dps2: "Executionner",
    dps3: "Assassin",
  };
  return (
    <div className="ccBossContainer">
      <CcBossHeader
        name="Libra"
        solo={false}
        dmg="Holy, Dark"
        comp={teamComp}
        img={bossImg}
      />
      <div className="ccBossConcent">
      <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
          <li>
            {
              "1. Parlez à <The Scales Spirit Guardian> Luna et prenez une blessing. Il y a 5 blessings, chaque membre du groupe doit en prendre une différente."
            }
          </li>
          <img src={blessingsImg} alt="" className="ccBossInfoImg" />
          <li>
            {
              "2. Il y a 4 zones correspondant à des éléments: Nature, Lightning, Fire et Ice (il faut activer les FX pour les voir)."
            }
            <br />
          </li>
          <li>
            {
              "Libra annoncera en chat zone 2 elements, 4 des membres du groupe devront se séparer en 2 groupes de 2, et aller sur les éléments cités. Une fois l'annonce faite, vous aurez 7s pour vous placer. Si vous n'êtes pas placé au bout des 7s, le groupe sera wipe."
            }
            <br />
            {"Notez que le 5ème joueur restera au milieu."}
            <br />
            {
              "Cette méchanique commence à partir de 90% HP et ce toutes les 45 secondes."
            }
          </li>
          <li>
            {
              "Si vous mourrez pendant le combat, pensez à reparler à Luna et à reprendre votre blessing."
            }
            <br />
            {
              "Si possible, évitez de tous vous mettre au même endroit, Libra lance ses attaques vers TOUT les membres de groupe en ligne droite, si vous êtes tous au même endroit, vous risquez d'être touché par les attaques destinées aux autres."
            }
          </li>
          <li>
            {
              "Vers 40% hp Libra invoquera des soldats qui attaqueront en ligne droite. Il réduiront vos résistances au Dark et Holy de 15. Il n'est pas possible de les tuer."
            }
            <br />
            {
              "Il est conseillé d'avoir au minimum 70-80 de résistances Holy et Dark."
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Libra;
