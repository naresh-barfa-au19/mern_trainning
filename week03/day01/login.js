$("#btn").on("click", event => {
  event.preventDefault();
  let name = $("#input-name")[0].value;
  let password = $("#input-password")[0].value;
  console.log(name, " and ", password);
});
