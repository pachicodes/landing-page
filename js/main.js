const slackLink = document.querySelector(".link");

function sendSlackGAEvent(event) {
  ga("send", "event", {
    eventCategory: "Slack Link",
    eventAction: "click",
    eventLabel: event.target.href
  });
}

slackLink.addEventListener("click", sendSlackGAEvent);

const portuguese = document.querySelector(".portuguese-btn");
const content = document.querySelector(".intro__content");

console.log(content);  

portuguese.addEventListener('onClick', function(){
  content.innerHTML = <h1>Bem-vinda!</h1>
  content.innerHTML = <p>Devas in tech é uma comunidade para mulheres de toda idade e cor que queira entrar no mundo de tech. 
  Se você está aprendendo HTML, ou acabou de conseguir seu primeiro emprego em tech, Ou se você já é uma profissional, mas começou a estudar uma nova linguagem ou gostaria de ajudar novatas, Devas é para você!
  Nosso objetivo é prover um espaço seguro aonde você pode fazer pesguntas, compartilhar problemas, receber apoio e motivação ou apenas reclamar um pouco. 
  Nós estamos aqui para você e você pode estar presente para outras mulheres vomo você!</p>
});
