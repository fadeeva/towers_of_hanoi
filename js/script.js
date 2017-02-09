window.onload = function() {
    var theCanvas = document.getElementById('canvas');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {
            
            // board's shadow
            ctx.fillStyle = "#24262f";
            ctx.beginPath();
            ctx.moveTo(0, 272);
            ctx.lineTo(700, 272);
            ctx.lineTo(726, 305);
            ctx.lineTo(726, 325);           
            ctx.lineTo(32, 325);
            ctx.lineTo(0, 290);
            ctx.closePath();
            ctx.fill();
            
            // board
            ctx.fillStyle = "#16171c";
            ctx.fillRect(0, 272, 700, 20);
            
            // rods
            ctx.fillStyle = "#6b728e";
            ctx.fillRect(118, 86, 6, 186);
            ctx.fillRect(347, 86, 6, 186);
            ctx.fillRect(578, 86, 6, 186);
            
            // disks
        }
    }
}