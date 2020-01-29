// Backend 
function Account() {
  this.acctName = '';
  this.initDeposit = 0;
}

Account.prototype.credit = function(credit) {
  this.initDeposit += credit;
}

Account.prototype.debit = function(debit) {
  this.initDeposit -= debit;
}

// UI
$(document).ready(function(){
  var account = new Account();
  $("form#acctInfo").submit(function(event) {
    event.preventDefault();
    account.acctName = $("input#acctName").val();
    account.initDeposit = parseInt($("input#initDeposit").val());
    console.log(initDeposit)
    $('div#output').text(`Your Balance: $${account.initDeposit}`)
  })
  $("form#acctCalc").submit(function(event) {
    event.preventDefault();
    var credit = parseInt($("input#credit").val());
    var debit = parseInt($("input#debit").val());
    $("input#credit").val("");
    $("input#debit").val("");
    account.credit(credit);
    account.debit(debit);
    $('div#output').text(`Your Balance: $${account.initDeposit}`)
  })
})

