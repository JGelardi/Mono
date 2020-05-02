$(document).ready(function(){
    $('#wizard').smartWizard({
        transitionEffect: 'fade',
        transitionSpeed: '400',
        toolbarSettings: {
            showNextButton: false,
            showPreviousButton: false
        }  
    });
});

$('input[type="file"]').change(function(e){
    var fileName = e.target.files[0].name;
    if (fileName === "Certificate.pdf") {
        $('#company').val("PLASTIHOGAR COLOMBIA S.A.S").addClass("is-valid");
        $('#tax').val("901223004-5").addClass("is-valid");
        $('#legal').val("PEREZ MEJIA JUAN FRANCISCO").addClass("is-valid");
        $('#legal-1').val("C.C. 000001020744478").addClass("is-valid");
        $('#legal-2').val("CARRERA 19 B NO. 82 - 46 PISO 4").addClass("is-valid");
        $('#ciiu').val("4649").addClass("is-valid");
        $('#file-label').text(fileName);
    } else {
        alert("The file you have uploaded is unrecognized. Please upload 'Certificate.pdf'!");
    }
});

$('#add-shareholder').click(function(){
    var html = $('<div class="shareholder"><div class="form-group"><input type="text" name="name" placeholder="Name" class="form-control"></div><div class="form-row"><div class="form-group col-md-6"><input type="text" name="id" placeholder="ID No." class="form-control"></div><div class="form-group col-md-6"><input type="text" name="percent" placeholder="Percentage" class="form-control"></div></div></div>');
    $('.shareholders').append(html);
});

$('#add-other-income').click(function(){
    var html = $('<div class="other-income"><div class="form-row"><div class="form-group col-md-6"><input type="text" name="type" placeholder="Type of Income" class="form-control"></div><div class="form-group col-md-6"><input type="number" name="amount" placeholder="Amount" class="form-control"></div></div></div>');
    $('.other-incomes').append(html);
});
