
const vowel = ['a', 'e', 'i', 'o', 'u'];
const vowelChecker = (str) => {
  str.toLowerCase();
  const firstCharacter = str.charAt(0)
  const secondCharacter = str.charAt(1)
  if (str.length <= 1) {
    return 'Please provide a valid value!'
  }
  if (!vowel.includes(firstCharacter) && !vowel.includes(secondCharacter)) {
    const sliceTwoLetter = str.slice(2);
    str = sliceTwoLetter + firstCharacter + secondCharacter + 'ay';

  }
  if (vowel.includes(firstCharacter)) { 
    str = str + 'way';
  }
  if (!vowel.includes(firstCharacter) && vowel.includes(secondCharacter)) {
    const slicedFirstLetter = str.slice(1);
    str = slicedFirstLetter + firstCharacter + 'ay'
  }

  const stringArray = str.split('');
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === ' ') {
      const slicedStringOne = str.slice(0, i);
      const halfString = str.charAt(str.slice(i + 1, stringArray.length - 3));
      const slicedStringAfterSpace = str.slice(i + 2, stringArray.length - 3);
      const firstCutString = slicedStringOne + firstCharacter + 'ay';
      const secondCutString = slicedStringAfterSpace + halfString + 'ay'
      str = firstCutString + ' ' + secondCutString;
    }
  }
  return str
}
vowelChecker('apple')