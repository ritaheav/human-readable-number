module.exports = function toReadable (number) {
    const first = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  const th = ['', 'thousand', 'million', 'billion', 'trillion'];
  let word = '';
    if(number) {
        for (let i = 0; i < th.length; i++) {
            let tempNumber = number % (100 * Math.pow(1000, i));
            if (Math.floor(tempNumber / Math.pow(1000, i)) !== 0) {
              if (Math.floor(tempNumber / Math.pow(1000, i)) < 20) {
                word = first[Math.floor(tempNumber / Math.pow(1000, i))] + th[i] + ' ' + word;
              } else {
                word = tens[Math.floor(tempNumber / (10 * Math.pow(1000,i)))] + ' ' + first[Math.floor(tempNumber / Math.pow(1000, i)) % 10] + th[i] + ' ' + word;
              }
            }
        
            tempNumber = number % (Math.pow(1000, i + 1));
            if (Math.floor(tempNumber / (100*Math.pow(1000, i))) !== 0) word = first[Math.floor(tempNumber / (100 * Math.pow(1000, i)))] + 'hundred ' + word;
          }
              return word.trim();
    }
  return 'zero'
}
