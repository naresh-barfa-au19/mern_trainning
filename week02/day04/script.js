$.ajax({
  type: "get",
  url: "https://jsonplaceholder.typicode.com/users",
  dataType: "json",
  success: res => {
    console.log(res);

    let table = "";
    for (let i = 0; i < res.length; i++) {
      table = `<tr>
                <td>${i + 1}</td>
                <td>${res[i].name}</td>
                <td>${res[i].email}</td>
                <td>${res[i].website}</td>
                <td id="${i + 1}">click</td>
              </tr>`;
      $("#todo-table-1").append(table);
      $(`#${i + 1}`).on("click", () => {
        $.ajax({
          type: "get",
          url: `https://jsonplaceholder.typicode.com/todos?userId=${i + 1}`,
          dataType: "json",
          success: todo => {
            $("#todo-table-2").empty();
            let afterClickTableBody = "";
            let arrybody = [];
            let tableMain = "";
            for (let k = 0; k < todo.length; k++) {
              afterClickTableBody = `
              <tbody>
              <tr>
              <td> ${k + 1} </td>
              <td> ${todo[k].title} </td>
              <td> ${todo[k].completed} </td>
              </tr>
              </tbody>
              `;
              arrybody.push(afterClickTableBody);
            }
            tableMain = `
            <table>
            <thead>
            <tr>
              <td>Sr. no</td>
              <td>Title</td>
              <td>IsComplited</td>
            </tr>
          </thead>
          ${arrybody.join("")}
          </table>
            `;
            $("#todo-table-2").append(tableMain);
          },
        });
      });
    }
  },
});
