QUnit.test( "convert_07:05:45PM", function(assert) {
  assert.equal(convertToMilitaryTime("07:05:45PM"), "19:05:45");
});

QUnit.test( "convert_07:05:45AM", function(assert) {
  assert.equal(convertToMilitaryTime("07:05:45AM"), "07:05:45");
});

QUnit.test( "convert_12:45:54PM", function(assert) {
  assert.equal(convertToMilitaryTime("12:45:54PM"), "12:45:54");
});