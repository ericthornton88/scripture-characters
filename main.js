var characters = {
            Nephi: "Had a good attitude and built a boat",
            Lehi: "Had many sons and was a prophet in Jerusalem",
            Moroni: "The last book in the Book of Mormon has his name",
            Laman: "Went back to get the gold plates and had a bad attitude",
            Samuel: "Stood on the wall to cry repentance to the people",
            Mormon: "Joseph Smith translated a book named after him",
            Enos: "Asked for forgiveness while hunting in the wilderness",
            Benjamin: "Taught the people and had them turn their tents toward the message",
            Alma: "Had a wicked son that became righteous after an angel appeared to him"
          }
$(function() {
  var streak = 0

  for (var character in characters) {
    $('#character-name').prepend('<p>' + character + '</p>')
    //$('#character-info').prepend('<p>' + characters[character] + '</p>')
  }
  $('#character-name p').on('click', function() {
    $('#character-name p').removeClass('active')
    $(this).addClass('active')
  })
  $('#character-info p').on('click', function() {
    var desc = $(this).text()
    var obj_key = ''
    for (var character in characters) {
        if (characters[character] == desc) {
          var obj_key = character
          if (obj_key == $('p.active').text()) {
            $('p.active').removeClass('active').addClass('success');
            $(this).addClass('success');
            streak += 1
            $('.streak h3').text('Streak: ' + streak)
          } else {
            $('p.active').removeClass('active')
            streak = 0
            $('.streak h3').text('Streak: ' + streak)
          }
          break;
        }
      }
  })


  $('#character-name p').on('click', function() {
    var char_name = $(this).text()

  })

})
