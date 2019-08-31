window.onload = e => {
  // for permenant drawer
  // const list = mdc.list.MDCList.attachTo(document.querySelector(".mdc-list"));
  // list.wrapFocus = true;

  const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(
    document.getElementById("app-bar")
  );
  topAppBar.setScrollTarget(document.getElementById("main-content"));

  const drawerElem = document.querySelector(".mdc-drawer");

  if (drawerElem) {
    const drawer = mdc.drawer.MDCDrawer.attachTo(drawerElem);
    topAppBar.listen("MDCTopAppBar:nav", () => {
      drawer.open = !drawer.open;
    });

    const listEl = document.querySelector(".mdc-drawer .mdc-list");
    const mainContentEl = document.querySelector("#message-form");
    mainContentEl.querySelector("input, button").focus();

    listEl.addEventListener("click", event => {
      drawer.open = false;
    });

    document.body.addEventListener("MDCDrawer:closed", () => {
      mainContentEl.querySelector("input, button").focus();
    });

    const sideBarCloseBtn = document.querySelector(".mdc-drawer .close-button");
    sideBarCloseBtn.addEventListener("click", e => {
      drawer.open = false;
    });
  }

  const characterCounters = [].map.call(
    document.querySelectorAll(".mdc-text-field-character-counter"),
    function(el) {
      return new mdc.textField.MDCTextFieldCharacterCounter(el);
    }
  );

  const rippleButtons = [].map.call(
    document.querySelectorAll(".mdc-button"),
    function(el) {
      return new mdc.ripple.MDCRipple(el);
    }
  );

  const floatingLabels = [].map.call(
    document.querySelectorAll(".mdc-floating-label"),
    function(el) {
      new mdc.floatingLabel.MDCFloatingLabel(el);
    }
  );

  const textFields = [].map.call(
    document.querySelectorAll(".mdc-text-field"),
    function(el) {
      return new mdc.textField.MDCTextField(el);
    }
  );
};
