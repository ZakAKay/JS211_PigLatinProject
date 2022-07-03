const pigLatin = (word) => {

    word = document.getElementById('user-input').value
    word = word.toLowerCase().trim();
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsTranslated = ""
    let consonantTranslated = ""
    let firstLetter = word.slice(0, 1);
       
      if (vowels.includes(firstLetter)) {
    
        // console.log(word + 'yay') 
        vowelsTranslated = word + 'yay' 

        document.getElementById("pigLatin").innerHTML = response = vowelsTranslated
       return word + 'yay'
    
      } else {
        // console.log(word.slice(1) + word.slice(0,1) + 'ay')
        consonantTranslated  = word.slice(1) + word.slice(0,1) + 'ay'
        document.getElementById("pigLatin").innerHTML = response = consonantTranslated
        // return word.slice(1) + word.slice(0,1) + 'ay'
        return translated
      }
    

    }

    const clearDisplay = () => {
document.getElementById('pigLatin').innerHTML = null


    }
            
 

      const getPrompt = () => {
        rl.question('word', (answer) => {
            console.log( pigLatin (answer) );
            getPrompt();
        });
      }