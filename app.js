const accordionItem = document.querySelectorAll('li');

accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector('.firstRow');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.answer-content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
};
