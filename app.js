document.addEventListener("DOMContentLoaded", function () {

   

    document.getElementById('gerar').addEventListener('click', function(e){
      e.preventDefault();
      const cordefundo = document.getElementById('cordefundo');
      cordefundo.value = '';
      const cortexto = document.getElementById('cordetexto');
      cortexto.value = '';
      const corfundobotao = document.getElementById('corfundobotao');
      corfundobotao.value = '';
      const cortextobotao = document.getElementById('cortextobotao');
      cortextobotao.value = '';
      const textoinfo = document.getElementById('textoinfo');
      textoinfo.value = '';
      const textobotao = document.getElementById('textobotao');
      textobotao.value = '';
      let color_fundobotao = corfundobotao.value || "#120836";
      let color_textobotao = cortextobotao.value || "white";
      let color_fundo = cordefundo.value || "white";
      let color_texto = cortexto.value || "black";
      let texto_geral = textoinfo.value || "Este site pode utilizar Cookies para manter informação do visitante, permitindo determinar as suas preferências, auxiliar no preenchimento de formulários, permitir o acesso a áreas privadas do website onde seja necessária autenticação, bem como recolher indicadores de performance, origem e horário dos acessos ao website.";
      let texto_botao = textobotao.value || "aceito";
      const addclass = 'consentcookie_' + Math.floor(Math.random() * Math.floor(1000)) + '_';
      const html = `<div class="${addclass}">
                      <div class="${addclass}__text">${texto_geral}</div>
                      <a href="#" class="${addclass}__btn">${texto_botao}</a>
                    </div>`;
      const js = `<script>var setPrivacy = function setPrivacy() {
                    localStorage.setItem("${addclass}", "read and agreed");
                  };
                  var cookie = document.querySelector('.${addclass}');
                  var getPrivacy = function getPrivacy() {
                    var value = localStorage.getItem("${addclass}"); //if not exists cookie
                    if (value === null) { cookie.classList.add('active'); }
                  };
                  getPrivacy();
                  cookie.querySelector('a').addEventListener('click', function (e) {
                    e.preventDefault();
                    setPrivacy();
                    cookie.classList.remove('active');
                  });</script>`;
      const style = `<style>
                      .${addclass}{position:fixed;bottom:0;left:0;width:100%;background-color:${color_fundo};padding:25px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:9999;display:none}.${addclass}.active{display:-webkit-box;display:-ms-flexbox;display:flex}.${addclass}__text{color:${color_texto};font-size:1rem;max-width:700px;line-height:1.4;margin-right:25px}.${addclass}__btn{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px 25px;font-size:1rem;text-decoration:none;font-weight:700;background-color:${color_fundobotao};color:${color_textobotao};border-radius:0.3rem}
                    </style>`;
      document.getElementById('code').innerText = '<!-- addupcookie maker -->' + html + style + js + '<!-- addupcookie maker -->';
    });
});