/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0 || s.length === 1){
        return s.length
    }
    let maxsub=0
    var temp=[]
    temp.push(s[0])
    var i
    for (i=1; i< s.length; i++){
         while (temp.includes(s[i]) ){
            temp.splice(0,1)
        }
        

            temp.push(s[i])
       // console.log(temp.length)
        if (maxsub< temp.length){
            maxsub = temp.length;
        }
    }
    return maxsub
};
