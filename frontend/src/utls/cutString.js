function cutString(string, numberOfchar) {
  return string.split(" ").slice(0, numberOfchar).join(" ");
}

export default cutString
