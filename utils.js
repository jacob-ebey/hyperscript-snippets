function trimCodeExample(code) {
  // trim each line releative to the first indentation
  const lines = code.split("\n");
  const firstLine = lines.find((l) => !!l);
  const firstIndent = firstLine.match(/^\s*/)[0];
  const trimmedLines = lines.map((line) => {
    return line.replace(firstIndent, "");
  });
  return trimmedLines.join("\n");
}

function showCode(parent, label, className, code) {
  const text = document.createElement("h3");
  text.textContent = label;
  parent.appendChild(text);

  const pre = document.createElement("pre");
  const codeEl = document.createElement("code");
  codeEl.classList.add(className);
  codeEl.textContent = trimCodeExample(code);
  pre.appendChild(codeEl);
  parent.appendChild(pre);
}
