$(document).ready(function(){


        var $main = $('.main-content');
        var addTweetsToPage = function (tweets) {
        	$main.html('');
        	for (var i = 0; i < tweets.length; i++) {
            var tweet = tweets[i];
            var $tweet = $('<div>', {class:"tweet"});
            var $userSpan = $('<span>', {class:"user-handle"});
            
            $userSpan.data('name',tweet.user);
            $userSpan.text('@' + tweet.user);
            $tweet.append($userSpan);


            var $tweetContent = $('<span>', {class:"user-tweet"});
            $tweetContent.text(': ' + tweet.message);
            $tweet.append($tweetContent);


            var $timeStamp = $('<div>', {class: "timestamp"});
            $timeStamp.text(tweet.created_at);
            $tweet.append($timeStamp);


            //$tweet.appendTo($main);
            $main.prepend($tweet);
       	 }
        }

        addTweetsToPage(streams.home);
        $main.on('click', '.user-handle', function(){
        	//debugger
          var user = $(this).data('name');
        	addTweetsToPage(streams.users[user]);
        })

        $('.home').on('click',function(){
        	addTweetsToPage(streams.home);
        });

 });
