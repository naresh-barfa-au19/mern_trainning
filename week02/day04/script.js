$.ajax({
  type: "get",
  url: "https://jsonplaceholder.typicode.com/users",
  dataType: "json",
  success: res => {
    console.log(res);

    let table = "";
    for (let i = 0; i < res.length; i++) {
      console.log(res, res.length);
      table = `<tr>
                <td>${i + 1}</td>
                <td>${res[i].name}</td>
                <td>${res[i].email}</td>
                <td>${res[i].website}</td>
            </tr>`;
      $("tbody").append(table);
    }
  },
});
