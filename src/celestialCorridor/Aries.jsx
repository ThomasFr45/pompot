import CcBossHeader from "./CcBossHeader";
import bossImg from "../img/cc/ariesBoss.png";
import './ccBoss.css';

const Aries = () => {
  let teamComp= {healer:"Adjudicator / Paladin", debuffer:"Berserker", dps1:'Blade Master', dps2:'Executionner', dps3:'Blood Knight / Trainer'}
  return (
    <div className="ccBossContainer">
      <CcBossHeader name='Aries' solo={false} dmg='Fire' comp={teamComp} img={bossImg}/>
      <div className="ccBossConcent">
        <h3>Méchanique du boss:</h3>
        <ul className="ccBossMecha">
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Aries;