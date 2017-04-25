/**
 * Created by Anh on 4/25/2017.
 */
var Common = {
    convertTitle: function () {
        jQuery('#title').on('change', function () {
            var $title = jQuery(this).val();
            jQuery('#slug').val(convertToSlug($title));
        });
        function convertToSlug(Text) {
            return Text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        }
    }
};


$(document).ready(function () {
    Common.convertTitle();
});