import BossHeader from '../bossHeader';

const Leo = () => {
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
        name="Leo"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://via.placeholder.com/200x250"}
      />
      <div className="ccBossConcent">
        <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
        {localStorage.getItem("language") === "EN" ? <li>Leo is one of the easiest bosses in HoO, he does nothing before 50% hp, and once he reaches 50% hp he will cast AOEs that silence, but you can prevent it by CCing him.</li> : <li>Leo fait partit des boss les plus simple de HoO, il ne fait rien en particulié avant 50% hp, et une fois a 50% hp il va lancer des AOE qui silence, mais il est possible de l'en empêcher, en enchainant les CC dès qu'il est à 50% hp.</li>}
        {localStorage.getItem("language") === "EN" ? <li>For the BP it's recommended to ask the exe to go into strike to help.</li> : <li>Pour la BP il est conseiller de demander à l'exe de passer en strike pour aider.</li>}
        </ul>
      </div>
    </div>
  )
}

export default Leo;