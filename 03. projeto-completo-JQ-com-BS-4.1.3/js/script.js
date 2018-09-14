
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
    $('[data-toggle="popover"]').popover();
});


$("#id_nome").blur(function() { validaNomeFunction() });
$("#id_email").blur(function() { validaEmailFunction() });
$("#id_faixa_etaria").blur(function() { validaFaixaEtariaFunction() });

$("#id_masculino").blur(function() { validaSexoFunction() });
$("#id_feminino").blur(function() { validaSexoFunction() });

$("#id_esporte").blur(function() { validaPreferenciasFunction() });
$("#id_cinema").blur(function() { validaPreferenciasFunction() });
$("#id_literatura").blur(function() { validaPreferenciasFunction() });


$("#formulario").submit(function(e) {
    e.preventDefault();
    let nomeValido = validaNomeFunction();
    let emailValido = validaEmailFunction();
    let faixaValido = validaFaixaEtariaFunction();
    let sexoValido = validaSexoFunction();
    let preferenciaValido = validaPreferenciasFunction();

    if (nomeValido && emailValido && faixaValido && sexoValido && preferenciaValido) {
        alert('Tudo OK.');

        console.log($("#id_nome").val());
        console.log($("#id_email").val());
    }
    else {
        alert('Deu erro!');
    }
});

function validaNomeFunction() {
    // console.log(e.charCode);
    // return e.charCode >= 48 && e.charCode <= 57;
    let nome = $("#id_nome");
    console.log(nome.val());
    if (nome.val() === '') {
        nome.addClass('is-invalid');
        nome.removeClass('is-valid');
        $("#idNomeRequired").removeClass('d-none');
        return false;
    }
    else {
        nome.removeClass('is-invalid');
        nome.addClass('is-valid');
        $("#idNomeRequired").addClass('d-none');
        return true;
    }
}

function validaEmailFunction() {
    let email = $("#id_email");
    if (email.val() === '') {
        email.addClass('is-invalid');
        email.removeClass('is-valid');
        $("#idEmailRequired").removeClass('d-none')
        return false;
    }
    else {
        $("#idEmailRequired").addClass('d-none');
        if (emailValido(email.val())) {
            email.removeClass('is-invalid');
            email.addClass('is-valid');
            $("#idEmailRequired").addClass('d-none');
            $("#idEmailValido").addClass('d-none');
            return true;
        }
        else {
            email.removeClass('is-valid');
            email.addClass('is-invalid');
            $("#idEmailRequired").addClass('d-none');
            $("#idEmailValido").removeClass('d-none');
            return false;
        }
    }
}

function emailValido(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validaFaixaEtariaFunction() {
    let faixa_etaria = $("#id_faixa_etaria");
    console.log(faixa_etaria.val())
    if (faixa_etaria.val() === '0') {
        faixa_etaria.addClass('is-invalid');
        faixa_etaria.removeClass('is-valid');
        $("#idFaixaEtariaRequired").removeClass("d-none");
        return false;
    }
    else {
        faixa_etaria.removeClass('is-invalid');
        faixa_etaria.addClass('is-valid');
        $("#idFaixaEtariaRequired").addClass("d-none");
        return true;
    }
}

function validaSexoFunction() {
    let masculino = $('#id_masculino').prop('checked');
    let feminino = $('#id_feminino').prop('checked');
    console.log(masculino)
    console.log(feminino)
    let masculino_elem = $("#id_masculino");
    let feminino_elem = $("#id_feminino");

    if (!(masculino || feminino)) {
        masculino_elem.addClass('is-invalid')
        masculino_elem.removeClass('is-valid')
        feminino_elem.addClass('is-invalid')
        feminino_elem.removeClass('is-valid')
        $("#idSexoRequired").removeClass("d-none");
        return false;
    }
    else {
        masculino_elem.removeClass('is-invalid')
        masculino_elem.addClass('is-valid')
        feminino_elem.removeClass('is-invalid')
        feminino_elem.addClass('is-valid')
        $("#idSexoRequired").addClass("d-none");
        return true;
    }
}

function validaPreferenciasFunction() {
    let esporte = $('#id_esporte').prop('checked');
    let cinema = $('#id_cinema').prop('checked');
    let literatura = $('#id_literatura').prop('checked');

    let esporte_elem = $("#id_esporte");
    let cinema_elem = $("#id_cinema");
    let literatura_elem = $("#id_literatura");

    if (!(esporte || cinema || literatura)) {
        esporte_elem.addClass('is-invalid')
        esporte_elem.removeClass('is-valid')
        cinema_elem.addClass('is-invalid')
        cinema_elem.removeClass('is-valid')
        literatura_elem.addClass('is-invalid')
        literatura_elem.removeClass('is-valid')
        $("#idPreferenciasRequired").removeClass("d-none");
        return false;
    }
    else {
        esporte_elem.removeClass('is-invalid')
        esporte_elem.addClass('is-valid')
        cinema_elem.removeClass('is-invalid')
        cinema_elem.addClass('is-valid')
        literatura_elem.removeClass('is-invalid')
        literatura_elem.addClass('is-valid')
        $("#idPreferenciasRequired").addClass("d-none");
        return true;
    }
}



