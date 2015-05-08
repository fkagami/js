var Member = function(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.getName = function() {
    return this.lname+ "" + this.fname;
  }
};

var mem = new Member("a", "b");
document.writeln(mem.getName());


// this とは、コンストラクタによって生成されるインスタンス、自分自身である。rbでいうアッターのようなもの

//インスタンスによって、メンバが異なることがある

var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Member.prototype.getName = function() {
  return this.lastName + "" + this.firstName;
};

var mem = new Member("a", "b");
document.writeln(mem.getName());


/////////////////////////////
var Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member('a', 'b');
mem.getName = function() {
  return this.lastName + " " +this.firstName;
}

document.writeln(mem.getName())


/////////////////////////
var Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function(){
    return this.lastName + "" + this.firstName;
  }
};

var mem = new Member("のぼる", "わたや");
document.writeln(mem.getName());

//////////疑問///////
var Member = function(firstName, lastName){
  a = firstName;
  b = lastName;
  this.getName = function(){
    return a + "" + b;
  }
};

var mem = new Member("のぼる", "わたや");
document.writeln(mem.getName());
//hisを付ける意義とは => mem.firstNameとか出来る。attrみたいなもの

