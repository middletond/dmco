export const position = (elem) => {
    const rect = elem.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

export const scrollTo = (elem, offset = 0) => {
  window.scroll({
    top: position(elem).top + offset,
    behavior: "smooth"
  });
}

export const arrayFromQuery = (selector, node = null) => {
  node = node || document;
  const elems = [...node.querySelectorAll( selector )];
  return elems;
}
