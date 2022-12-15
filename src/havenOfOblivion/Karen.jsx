import BossHeader from '../bossHeader';

const Karen = () => {
  let teamComp = {
    healer: "Adjudicator",
    debuffer: "Berserker",
    dps1: "Blade Master",
    dps2: "Executionner",
    dps3: "Darkness Blade",
  };
  return (
    <div>
      <BossHeader
        name="Karen"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://i.imgur.com/LCOAcxa.png"}
      />
      <div className="ccBossConcent">
        <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
        {localStorage.getItem("language") === "EN" ? <li>Karen may look like a difficult and annoying boss, but that's not how it is. She is annoying, but fairly easy. Depending on your class you will need to pay attention to different things.</li> : <li>Karen peut sembler un peu compliquée et chiante, mais elle est juste chiante ! Plus sérieusement, ce n'est pas un boss compliqué, il suffit que chacun remplisse son rôle et tout se passera bien.</li>}
        {localStorage.getItem("language") === "EN" ? <li>First as a healer, you have to pay attention to the debuffs, and make sure you are not in Karen's aoes. If you are hit, you may fall asleep. Make sure to debuff the Berserker as fast as you can, so that he can do his job without any issue, once it's done, you can debuf the Darkness Blade.</li> : <li>Premièrement en tant que healer, il faut absoluement éviter les aoes sinon vous allez vous faire endormir ! Pensez à débuff le Berserker dès qu'il se fera endormir pour être sûr qu'il soit prêt en cas de besoin. Une fois fait, vous pouvez débuff le Darkness Blade pour qu'il continue de faire la BP.</li>}
        {localStorage.getItem("language") === "EN" ? <li>Now as the Darkness Blade, you have to pay attention to the rams that Karen will summons (the BP too). There's will be 3 different, you have to attack them exept the magic one (with a dark purple aura). If you don't do your job, your teammates can't deal any damage to Karen, and you will be stuck there forever.</li> : <li>Ensuite en tant que Darkness Blade, il faut s'occuper de le BP, mais aussi surveiller les Rams que Karen va invoquer, il y en a 3 différents, parmis ceux la, il faut en surveiller 2 qui rendent Karen immunisée aux dégats magiques. Le Darkness Blade doit les aggro et les attirer sur Karen, de manière à les tuer et faire la BP en même temps. Le troisième Ram (celui avec l'aura violette) sera pris par un DPS physique et enmené sur Karen.</li>}
        {localStorage.getItem("language") === "EN" ? <li>Now as the Berserker, you have to pay attentions to Karen's aoes. There are 2 different, you can tell them apart by the effects while she cast. The aoe with purple effects is the sleep, you can ignore this one, as the healer will debuff you. But the aoe with green effects will give a debuff to the players hit, and they will heal her with every hit. Your job would be to fear her when she cast this aoe, this way everyone can keep attacking.</li> : <li>Maintenant en tant que Berserker, il faut faire attention aux aoes de Karen. Il y en a 2 différentes, on peut les différencier grâce aux effets visuels présent pendant que Karen fait son aoe. L'aoe avec des effets violets est le sleep, vous pouvez l'ignorer car le healer va vous débuff. Par contre, l'aoe avec des effets verts ne doit absolument pas être ignorée ! Si elle vous touche, vous recevez un debuff qui permettra a Karen de se soigner à chaque fois que vous la tapez. Il faudra donc la fear pendant qu'elle fait cette aoe, de manière à l'empêcher de la faire.</li>}
        {localStorage.getItem("language") === "EN" ? <li>Now as the Blade Master, your job will be similar to the Berserker's job, you will ignore the sleep aoe, as you can debuff yourself. And when fear immunity is up, and Karen's is casting the green aoe, you will have to stun her, preventing her from healing.</li> : <li>Maintenant en Blade Master, il faudra faire la même chose que le Berserker, mais uniquement quand Karen sera immunisée au fear et qu'elle fait une aoe avec des effets verts. Vous pouvez aussi ignorer l'aoe avec les effets violet, puisque vous pouvez vous débuff seul.</li>}
        {localStorage.getItem("language") === "EN" ? <li>And now as the Executioner, you just have to hit and trust your mates.</li> : <li>Et enfin en tant qu'Executionner, il vous suffit de taper le boss et de faire confiance à vos coéquipiers !</li>}
        </ul>
      </div>
    </div>
  )
}

export default Karen;