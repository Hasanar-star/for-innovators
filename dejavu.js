is_string = function(input) {
    if (Object.prototype.toString.call(input) === '[object String]')
      return true;
    else
      return false;   
      };
  console.log(is_string('w3resource'));
  console.log(is_string([1, 2, 4, 0]));

 is_Blank =  function(input) {
    if (input.length === 0)
    return true;
    else 
    return false;
  }
console.log(is_Blank(''));
console.log(is_Blank('abc'));

string_to_array = function (str) {
    return str.trim().split(" ");
};
console.log(string_to_array("Robin Singh"));

truncate_string = function (str1, length) {
  
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log(truncate_string("Robin Singh",2));

abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("HASAN "));

protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("erang123wdwdd@example.com"));

capitalize = function(str1){
    return str1.charAt(0).toUpperCase() + str1.slice(1);
  }
      
   console.log(capitalize('ve string exercises'));

   //capitalize_Words 
function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words('js string exercises'));

   
string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};
console.log(string_parameterize("hmd from INDIA."));

swapcase = function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase('asdFGHJKLjkl'));

insert = function insert(main_string, ins_string, pos) {
    if(typeof(pos) == "undefined") {
     pos = 0;
   }
    if(typeof(ins_string) == "undefined") {
     ins_string = '';
   }
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
     }

 console.log(insert('We are doing some exercises.','useful ',18));


 humanize_format = function humanize(num) {
    if(typeof(num) == "undefined") return;
   if(num % 100 >= 11 && num % 100 <= 13)
         return num + "th";
         
         switch(num % 10) {
             case 1: return num + "st";
             case 2: return num + "nd";
             case 3: return num + "rd";
         }
         return num + "th";
     }
 console.log(humanize_format(2));  
 console.log(humanize_format(1));  
 console.log(humanize_format(8));  
 console.log(humanize_format(305));  
 console.log(humanize_format(402)); 

 string_chop =  function(str, size){
    if (str == null) return [];
    str = String(str);
    size = ~~size;
return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}
console.log(string_chop('splash'));
console.log(string_chop('splash',2));
console.log(string_chop('splash',3));

function repeat_string(string, count) 
  {
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null))
      {
        return('Error in string or count.');
      }
        count = count | 0; // Floor count.
    return new Array(count + 1).join(string);
  }

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
console.log(repeat_string('a', -2));
console.log(repeat_string('a', 50));
console.log(repeat_string('a',4));

function required()
{
var empt = document.forms["form1"]["text1"].value;
if (empt == "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}








 












 






