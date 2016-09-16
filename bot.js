$(function () {
    $('.slack-submit').on('click', function () {
        var data = {
            token: 'トークン',
            channel: '#general',
            username: 'sample-bot',
            text: 'Hello Slack! to Js'
        };

        $.ajax({
            type: 'GET',
            url: 'https://slack.com/api/chat.postMessage',
            data: data,
            success: function (data) {
                alert( 'Can I post to Slack? :' + data.ok );
            }
        });
    });
});
