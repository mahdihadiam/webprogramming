const from_input = document.querySelector("#from-input");
const to_input = document.querySelector("#to-input");
const swap_button = document.querySelector("#swap");
const trip_output = document.querySelector("#trip-output");
const trip_input = document.querySelector("#trip-input");
const depart_label = document.querySelector("#depart-label");
const date_output = document.querySelector("#date-output");
const date_input = document.querySelector("#date");
const calendar = document.querySelector("header>form>main>div:nth-of-type(3)>div");
const calendar_months = document.querySelectorAll("header>form>main>div:nth-of-type(3)>div>ul>li");
const first_calendar = document.querySelector("header>form>main>div:nth-of-type(3)>div>div>div:nth-of-type(1)");
const first_calendar_days = document.querySelectorAll(
  "header>form>main>div:nth-of-type(3)>div>div>div:nth-of-type(1)>span:nth-of-type(n + 8)"
);
const second_calendar = document.querySelector("header>form>main>div:nth-of-type(3)>div>div>div:nth-of-type(2)");
const second_calendar_days = document.querySelectorAll(
  "header>form>main>div:nth-of-type(3)>div>div>div:nth-of-type(2)>span:nth-of-type(n + 8)"
);
const passengers_output = document.querySelector("#passengers-output");
const passengers = document.querySelector("header>form>main>div:nth-of-type(4)>div");
const adults = document.querySelector("header>form>main>div:nth-of-type(4)>div>span:nth-of-type(1)");
const child = document.querySelector("header>form>main>div:nth-of-type(4)>div>span:nth-of-type(2)");
const infant = document.querySelector("header>form>main>div:nth-of-type(4)>div>span:nth-of-type(3)");

const MONTHS = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
const MONTHS_LENGTH = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
const TODAY = {
  gregorian: null,
  month: null,
  date: null,
  day: null,
};

const define_today = (date) => {
  TODAY.gregorian = date;
  TODAY.month = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۱۰", "۱۱", "۱۲"].indexOf(
    date.toLocaleDateString("fa-IR").split("/")[1]
  );
  TODAY.date = [
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹",
    "۱۰",
    "۱۱",
    "۱۲",
    "۱۳",
    "۱۴",
    "۱۵",
    "۱۶",
    "۱۷",
    "۱۸",
    "۱۹",
    "۲۰",
    "۲۱",
    "۲۲",
    "۲۳",
    "۲۴",
    "۲۵",
    "۲۶",
    "۲۷",
    "۲۸",
    "۲۹",
    "۳۰",
    "۳۱",
  ].indexOf(date.toLocaleDateString("fa-IR").split("/")[2]);
  TODAY.day = date.getDay();
};

swap_button.addEventListener("click", () => {
  let y_offset = 0;
  let down = true;

  const step = (timestamp) => {
    from_input.style = `translate: 0px ${y_offset}px`;
    to_input.style = `translate: 0px ${y_offset}px`;

    if (y_offset >= 50) {
      down = false;
      let tmp = from_input.value;
      from_input.value = to_input.value;
      to_input.value = tmp;
    }

    down ? (y_offset += 5) : (y_offset -= 5);

    y_offset >= 0 && window.requestAnimationFrame(step);
  };

  window.requestAnimationFrame(step);
});

