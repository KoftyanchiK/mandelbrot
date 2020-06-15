export const showModal = (header, text, displayTime) => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content'
  const headerElement = document.createElement('h4');
  headerElement.innerText = header;
  const textElement = document.createElement('p');
  textElement.innerHTML = text;
  modalContent.appendChild(headerElement);
  modalContent.appendChild(textElement);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  const instance = M.Modal.init(modal, {
    onCloseEnd: () => {
      instance.destroy();
      modal.parentNode.removeChild(modal);
      clearTimeout(closeTimeout);
    }
  });
  instance.open();
  const closeTimeout = setTimeout(() => {
    if(instance)
      instance.close();
  }, displayTime || 2000);
}
