var Rectangle = function()
{
    var o = Shape()

    o.name = 'Rectangle'

    o.drawSelf = function() {
        context.beginPath();
        context.rect(o.startX, o.startY, o.nowX-o.startX, o.nowY-o.startY);
        //context.fillStyle = 'yellow';
        //context.fill();
        // 边框宽度
        context.lineWidth = o.strokewidth
        // 边框颜色
        context.strokeStyle = o.strokecolor
        context.stroke();
    }
    return o
}
