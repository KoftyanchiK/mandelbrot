export const showModal = (header, text) => {
  const modalText = `
    <div id="modal" class="modal">
      <div class="modal-content">
        <h4>${header}</h4>
        <p>${text}</p>
      </div>
    </div>
  `;
  document.body.innerHTML += modalText;
  const modal = document.getElementById('modal');
  const instance = M.Modal.init(modal, {
    onCloseEnd: () => {
      instance.destroy();
      modal.parentNode.removeChild(modal);
    }
  });
  instance.open();
}
