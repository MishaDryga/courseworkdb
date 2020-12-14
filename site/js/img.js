var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '../imgmenu/img1.png') {
      myImage.setAttribute ('src','../imgmenu/img4.png');
    } else {
      myImage.setAttribute ('src','../imgmenu/img1.png');
    }
}
