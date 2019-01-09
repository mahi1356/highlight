window.onload = function() {
    initial_array = [];
    var transcript = document.getElementById("divideTranscript");
    var text_location = document.getElementById("transcriptText");
    var counter = 0;
    transcript.onclick = function() {
        //counter == 0 indicates this is the first time user 
        //clicked if this is not the first time nothing should happen
        if (counter == 0) {
            var whole_text = text_location.textContent;
            initial_array = whole_text.split(" ");
            //creates span and its attribute for all non-empty elements of the array 
            for (i = 0; i < initial_array.length; i++) {
                if (initial_array[i].length != 0) {
                    counter += 1;
                    var text = document.createTextNode(initial_array[i]);
                    var newspan = document.createElement('span');
                    newspan.appendChild(text);
                    newspan.id = "word" + counter;
                    newspan.className = "word";
                    newspan.appendChild(document.createTextNode(' '));
                    if (i == 1) {
                        //replace the original text with first span
                        text_location.replaceChild(newspan, text_location.firstChild);
                    } else {
                        text_location.appendChild(newspan);
                    }
                }
            }
            text_location.onmouseover = function(event) {
                target = event.target;
                // "if" makes sure when mouse goes inside the box but away from text , 
                //it will not highlight the background to yellow, transcriptText is the id of the whole box
                if (target.id != "transcriptText") {
                    target.style.background = 'yellow';
                } else {
                    target.style.background = '';
                }
                //it will change it back to white when mouse left the text
                text_location.onmouseout = function(event) {
                    let target = event.target;

                    target.style.background = '';
                };
            };
        }
    }
}