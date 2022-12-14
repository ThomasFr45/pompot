import BossHeader from '../bossHeader';

const Cale = () => {
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
        name="Cale"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://i.imgur.com/BTPLJQV.png"}
      />
      <div className="ccBossConcent">
        <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
        {localStorage.getItem("language") === "EN" ? <li>Cale summons a crystal which makes him immune to physical DMG, and gives him more P-attack every time he is hit. You should destroy the crystal as fast as possible, and hit Cale as little as possible when the crystal is there. /n Cale can also fear with an AOE, which can be debuffed.</li> : <li>Cale invoque un cristal qui l'immunise aux dégats physiques, et lui donne de l'attaque à chaque fois qu'il se fait taper. Il faut donc détruire le cristal aussi vite que possible et taper Cale le moins possible lorsque le cristal est là. /n Cale peut aussi fear avec une AOE, ce fear peut être débuff.</li>}
        </ul>
      </div>
    </div>
  )
}

export default Cale;