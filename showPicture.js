$("document").ready(()=>{
    const picture = $(".picture-container")
    const showPictureButton = $("body > button");
    let pictureDisplay = false;
    showPictureButton.on("click",()=>{
        console.log(pictureDisplay);
        if( pictureDisplay === false ){
            picture.css("display","flex");
            showPictureButton.text("사진닫기");
            pictureDisplay = true;
        }else if( pictureDisplay === true ){
            picture.css("display","none");
            showPictureButton.text("사진보기");
            pictureDisplay = false;
        }
    })
})