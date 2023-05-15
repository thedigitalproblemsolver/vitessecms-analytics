var initAnalytics = function () {
    $.ajax({
        type: 'POST',
        url: location.protocol + '//' + location.hostname + '/analytics/register/entry',
        data: {'path': location.pathname},
        cache: false,
        async: false,
        success: function (response) {
            sessionStorage.setItem('AnalyticsId', response.id);
        }
    });

    $(window).on('beforeunload', function () {
        $.ajax({
            method: 'post',
            url: location.protocol + '//' + location.hostname + '/analytics/register/exit/' + sessionStorage.getItem('AnalyticsId'),
            data: {'path': location.pathname},
            cache: false,
            async: false,
            success: function (response) {
                console.log(response);
            }
        });
    });
};

inits.push(initAnalytics);