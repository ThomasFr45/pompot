import BossHeader from '../bossHeader';

const Alice = () => {
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
        name="Alice"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://i.imgur.com/i3amF5Z.png"}
      />
      <div className="ccBossConcent">
        <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
        {localStorage.getItem("language") === "EN" ? <li>Alice is a fairly easy boss, first destroy the crystals around her, starting with the red one and ending with the dark one.</li> : <li>Ensuite il suffit de la combattre, et de la CC à chaque fois qu'elle fera une AOE, l'ordre des CC est en général le suivant : Fear - stun - KD.</li>}
        {localStorage.getItem("language") === "EN" ? <li>Then just fight her and CC her every time she cast an AOE, the order of CC is generally the following : Fear - stun - KD.</li> : <li>Si vous mettez un peu de temps à la tuer, les cristaux risque de réapparaitre, il faudra alors les détruire rapidement, si le noir réapparait, détruisez le en priorité, car si il s'active tout le monde mourra.</li>}
        {localStorage.getItem("language") === "EN" ? <li>If you take a bit too long to kill her, the crystals will reappear, you will need to destroy them quickly, if the dark one reappears, destroy it first, because if it's active everyone will die. She will regularly apply a debuff reducing your attack to 0. You will need to have the healer remove it.</li> : <li>Alice appliquera régulièrement un debuff réduisant l'attaque de vos armes a 0. Il faudra que le healer vous le retire.</li>}
        </ul>
      </div>
    </div>
  )
}

export default Alice;