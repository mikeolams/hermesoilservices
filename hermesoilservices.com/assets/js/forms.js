$(function () {

  function prepareAndSubmitFreeForm(selector, options = {}) {
    let form;

    if (typeof selector == "string") {
      form = document.querySelector(selector);
    } else {
      return new Error("Please provide a valid selector string");
    }

    const defaultOptions = {
      onSuccess(data, form) {
        form.reset();
        alert(data);
      },
      onError(fieldError, formError) {
        console.log("Field Errors", fieldError);
        console.log("Form Errors", formError);

        alert("Form failed to submit");
      },
      onAjaxError(err) {
        console.error(err);
      },
      onStart() {
        return;
      },
      onComplete() {
        return;
      }
    }

    options = {
      ...defaultOptions,
      ...options
    };
    ajaxifyForm(form, options);


    function ajaxifyForm(form, options) {
      let data = new FormData(form);

      var method = form.getAttribute("method");
      var action = form.getAttribute("action");

      options.onStart();
      axios({
          url: action ? action : window.location.href,
          method: method ? method : "post",
          data: data,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            HTTP_X_REQUESTED_WITH: "XMLHttpRequest",
          },
        })
        .then(function (responseObject) {
          var response = responseObject.data;

          if (response.success && response.finished) {
            options.onSuccess(response, form)
          } else if (response.errors || response.formErrors) {
            options.onError(response.erorrs, response.formErrors)
          }
        })
        .catch(function (error) {
          options.onAjaxError(error);
        })
        .finally(function () {
          options.onComplete();
        });
    }

  }

  // Quick Contact Form Validation & Handling
  const contactForm = $("#contactForm");
  if (contactForm.length > 0) {
    contactForm.parsley()
      .on('form:submit', function () {
        return false;
      })
      .on('form:success', function () {
        const btn = $(".js-contact-submitBtn");
        const initialBtnText = btn.text();
        const formBox = contactForm.find(".form-box");

        prepareAndSubmitFreeForm("#contactForm", {
          onStart: function () {
            btn.text("Submitting...");
            btn.prop('disabled', true);
          },
          onSuccess: function (data) {
            const message = contactForm.attr('data-message');
            formBox.html(`<div class="form-success">${message}</div>`)
          },
          onAjaxError() {
            formBox.prepend('<div class="cell form-error">There was an error sending your message, please try again</div>')
          },
          onComplete: function () {
            btn.text(initialBtnText);
            btn.prop('disabled', false);
          }
        });
      });
  }

  // Careers Subscription Form Validation & Handling
  const careerSubscribeForm = $("#careerSubscribeForm");
  if (careerSubscribeForm.length > 0) {
    careerSubscribeForm.parsley()
      .on('form:submit', function () {
        return false;
      })
      .on('form:success', function () {
        const btn = $(".js-subscribeBtn");
        const initialBtnText = btn.text();
        const formBox = careerSubscribeForm.find(".form-box");

        prepareAndSubmitFreeForm("#careerSubscribeForm", {
          onStart: function () {
            btn.text("Submitting...");
            btn.prop('disabled', true);
          },
          onSuccess: function (data) {
            const message = careerSubscribeForm.attr('data-message');
            formBox.html(`<div class="form-success">${message}</div>`)

          },
          onAjaxError() {
            formBox.prepend('<div class="form-error">There was an error subscribing you to the list, please try again</div>')
          },
          onComplete: function () {
            btn.text(initialBtnText);
            btn.prop('disabled', false);
          }
        });
      });
  }
});