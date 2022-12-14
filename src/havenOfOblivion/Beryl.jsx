import BossHeader from '../bossHeader';

const Beryl = () => {
  let teamComp = {
    healer: "Adjudicator",
    debuffer: "Berserker",
    dps1: "Blade Master",
    dps2: "Executionner",
    dps3: "Annihilator",
  };
  return (
    <div>
      <BossHeader
        name="Beryl"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://i.imgur.com/Q4EH300.png"}
      />
      <div className="ccBossConcent">
        <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
        </ul>
      </div>
    </div>
  )
}

export default Beryl;