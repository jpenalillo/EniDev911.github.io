const relativePathImage = "../../assets/img/";
const relativePathMedia = "../../assets/media/"

function showAvatar() {
    Swal.fire({
        title: "<h2 class='text-center'><code class='fs-1 text-center'><i class='fas fa-user-secret fs-1'></i> {EniDev911}</code></h2>",
        imageUrl: relativePathImage + "logo_sin_bg.png",
        imageWidth: "200px",
        showConfirmButton: false,
        showCloseButton: true,
        closeButtonHtml: "<i class='fas fa-times'></i>",
        input: 'password',
        inputLabel: 'Password'
    })
}
document.getElementById("aboutMe").addEventListener("click", showTyped);

function playSound(filename = relativePathMedia + "lofi-beat-chill") {
    /**
      * Plays a sound using the HTML5.
      * @param {string} filename The name of the file.!
      */
    var mp3Source = '<source src="' + filename + '.mp3" type="audio/mpeg">';
    var oggSource = '<source src="' + filename + '.ogg" type="audio/ogg">';
    var embedSource = '<embed hidden"true" autostart="true" loop="false" src="' + filename + '.mp3>"';
    document.getElementById("sound").innerHTML = '<audio autoplay="autoplay" controls>' + mp3Source + oggSource + embedSource + '</audio>';
} 
