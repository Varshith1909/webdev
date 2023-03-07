$(document).ready(function () {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

  // Add your code here

  const addElements = (drink) => {
    $("#results").append(
      $("<div>")
        .addClass("figure")
        .css({
          margin: "10px",
          paddingBottom: "0px",
          paddingTop: "10px",
          marginRight: "10px",
          marginLeft: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "180px",
        })
        .append(
          $("<img />")
            .attr("src", drink.strDrinkThumb)
            .attr("alt", "Image of" + drink.strDrink)
            .css({
              width: "150px",
              height: "150px",
            })
        )
        .append(
          $("<div>").text(drink.strDrink).css({
            paddingBottom: "10px",
            paddingTop: "30px",
            marginLeft: "25px",
            marginRight: "25px",
            fontWeight: "bold",
            fontSize: "20px",
          })
        )
    );
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: (data) => {
        data.drinks.forEach((drink) => {
          addElements(drink);
        });
      },

      error: (error) => {
        console.error(error);
        $("#results").append(
          $("<div>").text("An error occured. Please try again")
        );
      },

      complete: () => {
        $("#loading").remove();
      },
    });
  };

  fetchData(url);
});
