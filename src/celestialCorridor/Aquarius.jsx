import CcBossHeader from "./CcBossHeader";
import bossImg from "../img/cc/aquaBoss.png";
import './ccBoss.css';

const Aquarius = () => {
  let teamComp= {healer:"Adjudicator", debuffer:"Trainer", dps1:'Riffletear', dps2:'Annihilator', dps3:'Annihilator'}
  return (
    <div className="ccBossContainer">
      <CcBossHeader name='Libra' solo={false} dmg='N/A' comp={teamComp} img={bossImg}/>
      <div className="ccBossConcent">
        <h3>Méchanique du boss:</h3>
        <ul className="ccBossMecha">
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Aquarius;