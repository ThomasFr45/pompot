import BossHeader from '../bossHeader';

const Punishment = () => {
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
        name="Punishment"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://i.imgur.com/QrjX6YJ.png"}
      />
      <div className="ccBossConcent">
        <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
        {localStorage.getItem("language") === "EN" ? <li>First, it is recommended to ask the Executioner to swap to a strike weapon for the BP.</li> : <li>Premièrement, il est conseillé de demander a l'Executioner du groupe de passer en strike pour aider avec la BP.</li>}
        {localStorage.getItem("language") === "EN" ? <li>Then, when Punishment summons Volcano spots that deal dmg, the Berserker will have to push them to limit the damage the party will receive.</li> : <li>Ensuite, quand Punishment fera spawn des tas de sable, il faudra que le Berserker les pousses histoire de limiter les dégats reçus.</li>}
        {localStorage.getItem("language") === "EN" ? <li>You should fear, stun, and KD to 50% HP.</li> : <li>Il est conseiller le de fear, stun et KD vers 50% HP.</li>}
        {localStorage.getItem("language") === "EN" ? <li>If the boss is not killed fast enough, it is possible that he will summon crystals that will reduce the damage he will receive.</li> : <li>Si le boss n'est pas tuer assez vite, il est possible qu'il invoque des cristaux réduisant les dégats qu'il recevra.</li>}
        </ul>
      </div>
    </div>
  )
}

export default Punishment;