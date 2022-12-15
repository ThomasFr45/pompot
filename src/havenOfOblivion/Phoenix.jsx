import BossHeader from '../bossHeader';

const Phoenix = () => {
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
        name="Phoenix"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://i.imgur.com/riYmGeM.png"}
      />
      <div className="ccBossConcent">
        <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
        {localStorage.getItem("language") === "EN" ? <li>Before attacking Phoenix, it is advised to kill the monsters, as it applies a debuff that will remove 50K HP every time you hit a target. This debuff can be removed by the healer.</li> : <li>Avant de s'attaquer à Phoenix, il est conseillé de tuer les monstres, puisqu'il applique un debuff qui vous retirera 50K HP à chaque fois que vous tapperez une cible. Ce debuff peut être retiré par le healer.</li>}
        {localStorage.getItem("language") === "EN" ? <li>As for the CC, i'd advise you to fear and then KD at 50% hp.</li> : <li>En ce qui concerne les CC, il est conseillé d'enchainer le fear et KD vers 50% hp.</li>}
        </ul>
      </div>
    </div>
  )
}

export default Phoenix;