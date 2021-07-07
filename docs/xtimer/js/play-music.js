$playd = `
<div id="default-mplay" class="d-none">
<div class="card b4">
  <div class="card-body">
    <marquee id="title-musicd" class="text-uppercase">song for my love</marquee>
    <div class="btn-group w-100 pt-4" role="group">
      <!-- <button type="button" id="play" class="btn b4-btn"><span class="bi-play-circle-fill"></span></button>
      <button type="button" id="stop" class="btn b4-btn"><span class="bi-pause-circle-fill"></span></button> -->
      <div id="audios-controls-def" class="w-100 text-light">
      </div>
    </div>
    <!-- <div class="row pt-4 text-light">
      <div class="col-6">
        <a type="button" id="play" class="btn b4-btn w-100"></a>
      </div>
      <div class="col-6">
        <a type="button" id="stop" class="btn b4-btn w-100">Stop</a>
      </div>
    </div> -->
  </div>
</div>
<div class="pb-4">
  <audio id="love-music-def" loop>
    <source src="" type="audio/mpeg">Not support!
  </audio>
</div>
</div>`
//style="margin-left: -0.5rem;margin-top: -2rem;"
document.write($playd);
var audios = document.getElementById('love-music-def')
var btnPlayd = '<a type="button" id="playd" class="btn b4-btn w-100"><span class="bi-play-circle-fill"></span></a>';
var btnPaused = '<a type="button" id="stopd" class="btn b4-btn w-100"><span class="bi-pause-circle-fill"></span></a>';

musicTitle = 'default'
audios.src = `https://ztfcode.github.io/admin-ztf/audio/Lemon米津玄師(Full Covered by コバソロ & 春茶).mp3`
$('#title-musicd').text(musicTitle)
mplayd = () => {
    $('#audios-controls-def').html(btnPlayd)
    $('#playd').click(() => {
        audios.play()
        if (btnPlayd) {
            $('#audios-controls-def').html(btnPaused)
            $('#stopd').click(() => {
                audios.pause()
                if (btnPaused) {
                    setTimeout(mplayd, 200)
                }
            })
        } 
    })
};mplayd()
mplayStopd = () => {
    $('#audios-controls-def').html(btnPaused)
    $('#stopd').click(() => {
        audios.pause()
        if (btnPaused) {
            $('#audios-controls-def').html(btnPlayd)
            $('#playd').click(() => {
                audios.play()
                if (btnPlayd) {
                    setTimeout(mplayStopd, 200)
                }
            })
        } 
    })
}
