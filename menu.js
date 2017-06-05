var image = document.getElementById('myPhoto');
var imageArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];

var imageIndex = 0;

function changeImage(){
	myPhoto.setAttribute('src',imageArray [imageIndex]);
	imageIndex++;
	if(imageIndex>=imageArray.lenght){
		imageIndex = 0;
		
	}
}

var intervalHandle = setInterval(changeImage,2000);