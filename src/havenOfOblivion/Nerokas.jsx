import BossHeader from '../bossHeader';

const Nerokas = () => {
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
        name="Nerokas"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://i.imgur.com/2cyt6By.png"}
      />
      <div className="ccBossConcent">
        <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
        {localStorage.getItem("language") === "EN" ? <li>Here it is ! To me Nerokas is the easiest HoO boss.</li> : <li>Voici le boss le plus simple dans HoO d'après moi !</li>}
        {localStorage.getItem("language") === "EN" ? <li>You don't need to do anything is particular, just hit until he dies.</li> : <li>Pour faire simple, il n'y a rien en particulié à faire, il suffit de le frapper jusqu'à ce qu'il meurt.</li>}
        {localStorage.getItem("language") === "EN" ? <li>For faster kill, fear, stun and kd once the boss is 50% hp.</li> : <li>Pour le tuer plus rapidement, ils est conseillé de le fear, stun puis KD à partir de 50% hp.</li>}
        </ul>
      </div>
    </div>
  )
}

export default Nerokas;