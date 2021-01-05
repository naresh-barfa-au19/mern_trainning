$.ajax({
  url: "/getTweet",
  type: "GET",
  data: "data",
  dataType: "JSON",
  success: res => {
    console.log(res);
    console.log("data ajax tk aa rha h");
  },
});
