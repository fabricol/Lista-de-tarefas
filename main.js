$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botaoReset').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const descricaoTarefa = $('#endereco-imagem-nova').val();
        const novoItem = $(`<li><input type="checkbox" class="checkbox-tarefa"><span class="tarefa">${descricaoTarefa}</span></li>`);
        novoItem.appendTo('ul');
        novoItem.fadeIn(500);
        $('#endereco-imagem-nova').val('');
    });

    $('ul').on('change', '.checkbox-tarefa', function() {
        const li = $(this).closest('li');
        li.toggleClass('checked');
    });
});
