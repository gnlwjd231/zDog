$("document").ready(()=>{
    const picture = $(".picture-container .picture")
    const showPictureButton = $(".picture-container button");
    let pictureDisplay = false;
    showPictureButton.on("click",()=>{
        if( pictureDisplay === false ){
            picture.fadeIn();
            showPictureButton.text("사진닫기");
            pictureDisplay = true;
        }else if( pictureDisplay === true ){
            picture.fadeOut();
            showPictureButton.text("사진보기");
            pictureDisplay = false;
        }
    })
})