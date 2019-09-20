//After document finishes loading
$(document).ready(function()
{


  // ------------ FRONT COVER ----------------------
  // When composition book div is clicked:
  $(document).on("click", ".roundedRectangle", function()
  {
    //change from cover to paper
    $("body").removeClass("frontCover");
    $("body").addClass("lines");
    $(".sidenav").removeClass("covernav");

    //Change sidenav to add back button
    $("#mySidenav").load("html/sideNav/sideNavBack.html");

    //Show table of contents page
    $("#top").addClass("whiteSpaceTop");
    $("#top").load("html/toc/tocHeader.html");
    $(".mainContent").load("html/toc/tocMain.html");

    pageNum++;
  })

  //BACK BUTTON
  $(document).on("click", "#backButton", function()
  {
    pageNum--;

    //Cover Page
    if (pageNum == 0)
    {
      //change from paper to cover
      $("body").addClass("frontCover");
      $("body").removeClass("lines");
      $(".sidenav").addClass("covernav");

      //Change sidenav to remove back button
      $("#mySidenav").load("html/sideNav/sideNavCover.html");

      //Show cover page
      $("#top").removeClass("whiteSpaceTop");
      $("#top").empty();
      $(".mainContent").load("html/composition.html");
    }
    //Table of Contents
    else if (pageNum == 1)
    {
      $("#top").load("html/toc/tocHeader.html");
      $(".mainContent").load("html/toc/tocMain.html");
    }
    else
    {
      $("#top").load("html/proj/projHeader.html");
      $(".mainContent").load("html/proj/projMain.html");
    }


  })

  // ------------ TABLE OF CONTENTS ----------------------
  // Hovering over list items looks like pointers
  $(document).on("mouseenter", "li b", function()
  {
    $(this).css('cursor','pointer');
  })
  $(document).on("mouseleave", "li b", function()
  {
    $(this).css('cursor','auto');
  })

  // Clicking items in table of contents
  $(document).on("click", "li b", function()
  {
    // alert($(this).text());
    var page = $(this).text();
    if (page == "Introduction")
    {
      $("#top").load("html/intro/introHeader.html");
      $(".mainContent").load("html/intro/introMain.html");
    }
    else if (page == "Education")
    {
      $("#top").load("html/edu/eduHeader.html");
      $(".mainContent").load("html/edu/eduMain.html");
    }
    else if (page == "Projects")
    {
      $("#top").load("html/proj/projHeader.html");
      $(".mainContent").load("html/proj/projMain.html");
    }
    else if (page == "Work Experience")
    {

    }
    else
    {

    }

    pageNum++;

  }) //END OF CLICK ON ITEM IN TABLE OF CONTENTS

  $(document).on("click", ".boardNoMore", function()
  {
    $("#top").load("html/proj/boardNoMore/boardNoMoreHeader.html");
    $(".mainContent").load("html/proj/boardNoMore/boardNoMoreMain.html");

    pageNum++;
  })

}); //END OF DOCUMENT READY
