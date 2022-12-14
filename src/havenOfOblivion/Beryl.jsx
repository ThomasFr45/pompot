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
        {localStorage.getItem("language") === "EN" ? <li>Beryl is one of those annoying bosses, as she got a reflect. But you can prevent her from doing it, and I'll explain how to do it.</li> : <li>Beryl est un boss un peu chiant, elle possède un renvoie, le genre de boss que personne n'aime. Mais il est possible de l'empêcher de faire ce renvoie, et je vais vous expliquer comment.</li>}
        {localStorage.getItem("language") === "EN" ? <li>If your group has a good DPS, you should fear her when she says : 'Look at you, so strong...' for the second time. Once she is feared, it's recommended to have the BM KD her to kill her as fast as possible. Keep the stun up in case she doesn't die fast enough, and use it when she places one of her hands to her chest while standing still, without any AOE on the ground.</li> : <li>Si votre groupe à un assez bon DPS, il faudra que votre Berserker la fear quand elle dira : 'Look at you, so strong...' pour la deuxième fois. Une fois fear, il est conseillé de la KD afin de la tomber le plus vite possible. Gardez le stun au cas ou elle ne meurt pas assez vite, et utilisez le quand elle placera une de ses mains au niveau de sa poitrine sans qu'il n'y ai d'AOE au sol.</li>}
        {localStorage.getItem("language") === "EN" ? <li>If you feel like your pt DPS is a bit lacking, you should fear her when she says 'Look at you, so strong...' for the second time, and then keep the BM KD and stun up for the reflect animation.</li> : <li>Si votre groupe à un DPS moyen, appliquez la même technique, mais conservez aussi le KD pour l'empecher de faire son renvoie.</li>}
        </ul>
      </div>
    </div>
  )
}

export default Beryl;