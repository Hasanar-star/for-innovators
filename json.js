const text =  '{"name":"ram","age":"function() {return 32;}","city":"bangalore"}';
const obj = JSON.parse(text);
obj.age = eval("("+obj.age +")");
inner = obj.name +","+ obj.age();