document.addEventListener("DOMContentLoaded", function () {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  const currentDay = daysOfWeek[today];

  // احصل على كل الـ fieldsets
  const fieldsets = document.querySelectorAll("fieldset");

  // تمييز الـ fieldset الخاص باليوم الحالي
  fieldsets.forEach((fieldset) => {
    if (fieldset.getAttribute("data-day") === currentDay) {
      fieldset.classList.add("highlight");
    }
  });
});
