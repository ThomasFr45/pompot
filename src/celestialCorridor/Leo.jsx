import CcBossHeader from "./CcBossHeader";
import bossImg from "../img/cc/leoBoss.png";
import './ccBoss.css';

const Leo = () => {
  let teamComp= {healer:"Adjudicator / Totem Master / Paladin", debuffer:"Berserker", dps1:'Asura', dps2:'Executionner', dps3:'Assassin'}
  return (
    <div className="ccBossContainer">
      <CcBossHeader name='Leo' solo={false} dmg='Holy, Dark' comp={teamComp} img={bossImg}/>
      <div className="ccBossConcent">
        <h3>Méchanique du boss:</h3>
        <ul className="ccBossMecha">
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Leo;