
// Menu Mobile
document.getElementById("hamburguer-icon").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}

document.getElementById("sliding-header-menu-close-button").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}




// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unseletected_color = "#646872";
var seletected_color = "#2A2D34";

var about_tags = document.getElementsByClassName("single-tab");
for (var a = 0; a < about_tags.length; a++) {
  
  about_tags[a].onclick = function() {

    /* Estilos */
    for (var b = 0; b < about_tags.length; b++) {
      about_tags[b].style.backgroundColor = unseletected_color;
      about_tags[b].style.fontWeight = "300";
    }

    this.style.backgroundColor = seletected_color;
    this.style.fontWeight = "bold";

    /* Textos */
    var propriedade = this.innerHTML;

    document.getElementById("box-text").innerHTML = aboutUs[propriedade];
  }

}

// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

var servico_atual = 0;

/* 
  service-previous
  service-next
  service-title
  service-text
*/

document.getElementById("service-previous").onclick = function() {
  if (servico_atual == 0) {
    servico_atual = our_services.length - 1;
  } else {
    servico_atual--;
  }

  document.getElementById("service-title").innerHTML = our_services[servico_atual].title;
  document.getElementById("service-text").innerHTML = our_services[servico_atual].text;
}

document.getElementById("service-next").onclick = function() {
  if (servico_atual == our_services.length - 1) {
    servico_atual = 0;
  } else {
    servico_atual++;
  }

  document.getElementById("service-title").innerHTML = our_services[servico_atual].title;
  document.getElementById("service-text").innerHTML = our_services[servico_atual].text;
}

// Data Footer
function zeroEsquerda(date){
  if (date < 10) {
    date = date.toString();
    date = "0" + date;
  } else {
    date = date.toString();
  }

  return date;
}

var var_date = new Date;
var ano_atual = zeroEsquerda(var_date.getDate()) + "/" + zeroEsquerda(var_date.getMonth() + 1) + "/" + zeroEsquerda(var_date.getFullYear());

document.getElementById("current_year").textContent = ano_atual;

/* Mapa API */

// AIzaSyCvuGVj3z0ZoK7rpUoFAdZqAoQJvnDhw7g