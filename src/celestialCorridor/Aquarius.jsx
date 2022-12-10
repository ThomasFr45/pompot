import CcBossHeader from "./CcBossHeader";
import bossImg from "../img/cc/aquaBoss.png";
import './ccBoss.css';
import aquariusInfo1 from "../img/cc/aquariusInfo1.png";
import aquariusInfo2 from "../img/cc/aquariusInfo2.png";
import aquariusInfo3 from "../img/cc/aquariusInfo3.png";
import aquariusInfo4 from "../img/cc/aquariusInfo4.png";
import aquariusInfo5 from "../img/cc/aquariusInfo5.png";

const Aquarius = () => {
  let teamComp= {healer:"Adjudicator", debuffer:"Trainer", dps1:'Riffletear', dps2:'Annihilator', dps3:'Annihilator'}
  return (
    <div className="ccBossContainer">
      <CcBossHeader name='Libra' solo={false} dmg='N/A' comp={teamComp} img={bossImg}/>
      <div className="ccBossConcent">
        <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
          <li>1. Aquarius vous repoussera si vous vous approchez trop.</li>
          <li><img src={aquariusInfo1} alt="Too Close" /></li>
          <li>2. "My Ice is Fatal" : Pendant le combat, des tas de sable vont apparaître, ils auront une zone autours d'eux, si vous êtes dedans, vous aurez une bombe au dessus de la tête. Sortez de la zone avant qu'elle ne disparaisse, sans quoi vous mourrez.</li>
          <li><img src={aquariusInfo2} alt="Bombes" /></li>
          <li>3. "Targeted Ice Barrage" : Vers 75-60% HP, Aquarius va geler le joueur qu'elle cible et tout ceux qui sont proche de lui ou sur la trajectoire.</li>
          <li><img src={aquariusInfo3} alt="Oh Cold" /></li>
          <li>4. "Purification Wave" : Une AoE que Aquarius utilise régulièrement, elle vous retirera vos buffs.</li>
          <li><img src={aquariusInfo4} alt="Debuff" /></li>
          <li>5. Vers 80-70% HP, Aquarius invoquera une "Healing Ice", qui ne peut être tué qu'avec des dégats de feu, ou un Time Totem. Les annihilateurs devront donc passer sur des dégats de feu et la tuer le plus rapidement possible.</li>
          <li><h3>Notez que :</h3></li>
          <li>Aquarius est immunisée aux dégats ICE. <br/> Tant que "Healing Ice" est en vie, Aquarius se soignera. <br/> Si vous avez l'aggro, et que vous n'êtes pas sencé l'avoir, vous pouvez utiliser des smoke bombs !</li>
          <li><img src={aquariusInfo5} alt="Positionning" /></li>
        </ul>
      </div>
    </div>
  );
};

export default Aquarius;