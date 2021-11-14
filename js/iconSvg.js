const contactsItem = document.querySelectorAll('.svg__link');

contactsItem.forEach(el=>el.addEventListener('mouseenter', e=>{
  // el.style.color='red';
  const object = el.querySelectorAll('.icon-svg');
  object.forEach(e=>{
    const svgDocument = e.contentDocument;
    const svgElement  = svgDocument.querySelectorAll('.icon-svg');
    svgElement.forEach(e=>{e.setAttribute("fill", "#FFCA62")});
  })
  
}));
contactsItem.forEach(el=>el.addEventListener('mousedown', e=>{
  // el.style.color='red';
  const object = el.querySelectorAll('.icon-svg');
  object.forEach(e=>{
    const svgDocument = e.contentDocument;
    const svgElement  = svgDocument.querySelectorAll('.icon-svg');
    svgElement.forEach(e=>{e.setAttribute("fill", "#FFA800")});
  })
  
}));
contactsItem.forEach(el=>el.addEventListener('mouseleave', e=>{
  const object = el.querySelectorAll('.icon-svg');
  object.forEach(e=>{
    const svgDocument = e.contentDocument;
    const svgElement  = svgDocument.querySelectorAll('.icon-svg');
    svgElement.forEach(e=>{e.setAttribute("fill", "#E5E5E5")});
  })
  
}));
