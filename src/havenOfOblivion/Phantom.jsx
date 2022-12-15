import BossHeader from '../bossHeader';

const Phantom = () => {
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
        name="Phantom"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://i.imgur.com/WaIb1sz.png"}
      />
      <div className="ccBossConcent">
        <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
        {localStorage.getItem("language") === "EN" ? <li>Phantom can summon 2 clones that make him Immune to DMG, if not CC chained after below 50% hp properly.</li> : <li>Phantom peut invoquer 2 clones le rendant immunisé aux dégats. Pour l'en empêcher, il faut le CC (fear, stun , kd) vers 50% hp.</li>}
        {localStorage.getItem("language") === "EN" ? <li>To prevent that, the Berserker and Blade Master have to chain CC the boss properly.</li> : <li>Le Berserker et le Blade Master seront les rôles les plus importants sur ce boss, si ils ne remplissent pas leur rôle, vous ne pourrez pas tuer le boss !</li>}
        {localStorage.getItem("language") === "EN" ? <li>As a Berserker : You have to pay attention to the chat and fear the boss when he will say 'my mission is ...' for the second time. Once you have feared him, stayed focused and fear again when the immunity goes away.</li> : <li>En tant que Berserker : Il faut surveiller le chat et fear le boss lorsqu'il dira pour la deuxième fois : 'My mission ...', une fois fear, continuez à le taper et le fear à nouveau une fois l'immunité disparue.</li>}
        {localStorage.getItem("language") === "EN" ? <li>As a Blade Master : You have to keep your KD and stun, and use them at the right time. Simply pay attention to the boss buffs, and when you see fear immunity, stun him and KD 4s as fast as you can.</li> : <li>En tant que Blade Master : Gardez le stun et KD jusqu'à ce que l'immunité au fear apparaisse sur le boss, des que vous la voyez, il faudra le stun et le KD 4s. Si le boss ne meurt pas avant que l'immunité au stun ne disparaisse, il faudra le stun à nouveau.</li>}
        {localStorage.getItem("language") === "EN" ? <li>And now as a Healer : You have to pay attention to your teammates debuffs as the boss will periodically Fear them, you have to debuff as fast as you can !</li> : <li>En tant que Heaker : Il faut surveiller les debuff des membres du groupe, car Phantom va de temps en temps en fear un. Il faudra le debuff aussi vite que possible.</li>}
        {localStorage.getItem("language") === "EN" ? <li>Now if case you fail, reset the boss, and kill the clones. To do so the BP guy has to go Mdps to kill the one on the right as he reflects every Pdmg taken.</li> : <li>En cas d'échec, il faudra reset le boss et tuer les clones. Pour ce faire, l'a personne qui s'occupe de la BP devra passer en dps magique et tuer le clone de droite, puisqu'il renvoit les dégats physiques reçus.</li>}
        {localStorage.getItem("language") === "EN" ? <li>As a reminder, as you reset the boss, you won't have the messages as an indicator anymore.</li> : <li>Pour rappel, si vous devez reset le boss, sachez qu'il n'y aura plus les messages pour indiquer quand le fear.</li>}
        </ul>
      </div>
    </div>
  )
}

export default Phantom;