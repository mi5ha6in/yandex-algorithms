function getShortWords(words) {
  minLength = words.reduce(
    (minLength, word) => (word.length < minLength ? word.length : minLength),
    words[0].length
  );

  const answer = words.reduce((answer, word) => {
    if (word.length === minLength) {
      answer.push(word);
    }
    return answer;
  }, []);

  return answer;
}

const words = ["asdf", "asdfkajshdfkla", "sdfsdfsdf", "sdfs", "sdfsdfsf"];
console.log(getShortWords(words));
