import CcBossHeader from "./CcBossHeader";
import bossImg from "../img/cc/geminiBoss.png";
import './ccBoss.css';

const Gemini = () => {
  let teamComp= {healer:"Adjudicator", debuffer:"Berserker", dps1:'Blade Master', dps2:'Executionner', dps3:'Assassin'}
  return (
    <div className="ccBossContainer">
      <CcBossHeader name='Gemini' solo={false} dmg='Holy, Dark' comp={teamComp} img={bossImg}/>
      <div className="ccBossConcent">
        <h3>Méchanique du boss:</h3>
        <ul className="ccBossMecha">
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Gemini;