trip_output.addEventListener("click", () => {
  let y_offset = 0;
  let down = true;

  const step = (timestamp) => {
    trip_output.style = `translate: 0px ${y_offset}px`;

    if (y_offset >= 50) {
      down = false;
      if (trip_output.value === "یک طرفه") {
        trip_output.value = "رفت و برگشت";
        trip_input.value = "return";
        date_output.value = `${new Date(parseInt(date_input.value)).toLocaleDateString("fa-IR").split("/")[2]} ${
          MONTHS[
            ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۱۰", "۱۱", "۱۲"].indexOf(
              new Date(parseInt(date_input.value)).toLocaleDateString("fa-IR").split("/")[1]
            )
          ]
        } - ${new Date(parseInt(date_input.value) + 86400000 * 7).toLocaleDateString("fa-IR").split("/")[2]} ${
          MONTHS[
            ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۱۰", "۱۱", "۱۲"].indexOf(
              new Date(parseInt(date_input.value) + 86400000 * 7).toLocaleDateString("fa-IR").split("/")[1]
            )
          ]
        }`;
        date_input.value = `${date_input.value} ${parseInt(date_input.value) + 86400000 * 7}`;
      } else {
        trip_output.value = "یک طرفه";
        trip_input.value = "oneway";
        date_output.value = `${new Date(parseInt(date_input.value.split(" ")[0])).toLocaleDateString("fa-IR").split("/")[2]} ${
          MONTHS[
            ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۱۰", "۱۱", "۱۲"].indexOf(
              new Date(parseInt(date_input.value.split(" ")[0])).toLocaleDateString("fa-IR").split("/")[1]
            )
          ]
        } ${new Date(parseInt(date_input.value.split(" ")[0])).toLocaleDateString("fa-IR").split("/")[0]}`;
        date_input.value = date_input.value.split(" ")[0];
      }
    }

    down ? (y_offset += 5) : (y_offset -= 5);

    y_offset >= 0 && window.requestAnimationFrame(step);
  };

  window.requestAnimationFrame(step);
});

date_output.value = `${new Date().toLocaleDateString("fa-IR").split("/")[2]} ${
  MONTHS[
    ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۱۰", "۱۱", "۱۲"].indexOf(
      new Date().toLocaleDateString("fa-IR").split("/")[1]
    )
  ]
} ${new Date().toLocaleDateString("fa-IR").split("/")[0]}`;

date_input.value = new Date().getTime();

define_today(new Date());
for (let i = 0; i < 12; i++) {
  calendar_months[i].textContent = MONTHS[(TODAY.month + i) % 12];
}

passengers_output.addEventListener("click", (e) => {
  e.stopPropagation();
  if (passengers.getAttribute("style")) passengers.removeAttribute("style");
  else if (calendar.getAttribute("style")) {
    calendar.removeAttribute("style");
    setTimeout(() => (passengers.style = "clip-path: inset(0px 0px 0px 0px)"), 250);
  } else {
    passengers.style = "clip-path: inset(0px 0px 0px 0px)";
  }
});

document.body.addEventListener("click", () => {
  calendar.removeAttribute("style");
  passengers.removeAttribute("style");
});

calendar.addEventListener("click", (e) => e.stopPropagation());

passengers.addEventListener("click", (e) => e.stopPropagation());

adults.querySelectorAll("button").forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (index === 0) {
      if (parseInt(adults.querySelector("input").dataset.value) < 9) {
        adults.querySelector("input").value = (parseInt(adults.querySelector("input").dataset.value) + 1).toLocaleString(
          "fa-IR"
        );
        adults.querySelector("input").dataset.value = parseInt(adults.querySelector("input").dataset.value) + 1;
        passengers_output.value = `${(
          parseInt(adults.querySelector("input").dataset.value) +
          parseInt(child.querySelector("input").dataset.value) +
          parseInt(infant.querySelector("input").dataset.value)
        ).toLocaleString("fa-IR")} مسافر`;
      }
    } else if (parseInt(adults.querySelector("input").dataset.value) > 1) {
      adults.querySelector("input").value = (parseInt(adults.querySelector("input").dataset.value) - 1).toLocaleString("fa-IR");
      adults.querySelector("input").dataset.value = parseInt(adults.querySelector("input").dataset.value) - 1;
      passengers_output.value = `${(
        parseInt(adults.querySelector("input").dataset.value) +
        parseInt(child.querySelector("input").dataset.value) +
        parseInt(infant.querySelector("input").dataset.value)
      ).toLocaleString("fa-IR")} مسافر`;
    }
  });
});

