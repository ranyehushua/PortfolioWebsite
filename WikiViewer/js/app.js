function search() {
  //if search field is populated, run code 
  if ($('#search').val()) {
    var searchURL = 'https://en.wikipedia.org/w/api.php?&action=query&format=json&callback=?&list=search&srsearch=' + $('#search').val();
    $.getJSON(searchURL, searchWiki);
  }
}

//run search function on either the search button click or when 'enter' is hit when typing in search input field
$('#searchButton').click(search);
$('#search').keypress(function(e) {
    if (e.keyCode == '13') {
        search();
    }
});



//callback function for JSON GET request
function searchWiki(data) {
  //change main divs margins from inital 150px to 20px to make room for unorder list of results
  $('#main').css('margin', '40px auto 20px');

  //remove search button, then add  button for 'new search' which, when clicked, will reset the page to original CSS and remove all the results from the searchResults unordered list
  $('#searchButton').hide();
  $('.newSearchButton').show();

  //add the disabled attribute to the text field, when the 'new search' button is clicked it will remove the disabled attribute
  $('#search').prop('disabled', true);

  //loop through the array of results contained within data.query.search, each result is a search result
  //will build a list item for each result containing the title, snippet and will wrap in an anchor with href directing to the page
  data.query.search.forEach(function(result) {
    var listItem = document.createElement('li');
    listItem.innerHTML = '<a target="_blank" href="https://en.wikipedia.org/wiki/' + result.title + '"><h4>' + result.title + '</h4><p>' + result.snippet + "</p></a>";

    $('#searchResults').append(listItem);
  });

}

//function for resetting everything once the 'new search' button is clicked
$('.newSearchButton').click(function() {
  //reset the margins for the main div back to 150px top and bottom
  $('#main').css('margin', '150px auto');
  //remove all children from the search results unordered list
  $('#searchResults').empty();
  //reset the search input field to blank
  $('#search').val('');
  //hide the new search button and show the search button
  $('#searchButton').show();
  $('.newSearchButton').hide();
  //remove the disabled attribute to the text field
  $('#search').prop('disabled', false);
});