for(let i of [1,2,3]){
    console.log(i)
}

function createElement(tagName, attributes, ...children){
  let e = document.createElement(tagName);
  for (let p in attributes){
      e.setAttribute(p, attributes[p]);
  }
  for (let child of children){
      if (typeof child === 'string') {
          child = document.createTextNode(child);
      }
      e.appendChild(child);
  }
  return e;
}

document.body.appendChild( <div id="a" class="c">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>)