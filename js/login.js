require.config({
	baseUrl: 'js',
	paths: {
    'jquery': 'lib/jquery',
    'trim': 'tool/trim',
    'verify': 'tool/verify'
	}
});

define(['jquery', 'trim', 'verify'], function($, trim, verify) {
  var $account = $("#account")
  var $password = $("#password")
  var $submit = $("#submit")
  var $form = $("#form")
  var $showAccount = $("#showAccount")
  // 去除前后空格
  trim($account)
  trim($password)
  
  $submit.bind('click', function() {
    var user = {
      account: $account.val(),
      password: $password.val()
    }
    if(verify(user)) {
      $showAccount.find('.account').text(user.account)
      $showAccount.find('.password').text(user.password)
      
      $form.hide()
      $showAccount.show()
    }
  })
});