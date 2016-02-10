function fullScreenCanvas(canvas) {
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
}

function drawGrid(canvas, ctx, stepX, stepY, color) {
    var width = canvas.width;
    var height = canvas.height;
    var i;
    ctx.strokeStyle = color;
    ctx.lineWidth = "1px";
    ctx.beginPath();
    for (i = 0; i < width; i += stepX) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
    }
    for (i = 0; i < height; i += stepY) {
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
    }
    ctx.closePath();
    ctx.stroke();
}

function findClosestCoords(stepX, stepY, currX, currY) {
    var countX = 0, countY = 0;
    while (countX < currX) {
        countX += stepX;
    }
    while (countY < currY) {
        countY += stepY;
    }
    return {
        left: countX - stepX,
        top: countY - stepY
    };
}

function switchZone(e, id) {
    var x = e.clientX;
    var y = e.clientY;
    var coords = findClosestCoords(gridX, gridY, x, y);
    var zone = document.getElementById(id);
    zone.style.width = gridX + 'px';
    zone.style.height = gridY + 'px';
    zone.style.left = coords.left + 'px';
    zone.style.top = coords.top + 'px';
}

function switchZoneDb(e, id) {
    var x = e.clientX;
    var y = e.clientY;
    var coords = findClosestCoords(gridX, gridY, x, y);
    var zone = document.getElementById(id);
    zone.style.width = gridX * 3 + 'px';
    zone.style.height = gridY * 3 + 'px';
    zone.style.left = coords.left - gridX + 'px';
    zone.style.top = coords.top - gridY + 'px';
};