adults.querySelector("input").addEventListener("input", (e) => {
  e.currentTarget.value = e.currentTarget.value.replace(/(?![۰-۹])./gim, "");
  const input = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"].indexOf(e.currentTarget.value);
  e.currentTarget.dataset.value = input >= 1 ? input : "1";
  passengers_output.value = `${(
    parseInt(adults.querySelector("input").dataset.value) +
    parseInt(child.querySelector("input").dataset.value) +
    parseInt(infant.querySelector("input").dataset.value)
  ).toLocaleString("fa-IR")} مسافر`;
});

child.querySelectorAll("button").forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (index === 0) {
      if (parseInt(child.querySelector("input").dataset.value) < 9) {
        child.querySelector("input").value = (parseInt(child.querySelector("input").dataset.value) + 1).toLocaleString("fa-IR");
        child.querySelector("input").dataset.value = parseInt(child.querySelector("input").dataset.value) + 1;
        passengers_output.value = `${(
          parseInt(adults.querySelector("input").dataset.value) +
          parseInt(child.querySelector("input").dataset.value) +
          parseInt(infant.querySelector("input").dataset.value)
        ).toLocaleString("fa-IR")} مسافر`;
      }
    } else {
      if (parseInt(child.querySelector("input").dataset.value) > 0) {
        child.querySelector("input").value = (parseInt(child.querySelector("input").dataset.value) - 1).toLocaleString("fa-IR");
        child.querySelector("input").dataset.value = parseInt(child.querySelector("input").dataset.value) - 1;
        passengers_output.value = `${(
          parseInt(adults.querySelector("input").dataset.value) +
          parseInt(child.querySelector("input").dataset.value) +
          parseInt(infant.querySelector("input").dataset.value)
        ).toLocaleString("fa-IR")} مسافر`;
      }
    }
  });
});

child.querySelector("input").addEventListener("input", (e) => {
  e.currentTarget.value = e.currentTarget.value.replace(/(?![۰-۹])./gim, "");
  const input = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"].indexOf(e.currentTarget.value);
  e.currentTarget.dataset.value = input >= 0 ? input : "0";
  passengers_output.value = `${(
    parseInt(adults.querySelector("input").dataset.value) +
    parseInt(child.querySelector("input").dataset.value) +
    parseInt(infant.querySelector("input").dataset.value)
  ).toLocaleString("fa-IR")} مسافر`;
});

infant.querySelectorAll("button").forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (index === 0) {
      if (parseInt(infant.querySelector("input").dataset.value) < 9) {
        infant.querySelector("input").value = (parseInt(infant.querySelector("input").dataset.value) + 1).toLocaleString(
          "fa-IR"
        );
        infant.querySelector("input").dataset.value = parseInt(infant.querySelector("input").dataset.value) + 1;
        passengers_output.value = `${(
          parseInt(adults.querySelector("input").dataset.value) +
          parseInt(child.querySelector("input").dataset.value) +
          parseInt(infant.querySelector("input").dataset.value)
        ).toLocaleString("fa-IR")} مسافر`;
      }
    } else {
      if (parseInt(infant.querySelector("input").dataset.value) > 0) {
        infant.querySelector("input").value = (parseInt(infant.querySelector("input").dataset.value) - 1).toLocaleString(
          "fa-IR"
        );
        infant.querySelector("input").dataset.value = parseInt(infant.querySelector("input").dataset.value) - 1;
        passengers_output.value = `${(
          parseInt(adults.querySelector("input").dataset.value) +
          parseInt(child.querySelector("input").dataset.value) +
          parseInt(infant.querySelector("input").dataset.value)
        ).toLocaleString("fa-IR")} مسافر`;
      }
    }
  });
});

infant.querySelector("input").addEventListener("input", (e) => {
  e.currentTarget.value = e.currentTarget.value.replace(/(?![۰-۹])./gim, "");
  const input = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"].indexOf(e.currentTarget.value);
  e.currentTarget.dataset.value = input >= 0 ? input : "0";
  passengers_output.value = `${(
    parseInt(adults.querySelector("input").dataset.value) +
    parseInt(child.querySelector("input").dataset.value) +
    parseInt(infant.querySelector("input").dataset.value)
  ).toLocaleString("fa-IR")} مسافر`;
});