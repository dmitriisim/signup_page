$(function(){

    /* Subject check all */
    $("#subjectAll").change(function () {
        $("input:checkbox.subjectCheckbox.one").prop('checked', $(this).prop("checked"));
    });

    $(".subjectCheckbox.one").change(function () {
        if($('.subjectCheckbox.one:checked').length == $('.subjectCheckbox.one').length) {
            $('#subjectAll').prop('checked', true);
        } else {
            $('#subjectAll').prop('checked', false);
        }
    });
    

    /* Grades check all */
    $('.gradeCheckboxAll, .gradeCheckbox').change(function() {
        if($(this).is(':checked')) {
            $(this).parent().addClass('act');
        } else {
            $(this).parent().removeClass('act');
        }

        if($(this).hasClass('gradeCheckboxAll')){
            $('input:checkbox.gradeCheckbox').prop('checked', $(this).prop('checked'));
            $('input:checkbox.gradeCheckbox').change();
        } else {
            if($('.gradeCheckbox:checked').length == $('.gradeCheckbox').length) {
                $('input:checkbox.gradeCheckboxAll').prop('checked', true);
                $('input:checkbox.gradeCheckboxAll').parent().addClass('act');
            } else {
                $('input:checkbox.gradeCheckboxAll').prop('checked', false);
                $('input:checkbox.gradeCheckboxAll').parent().removeClass('act');
            }
        } 
    });

});
