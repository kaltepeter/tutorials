const textFields = [].map.call(
  document.querySelectorAll(".mdc-text-field"),
  function(el) {
    return new mdc.textField.MDCTextField(el);
  }
);

const characterCounters = [].map.call(
  document.querySelectorAll(".mdc-text-field-character-counter"),
  function(el) {
    return new mdc.textField.MDCTextFieldCharacterCounter(el);
  }
);

const rippleButtons = [].map.call(
  document.querySelector(".mdc-button"),
  function(el) {
    return new mdc.ripple.MDCRipple(el);
  }
);
