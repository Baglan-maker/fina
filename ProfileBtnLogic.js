
        $(document).ready(function () {
            const loggedInUser = localStorage.getItem('loggedInUser');

            if (loggedInUser) {
                $('#login-btn').addClass('d-none'); 
                $('#profile-link').removeClass('d-none');
            } else {
                $('#login-btn').removeClass('d-none'); 
                $('#profile-link').addClass('d-none');
            }

            $('#login-btn').on('click', function () {
                window.location.href = 'login_page.html'; 
            });

            $('#profile-link').on('click', function () {
                window.location.href = 'profile.html'; 
            });
        });
