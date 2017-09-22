function cheer(arr){
   return _.map(arr, function(str){const string = str.toUpperCase(); return (string+" ").repeat(3)+"!!!";})
}
console.log(cheer(['apple', 'pear']));
console.log(cheer(['you','can','win']));