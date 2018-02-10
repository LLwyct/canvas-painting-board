var Line = function()
{
    var o = Shape()

    o.name = 'Line'

    o.drawSelf = function() {
        context.beginPath();
        context.moveTo(o.startX, o.startY);
        context.lineTo(o.nowX, o.nowY);
        context.lineCap = 'round';
        // 设置线的宽度
        context.lineWidth = o.strokewidth
        // set line color
        context.strokeStyle = o.strokecolor
        context.stroke();
    }
    return o
}
