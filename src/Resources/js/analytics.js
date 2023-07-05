var initAnalytics = function () {
    console.log();
    $.ajax({
        type: 'POST',
        url: location.protocol + '//' + location.hostname + '/analytics/register/entry',
        data: {'path': location.pathname, 'referrer': document.referrer},
        cache: false,
        async: true,
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
            async: true
        });
    });
};

inits.push(initAnalytics);