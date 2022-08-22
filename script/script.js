function card1() {
    document.getElementById('content1').innerHTML = `<div class="energy-2">
    <br>
    <h5 style="color: aliceblue;">Maremotriz</h5>
    <img src="files/img/maremotriz.png" alt="" width="300px">
    <h5>Energia gerada a partir de ações da maré. Ideal para locais próximos do oceano e com correntes marítimas.</h5>
</div>`
}

function card2() {
    document.getElementById('content2').innerHTML = `<div class="energy-2">
    <br>
    <h5 style="color: aliceblue;">Eólica</h5>
    <img src="files/img/eolica.png" alt="" width="300px">
    <h5>Energia gerada a partir da força do vento. Ideal para locais com bastante ação de correntes de vento.</h5>
</div>`
}

function card3() {
    document.getElementById('content3').innerHTML = `<div class="energy-2">
    <br>
    <h5 style="color: aliceblue;">Solar</h5>
    <img src="files/img/solar.png" alt="" width="300px">
    <h5>Energia gerada a partir da luz do sol. Ideal para localidades com pouca variação climática.</h5>
</div>`
}

function calcular() {
    conta = Number(document.getElementById('conta').value)
    if (document.getElementById('conta').value != '') {
        document.getElementById('tabela').innerHTML = `<div class="tabela-info">
    <section>
        <div class="row">
            <div class="col-4"><img src="files/img/solar.png" alt="" width="120%"></div>
            <div class="col">
                <h2 style="margin-top: 10px;">Energia Solar</h2>
                <h6>Recomendado para casas</h6>
                <br><br>
                <section id="1_32">
                    <h5>> Gerador de 1,32kWp: x</h5>
                </section>
                <br>
                <section id="5_28">
                    <h5>> Gerador de 5,28kWp: x</h5>
                </section>
                <br>
                <section id="10_56">
                    <h5>> Gerador de 10,56kWp: x</h5>
                </section>
            </div>
        </div>
    </section>
    <hr />
    <section>
        <div class="row">
            <div class="col">
                <h2 style="margin-top: 10px;">Energia Eólica</h2>
                <h6>Recomendado para Campo</h6>
                <br><br>
                <section>
                    <div id="dias_eolica">
                        <h5>> Em x meses, o valor do investimento será pago.</h5>
                    </div>
                </section>
            </div>
            <div class="col-4"><img src="files/img/eolica.png" alt="" width="100%"></div>
        </div>
    </section>
    <hr />
    <section>
        <div class=" row">
                <div class="col-4"><img src="files/img/maremotriz.png" alt="" width="120%"></div>
                <div class="col">
                    <h2 style="margin-top: 10px;">Energia Maremotriz</h2>
                    <h6>Recomendado para Cidades</h6>
                    <br><br>
                    <section>
                        <div class="row">
                            <div id="dias_maremotriz">
                                <h5>> Em x meses, o valor do investimento será pago.</h5>
                            </div>
                        </div>
                </div>
    </section>
</div>`
        document.getElementById('1_32').innerHTML = `<h5>> Gerador de 1,32kWp: ` + (3500 / conta).toFixed(0) + ` meses.</h5>`
        document.getElementById('5_28').innerHTML = `<h5>> Gerador de 5,28kWp: ` + (8800 / conta).toFixed(0) + ` meses.</h5>`
        document.getElementById('10_56').innerHTML = `<h5>> Gerador de 10,56kWp: ` + (15000 / conta).toFixed(0) + ` meses.</h5>`
        document.getElementById('dias_eolica').innerHTML = `<h5>> Em ` + (30000 / conta).toFixed(0) + ` meses, o valor do investimento será pago.</h5>`
        document.getElementById('dias_maremotriz').innerHTML = `<h5>> Em ` + (3000000 / conta).toFixed(0) + ` meses, o valor do investimento será pago.</h5>`
    } else {
        document.getElementById("user_input").innerHTML=`<div class="input-group" style="width: 300px; border-color: red; border-width: 5px; border-style: groove; border-radius: 10px;">
        <div class="input-group-prepend">
            <span class="input-group-text"
                style="color: rgba(13,15,92,1); border-radius: 5px 0px 0px 5px;">Conta de Luz:</span>
        </div>
        <input type="number" id="conta" class="form-control" aria-label="With textarea"
            placeholder="R$"></input>
    </div>`
    }
}
