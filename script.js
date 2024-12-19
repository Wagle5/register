$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        // Simple front-end validation example
        let name = $('#name').val();
        if (!name) {
            alert('Name is required!');
            e.preventDefault();
        }
    });
});
