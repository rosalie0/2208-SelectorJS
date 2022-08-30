// YOUR CODE HERE
function $(cssSelectorString) {
  this.elements = [];

  // Handle when #id
  if (cssSelectorString[0] === '#') {
    const idWithoutHash = cssSelectorString.slice(1);
    const anElement = document.getElementById(idWithoutHash);

    this.elements.push(anElement);
  }
  
  // Handle when .class
  else if (cssSelectorString[0] === '.') {
    const classnameWithoutDot = cssSelectorString.slice(1);
    const arrayOfClassnameElements = document.getElementsByClassName(classnameWithoutDot);

    this.elements = [...arrayOfClassnameElements];
  }

  // Handle when tag (has no prefix character)
  else {
    const arrayOfTags = document.getElementsByTagName(cssSelectorString);

    this.elements = [...arrayOfTags];
  }
}


///////////////////////**** PROTOTYPE METHODS ****///////////////////////
// All of these methods return the object instance as to allow method chaining.

$.prototype.hide = function() {
  this.elements.forEach( element => {
    element.style.display = 'none'
  })
  return this
}

$.prototype.show = function() {
  this.elements.forEach( element => {
    element.style.display = 'inherit'
  })
  return this
}

$.prototype.addClassName = function( aClassName ) {
  this.elements.forEach( element => {
    element.classList = aClassName;
  })
  return this
}

$.prototype.removeClassName = function( aClassName ) {
  this.elements.forEach( element => {
    element.classList.remove(aClassName)
  })
  return this
}

$.prototype.text = function( text ) {
  this.elements.forEach( element => {
    element.innerText = text;
  })
  return this
}

$.prototype.addChild = function (tag) {
  this.elements.forEach( element => {
    const childNode = document.createElement(tag);
    element.appendChild(childNode)
  })
  return this
}